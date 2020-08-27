import React from "react";

import "./filter.css";
import up from "../../assets/images/icon/up-black.png";
import down from "../../assets/images/icon/down-black.png";

class RentalFilter extends React.Component {
  constructor(props) {
    super(props);

    this._renderCheckBox_D = this._renderCheckBox_D.bind(this);
    this._renderCheckBox_T = this._renderCheckBox_T.bind(this);
    this._renderCheckBox_N = this._renderCheckBox_N.bind(this);
    this._renderCheckBox_C = this._renderCheckBox_C.bind(this);
    this._districtChange = this._districtChange.bind(this);
    this._typeChange = this._typeChange.bind(this);
    this._numberChange = this._numberChange.bind(this);
    this._costChange = this._costChange.bind(this);
  }

  render() {
    return (
      <div className="filter">
        <div className="title">透過以下分類搜尋</div>
        <div className="container">
          <div className="list_title">
            行政區
            <div className="icon-wrapper" onClick={() => this.props.filterListClick(0)}>
              <img
                src={down}
                alt=""
                className={`collapse-icon ${
                  !this.props.active[0] ? "collapse-icon-active" : ""
                }`}
              />
              <img
                src={up}
                alt=""
                className={`collapse-icon ${
                  this.props.active[0] ? "collapse-icon-active" : ""
                }`}
              />
            </div>
          </div>
          <div className={`list ${!this.props.active[0] ? "list-hide" : ""}`}>
            {this._renderCheckBox_D()}
          </div>
        </div>
        <div className="container">
          <div className="list_title">
            場地類型
            <div className="icon-wrapper" onClick={() => this.props.filterListClick(1)}>
              <img
                src={down}
                alt=""
                className={`collapse-icon ${
                  !this.props.active[1] ? "collapse-icon-active" : ""
                }`}
              />
              <img
                src={up}
                alt=""
                className={`collapse-icon ${
                  this.props.active[1] ? "collapse-icon-active" : ""
                }`}
              />
            </div>
          </div>
          <div className={`list ${!this.props.active[1] ? "list-hide" : ""}`}>
            {this._renderCheckBox_T()}
          </div>
        </div>
        <div className="container">
          <div className="list_title">
            容納人數
            <div className="icon-wrapper" onClick={() => this.props.filterListClick(2)}>
              <img
                src={down}
                alt=""
                className={`collapse-icon ${
                  !this.props.active[2] ? "collapse-icon-active" : ""
                }`}
              />
              <img
                src={up}
                alt=""
                className={`collapse-icon ${
                  this.props.active[2] ? "collapse-icon-active" : ""
                }`}
              />
            </div>
          </div>
          <div className={`list ${!this.props.active[2] ? "list-hide" : ""}`}>
            {this._renderCheckBox_N()}
          </div>
        </div>
        <div className="container">
          <div className="list_title">
            場地價格（小時）
            <div className="icon-wrapper" onClick={() => this.props.filterListClick(3)}>
              <img
                src={down}
                alt=""
                className={`collapse-icon ${
                  !this.props.active[3] ? "collapse-icon-active" : ""
                }`}
              />
              <img
                src={up}
                alt=""
                className={`collapse-icon ${
                  this.props.active[3] ? "collapse-icon-active" : ""
                }`}
              />
            </div>
          </div>
          <div className={`list ${!this.props.active[3] ? "list-hide" : ""}`}>
            {this._renderCheckBox_C()}
          </div>
        </div>
        <div className="container">
          <div className="list_title">
            其他設施及設備
            <div className="icon-wrapper" onClick={() => this.props.filterListClick(4)}>
              <img
                src={down}
                alt=""
                className={`collapse-icon ${
                  !this.props.active[4] ? "collapse-icon-active" : ""
                }`}
              />
              <img
                src={up}
                alt=""
                className={`collapse-icon ${
                  this.props.active[4] ? "collapse-icon-active" : ""
                }`}
              />
            </div>
          </div>
          <div className={`list ${!this.props.active[4] ? "list-hide" : ""}`}>
            <label>
              <input name="停車場" type="checkbox" />
              停車場
            </label>
            <label>
              <input name="親子設備" type="checkbox" />
              親子設備
            </label>
            <label>
              <input name="無障礙設施" type="checkbox" />
              無障礙設施
            </label>
          </div>
        </div>
      </div>
    );
  }

