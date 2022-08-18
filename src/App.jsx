import React from 'react'
import {
      BrowserRouter,
      Routes,
      Route,
} from "react-router-dom";
import './index.css';
import MainPanel from "./components/Pages/MainPanel/MainPanel";
import ChampionsPanel from "./components/Pages/ChampionsPanel/ChampionsPanel";
import ItemsPanel from "./components/Pages/ItemsPanel/ItemsPanel";

export default function App() {
      return (
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
      )
}
