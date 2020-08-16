import React from "react";
import "../css/Home.css";
import sortData from "../data/sort";
import organData from "../data/organ";
import SortCard from "../component/sortcard";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortData: sortData, sort: true, organData: organData };

    this._renderItems = this._renderItems.bind(this);
    this._tagClick = this._tagClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>市民</h1>
        <button
          onClick={() => {
              this._tagClick()
          }}
        ></button>
        {this._renderItems()}
      </div>
    );
  }

  _renderItems() {
    let list = [];
    if (this.state.sort) {
      this.state.sortData.forEach((item) => {
        list.push(<SortCard name={item.name} info={item.info} />);
      });
    } else {
      this.state.organData.forEach((item) => {
        list.push(<SortCard name={item.name} />);
      });
    }
    return list;
  }

  _tagClick(){
      this.setState({sort:!this.state.sort})
  }
}

export default HomePage;
