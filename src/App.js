import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/main.scss";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
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
