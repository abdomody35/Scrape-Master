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
    <>
      <GoBackButton />
      <p>The title to fetch from the database : </p>
      <input
        placeholder="title"
        type="text"
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />
      <button className="App-button" onClick={handleFetch}>
        Fetch
      </button>
    </>
  );
};

export default FetchPage;
