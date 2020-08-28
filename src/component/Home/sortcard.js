import React from "react";
import { Link } from "react-router-dom";

class SortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { list, listtype } = this.props;
    if (listtype === "theme") {
      return (
        <Link className="card card-theme" to={"/caselist/" + listtype + "/" + list.name}>
          <img className="card-theme-icon" src="" alt="" />
          <h3>{list.name}</h3>
          <div className="card-line"></div>
          <p>{list.info}</p>
        </Link>
      );
    }
    else{
      return (
        <Link className="card card-organ" to={"/caselist/" + listtype + "/" + list.name}>
          <h3>{list.name}</h3>
          <div className="card-line"></div>
        </Link>
      );

    }
  }
}

export default SortCard;
