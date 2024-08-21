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
    return <div>No data to display</div>;
  }

  const { isLoading, error, response } = Http({
    method: HTTPMethods.POST,
    url: API + "/scrape?url=" + url,
    data: data,
  });

  if (error) return <div>error occurred: {JSON.stringify(error)}</div>;

  if (isLoading) {
    return (
      <div>
        <div className="loader"></div>
        <p>Scraping {url}...</p>
      </div>
    );
  }

  const entries = response?.data
    ? Object.entries(response?.data as ScrapeResponseProps)
    : [];

  return (
    <div>
      <GoBackButton />
      <h2>Scrape Response</h2>
      {entries.length === 0 && <p>No data found for the given url.</p>}
      {entries.map(([key, { title, content }]) => (
        <>
          <Card key={key} content={content} title={title} />
          <br />
        </>
      ))}
    </div>
  );
};

export default ScrapeContent;
