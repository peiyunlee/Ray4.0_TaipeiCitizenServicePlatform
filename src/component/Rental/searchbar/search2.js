import React from "react";
import { withRouter } from "react-router-dom";

import Button from "../../button";
import Calender from "../../calender";
import search from "../../../assets/images/icon/search.svg";
import start from "../../../assets/images/icon/startdate.png";
import end from "../../../assets/images/icon/enddate.png";

class RentalResultSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdropdown: [false, false],
      keyword: "",
      datestart: props.search.date.do ? props.search.date.value[0] : "選擇日期",
      dateend: props.search.date.do ? props.search.date.value[1] : "選擇日期",
      selected: 0,
      pickday: [new Date("", "", ""), new Date("", "", "")],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCalenderShow = this.handleCalenderShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPickDay = this.setPickDay.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.maskclick) {
      this.setState({
        showdropdown: [false, false],
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
    let value = ["", ""];
    if (dodate) {
      value = [this.state.datestart, this.state.dateend];
    }
    let s = {
      keyword: this.state.keyword,
      date: { do: dodate, value: value },
    };

    let f = this.props.filter;

    this.props.setRentalSearch(s, f);
    event.preventDefault();
    // this.props.history.push("/rentallist");
  }

  handleCalenderShow(index) {
    let a = [false, false];
    a[index] = !this.state.showdropdown[index];
    this.setState({
      showdropdown: a,
    });
    this.props.setMaskWork(a[index]);
  }

  setPickDay(day, count) {
    console.log("aa");
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
        showdropdown: [false, false],
        datestart:
          start.getFullYear() + "年" + m[0] + "月" + start.getDate() + "日",
        dateend: end.getFullYear() + "年" + m[1] + "月" + end.getDate() + "日",
      });
    }
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
        <Calender
          setPickDay={this.setPickDay}
          pickday={this.state.pickday}
          selected={this.state.selected}
        />
      );
    }
    return (
      <form className="s2_form">
        <div className="s2_container">
          場地關鍵字
          <label>
            <input
              className={
                this.state.keyword !== ""
                  ? "s2-input-t s2-input-have"
                  : "s2-input-t"
              }
              type="text"
              name="keyword"
              value={this.state.keyword}
              placeholder="想要找什麼場地？"
              onChange={this.handleInputChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                }
              }}
            />
          </label>
          <img src={search} alt="" />
        </div>
        <div className="s2_container">
          租借開始
          <input
            className="s2-input-btn"
            type="button"
            name="datestart"
            value={this.state.datestart}
            onClick={() => this.handleCalenderShow(0)}
          />
          <img src={start} alt="" />
          {dropdown[0]}
        </div>
        <div className="s2_container">
          租借結束
          <input
            className="s2-input-btn"
            type="button"
            name="dateend"
            value={this.state.dateend}
            onClick={() => this.handleCalenderShow(1)}
          />
          <img src={end} alt="" />
          {dropdown[1]}
        </div>
        <Button type={2} text={"搜尋"} onclick={this.handleSubmit} />
      </form>
    );
  }
}

export default withRouter(RentalResultSearchBar);
