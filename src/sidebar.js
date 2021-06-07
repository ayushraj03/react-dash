import { slide as Menu } from "react-burger-menu";
import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AlertDialog from "./components/AlertDialog";
import { confirmAlert } from "react-confirm-alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";

export default (props) => {
  const [status, setStatus] = useState("No data");

  const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;
  `;

  function submit() {
    console.log("Submit button is triggered!");
  }

  function handleClick() {
    axios
      .post(`https://api.gobillion.co/zoho/product/sync`)
      .then((res) => {
        var data = res.data;
        console.log(data);
        console.log("Success");
        setStatus("Data loaded Successfully!");
      })
      .catch((e) => {
        console.log("Sync failed");
        setStatus("Error fetching the API");
      });

    //REDIRECT USER
    props.onChange(true);
  }
  return (
    <Router>
      <div>
        {/* <Menu {...props}> */}
        <Link
          to="/sync"
          onClick={() => {
            if (window.confirm("Are you sure you want to sync?")) handleClick();
          }}
        >
          Inventory Sync
        </Link>

        <a className="menu-item" href="/">
          Home
        </a>

        <a className="menu-item" href="/about">
          Customers
        </a>

        <a className="menu-item" href="/services">
          Sales Order
        </a>

        <a className="menu-item" href="/contact">
          Packages
        </a>
        {/* </Menu> */}
        {/* <Switch>
          <Route path="/sync">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
};
