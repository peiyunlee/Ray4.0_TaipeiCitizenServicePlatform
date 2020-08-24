import React from "react";
import { withRouter } from "react-router-dom";
import SearchBar from "./searchbar/search1";
import "./home.css";
import "./searchbar/search1.css";

class RentalHome extends React.Component {
  render() {
    return (
      <div className="rental-home">
        <section className="section_rh">
          <h3>公有場地租用</h3>
          <div className="info">快速搜尋適合您的場地</div>
          <div className="s1_search_wrapper">
            <SearchBar setRentalSearch={this.props.setRentalSearch} />
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(RentalHome);
