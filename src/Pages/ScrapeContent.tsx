import { useLocation } from "react-router-dom";
import Http from "../http.ts";
import { ScrapeResponseProps } from "../types/index.ts";
import GoBackButton from "../components/GoBackButton.tsx";
import Card from "../components/Card.tsx";
import { HTTPMethods } from "../types";

const ScrapeContent = () => {
  const location = useLocation();
  const { url, data } = location.state || {};
  const API = import.meta.env.VITE_API_BASE_URL;

  if (!url || !data) {
    return (
      <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
        No data to display
      </p>
    );
  }

  const { isLoading, error, response } = Http({
    method: HTTPMethods.POST,
    url: API + "/scrape?url=" + url,
    data: data,
  });

  if (error)
    return (
      <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
        error occurred: {JSON.stringify(error)}
      </p>
    );

  if (isLoading) {
    return (
      <div>
        <div className="loader"></div>
        <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
          Scraping {url}...
        </p>
      </div>
    );
  }

  const entries = response?.data
    ? Object.entries(response?.data as ScrapeResponseProps)
    : [];

  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-12">
        <GoBackButton />
        <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
          Scrape Response
        </p>
        {entries.length === 0 && (
          <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
            No data found for the given url.
          </p>
        )}
        {entries.map(([key, { title, content }]) => (
          <>
            <Card key={key} content={content} title={title} />
            <br />
          </>
        ))}
      </div>
    </div>
  );
};

export default ScrapeContent;
