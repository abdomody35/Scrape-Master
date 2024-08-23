import GoBackButton from "../components/GoBackButton.tsx";
import Http from "../http.ts";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Card from "../components/Card.tsx";
import { HTTPMethods } from "../types";

const HistoryPage = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BASE_URL;
  const { isLoading, error, response } = Http({
    method: HTTPMethods.GET,
    url: API + "/history",
  });

  if (error) return <div>error occurred: {JSON.stringify(error)}</div>;

  if (isLoading) return <Loading message={"Loading History"} />;

  const historyData = response?.data;

  return (
    <div className="App">
      <div className="layout-content-container">
        <GoBackButton />
        <div className="flex flex-wrap justify-center gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72 text-center">
            Scraping History
          </p>
        </div>
        <div className="card-container">
          {historyData?.length > 0 &&
            historyData?.map((object: any) => (
              <Card
                key={object}
                title={object}
                handleClick={() => {
                  navigate(`response`, { state: { url: object } });
                }}
                className="history-card"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
