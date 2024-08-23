import { useLocation } from "react-router-dom";
import Http from "../http.ts";
import GoBackButton from "../components/GoBackButton.tsx";
import Loading from "../components/Loading.tsx";
import Card from "../components/Card.tsx";
import { HTTPMethods } from "../types";

const HistoryContent = () => {
  const location = useLocation();
  const { url } = location.state || {};
  const API = import.meta.env.VITE_API_BASE_URL;

  const { isLoading, error, response } = Http({
    method: HTTPMethods.GET,
    url: API + `/fetch?url=${url}`,
  });

  if (error) return <div>error occurred: {JSON.stringify(error)}</div>;

  if (isLoading) return <Loading message={"Loading"} />;

  if (!response?.data) {
    return <div>not found</div>;
  }

  const { title, content } = response?.data;

  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-12">
        <GoBackButton />
        <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72 text-center">
          History Data
        </p>
        <Card key={title} title={title} content={content} />
      </div>
    </div>
  );
};

export default HistoryContent;
