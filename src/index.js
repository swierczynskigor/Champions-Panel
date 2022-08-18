import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import MainPanel from "./components/Pages/MainPanel/MainPanel";
import ChampionsPanel from "./components/Pages/ChampionsPanel/ChampionsPanel";
import ItemsPanel from "./components/Pages/ItemsPanel/ItemsPanel";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPanel />}>
          {/* <Route index element={<Main />} /> */}
        </Route>
        <Route path="/champions" element={<ChampionsPanel />}>
          {/* <Route index element={<Main />} /> */}
        </Route>
        <Route path="/items" element={<ItemsPanel />}>
          {/* <Route index element={<Main />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
