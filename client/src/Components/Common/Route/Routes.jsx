import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "../../Auth/SignUp/SignUp";
import Home from "../Home/Home";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/:urlParams" render={(props)=> <Dummy {...props}/> }/> */}
      </Switch>
    );
  }
}

export default Routes;
