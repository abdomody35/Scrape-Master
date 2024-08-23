import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";

const FetchPage = () => {
  const [url, setURL] = useState<string>("");
  const [fetch, setFetch] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleFetch = () => {
    if (url) {
      setFetch(true);
    } else {
      alert("Please enter a url");
    }
  };

  useEffect(() => {
    if (fetch) {
      navigate(`response`, { state: { url } });
    }
  }, [fetch]);

  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-12">
        <GoBackButton />
        <p className="text-center text-white tracking-light text-[32px] font-bold leading-tight">
          The title to fetch from the database :{" "}
        </p>
        <input
          placeholder="title"
          type="text"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <div className="flex gap-2 justify-center">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={handleFetch}
          >
            Fetch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchPage;
