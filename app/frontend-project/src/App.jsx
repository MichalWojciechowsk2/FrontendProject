import React from "react";
import "./App.css";
import NotFound from "./pages/NotFound";
import menuItems from "./data/menu-items";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={item.urlPattern}
              element={item.element}
            />
          ))}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
