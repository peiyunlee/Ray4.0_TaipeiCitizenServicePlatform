import React from "react";

class RentalSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      c_district: [
        { selected: false, name: "中正區" },
        { selected: false, name: "大同區" },
        { selected: false, name: "中山區" },
        { selected: false, name: "松山區" },
        { selected: false, name: "大安區" },
        { selected: false, name: "萬華區" },
        { selected: false, name: "信義區" },
        { selected: false, name: "士林區" },
        { selected: false, name: "松山區" },
        { selected: false, name: "內湖區" },
        { selected: false, name: "文山區" },
      ],
      type: [
        { selected: false, name: "運動" },
        { selected: false, name: "公園" },
        { selected: false, name: "廣場" },
        { selected: false, name: "演講廳" },
        { selected: false, name: "禮堂" },
        { selected: false, name: "教室" },
      ],
      number: [
        { seleted: false, min: 0, max: 30 },
        { seleted: false, min: 30, max: 60 },
        { seleted: false, min: 60, max: 100 },
        { seleted: false, min: 100, max: 200 },
        { seleted: false, min: 200, max: 500 },
        { seleted: false, min: 500, max: 1000 },
        { seleted: false, min: 1000, max: 10000 },
      ],
    };

    this._renderItems = this._renderItems.bind(this);
    this._renderCheckBox_D = this._renderCheckBox_D.bind(this);
    this._renderCheckBox_T = this._renderCheckBox_T.bind(this);
    this._renderCheckBox_N = this._renderCheckBox_N.bind(this);
    this._districtChange = this._districtChange.bind(this);
    this._typeChange = this._typeChange.bind(this);
  }

  render() {
    let count;
    if (this.props.result != null) count = this.props.result.length;
    else count = this.props.rentalData.length;

    return (
      <div>
        <div>{this._renderCheckBox_D()}</div>
        <div>{this._renderCheckBox_T()}</div>
        <h5>找到{count}筆結果</h5>
        <div>{this._renderItems()}</div>
      </div>
    );
  }

  _typeChange(event) {
    const { search } = this.props;
    const target = event.target;
    const index = parseInt(target.name);
    let t = search.type;
    t[index].selected = !t[index].selected;

    let s;
    s = Object.assign({}, search, {
      type: t,
    });

    this.setState({
      type: search.type,
    });
    console.log(s)
    console.log(this.state.type)

    let result = this._getResult();
    this.props.setRentalResult(result, s);
  }

  _districtChange(event) {
    const { search } = this.props;
    const target = event.target;
    const index = parseInt(target.name);
    let d = search.district;
    d[index].selected = !d[index].selected;

    let s;
    s = Object.assign({}, search, {
      district: d,
    });

    // this.setState({
    //   district: d,
    // });

    let result = this._getResult();
    this.props.setRentalResult(result, s);
  }

  _getResult() {
    const { search, rentalData } = this.props;
    let result = [];
    rentalData.forEach((item) => {
      let district = search.district.some(
        (ditem) => ditem.selected && ditem.name === item.district
      );
      let type = item.type.some((tname) =>
        search.type.some((titem) => titem.selected && titem.name === tname)
      );
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

  _renderCheckBox_N() {
    let list = [];
    this.state.number.forEach((item, index) => {
      list.push(
        <label>
          <input
            name={index}
            type="checkbox"
            checked={this.state.number[index].selected}
            onChange={this._numberChange}
          />
          {item.min} - {item.max} 人
        </label>
      );
    });
  }

  _renderCheckBox_T() {
    const { type, district } = this.props.search;
    let list = [];
    let t;
    t = type;
    if (
      type.every((item) => item.selected === true) &&
      district.every((item) => item.selected === true)
    ) {
      console.log()
      t.forEach((item) => {
        item.selected = false;
      });
      this.setState({
        type: t,
      });
    }
    t.forEach((item,index) => {
      list.push(
        <label key={index}>
          <input
            key={index}
            name={index}
            type="checkbox"
            checked={this.state.type[index].selected}
            onChange={this._typeChange}
          />
          {this.state.type[index].name}
        </label>
      );
    });
    return list;
  }

  _renderCheckBox_D() {
    const {search} = this.props
    let list = [];
    let d;
    //有選行政區
    if(search.isdistrict){
      this.setState({
        c_district: search.district
      })
    }
    else{
      
    }
    //沒選行政區 全部=true,but
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
        <label key={i}>
          <input
            key={i}
            name={i}
            type="checkbox"
            checked={this.state.c_district[i].selected}
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
