import React from "react";
import { Link } from "react-router-dom";

import SortCard from "./sortcard";
import Tab from "../tab";
import "./home.css";

import banner from "../../assets/images/Frame.png";

import DemoLink from "../demolink";

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
        <section className="home-banner">
          <img src={banner} alt="" />
          <div className="banner-title-wrapper">
            <div className="banner-title banner-title-count banner-title-1400">1400+</div>
            <div className="banner-title">便民申辦</div>
            <div className="banner-title banner-title-count banner-title-3">3項</div>
            <div className="banner-title">重點服務</div>
          </div>
          <div className="banner-content">
            大平台除了提供服務的詳細資訊，也讓你無時無刻、隨時隨地都可以進行申辦。
          </div>
          <ul>
            <li>
              <Link to="/rental">公有場地租用</Link>
            </li>
            <li>
              <DemoLink text="防疫服務專區"></DemoLink>
            </li>
            <li>
              <DemoLink text="臨櫃預約服務"></DemoLink>
            </li>
          </ul>
        </section>
        <section className="home-sort">
          <div className="sort-tab-wrapper">
            <Tab
              label="服務主題"
              activeTab={this.state.activeTab}
              tagClick={this.tagClick}
            />
            <Tab
              label="業務機關"
              activeTab={this.state.activeTab}
              tagClick={this.tagClick}
            />
          </div>
          <div className="sort-list">{this._renderItems()}</div>
        </section>
      </div>
    );
  }

  _renderItems() {
    let list = [];
    if (this.state.activeTab === "服務主題") {
      this.state.sortData.theme.forEach((item, index) => {
        list.push(<SortCard index={index} key={index} list={item} listtype={"theme"} />);
      });
    } else {
      this.state.sortData.organ.forEach((item) => {
        list.push(<SortCard key={item.name} list={item} listtype={"organ"} />);
      });
    }
    return list;
  }

  tagClick(label) {
    this.setState({ activeTab: label });
  }
}

export default Home;
