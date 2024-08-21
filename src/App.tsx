import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Http from "./http";
import { HTTPMethods } from "./types";

const App: React.FC = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BASE_URL;

  const { error, response } = Http({ method: HTTPMethods.GET, url: API });

  const navigationButtons = [
    { label: "Scrape", path: "scrape" },
    { label: "Fetch", path: "fetch" },
    { label: "History", path: "history" },
  ];

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <p>What would you like to do ?</p>
      <div className="button-container">
        {navigationButtons.map(({ label, path }) => (
          <button
            key={path}
            className="App-button"
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
      <p>{response?.data.message}</p>
    </div>
  );
};

export default App;
