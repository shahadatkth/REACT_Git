import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopNavbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fas fa-align-left" />
            <span> Menu</span>
          </button>
        </div>
      </nav>
    );
  }
}

export default TopNavbar;
