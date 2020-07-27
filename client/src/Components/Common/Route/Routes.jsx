import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Listing from "../Listing/Listing";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/:urlParams"
          render={(props) => <Listing {...props} />}
        />
      </Switch>
    );
  }
}

export default Routes;
