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
        <Link to={"/caselist/" + listtype + "/" + list.name}>
          <h3>{list.name}</h3>
          <p>{list.info}</p>
        </Link>
      );
    }
    else{
      return (
        <Link to={"/caselist/" + listtype + "/" + list.name}>
          <h3>{list.name}</h3>
        </Link>
      );

    }
  }
}

export default SortCard;
