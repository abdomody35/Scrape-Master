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
    <>
      <GoBackButton />
      <h1>History Data</h1>
      <Card key={title} title={title} content={content} />
    </>
  );
};

export default HistoryContent;
