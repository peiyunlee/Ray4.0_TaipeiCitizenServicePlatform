import React from "react";

import left from "../../../assets/images/icon/daypicker-left.png";
import right from "../../../assets/images/icon/daypicker-right.png";
import cross from "../../../assets/images/icon/cross-small.png";

class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmonth: "",
      showyear: "",
      pickedday: false,
      day: new Date("", "", ""),
      timelabel: [
        "08:00-10:00",
        "10:00-12:00",
        "12:00-14:00",
        "14:00-16:00",
        "16:00-18:00",
        "18:00-20:00",
        "20:00-22:00",
      ],
      timechecked: [false, false, false, false, false, false, false],
      selected: [],
    };
    this.monthClick = this.monthClick.bind(this);
    this.dayClick = this.dayClick.bind(this);

    this._renderDay = this._renderDay.bind(this);
    this.dayStart = this.dayStart.bind(this);
    this.daysMonth = this.daysMonth.bind(this);
    this.labelGenerator = this.labelGenerator.bind(this);
    this.pickName = this.pickName.bind(this);

    this._renderTime = this._renderTime.bind(this);
    this._handleTimeInput = this._handleTimeInput.bind(this);

    this._renderTag = this._renderTag.bind(this);
    this._handleTagInput = this._handleTagInput.bind(this);
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
      <div className="daypicker-container">
        <div className="daypicker-title">請選擇租借日期</div>
        <div className="daypicker">
          <div className="daypicker-caption">
            <div
              className="month-btn"
              onClick={() => {
                this.monthClick(showyear, showmonth, "pre");
              }}
            >
              <img src={left} alt="" />
            </div>
            {showyear} 年 {showmonth} 月
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
            <div className="week-label">
              <span className="day-weekend">日</span>
            </div>
            <div className="week-label">一</div>
            <div className="week-label">二</div>
            <div className="week-label">三</div>
            <div className="week-label">四</div>
            <div className="week-label">五</div>
            <div className="week-label">
              <span className="day-weekend">六</span>
            </div>
          </div>
          <div>{this._renderDay(showmonth, showyear, today)}</div>
        </div>
        <div className="daypicker-title">請選擇租借時間</div>
        <div className="timepicker-info">＊時段可複選</div>
        <div className="timepicker">{this._renderTime()}</div>
        <div className="daypicker-title">確認租借時間</div>
        <div className="timetaglist">{this._renderTag()}</div>
      </div>
    );
  }

  //   funciton

  _handleTagInput(item, index) {
    let arr = this.state.selected;
    arr.splice(index, 1);
    this.setState({
      selected: arr,
    });
    this.props.setBtnEnable(arr.length !== 0);
    console.log(arr.length !== 0)
    if (this.state.day.getTime() === item.day.getTime()) {
      let timechecked = this.state.timechecked;
      timechecked[item.selected] = false;
      this.setState({
        timechecked: timechecked,
      });
    }
  }

  _renderTag() {
    let list = [];
    this.state.selected.forEach((item, index) => {
      const year = item.day.getFullYear();
      const month = item.day.getMonth();
      const date = item.day.getDate();
      const labeltext =
        year +
        "/" +
        month +
        "/" +
        date +
        " " +
        this.state.timelabel[item.selected];
      list.push(
        <div className="tag-item" key={index}>
          {labeltext}
          <img
            key={index}
            src={cross}
            alt=""
            onClick={() => this._handleTagInput(item, index)}
          />
        </div>
      );
    });
    return list;
  }

  _renderTime() {
    let list = [];
    if (this.state.pickedday) {
      this.state.timelabel.forEach((item, index) => {
        list.push(
          <label
            key={index}
            className={this.state.timechecked[index] ? "label-active" : ""}
          >
            <input
              key={index}
              name={index}
              type="checkbox"
              // checked={item.checked}
              onChange={this._handleTimeInput}
            />
            {item}
          </label>
        );
      });
    }
    return list;
  }

  _handleTimeInput(e) {
    let arr = this.state.timechecked;
    const index = e.target.name;
    arr[index] = !arr[index];
    this.setState({
      timechecked: arr,
    });

    //選取tag
    let result = this.state.selected;
    if (arr[index]) {
      result.push({ day: this.state.day, selected: index });
    } else {
      const findindex = result.findIndex(
        (element) =>
          element.day.getTime() === this.state.day.getTime() &&
          element.selected === index
      );
      if (findindex !== -1) {
        result.splice(findindex, 1);
      }
    }
    result.sort(function (a, b) {
      var dayA = a.day; // ignore upper and lowercase
      var dayB = b.day; // ignore upper and lowercase
      if (dayA < dayB) {
        return -1;
      }
      if (dayA > dayB) {
        return 1;
      }
      var selectedA = a.selected; // ignore upper and lowercase
      var selectedB = b.selected; // ignore upper and lowercase
      return selectedA - selectedB;
    });

    this.setState({ selected: result });
    this.props.setBtnEnable(result.length !== 0);
    console.log(result.length !== 0)
  }

  pickName(day, name) {
    let result = name;
    if (day.getTime() === this.state.day.getTime()) {
      result = result + " day-default-active";
    }
    return result;
  }

  dayClick(day) {
    if (this.state.pickedday && this.state.day.getTime() === day.getTime()) {
      this.setState({
        day: new Date("", "", ""),
        pickedday: false,
      });
    } else {
      this.setState({
        day: day,
        pickedday: true,
      });

      //讀取時間按鈕狀態
      let timeresult = this.state.selected.filter(
        (item) => item.day.getTime() === day.getTime()
      );
      let arr = [false, false, false, false, false, false, false];
      timeresult.forEach((item) => {
        arr[item.selected] = true;
      });
      this.setState({
        timechecked: arr,
      });
    }
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
      let name = "day day-default day-today";
      name = this.pickName(day, name);
      if (day.getDay() === 0 || day.getDay() === 6) {
        labellist.push(
          <div
            key={today_date + firstDay}
            className={name}
            onClick={() => {
              this.dayClick(day);
            }}
          >
            <span className="day-weekend">{today_date}</span>
          </div>
        );
      } else {
        labellist.push(
          <div
            key={today_date + firstDay}
            className={name}
            onClick={() => {
              this.dayClick(day);
            }}
          >
            {today_date}
          </div>
        );
      }
    }
    // 其他
    for (let j = black[0]; j <= black[1]; j++) {
      let day = new Date(show_year, show_month - 1, j);
      let name = "day day-default";
      name = this.pickName(day, name);
      if (day.getDay() === 0 || day.getDay() === 6) {
        labellist.push(
          <div
            key={j + firstDay}
            className={name}
            onClick={() => {
              this.dayClick(day);
            }}
          >
            <span className="day-weekend">{j}</span>
          </div>
        );
      } else {
        labellist.push(
          <div
            key={j + firstDay}
            className={name}
            onClick={() => {
              this.dayClick(day);
            }}
          >
            {j}
          </div>
        );
      }
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
