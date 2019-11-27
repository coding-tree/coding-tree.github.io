import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  const calculateViewportHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", calculateViewportHeight);
    return () => {
      window.removeEventListener("resize", calculateViewportHeight);
    };
  }, []);
  return (
    <div>
      <Switch>
        <Route exact strict path="/" component={Home}></Route>
        <Route exact strict path="/404" component={NotFound}></Route>
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
