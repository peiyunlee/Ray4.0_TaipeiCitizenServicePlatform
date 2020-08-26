import React from "react";

import left from "../assets/images/icon/c-left.png";
import right from "../assets/images/icon/c-right.png";

class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmonth: [],
      showyear: [],
      // selected: props.selected,
      // start: new Date(this.props.pickday[0]),
      // end: new Date(this.props.pickday[1]),
      endhover: new Date("", "", ""),
    };

    this.monthClick = this.monthClick.bind(this);
    this.dayClick = this.dayClick.bind(this);
    this.dayHover = this.dayHover.bind(this);

    this._renderDay = this._renderDay.bind(this);
    this.dayStart = this.dayStart.bind(this);
    this.daysMonth = this.daysMonth.bind(this);
    this.pickname = this.pickname.bind(this);
    this.labelGenerator = this.labelGenerator.bind(this);
  }

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

  dayClick(day, event) {
    const target = event.target;
    if (this.props.selected === 0) {
      //選擇開始
      if (target.className === "day day-today")
        target.className = "day day-today day-start-single";
      else target.className = "day day-start-single";
      // this.setState({
      //   start: day,
      //   selected: 1,
      // });
      this.props.setPickDay([day, ""], 1);
    } else if (this.props.selected === 1) {
      //選擇開始後
      //點大於，選擇結束
      if (this.props.pickday[0] < day) {
        target.className = "day day-end";
        // this.setState({
        //   selected: 2,
        //   end: day,
        // });
        this.props.setPickDay([this.props.pickday[0], day], 2);
      }
      //點小於
      else if (this.props.pickday[0] > day) {
        if (target.className === "day day-today")
          target.className = "day day-today day-start-single";
        else target.className = "day day-start-single";
        // this.setState({
        //   start: day,
        // });
        this.props.setPickDay([day, ""], 1);
      }
      //點等於，取消選擇
      else {
        // this.setState({
        //   selected: 0,
        //   start: new Date("", "", ""),
        // });
        if (target.className === "day day-today")
          target.className = "day day-today";
        else target.className = "day";
        this.props.setPickDay(["", ""], 0);
      }
    } else {
      //已選重新選
      //點等於end，取消選擇
      if (new Date(this.props.pickday[1]).getTime() === day.getTime()) {
        // this.setState({
        //   selected: 1,
        //   end: new Date("", "", ""),
        // });
        this.props.setPickDay([this.props.pickday[0], new Date("", "", "")], 1);
      }
      //點大於，選擇結束
      else if (this.props.pickday[0] < day) {
        target.className = "day day-end";
        // this.setState({
        //   selected: 2,
        //   end: day,
        // });
        this.props.setPickDay([this.props.pickday[0], day], 2);
      }
      //點小於，選擇結束
      else if (this.props.pickday[0] > day) {
        if (target.className === "day day-today")
          target.className = "day day-today day-start-single";
        else target.className = "day day-start-single";
        // this.setState({
        //   start: day,
        // });
        this.props.setPickDay([day, this.props.pickday[1]], 2);
      }
    }
  }

  dayHover(event, day = new Date(3000, 12, 30)) {
    const target = event.target;
    if (this.props.selected === 0) {
      // 未選開始
      if (target.className === "day day-today")
        target.className = "day day-today day-hover";
      else target.className = "day day-hover";
    } else if (this.props.selected === 1) {
      // 已選開始
      // 選到小於
      if (day < this.props.pickday[0]) {
        if (target.className !== "day day-today")
          target.className = "day day-hover";
        else target.className = "day day-today day-hover";
      }
      // 選到大於
      else if (day > this.props.pickday[0]) {
        if (target.className !== "day day-today")
          target.className = "day day-end-hover";
        else target.className = "day day-today day-end-hover";
        this.setState({
          endhover: day,
        });
      }
      // 選到等於
      else {
        if (target.className !== "day day-today day-start")
          target.className = "day day-start-single";
        else target.className = "day day-today day-start-single";
        if (target.className !== "day day-today day-start-single")
          target.className = "day day-start";
        else target.className = "day day-today day-start";
      }
    } else {
      // 已選重新選
      // 選多天
      if (
        new Date(this.props.pickday[0]).getTime() !==
        new Date(this.props.pickday[1]).getTime()
      ) {
        // 選到小於
        if (day < this.props.pickday[0] || day > this.props.pickday[1]) {
          if (target.className !== "day day-today")
            target.className = "day day-hover";
          else target.className = "day day-today day-hover";
        }
      } else {
        // 只選一天
        if (day < this.props.pickday[0]) {
          // 選到小於
          if (target.className !== "day day-today")
            target.className = "day day-hover";
          else target.className = "day day-today day-hover";
        } else if (day > this.props.pickday[0]) {
          // 選到大於
          if (target.className !== "day day-today")
            target.className = "day day-end-hover";
          else target.className = "day day-today day-end-hover";
          this.setState({
            endhover: day,
          });
        } else {
          // 選到等於
          if (target.className !== "day day-today day-start")
            target.className = "day day-start-single";
          else target.className = "day day-today day-start-single";
          this.setState({
            endhover: day,
          });
        }
      }
    }
  }

  render() {
    const today = new Date();
    const today_month = today.getMonth() + 1;
    const today_year = today.getFullYear();
    const showmonth =
      this.state.showmonth.length !== 0
        ? this.state.showmonth
        : [today_month, today_month + 1];
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
          <div>{this._renderDay(showmonth[0], showyear[0], today)}</div>
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
          <div>{this._renderDay(showmonth[1], showyear[1], today)}</div>
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

  pickname(day, name) {
    let result = name;
    if (this.props.selected > 0) {
      //選了開始
      //處理in ( 小於end / 大於start )
      if (
        (day < this.state.endhover || day < this.props.pickday[1]) &&
        day > this.props.pickday[0]
      ) {
        result = "day day-in";
      }
      //處理start
      if (day.getTime() === new Date(this.props.pickday[0]).getTime()) {
        if (this.state.endhover <= this.props.pickday[0]) {
          //endhover等於start
          result = "day day-start-single";
        }
        result = "day day-start";
      } else if (day.getTime() === new Date(this.props.pickday[1]).getTime()) {
        //處理end
        result = "day day-end";
      }
    }
    return result;
  }

  labelGenerator(show_month, show_year, today) {
    // const show_month = this.state.today.getMonth() + 1;
    // const show_year = this.state.today.getFullYear();
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
      let name = this.pickname(day, "day day-today");
      labellist.push(
        <div
          key={today_date + firstDay}
          className={name}
          onMouseOver={(event) => {
            this.dayHover(event, day);
          }}
          onClick={(event) => {
            this.dayClick(day, event);
          }}
        >
          {today_date}
        </div>
      );
    }
    // 其他
    for (let j = black[0]; j <= black[1]; j++) {
      let day = new Date(show_year, show_month - 1, j);
      let name = this.pickname(day, "day");

      labellist.push(
        <div
          key={j + firstDay}
          className={name}
          onMouseOver={(event) => {
            this.dayHover(event, day);
          }}
          onClick={(event) => {
            this.dayClick(day, event);
          }}
        >
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
}

export default Calender;
