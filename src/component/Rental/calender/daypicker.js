import React from "react";

import left from "../../../assets/images/icon/daypicker-left.png";
import right from "../../../assets/images/icon/daypicker-right.png";
class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmonth: "",
      showyear: "",
    };
    this.monthClick = this.monthClick.bind(this);

    this._renderDay = this._renderDay.bind(this);
    this.dayStart = this.dayStart.bind(this);
    this.daysMonth = this.daysMonth.bind(this);
    this.labelGenerator = this.labelGenerator.bind(this);
  }

  render() {
    const today = new Date();
    const today_month = today.getMonth() + 1;
    const today_year = today.getFullYear();
    const showmonth =
      this.state.showmonth !== "" ? this.state.showmonth : today_month;
    const showyear =
      this.state.showyear !== "" ? this.state.showyear : today_year;
    return (
      <div className="calender-container">
        <div className="calender">
          <div className="calender-caption">
            <div
              className="month-btn"
              onClick={() => {
                this.monthClick(showyear, showmonth, "pre");
              }}
            >
              <img src={left} alt="" />
            </div>
            {showyear} 年 {showmonth}月
            <div
              className="month-btn month-btn-right"
              onClick={() => {
                this.monthClick(showyear, showmonth, "next");
              }}
            >
              <img src={right} alt="" />
            </div>
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
          <div>{this._renderDay(showmonth, showyear, today)}</div>
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

  labelGenerator(show_month, show_year, today) {
    const today_month = today.getMonth() + 1;
    const today_year = today.getFullYear();
    const today_date = today.getDate();
    let totalDay = this.daysMonth(show_month, show_year);
    let firstDay = this.dayStart(show_month, show_year);
    let labellist = [];
    for (let i = 0; i < firstDay; i++) {
      labellist.push(<div key={i} className="day"></div>);
    }

    // 是否可選
    let gray = [1, 0];
    let black = [1, 0];
    let havetoday = false;
    if (show_year > today_year) {
      black[1] = totalDay;
    } else if (show_year < today_year) {
      gray[1] = totalDay;
    } else {
      if (show_month > today_month) {
        black[1] = totalDay;
      } else if (show_month < today_month) {
        gray[1] = totalDay;
      } else {
        gray[1] = today_date - 1;
        black[0] = today_date + 1;
        black[1] = totalDay;
        havetoday = true;
      }
    }

    // 不可選
    for (let j = gray[0]; j <= gray[1]; j++) {
      let name = "day day-no";
      labellist.push(
        <div key={j + firstDay} className={name}>
          {j}
        </div>
      );
    }
    // 日曆裡有今天
    if (havetoday) {
      let day = new Date(show_year, show_month - 1, today_date);
      let name = "day day-today day-weekend";
      labellist.push(
        <div key={today_date + firstDay} className={name}>
          {today_date}
        </div>
      );
    }
    // 其他
    for (let j = black[0]; j <= black[1]; j++) {
      let day = new Date(show_year, show_month - 1, j);
      let name = "day";

      labellist.push(
        <div key={j + firstDay} className={name}>
          {j}
        </div>
      );
    }

    return labellist;
  }

  _renderDay(show_month, show_year, today) {
    // 日
    let labellist = this.labelGenerator(show_month, show_year, new Date(today));

    // 分週
    let weeklist = [];
    for (var k = 0; k < labellist.length; k += 7) {
      weeklist.push(labellist.slice(k, k + 7));
    }

    // 整月
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

  monthClick(year, month, type) {
    let m = month;
    let y = year;
    if (type === "pre") {
      if (month === 1) {
        m = 12;
        y = year - 1;
      } else {
        m = month - 1;
      }
    } else {
      if (month === 12) {
        m = 1;
        y = year + 1;
      } else {
        m = month + 1;
      }
    }
    this.setState({
      showmonth: m,
      showyear: y,
    });
    // e.preventDefault();
  }
}

export default DayPicker;
