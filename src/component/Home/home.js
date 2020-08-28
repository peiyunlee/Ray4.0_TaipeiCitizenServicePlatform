import React from "react";
import { Link } from "react-router-dom";

import SortCard from "./sortcard";
import Tab from "../tab";
import "./home.css";

import banner from "../../assets/images/icon/banner.png";

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
          <div className="home-banner">
            <img src={banner} alt="" />
            <div className="banner-title-wrapper banner-title-wrapper-top">
              <div className="banner-title banner-title-count">
                1400+<div className="banner-title-line"></div>
              </div>
              <div className="banner-title">便民申辦</div>
            </div>
            <div className="banner-title-wrapper">
              <div className="banner-title banner-title-count">
                3<span>項</span>
                <div className="banner-title-line"></div>
              </div>
              <div className="banner-title">重點服務</div>
            </div>
            <ul>
              <li>
                <Link to="/rental">公有場地租用</Link>
              </li>
              <li>
                <a href="/#" onClick={(event)=>{event.preventDefault()}}>防疫服務專區</a>
              </li>
              <li>
                <a href="/#" onClick={(event)=>{event.preventDefault()}}>臨櫃預約服務</a>
              </li>
            </ul>
          </div>
          <div className="sort-title">要找什麼服務呢</div>
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
        list.push(<SortCard key={index} list={item} listtype={"theme"} />);
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
