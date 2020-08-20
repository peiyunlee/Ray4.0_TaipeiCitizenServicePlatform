import React from "react";

class RentalSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._renderItems = this._renderItems.bind(this);
    this._renderCheckBox_D = this._renderCheckBox_D.bind(this);
    this._districtChange = this._districtChange.bind(this);
  }

  render() {
    return (
      <div>
        <div>{this._renderCheckBox_D()}</div>
        <div>{this._renderItems()}</div>
      </div>
    );
  }

  _districtChange(event) {}

  // _getResult() {
  //   const { result } = this.props;
  //   let result = [];
  //   rentalData.forEach((item) => {
  //     let district = search.district.some(
  //       (ditem) => ditem.selected && ditem.name === item.district
  //     );
  //     let type = item.type.some((tname) =>
  //       search.type.some((titem) => titem.selected && titem.name === tname)
  //     );
  //     if (district && type) result.push(item);
  //   });
  //   return result;
  // }

  _renderItems() {
    const { result } = this.props;
    console.log(result)
    let list = [];
    if (result !== []) {
      result.forEach((item, index) => {
        list.push(<h3 key={index}>{item.name}</h3>);
      });
    } else {
      // 找不到
    }
    return list;
  }

  _renderCheckBox_D() {
    const { check } = this.props;
    let list = [];
    check.district.forEach((item,index) => {
      list.push(
        <label key={index}>
          <input
            key={index}
            name={index}
            type="checkbox"
            checked={check.district[index].checked}
            onChange={this._districtChange}
          />
          {check.district[index].name}
        </label>
      );
    });
    return list;
  }
}

export default RentalSearch;
