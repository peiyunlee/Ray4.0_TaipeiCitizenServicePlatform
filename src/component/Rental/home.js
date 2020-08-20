import React from "react";
import { withRouter } from "react-router-dom";
import SearchBar from "./search"

class RentalHome extends React.Component {
  render() {
    return (
      <SearchBar setRentalSearch={this.props.setRentalSearch}/>
    );
  }
}

export default withRouter(RentalHome);
