import React from "react";
import { withRouter } from "react-router";

class StepThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._renderTime = this._renderTime.bind(this);
  }

  render() {
    const { info, selectedResult } = this.props;
    return (
      <div className="step step-34">
        <div className="content-title">請確認您填寫的資料有無錯誤</div>
        <section>
          <div className="content-bg">
            <div className="content">
              {selectedResult.name}
              <div className="content-top">
                <div className="content-time">
                  租借時間：<div>{this._renderTime()}</div>
                </div>
                費用：{selectedResult.cost + "元"}
              </div>
              <div className="content-line"></div>
              <div className="content-bottom">
                申請人：{info.name}
                <br />
                身分證字號：{info.number}
                <br />
                電話：{info.phone}
                <br />
                email：{info.email}
                <br />
                地址：{info.address}
              </div>
            </div>
          </div>
        </section>
        <div className="step-btn-wrapper">
          <button
            className="step-btn step-btn-left"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            上一步
          </button>
          <button
            className="step-btn step-btn-right"
            onClick={() => {
              this.props.setAlert(1,true);
            }}
          >
            確認送出
          </button>
        </div>
      </div>
    );
  }

  _renderTime() {
    const { time } = this.props.selectedResult;
    let list = [];
    time.forEach((item, index) => {
      list.push(
        <div key={"time-item" + index} className="time-item">
          <div className="time-item-p">{item.day}</div>
          <div className="time-item-p">{item.time}</div>
        </div>
      );
    });
    return list;
  }
}

export default withRouter(StepThree);
