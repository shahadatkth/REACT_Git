import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  /*constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }*/

  render() {
    return (
      <nav id="sidebar" className="">
        <div id="dismiss">
          <i className="fas fa-arrow-left" />
        </div>

        <div className="sidebar-header">
          <h3>OP5</h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to="/gitPopularity">Git Search</Link>
          </li>
          <li>
            <Link to="/registryForm">Registration</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
