import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "./store/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Scrolltotop } from "./components/Scrolltotop";
import { FilterProvider } from "./Context/Filtercontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <FilterProvider>
          <Scrolltotop />
          <ToastContainer
            closeButton={true}
            autoClose={4000}
            pauseOnFocusLoss={true}
            position="bottom-center"
          />
          <App />
        </FilterProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
