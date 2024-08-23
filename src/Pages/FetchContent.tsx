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
    return (
      <p className="text-white tracking-light text-[32px] font-bold leading-tight">
        No data found for {url}
      </p>
    );
  }

  const { title, content } = response?.data;

  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-12">
        <GoBackButton />
        <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
          Fetch Response
        </p>
        <Card url={url} title={title} content={content} />
      </div>
    </div>
  );
};

export default FetchContent;
