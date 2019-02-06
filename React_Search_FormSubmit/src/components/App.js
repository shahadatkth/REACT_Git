import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import TopNavbar from "./topNavbar";
import GitPopularity from "./gitPopularity";
import RegistryForm from "./registryForm";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div id="content">
          <TopNavbar />
          <Switch>
            <Route path="/registryForm" component={RegistryForm} />
            <Route path="/" component={GitPopularity} />
          </Switch>
        </div>
        <div className="overlay" />
      </div>
    );
  }
}

export default App;
