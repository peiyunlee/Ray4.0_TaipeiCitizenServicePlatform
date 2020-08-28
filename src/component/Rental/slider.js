import React from "react";
import { RangeSlider } from "rsuite";

class TimeSlider extends React.Component {
  constructor(props) {
    super(props);

    this._renderTime = this._renderTime.bind(this);
  }


  _renderTime() {
    const labels = [
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    let list = [];
    labels.forEach((item, index) => {
      const style = {
        left: index * 22.5,
      };
      if (this.props.timerange[0] === index || this.props.timerange[1] === index) {
        list.push(
          <div
            style={style}
            className="title-item"
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        );
      } else {
        list.push(
          <div
            style={style}
            className="title-item title-item-hide"
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        );
      }
    });
    return list;
  }

  render() {
    const { timerange } = this.props;
    return (
      <div className="custom-range-slider">
        <div className="title-wrapper">{this._renderTime()}</div>
        <RangeSlider
          progress
          min={0}
          max={14}
          value={timerange}
          tooltip={false}
          onChange={(v) => {
            this.props.setTimeRange(v);
          }}
        />
      </div>
    );
  }
}

export default TimeSlider;
