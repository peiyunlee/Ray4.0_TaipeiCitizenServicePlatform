import React from "react";
import { Link } from "react-router-dom";

import SortCard from "./sortcard";
import Tab from "../tab"
import "./home.css"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortData: this.props.sortData, activeTab: "服務主題" };

    this._renderItems = this._renderItems.bind(this);
    this.tagClick = this.tagClick.bind(this);
  }

  render() {
    return (
      <div className="home">
        <section className="top">
          <ul>
            <li>
              <Link to="/rental">公有場地租用</Link>
            </li>
          </ul>
        </section>
        <section className="sort">
          <div>
            <Tab label="服務主題" activeTab={this.state.activeTab} tagClick={this.tagClick} />
            <Tab label="業務機關" activeTab={this.state.activeTab} tagClick={this.tagClick} />
          </div>
          <div>{this._renderItems()}</div>
        </section>
      </div>
    );
  }

  _renderItems() {
    let list = [];
    if (this.state.activeTab === "服務主題") {
      this.state.sortData.theme.forEach((item, index) => {
        list.push(
          <SortCard
            key={index}
            list={item}
            listtype={"theme"}
          />
        );
      });
    } else {
      this.state.sortData.organ.forEach((item) => {
        list.push(
          <SortCard
            key={item.name}
            list={item}
            listtype={"organ"}
          />
        );
      });
    }
    return list;
  }

  tagClick(label) {
    this.setState({ activeTab: label });
  }
}

export default Home;
