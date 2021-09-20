import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <>
      <Router>
        <App />
      </Router>
    </>,
    rootElement
  );
} else {
  render(
    <Router>
      (<App />
    </Router>,
    rootElement
  );
}
