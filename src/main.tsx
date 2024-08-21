import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import logo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HistoryPage from "./Pages/History.tsx";
import HistoryContent from "./Pages/HistoryContent.tsx";
import ScrapePage from "./Pages/ScrapePage.tsx";
import FetchPage from "./Pages/FetchPage.tsx";
import FetchContent from "./Pages/FetchContent.tsx";
import ScrapeContent from "./Pages/ScrapeContent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "scrape",
    element: <ScrapePage />,
  },
  {
    path: "scrape/response",
    element: <ScrapeContent />,
  },
  {
    path: "fetch",
    element: <FetchPage />,
  },
  {
    path: "fetch/response",
    element: <FetchContent />,
  },
  {
    path: "history",
    element: <HistoryPage />,
  },
  {
    path: "history/response",
    element: <HistoryContent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RouterProvider router={router} />
      </header>
    </div>
  </React.StrictMode>
);
