import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GoBackButton from "../components/GoBackButton";
import { handleScrape } from "../utils/scrape";
import ScrapeOptions from "../components/ScrapeOptions";
import { ScrapingTypes } from "../types";

const ScrapePage = () => {
  const [url, setUrl] = useState("");
  const [type, setType] = useState(0);
  const [whiteList, setWhiteList] = useState("");
  const [blackList, setBlackList] = useState("");
  const [modes, setModes] = useState({
    content: false,
    images: false,
    videos: false,
    audios: false,
    links: false,
  });
  const [scrapeResult, setScrapeResult] = useState<any>(null);
  const navigate = useNavigate();

  const scrapingOptions = {
    [ScrapingTypes.SCRAPE_SINGLE_PAGE]: "Scrape a single page",
    [ScrapingTypes.SCRAPE_LIST]: "Scrape a list of pages",
    [ScrapingTypes.CRAWL_BASE_URL]: "Crawl a base url",
    [ScrapingTypes.CRAWL_LIST]: "Crawl a list of base urls",
    [ScrapingTypes.SCOPE]: "Crawl guided by scopes",
    [ScrapingTypes.REGEX]: "Crawl guided by regex patterns",
  };

  const onScrape = () => {
    const result = handleScrape(url, type, whiteList, blackList, modes);
    if (result.error) {
      alert(result.error);
    } else {
      setScrapeResult(result);
    }
  };

  useEffect(() => {
    if (scrapeResult) {
      navigate(`response`, { state: scrapeResult });
    }
  }, [scrapeResult]);

  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-12">
        <GoBackButton />
        <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
          Select scraping type:
        </p>
        <select
          className="select"
          value={type}
          onChange={(e) => setType(Number(e.target.value))}
        >
          {Object.entries(scrapingOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <ScrapeOptions
          type={type}
          setUrl={setUrl}
          setWhiteList={setWhiteList}
          setBlackList={setBlackList}
          modes={modes}
          setModes={setModes}
        />
        <br />
        <div className="flex gap-2 justify-center">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={onScrape}
          >
            Scrape
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrapePage;
