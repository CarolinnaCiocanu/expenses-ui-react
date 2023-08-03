import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./redux/store";
import Layout from "./components/Layout/Layout";
import "./assets/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  element={route.element}
                  path={route.path}
                  key={index}
                  exact
                />
              );
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
