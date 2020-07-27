import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Listing from "../Listing/Listing";
import Entity from "../Entity/Entity";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/entity/entity_page"
          render={(props) => <Entity {...props} />}
        />
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
