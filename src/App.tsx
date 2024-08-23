import React from "react";
import QuickStartOption from "./components/QuickStartOption";
import globe from "./assets/globe.png";
import file from "./assets/file.png";
import folder from "./assets/folder.png";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Http from "./http";
import { HTTPMethods } from "./types";

const App: React.FC = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BASE_URL;

  const { error, response } = Http({ method: HTTPMethods.GET, url: API });

  const navigationButtons = [
    {
      label: "Scrape now",
      path: "scrape",
      description: "Start a new scrape right now",
      image: globe,
    },
    {
      label: "Retrieve saved scrapes",
      path: "fetch",
      description: "Access previously scraped data",
      image: file,
    },
    {
      label: "View all scrapes",
      path: "history",
      description: "See a list of all your scraping history",
      image: folder,
    },
  ];

  if (error) {
    return (
      <p className="text-red-500 text-center mt-10">
        Error: {JSON.stringify(error)}
      </p>
    );
  }

  return (
    <div className="px-40 flex flex-1 justify-center py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-12">
        <div className="text-center">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight">
            Transform Your Web Scraping Experience
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
              Get started with web scraping
            </p>
            <div onClick={() => navigate("/scrape")}>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">New scrape</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4">
              Quick start
            </h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-4">
              {navigationButtons.map(({ image, label, description, path }) => (
                <QuickStartOption
                  key={path}
                  icon={image}
                  title={label}
                  description={description}
                  handleClick={() => navigate(path)}
                />
              ))}
            </div>
          </div>
        </div>

        {response?.data.message && (
          <div className="text-center mt-10">
            <p className="text-white tracking-light text-2xl font-bold leading-tight">
              {response.data.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
