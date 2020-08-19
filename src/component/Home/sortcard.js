import React from "react";
import { Link } from "react-router-dom";      

class SortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { setList , name, info } = this.props;

    return (
      <Link to={"/caselist"} onClick={() => {
        setList("sort",name);
      }}>
        <h2>{name}</h2>
        <p>{info}</p>
      </Link>
    );
  }
}

export default SortCard;
