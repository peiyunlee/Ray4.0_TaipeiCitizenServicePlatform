import React from "react";
import { withRouter } from "react-router-dom";
import SearchBar from "./search";
import Header from "../header"

class RentalHome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar setRentalSearch={this.props.setRentalSearch} />
      </div>
    );
  }
}

export default withRouter(RentalHome);
