import React from "react";
import { Link } from "react-router-dom";

import up from "../../assets/images/icon/home-up.png";
import down from "../../assets/images/icon/home-down.png";

import "./fatfooter.css";

class FatFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        active:false,
        iconClassName: ["collapse-icon collapse-icon-active","collapse-icon"],
        contentClassName: "container"
    }

    this._renderItems = this._renderItems.bind(this);
    this._iconClick = this._iconClick.bind(this);
  }

  render() {

    return (
      <div className="fat-footer">
        <div className="icon_wrapper" onClick={this._iconClick}>
          <img src={down} alt="" className={`collapse-icon ${!this.state.active ? 'collapse-icon-active': ''}`} />
          <img src={up} alt="" className={`collapse-icon ${this.state.active ? 'collapse-icon-active': ''}`} />
        </div>
        <div className={`container ${this.state.active === true ? 'container-active': 'container-hidden'}`} >
          <div>
            <div className="title">服務主題</div>
            <div className="list">{this._renderItems(this.props.sortData.theme, "theme")}</div>
          </div>
          <div>
            <div className="title">業務機關</div>
            <div className="list">{this._renderItems(this.props.sortData.organ, "organ")}</div>
          </div>
        </div>
      </div>
    );
  }

  _renderItems(data, type) {
    let list = [];
    data.forEach((item, index) => {
      list.push(
        <Link
          to={"/caselist/" + type + "/" + item.name}
          key={index}
        >
          <h3>{item.name}</h3>
        </Link>
      );
    });
    return list;
  }

  _iconClick(){
    this.setState({
        active:!this.state.active
    })
  }
}

export default FatFooter;
