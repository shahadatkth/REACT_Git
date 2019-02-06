import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRepository } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.fetchRepository(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onSubmit}>
        <input
          placeholder="Search repos.."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          minLength="3"
          required
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRepository: searchText => {
    dispatch(fetchRepository(searchText));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
