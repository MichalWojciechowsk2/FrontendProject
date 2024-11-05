import React, { useReducer } from "react";
import "./App.css";
import NotFound from "./pages/NotFound";
import menuItems from "./data/menu-items";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import AppContext from "./data/AppContext";
import AppReducer from "./data/AppReducer";
import { data } from "./data/module-data.jsx";
import EditObjectForm from "./components/EditObjectForm.jsx";

function App() {
  const initialState = { items: data };
  const [state, appDispatch] = useReducer(AppReducer, initialState);
  return (
    <>
      <AppContext.Provider
        value={{ items: state.items, dispatch: appDispatch }}
      >
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
      </AppContext.Provider>
    </>
  );
}

export default App;
