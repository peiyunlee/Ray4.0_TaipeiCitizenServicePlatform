import React from "react";

class RentalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._renderTime = this._renderTime.bind(this);
  }

  render() {
    const { selectedResult } = this.props;
    return (
      <div className="rental-info">
        <div className="rental-info-list">
          <div className="rental-info-item">
            租借場地：{selectedResult.name}
          </div>
          <div className="rental-info-item">
            租借時間：<div>{this._renderTime()}</div>
          </div>
          <div className="rental-info-item">
            租借費用：{selectedResult.cost+"元"}
          </div>
        </div>
      </div>
    );
  }

  _renderTime() {
    const { time } = this.props.selectedResult;
    let list = [];
    time.forEach((item,index) => {
      list.push(
        <div key={"time-list"+index}className="time-list">
          <div>{item.day}</div>
          <div>{item.time}</div>
        </div>
      );
    });
    return list;
  }
}

export default RentalInfo;
