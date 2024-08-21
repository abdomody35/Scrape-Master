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

  if (error) return <div>error occurred: {error?.message}</div>;

  if (isLoading) return <Loading message={"Loading History"} />;

  const historyData = response?.data;

  return (
    <>
      <GoBackButton />
      <h2>History</h2>
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
    </>
  );
};

export default HistoryPage;