  _districtChange(event) {
    const { filter, search } = this.props;
    const target = event.target;
    const index = parseInt(target.name);
    let d = filter.district;
    d[0].checked = false;
    d[index].checked = !d[index].checked;

    let c;
    c = Object.assign({}, filter, {
      dodistrict: true,
      district: d,
    });

    this.props.setRentalSearch(search, c);
    window.scrollTo(0, 0);
  }

  _typeChange(event) {
    const { filter, search } = this.props;
    const target = event.target;
    const index = parseInt(target.name);
    let t = filter.type;
    t[0].checked = false;
    t[index].checked = !t[index].checked;

    let c;
    c = Object.assign({}, filter, {
      dotype: true,
      type: t,
    });

    this.props.setRentalSearch(search, c);
    window.scrollTo(0, 0);
  }

  _numberChange(event) {
    const { filter, search } = this.props;
    const target = event.target;
    const index = parseInt(target.name);
    let n = filter.number;
    n[index].checked = !n[index].checked;

    let c;
    c = Object.assign({}, filter, {
      donumber: true,
      number: n,
    });

    this.props.setRentalSearch(search, c);
    window.scrollTo(0, 0);
  }

  _costChange(event) {
    const { filter, search } = this.props;
    const target = event.target;
    const index = parseInt(target.name);
    let c = filter.cost;
    c[index].checked = !c[index].checked;

    let o;
    o = Object.assign({}, filter, {
      docost: true,
      cost: c,
    });

    this.props.setRentalSearch(search, o);
    window.scrollTo(0, 0);
  }

  _renderCheckBox_D() {
    const { filter } = this.props;
    let list = [];
    if (filter.district[0].checked) {
      filter.district.forEach((item, index) => {
        if (index !== 0) {
          list.push(
            <label key={index}>
              <input
                key={index}
                name={index}
                type="checkbox"
                onChange={this._districtChange}
              />
              {item.name}
            </label>
          );
        }
      });
    } else {
      filter.district.forEach((item, index) => {
        if (index !== 0) {
          list.push(
            <label key={index}>
              <input
                key={index}
                name={index}
                type="checkbox"
                checked={filter.district[index].checked}
                onChange={this._districtChange}
              />
              {filter.district[index].name}
            </label>
          );
        }
      });
    }

    return list;
  }

  _renderCheckBox_T() {
    const { filter } = this.props;
    let list = [];
    if (filter.type[0].checked) {
      filter.type.forEach((item, index) => {
        if (index !== 0) {
          list.push(
            <label key={index}>
              <input
                key={index}
                name={index}
                type="checkbox"
                onChange={this._typeChange}
              />
              {item.name}
            </label>
          );
        }
      });
    } else {
      filter.type.forEach((item, index) => {
        if (index !== 0) {
          list.push(
            <label key={index}>
              <input
                key={index}
                name={index}
                type="checkbox"
                checked={item.checked}
                onChange={this._typeChange}
              />
              {item.name}
            </label>
          );
        }
      });
    }
    return list;
  }

  _renderCheckBox_N() {
    const { filter } = this.props;
    let list = [];
    filter.number.forEach((item, index) => {
      list.push(
        <label key={index}>
          <input
            key={index}
            name={index}
            type="checkbox"
            checked={item.checked}
            onChange={this._numberChange}
          />
          {item.min} - {item.max} 人
        </label>
      );
    });
    return list;
  }

  _renderCheckBox_C() {
    const { filter } = this.props;
    let list = [];
    filter.cost.forEach((item, index) => {
      if (index === 0) {
        list.push(
          <label key={index}>
            <input
              key={index}
              name={index}
              type="checkbox"
              checked={item.checked}
              onChange={this._costChange}
            />
            免費
          </label>
        );
      } else if (index === filter.cost.length) {
        list.push(
          <label key={index}>
            <input
              key={index}
              name={index}
              type="checkbox"
              checked={item.checked}
              onChange={this._costChange}
            />
            {item.min} 元以上
          </label>
        );
      } else {
        list.push(
          <label key={index}>
            <input
              key={index}
              name={index}
              type="checkbox"
              checked={item.checked}
              onChange={this._costChange}
            />
            {item.min} - {item.max} 元
          </label>
        );
      }
    });
    return list;
  }
}

export default RentalFilter;
