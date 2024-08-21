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
    <div>
      <GoBackButton />
      <p>Select scraping type:</p>
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
      <button className="App-button" onClick={onScrape}>
        Scrape
      </button>
    </div>
  );
};

export default ScrapePage;
