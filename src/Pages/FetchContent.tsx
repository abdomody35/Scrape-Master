import { useLocation } from "react-router-dom";
import Http from "../http";
import GoBackButton from "../components/GoBackButton";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { HTTPMethods } from "../types";

const FetchContent = () => {
  const location = useLocation();
  const { url } = location.state || "";
  const API = import.meta.env.VITE_API_BASE_URL;
  const { isLoading, error, response } = Http({
    method: HTTPMethods.GET,
    url: API + "/fetch?url=" + url,
  });

  if (error) return <div>error occurred: {JSON.stringify(error)}</div>;

  if (isLoading) return <Loading message={`Fetching ${url}`} />;

  if (!response?.data) {
    return <div>No data found for {url}</div>;
  }

  const { title, content } = response?.data;

  return (
    <div>
      <GoBackButton />
      <h2>Fetch Response</h2>
      <Card url={url} title={title} content={content} />
    </div>
  );
};

export default FetchContent;
