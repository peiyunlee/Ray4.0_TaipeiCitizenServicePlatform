import React from "react";
import logo from "../assets/images/台北市政府logo去背 1.png";
import { Link } from "react-router-dom";
import "./header.css";

import DemoLink from './demolink';

class Header extends React.Component {
  render() {
    return (
      <header>
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
              <Link to="/" className="nav-item">
                案件進度
              </Link>
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
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
