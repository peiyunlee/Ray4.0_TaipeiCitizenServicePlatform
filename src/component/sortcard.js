import React from "react";
// import '../css/sortcard.css';

class SortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name,info} = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <p>{info}</p>
      </div>
    );
  }
}

export default SortCard;
