import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Listing from "../Listing/Listing";
import Entity from "../Entity/Entity"
import ReviewHouseRules from "../Billing/ReviewHouseRules"

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:url/entity/:param" render={()=><Entity/>} />
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

        <Route exact path="/entity/entity_page/billing" component={ReviewHouseRules}></Route>
      </Switch>
    );
  }
}

export default Routes;
