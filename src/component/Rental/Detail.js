import React from "react";
import DemoLink from "../demolink";

import "./detail.css";
import DayPicker from "./calender/daypicker";
import Button from "../button";

class VenueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img:
        // [
        this.props.item.img,
      // "https://blog.xuite.net/hsu042/twblog1/468696142/cover600.jpg",
      // "https://service.gov.taipei/RAWebFiles/rental/3a9fcb5f04e4/20190325/e54a345bde5a46dc.jpg",
      // ],
      showimg: 0,
      btndisable: this.props.selected.length === 0 ? true : false,
      selected: props.selected,
    };

    this._renderText = this._renderText.bind(this);
    this.setBtnEnable = this.setBtnEnable.bind(this);

    this.setStateValue = this.setStateValue.bind(this);
    this.setApply = this.setApply.bind(this);
  }

  componentDidUpdate(prevState) {
    if (this.state.selected !== prevState.selected) {
      this.props.setStateValue(this.state.selected, "selected");
    }
  }

  render() {
    const { item } = this.props;
    // const a = Date.parse(item.opentime);
    // const b = Date.parse('22:09:30 GMT+0800');
    return (
      <div className="venue-detail">
        <section className="venue-detail-info">
          <div className="img-wrapper">
            <img
              className="venue-img venue-img-l"
              src={this.state.img[this.state.showimg]}
              alt=""
            />
            {this.state.img[0] !== undefined ? (
              <img
                className={
                  this.state.showimg === 0
                    ? "venue-img venue-img-s venue-img-active"
                    : "venue-img venue-img-s"
                }
                src={this.state.img[0]}
                alt=""
                onClick={() => this.setStateValue(0, "showimg")}
              />) : ""}
            {this.state.img[1] !== undefined ? (
              <img
                className={
                  this.state.showimg === 1
                    ? "venue-img venue-img-s venue-img-active"
                    : "venue-img venue-img-s"
                }
                src={this.state.img[1]}
                alt=""
                onClick={() => this.setStateValue(1, "showimg")}
              />) : ""}
            {this.state.img[2] !== undefined ? (
              <img
                className={
                  this.state.showimg === 2
                    ? "venue-img venue-img-s venue-img-active"
                    : "venue-img venue-img-s"
                }
                src={this.state.img[2]}
                alt=""
                onClick={() => this.setStateValue(2, "showimg")}
              />) : ""}
          </div>
          <div className="info-wrapper">
            <h3>{item.name}</h3>
            <ul>
              {item.size !== undefined && <li>人數：{item.number} 人</li>}
              {item.size !== undefined && <li>費用：{item.costcontent}</li>}
              {item.size !== undefined && <li>大小：{item.size}</li>}
              {item.device !== undefined && <li>設備：{item.device}</li>}
              {item.traffic !== undefined && (
                <li
                  dangerouslySetInnerHTML={this._renderText(
                    "交通方式<br />" + item.traffic
                  )}
                ></li>
              )}
              {item.organizer !== undefined && (
                <li>
                  其他相關資訊
                  <div className="other-wrapper">
                    <DemoLink text="場地使用規範"></DemoLink>、
                    <DemoLink text="場地平面圖"></DemoLink>
                  </div>
                </li>
              )}
              {item.organizer !== undefined && (
                <li
                  dangerouslySetInnerHTML={this._renderText(
                    "承辦單位資訊<br />" + item.organizer
                  )}
                ></li>
              )}
            </ul>
          </div>
        </section>
        <section className="venue-detail-daypicker">
          <DayPicker
            selected={this.state.selected}
            setBtnEnable={this.setBtnEnable}
            setStateValue={this.setStateValue}
          />
        </section>
        <Button
          disable={this.state.btndisable}
          type={1}
          nextPath="/apply/step1"
          text="開始租借"
          setApply={this.setApply}
          selected={this.state.selected}
          setAlert={this.props.setAlert}
        />
      </div>
    );
  }

  setStateValue(v, name) {
    this.setState({
      [name]: v,
    });
  }

  setBtnEnable(type) {
    this.setState({
      btndisable: !type,
    });
  }

  _renderText(text) {
    return { __html: text };
  }

  setApply() {
    const { item } = this.props;
    const name = item.name;

    const selected = this.state.selected;
    let result = [];
    let before_day = "";
    let before_time = "";
    let cost = selected.length * item.cost * 2;

    const labelGenerator = (start, end) => {
      let _start = start * 2 + 8;
      let _end = end * 2 + 10;
      if (_start < 10) {
        _start = "0" + _start;
      }
      if (_end < 10) {
        _end = "0" + _end;
      }
      return _start + ":00-" + _end + ":00";
    };

    selected.forEach((item) => {
      const year = item.day.getFullYear();
      const month = item.day.getMonth() + 1;
      const date = item.day.getDate();
      const day = item.day.getDay();
      const day_list = ['(日)', '(一)', '(二)', '(三)', '(四)', '(五)', '(六)'];
      const current = year + "/" + month + "/" + date + day_list[day];
      if (before_day !== current) {
        //日期不等於上一個
        before_day = current;
        before_time = item.selected;
        result.push({
          day: current,
          start: item.selected,
          end: item.selected,
          time: labelGenerator(item.selected, item.selected),
        });
      } else {
        //日期等於上一個
        if (before_time == item.selected - 1) {
          //時間延續
          before_time = item.selected;
          result[result.length - 1].end = item.selected;
          result[result.length - 1].time = labelGenerator(
            result[result.length - 1].start,
            item.selected
          );
        } else {
          before_time = item.selected;
          result.push({
            day: current,
            start: item.selected,
            end: item.selected,
            time: labelGenerator(item.selected, item.selected),
          });
        }
      }
    });

    let o = { name: name, time: result, cost: cost };
    this.props.setStateValue(o, "selectedResult");
  }
}

export default VenueDetail;
