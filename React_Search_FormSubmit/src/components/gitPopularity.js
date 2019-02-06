import React, { Component } from "react";
import SearchBar from "../containers/searchBar";
import SearchList from "../containers/SearchList";

class GitPopularity extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchList />
      </div>
    );
  }
}

export default GitPopularity;
