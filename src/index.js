import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import config from "./configure";
import Spinner from "./common/Spinner";

import "./index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.scss";
import "./assets/fonts/feather/css/feather.css";
import "flag-icon-css/sass/flag-icon.scss";
import "react-notifications/lib/notifications.css";
import "react-datepicker/dist/react-datepicker.css";

import reportWebVitals from "./reportWebVitals";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
