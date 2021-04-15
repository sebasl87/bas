import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "./global.scss";
import "bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
// eslint-disable-next-line
import $ from "jquery";
// eslint-disable-next-line
import Popper from "popper.js";
import "./i18n";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
      <App useSuspense={true} />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
