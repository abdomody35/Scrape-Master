interface ScrapeResponseProps {
  response: {
    [key: string]: {
      title: string;
      content: string;
    };
  };
}

interface FetchResponseProps {
  url: string;
  title: string;
  content: string;
  id?: string;
  createdAt?: string;
}

interface cardData {
  key?: string;
  title?: any;
  content?: any;
  url?: string;
  handleClick?: () => void;
  className?: string;
}

interface LabelData {
  text: string;
  data: any;
}

interface ScrapeOptionsProps {
  type: ScrapingTypes;
  setUrl: (url: string) => void;
  setWhiteList: (whiteList: string) => void;
  setBlackList: (blackList: string) => void;
  modes: any;
  setModes: (modes: any) => void;
}

interface HTTPProps {
  method: HTTPMethods;
  url: string;
  dep?: boolean;
  data?: object;
}

enum HTTPMethods {
  GET,
  PATCH,
  POST,
  DELETE,
}

enum ScrapingTypes {
  SCRAPE_SINGLE_PAGE,
  SCRAPE_LIST,
  CRAWL_BASE_URL,
  CRAWL_LIST,
  SCOPE,
  REGEX,
}

export type {
  ScrapeResponseProps,
  FetchResponseProps,
  cardData,
  LabelData,
  ScrapeOptionsProps,
  HTTPProps,
};

export { HTTPMethods, ScrapingTypes };
