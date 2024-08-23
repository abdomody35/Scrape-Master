import { ScrapingTypes } from "../types";

const isValidURL = (str: string) => {
  const urlPattern =
    /(https?:\/\/|[a-zA-Z0-9-]+\.)[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?/gim;
  return urlPattern.test(str);
};

const isSinglePage = (type: ScrapingTypes): boolean => {
  return (
    type === ScrapingTypes.SCRAPE_SINGLE_PAGE ||
    type === ScrapingTypes.CRAWL_BASE_URL
  );
};

const isLinkType = (type: ScrapingTypes): boolean => {
  return (
    type === ScrapingTypes.SCRAPE_SINGLE_PAGE ||
    type === ScrapingTypes.SCRAPE_LIST
  );
};

const isCrawlType = (type: ScrapingTypes): boolean => {
  return (
    type === ScrapingTypes.CRAWL_BASE_URL || type === ScrapingTypes.CRAWL_LIST
  );
};

const isList = (type: ScrapingTypes): boolean => {
  return (
    type === ScrapingTypes.SCRAPE_LIST || type === ScrapingTypes.CRAWL_LIST
  );
};

const isScope = (type: ScrapingTypes): boolean => {
  return type === ScrapingTypes.SCOPE;
};

const isRegex = (type: ScrapingTypes): boolean => {
  return type === ScrapingTypes.REGEX;
};

const isValidListItem = (item: string, type: ScrapingTypes) => {
  return (
    item.trim() !== "" && (isScope(type) || isRegex(type) || isValidURL(item))
  );
};

const checkLists = (white_list: string[], black_list: string[]) => {
  const common_list = white_list.filter((link) => black_list.includes(link));
  return common_list.length === 0;
};

const determineData = ({ type, whiteList, blackList, modes }: any): any => {
  const data: any = {};

  if (isCrawlType(type)) {
    data.type = "crawl";
  } else if (isLinkType(type)) {
    data.type = "link";
  } else if (isScope(type)) {
    data.type = "scope";
  } else if (isRegex(type)) {
    data.type = "regex";
  }

  data.whiteList = whiteList;
  data.blackList = blackList;

  data.Content = modes["content"];
  data.Images = modes["images"];
  data.Videos = modes["videos"];
  data.Audios = modes["audios"];
  data.Links = modes["links"];

  return data;
};

const getListType = (type: ScrapingTypes) => {
  return isRegex(type)
    ? "valid regex patterns"
    : isScope(type)
    ? "valid scopes"
    : "valid URLs or domains";
};

const handleScrape = (
  url: string,
  type: ScrapingTypes,
  whiteList: string,
  blackList: string,
  modes: any
) => {
  if (!isValidURL(url) && !isList(type)) {
    return { error: "Please enter a valid URL" };
  }

  const white_list = whiteList
    .split("\n")
    .map((link) => link.trim())
    .filter(Boolean);
  const black_list = blackList
    .split("\n")
    .map((link) => link.trim())
    .filter(Boolean);

  if (
    white_list.length > 0 &&
    !white_list.every((item) => isValidListItem(item, type))
  ) {
    return {
      error: "Invalid white list. Must be an array of " + getListType(type),
    };
  }

  if (
    black_list.length > 0 &&
    !black_list.every((item) => isValidListItem(item, type))
  ) {
    return {
      error: "Invalid black list. Must be an array of " + getListType(type),
    };
  }

  if (
    white_list.length > 0 &&
    black_list.length > 0 &&
    !checkLists(white_list, black_list)
  ) {
    return { error: "White list and black list cannot contain the same items" };
  }

  if (!Object.values(modes).some((mode) => mode === true)) {
    return { error: "Please select at least one data type" };
  }

  const data = determineData({
    type: type,
    whiteList: white_list || [],
    blackList: black_list || [],
    modes: modes,
  });

  return { data: data, url: url || white_list[0] };
};

export {
  isValidURL,
  isValidListItem,
  checkLists,
  determineData,
  handleScrape,
  isSinglePage,
  isList,
  isRegex,
  isScope,
};
