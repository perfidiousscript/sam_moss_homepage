import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Bio from "./Bio";

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Bio} />
        <Route exact path="/bio" component={Bio} />
      </Switch>
    );
  }
}

export default Body;
