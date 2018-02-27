import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Bio from "./Bio";
import Contact from "./Contact";
import Work from "./Work";

class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Bio} />
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work" component={Work} />
      </Switch>
    );
  }
}

export default Body;
