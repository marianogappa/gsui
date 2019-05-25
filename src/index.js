import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Routes } from "./Routes";
import * as serviceWorker from "./serviceWorker";

import { createAPI } from "./gsclient";

async function start() {
  const api = createAPI();
  const folders = await api.list();

  ReactDOM.render(
    <Router>
      <Routes api={api} folders={folders} />
    </Router>,
    document.getElementById("root")
  );
}

start();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
