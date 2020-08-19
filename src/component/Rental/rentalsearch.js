import React from "react";

class RentalSearch extends React.Component {
  constructor(props) {
    super(props);

    this._renderItems = this._renderItems.bind(this);
    this._renderCheckBox = this._renderCheckBox.bind(this);
    this._districtChange = this._districtChange.bind(this);
  }

  render() {
    return (
      <div>
        <div>{this._renderCheckBox()}</div>
        <div>{this._renderItems()}</div>
      </div>
    );
  }

  _districtChange(event) {
    const { search } = this.props;
    const target = event.target;
    const index = parseInt(target.name);
    let d = search.district;
    if (target.checked) {
      d[index].selected = true;
    } else {
      d[index].selected = false;
    }

    let s;
    s = Object.assign({}, search, {
      district: d,
    });
    // console.log(d)

    this.setState({
      district: d,
    });

    let result = this._getResult();
    this.props.setRentalResult(result, s);
    console.log(s);
  }

  _getResult() {
    const { search, rentalData } = this.props;
    let result = [];
    rentalData.forEach((item) => {
      let district = search.district.some(
        (ditem) => ditem.selected && ditem.name === item.district
      );
      let type = true;
      if (district && type) result.push(item);
    });
    return result;
  }

  _renderItems() {
    const { result, rentalData } = this.props;
    let list = [];
    if (result === null) {
      rentalData.forEach((item, index) => {
        list.push(<h3 key={index}>{item.name}</h3>);
      });
    } else if (result.length !== 0) {
      result.forEach((item, index) => {
        list.push(<h3 key={index}>{item.name}</h3>);
      });
    } else {
      // 找不到
    }
    return list;
  }

  _renderCheckBox() {
    const {district} = this.props.search
    let list = [];
    let d;
    for (let i = 0; i < 11; i++) {
      switch (i) {
        case 0:
          d = "中正區";
          break;
        case 1:
          d = "大同區";
          break;
        case 2:
          d = "中山區";
          break;
        case 3:
          d = "松山區";
          break;
        case 4:
          d = "大安區";
          break;
        case 5:
          d = "萬華區";
          break;
        case 6:
          d = "信義區";
          break;
        case 7:
          d = "士林區";
          break;
        case 8:
          d = "北投區";
          break;
        case 9:
          d = "內湖區";
          break;
        case 10:
          d = "南港區";
          break;
        case 11:
          d = "文山區";
          break;
        default:
          break;
      }
      list.push(
        <label>
          <input
            name={i}
            type="checkbox"
            checked={district[i].selected}
            onChange={this._districtChange}
          />
          {d}
        </label>
      );
    }
    
    return list;
  }
}

export default RentalSearch;
