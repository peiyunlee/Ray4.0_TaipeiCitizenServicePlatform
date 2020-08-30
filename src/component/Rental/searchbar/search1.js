import React from "react";
import { withRouter } from "react-router-dom";

import Button from "../../button";
import Calender from "../calender/calender";

import search from "../../../assets/images/icon/search.svg";
import start from "../../../assets/images/icon/startdate.png";
import end from "../../../assets/images/icon/enddate.png";
import down from "../../../assets/images/icon/dropdown.png";
import position from "../../../assets/images/icon/position.png";
import type from "../../../assets/images/icon/type.png";
class RentalHomeSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdropdown: [false, false, false],
      keyword: "",
      district: "選擇行政區",
      type: "選擇類型",
      datestart: "選擇日期",
      dateend: "選擇日期",
      filter: {
        dodistrict: false,
        district: [
          { checked: false, name: "台北市不限" },
          { checked: false, name: "中正區" },
          { checked: false, name: "大同區" },
          { checked: false, name: "中山區" },
          { checked: false, name: "松山區" },
          { checked: false, name: "大安區" },
          { checked: false, name: "萬華區" },
          { checked: false, name: "信義區" },
          { checked: false, name: "士林區" },
          { checked: false, name: "北投區" },
          { checked: false, name: "南港區" },
          { checked: false, name: "內湖區" },
          { checked: false, name: "文山區" },
        ],
        dotype: false,
        type: [
          { checked: false, name: "類型不限" },
          { checked: false, name: "戶外" },
          { checked: false, name: "室內" },
          { checked: false, name: "運動場館" },
          { checked: false, name: "藝文場館" },
          { checked: false, name: "廣場" },
          { checked: false, name: "公園" },
          { checked: false, name: "教室" },
        ],
      },
      selected: 0,
      pickday: [new Date("", "", ""), new Date("", "", "")],
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleDropdownShow = this.handleDropdownShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPickDay = this.setPickDay.bind(this);

    this._renderCheckBox_D = this._renderCheckBox_D.bind(this);
    this._renderCheckBox_T = this._renderCheckBox_T.bind(this);
    this._districtChange = this._districtChange.bind(this);
    this._typeChange = this._typeChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.maskclick) {
      this.setState({
        showdropdown: [false, false, false],
      });
      this.props.setMaskWork(false);
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    let dodate =
      this.state.dateend !== "選擇日期" && this.state.dateend !== "選擇日期";

    let dodistrict = this.state.district !== "選擇行政區";

    let dotype = this.state.dateend !== "選擇類型";

    let value = ["", ""];
    if (dodate) {
      value = [this.state.datestart, this.state.dateend];
    }

    let s = {
      keyword: this.state.keyword,
      date: { do: dodate, value: value },
    };

    let f = Object.assign({}, this.props.filter, {
      dodistrict: dodistrict,
      dotype: dotype,
      district: this.state.filter.district,
      type: this.state.filter.type,
    });

    this.props.setRentalSearch(s, f);
    event.preventDefault();
    this.props.history.push("/rentallist");
  }

  handleDropdownShow(index) {
    let a = [false, false, false];
    a[index] = !this.state.showdropdown[index];
    this.setState({
      showdropdown: a,
    });
    this.props.setMaskWork(a[index]);
  }

  setPickDay(day, count) {
    const start = new Date(day[0]);
    let m = [parseInt(start.getMonth()) + 1, ""];
    if (count === 0) {
      this.setState({
        pickday: day,
        selected: 0,
        datestart: "選擇日期",
        dateend: "選擇日期",
      });
    } else if (count === 1) {
      this.setState({
        pickday: day,
        selected: 1,
        datestart:
          start.getFullYear() + "年" + m[0] + "月" + start.getDate() + "日",
        dateend: "選擇日期",
      });
    } else {
      const end = new Date(day[1]);
      m = [parseInt(start.getMonth()) + 1, parseInt(end.getMonth()) + 1];
      this.setState({
        pickday: day,
        selected: 2,
        showdropdown: [false, false, false],
        datestart:
          start.getFullYear() + "年" + m[0] + "月" + start.getDate() + "日",
        dateend: end.getFullYear() + "年" + m[1] + "月" + end.getDate() + "日",
      });
    }
  }

  _districtChange(event) {
    const { filter } = this.state;
    const target = event.target;
    const index = parseInt(target.name);
    let d = filter.district;
    if (index === 0) {
      if (d[0].checked) d.map((item) => (item.checked = false));
      else d.map((item) => (item.checked = true));
    } else {
      d[index].checked = !d[index].checked;
      d[0].checked = false;
    }

    let c;
    c = Object.assign({}, filter, {
      district: d,
    });
    let checkedlist = d.filter((item) => item.checked === true);
    let content = "";
    if (d[0].checked) {
      content = d[0].name;
    } else if (checkedlist.length === 0) {
      content = "選擇行政區";
    } else {
      if (checkedlist.length > 3) {
        content = " ...";
      }
      checkedlist = checkedlist.slice(0, 3);
      content =
        checkedlist
          .map((item) => {
            return item.name;
          })
          .join("/") + content;
    }
    this.setState({
      filter: c,
      district: content,
    });
    // this.props.setRentalFilter(c);
  }

  _typeChange(event) {
    const { filter } = this.state;
    const target = event.target;
    const index = parseInt(target.name);
    let t = filter.type;
    if (index === 0) {
      if (t[0].checked) t.map((item) => (item.checked = false));
      else t.map((item) => (item.checked = true));
    } else {
      t[index].checked = !t[index].checked;
      t[0].checked = false;
    }

    let c;
    c = Object.assign({}, filter, {
      type: t,
    });
    let checkedlist = t.filter((item) => item.checked === true);
    let content = "";
    if (t[0].checked) {
      content = t[0].name;
    } else if (checkedlist.length === 0) {
      content = "選擇類型";
    } else {
      if (checkedlist.length > 3) {
        content = " ...";
      }
      checkedlist = checkedlist.slice(0, 3);
      content =
        checkedlist
          .map((item) => {
            return item.name;
          })
          .join("/") + content;
    }
    this.setState({
      filter: c,
      type: content,
    });
    // this.props.setRentalFilter(c);
  }

  _renderCheckBox_D() {
    let list = [];
    const filter = this.state.filter;
    let name = "checkbox-label";
    filter.district.forEach((item, index) => {
      if (index === 0) name = "checkbox-label checkbox-label-d-all";
      else name = "checkbox-label";
      list.push(
        <label key={index} className={name}>
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
    });
    return list;
  }

  _renderCheckBox_T() {
    let list = [];
    const filter = this.state.filter;
    let name = "checkbox-label";
    filter.type.forEach((item, index) => {
      if (index === 0) name = "checkbox-label checkbox-label-t-all";
      else name = "checkbox-label";
      list.push(
        <label key={index} className={name}>
          <input
            key={index}
            name={index}
            type="checkbox"
            checked={filter.type[index].checked}
            onChange={this._typeChange}
          />
          {filter.type[index].name}
        </label>
      );
    });
    return list;
  }

  render() {
    let dropdown = [];
    if (this.state.showdropdown[0]) {
      dropdown[0] = (
        <Calender
          setPickDay={this.setPickDay}
          pickday={this.state.pickday}
          selected={this.state.selected}
        />
      );
    }
    if (this.state.showdropdown[1]) {
      dropdown[1] = (
        <div className="dropdown dropdown-district">
          {this._renderCheckBox_D()}
        </div>
      );
    }
    if (this.state.showdropdown[2]) {
      dropdown[2] = (
        <div className="dropdown dropdown-type">{this._renderCheckBox_T()}</div>
      );
    }
    return (
      <form className="s1_form">
        <div className="row">
          <div className="input-t-container radius-start">
            <div
              className={this.state.keyword !== "" ? "d-none input" : "input"}
            >
              <img className="icon" src={search} alt="" />
              <div>
                <span className="input-span">場地關鍵字</span>
                <br />
                想借什麼場地？
              </div>
            </div>
            <label>
              <input
                className={
                  this.state.keyword !== ""
                    ? "input-t-have radius-start"
                    : "input-t radius-start"
                }
                type="text"
                name="keyword"
                value={this.state.keyword}
                onChange={this.handleInputChange}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                  }
                }}
              />
            </label>
          </div>
          <div className="line-container">
            <div className="line"></div>
          </div>
          <div className="input-btn-container">
            <div className="input">
              <img className="icon" src={start} alt="" />
              <div>
                <span className="input-span">租借開始</span>
                <br />
                {this.state.datestart}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[0]
                  ? "input-btn input-btn-active"
                  : "input-btn"
              }
              type="button"
              name="datestart"
              onClick={() => this.handleDropdownShow(0)}
            />
            {dropdown[0]}
          </div>
          <div className="line-container">
            <div className="line"></div>
          </div>
          <div className="input-btn-container">
            <div className="input radius-end">
              <img className="icon" src={end} alt="" />
              <div>
                <span className="input-span">租借結束</span>
                <br />
                {this.state.dateend}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[0]
                  ? "input-btn input-btn-active radius-end"
                  : "input-btn radius-end"
              }
              type="button"
              name="dateend"
              onClick={() => this.handleDropdownShow(0)}
            />
          </div>
        </div>
        <div className="row">
          <div>
            <div className="input radius-all">
              <img className="icon" src={position} alt="" />
              <div>
                <span className="input-span">場地位置</span>
                <br />
                {this.state.district}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[1]
                  ? "input-btn radius-all input-btn-active"
                  : "input-btn radius-all"
              }
              type="button"
              name="district"
              onClick={() => this.handleDropdownShow(1)}
            />
            {dropdown[1]}
          </div>
          <div>
            <div className="input radius-all">
              <img className="icon" src={type} alt="" />
              <div>
                <span className="input-span">場地類型</span>
                <br />
                {this.state.type}
              </div>
              <img src={down} alt="" />
            </div>
            <input
              className={
                this.state.showdropdown[2]
                  ? "input-btn radius-all input-btn-active"
                  : "input-btn radius-all"
              }
              type="button"
              name="type"
              onClick={() => this.handleDropdownShow(2)}
            />
            {dropdown[2]}
          </div>
        </div>
        <Button type={2} text={"搜尋"} onclick={this.handleSubmit} />
      </form>
    );
  }
}
export default withRouter(RentalHomeSearchBar);

