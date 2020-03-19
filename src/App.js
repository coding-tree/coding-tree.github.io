import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Loading from "./components/Loading";

import Home from "./components/Home";
const NotFound = lazy(() => import("./components/NotFound"));
const Regulations = lazy(() => import("./components/Regulations"));

const calculateViewportHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

function useWindowSize() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", calculateViewportHeight);
    return () => {
      window.removeEventListener("resize", calculateViewportHeight);
    };
  }, []);
}

function App() {
  useWindowSize();

  return (
    <Suspense fallback={<Loading>Wczytywanie...</Loading>}>
      <Switch>
        <Route exact strict path="/" component={Home}></Route>
        <Route exact strict path="/regulamin" component={Regulations}></Route>
        <Route exact strict path="/404" component={NotFound}></Route>
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default App;
