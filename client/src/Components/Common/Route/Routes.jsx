import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../../Auth/SignUp/SignUp";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={SignUp}/>
        <Route exact path="s/:location" />
      </Switch>
    );
  }
}

export default Routes;