/* <div>
          <label>
            <select
              className="s1_select"
              name="district"
              value={this.state.district}
              onChange={this.handleInputChange}
            >
              <option value="">行政區</option>
              <option value="中正區">中正區</option>
              <option value="大同區">大同區</option>
              <option value="中山區">中山區</option>
              <option value="松山區">松山區</option>
              <option value="大安區">大安區</option>
              <option value="萬華區">萬華區</option>
              <option value="信義區">信義區</option>
              <option value="士林區">士林區</option>
              <option value="北投區">北投區</option>
              <option value="內湖區">內湖區</option>
              <option value="南港區">南港區</option>
              <option value="文山區">文山區</option>
            </select>
          </label>
          <label>
            <select
              className="s1_select"
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
            >
              <option value="">場地類型</option>
              <option value="運動">運動</option>
              <option value="公園">公園</option>
              <option value="廣場">廣場</option>
              <option value="演講廳">演講廳</option>
              <option value="禮堂">禮堂</option>
              <option value="教室">教室</option>
            </select>
          </label>
        </div> */

// if (d) {
//   switch (this.state.district) {
//     case "中正區":
//       i = 0;
//       break;
//     case "大同區":
//       i = 1;
//       break;
//     case "中山區":
//       i = 2;
//       break;
//     case "松山區":
//       i = 3;
//       break;
//     case "大安區":
//       i = 4;
//       break;
//     case "萬華區":
//       i = 5;
//       break;
//     case "信義區":
//       i = 6;
//       break;
//     case "士林區":
//       i = 7;
//       break;
//     case "北投區":
//       i = 8;
//       break;
//     case "內湖區":
//       i = 9;
//       break;
//     case "南港區":
//       i = 10;
//       break;
//     case "文山區":
//       i = 11;
//       break;
//     default:
//       i = 0;
//       break;
//   }
// }
// if (t) {
//   switch (this.statecontainer.type) {
//     case "運動":
//       j = 0;
//       break;
//     case "公園":
//       j = 1;
//       break;
//     case "廣場":
//       j = 2;
//       break;
//     case "演講廳":
//       j = 3;
//       break;
//     case "禮堂":
//       j = 4;
//       break;
//     case "教室":
//       j = 5;
//       break;
//     default:
//       j = 0;
//       break;
//   }
// }
