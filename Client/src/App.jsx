import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Regions from "./Pages/Regions";
import NotFound from "./Pages/NotFound";
import HomeLayout from "./layouts/HomeLayout";
import OtherLayouts from "./layouts/OtherLayouts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/regions"
          element={
            <OtherLayouts>
              <Regions />
            </OtherLayouts>
          }
        />
        <Route
          path="*"
          element={
            <OtherLayouts>
              <NotFound />
            </OtherLayouts>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
