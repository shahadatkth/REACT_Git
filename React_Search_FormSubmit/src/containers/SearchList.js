import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";

class SearchList extends Component {
  renderSearch = repoEach => {
    const id = repoEach.items.map(repository => repository.id);
    const items = repoEach.items;

    return (
      <div key={id}>
        <br />
        <Chart data={items} />
      </div>
    );
  };

  render() {
    return <div>{this.props.repositories.map(this.renderSearch)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.repository
  };
};

export default connect(mapStateToProps)(SearchList);
