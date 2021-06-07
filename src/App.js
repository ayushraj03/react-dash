import logo from "./logo.svg";
import "./App.css";
import SideBar from "./sidebar";
import "./styles.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Home from "./components/home";
import Empty from "./components/Empty";

function App() {
  const [syncedPage, showSyncedPage] = useState(false);

  var redirectPage;
  function redirectPage(show) {
    if (show) {
      showSyncedPage(true);
    }
  }
  return (
    <div id="App">
      <SideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        onChange={redirectPage}
      />
      {syncedPage ? <Home /> : <Empty />}

      <div id="page-wrap"></div>
    </div>
  );
}

export default App;
