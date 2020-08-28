import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import "./breadcrumb.css";

import breadcrumb from '../assets/images/icon/breadcrumb.png'

class BreadCrumb extends React.Component {
  constructor(props) {
    super(props);

    this.OnClick = this.OnClick.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  render() {
    return <div className="breadcrumb-wrapper">{this._renderItem()}</div>;
  }

  _renderItem() {
    const { pathName, path } = this.props;
    let list = [];
    pathName.forEach((item, index) => {
      if (index !== pathName.length - 1) {
        list.push(<Link key={"link"+index} to={path[index]}>{item}</Link>);
        list.push(<img key={"img"+index}  src={breadcrumb} alt="" />);
      } else {
        list.push(<div key={index}>{item}</div>);
      }
    });
    return list;
  }

  OnClick(nextPath) {
    this.props.history.push(nextPath);
  }
}

export default withRouter(BreadCrumb);
