import React from "react";
import { withRouter } from "react-router-dom";
import SearchBar from "./searchbar/search1";
import "./home.css";
import "./searchbar/search1.css";
class RentalHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskclick: false,
      maskwork: false,
    };

    this.setMaskWork = this.setMaskWork.bind(this);
    this.maskClick = this.maskClick.bind(this);
  }

  maskClick() {
    if (this.state.maskwork) {
      this.setState({
        maskclick: !this.state.maskclick,
      });
    }
  }

  setMaskWork(work) {
    if (this.state.maskclick) {
      this.setState({
        maskclick: false,
      });
    }
    this.setState({
      maskwork: work,
    });
  }

  render() {
    return (
      <div className="rental-home">
        <div className="mask" onClick={this.maskClick}></div>
        <section className="section_rh">
          <h3>公有場地租用</h3>
          <div className="info">快速搜尋適合您的場地</div>
          <div className="s1_search_wrapper">
            <SearchBar
              filter={this.props.filter}
              setRentalFilter={this.props.setRentalFilter}
              setMaskWork={this.setMaskWork}
              maskclick={this.state.maskclick}
              setRentalSearch={this.props.setRentalSearch}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(RentalHome);
