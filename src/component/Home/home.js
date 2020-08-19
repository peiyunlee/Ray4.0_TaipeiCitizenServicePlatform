import React from "react";
import { Link } from "react-router-dom";

import sortData from "../../data/sort";
import organData from "../../data/organ";
import SortCard from "./sortcard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortData: sortData, sort: true, organData: organData };

    this._renderItems = this._renderItems.bind(this);
    this._tagClick = this._tagClick.bind(this);
  }

  render() {
    return (
      <div>
        <h1>市民</h1>
        <ul>
          <li>
            <Link to="/rental">公有場地租用</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            this._tagClick();
          }}
        ></button>
        {this._renderItems()}
      </div>
    );
  }

  _renderItems() {
    const {setList}=this.props
    let list = [];
    if (this.state.sort) {
      this.state.sortData.forEach((item) => {
        list.push(<SortCard name={item.name} info={item.info} setList={setList}/>);
      });
    } else {
      this.state.organData.forEach((item) => {
        list.push(<SortCard name={item.name} setList={setList}/>);
      });
    }
    return list;
  }

  _tagClick() {
    this.setState({ sort: !this.state.sort });
  }
}

export default Home;
