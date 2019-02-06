import React, { Component } from "react";
import SearchBar from "./containers/searchBar";
import SearchList from "./containers/SearchList";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchList />
      </div>
    );
  }
}
