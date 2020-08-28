import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import DemoLink from "./demolink";
import logo from "../assets/images/台北市政府logo去背 1.png";
import search from "../assets/images/icon/nav-search.png";
import searchblack from "../assets/images/icon/search.svg";
import cross from "../assets/images/icon/cross.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showsearchbar: false,
    };

    this.setshowsearchbar = this.setshowsearchbar.bind(this);
  }
  render() {
    return (
      <header
        ref={(node) => {
          this.node = node;
        }}
      >
        <Link to="/" className="logo-wrapper">
          <img src={logo} alt="" className="logo"></img>
          <div>
            <h2>臺北市政府</h2>
            <h1>市民服務大平台</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <DemoLink to="/" className="nav-item" text="案件進度"></DemoLink>
            </li>
            <li>
              <DemoLink className="nav-item" text="常見問題" />
            </li>
            <li>
              <DemoLink className="nav-item" text="聯絡資訊" />
            </li>
            <li>
              <DemoLink className="nav-item" text="會員登入" />
            </li>
            <li>
              <button className="nav-search" onClick={this.setshowsearchbar}>
                <img src={search} alt="" />
              </button>
            </li>
          </ul>
        </nav>
        {this.state.showsearchbar && (
          <div className="dropdown-search">
            <div className="search-mask" onClick={this.setshowsearchbar}></div>
            <button className="dropdown-cross" onClick={this.setshowsearchbar}>
              <img src={cross} alt="" />
            </button>
            <label>
              <img src={searchblack} alt="" />
              <input
                type="text"
                name="keyword"
                placeholder="請輸入想申辦的服務關鍵字"
                onKeyPress={(e) => {
                  if (e.key === "Enter") this.setshowsearchbar();
                }}
              />
            </label>
          </div>
        )}
      </header>
    );
  }

  setshowsearchbar() {
    this.setState({ showsearchbar: !this.state.showsearchbar });
  }
}

export default Header;
