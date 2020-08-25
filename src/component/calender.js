import React from "react";

import left from "../assets/images/icon/c-left.png";
import right from "../assets/images/icon/c-right.png";

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmonth: [],
      showyear: [],
      selectedstart: false,
      selectedend: false,
    };

    this.monthClick = this.monthClick.bind(this);
    this.dayClick = this.dayClick.bind(this);
    this.dayHover = this.dayHover.bind(this);

    this._renderDay = this._renderDay.bind(this);
    this.dayStart = this.dayStart.bind(this);
    this.daysMonth = this.daysMonth.bind(this);
  }

  componentDidMount() {}

  monthClick(year, month, type) {
    let m = [month, month];
    let y = [year, year];
    if (type === "pre") {
      if (month === 1) {
        m = [11, 12];
        y = [year - 1, year - 1];
      } else if (month === 2) {
        m = [12, 1];
        y = [year - 1, year];
      } else {
        m = [month - 1, month];
      }
    } else {
      if (month === 12) {
        m = [2, 3];
        y = [year + 1, year + 1];
      } else if (month === 10) {
        m = [12, 1];
        y = [year, year + 1];
      } else {
        m = [month + 1, month + 2];
      }
    }
    this.setState({
      showmonth: m,
      showyear: y,
    });
    // e.preventDefault();
  }

  dayClick() {
    if (!this.state.selectedstart) {
      this.setState({
        selectedstart: true,
      });
    } else {
      this.setState({
        selectedend: true,
      });
    }
  }

  dayHover(event) {
    const target = event.target;
    if (this.state.selectedstart) {
      console.log(target.className);
    }
  }

  render() {
    const today = new Date();
    const today_month = today.getMonth()+1;
    const today_year = today.getFullYear();
    const showmonth =
      this.state.showmonth.length !== 0
        ? this.state.showmonth
        : [today_month, today_month+1];
    const showyear =
      this.state.showyear.length !== 0
        ? this.state.showyear
        : [today_year, today_year];
    return (
      <div className="calender-container">
        <div className="calender">
          <div className="caption">
            <div
              className="month-btn"
              onClick={() => {
                this.monthClick(showyear[0], showmonth[0], "pre");
              }}
            >
              <img src={left} alt="" />
            </div>
            {showyear[0]} 年 {showmonth[0]}月
          </div>
          <div className="week week-head">
            <div className="week-label">日</div>
            <div className="week-label">一</div>
            <div className="week-label">二</div>
            <div className="week-label">三</div>
            <div className="week-label">四</div>
            <div className="week-label">五</div>
            <div className="week-label">六</div>
          </div>
          <div>{this._renderDay(showmonth[0], showyear[0])}</div>
        </div>
        <div className="calender">
          <div className="caption">
            <div
              className="month-btn month-btn-right"
              onClick={() => {
                this.monthClick(showyear[0], showmonth[0], "next");
              }}
            >
              <img src={right} alt="" />
            </div>
            {showyear[1]} 年 {showmonth[1]}月
          </div>
          <div className="week week-head">
            <div className="week-label">日</div>
            <div className="week-label">一</div>
            <div className="week-label">二</div>
            <div className="week-label">三</div>
            <div className="week-label">四</div>
            <div className="week-label">五</div>
            <div className="week-label">六</div>
          </div>
          <div>{this._renderDay(showmonth[1], showyear[1])}</div>
        </div>
      </div>
    );
  }

  dayStart(month, year) {
    let tmpDate = new Date(year, month - 1, 1);
    return tmpDate.getDay();
  }

  daysMonth(month, year) {
    let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let tmp = year % 4;
    if (tmp === 0) {
      return month_olympic[month - 1];
    } else {
      return month_normal[month - 1];
    }
  }

  _renderDay(today_month, today_year) {
    // const today_month = this.state.today.getMonth() + 1;
    // const today_year = this.state.today.getFullYear();
    let totalDay = this.daysMonth(today_month, today_year);
    let firstDay = this.dayStart(today_month, today_year);

    let labellist = [];
    for (var i = 0; i < firstDay; i++) {
      labellist.push(
        <div key={"container" + i} className="day-contianer day-container-no">
          <div key={"label" + i} className="day-label"></div>
        </div>
      );
    }
    for (var j = 1; j <= totalDay; j++) {
      labellist.push(
        <div key={"container" + j + firstDay} className="day-contianer">
          <div key={"label" + j + firstDay} className="day-label">
            {j}
          </div>
        </div>
      );
    }

    let weeklist = [];
    for (var k = 0; k < labellist.length; k += 7) {
      weeklist.push(labellist.slice(k, k + 7));
    }

    let monthlist = [];
    weeklist.forEach((week, index) => {
      monthlist.push(
        <div key={"week" + index} className="week week-body">
          {week}
        </div>
      );
    });
    return monthlist;
  }
}

export default Calender;
