import React from "react";
import { withRouter } from "react-router";

class StepFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultorganizer:
        "聯絡人：總務處 秦xx<br />電話：276729xx轉630<br />地址：台北市松山區八德路四段xxx號",
    };
    this._renderTime = this._renderTime.bind(this);
    this._renderHTMLText = this._renderHTMLText.bind(this);
  }

  render() {
    const { selectedResult } = this.props;
    return (
      <div className="step step-34 step-4">
        <div className="content-title">請確認您填寫的資料有無錯誤</div>
        <section>
          <div className="content-bg">
            <div className="content">
              案件編號：202008504408
              <span className="content-alert">
                請記下您的案件編號，以利之後確認場地借用狀態
              </span>
              <div className="content-top">
                場地：{selectedResult.name}
                <div className="content-time">
                  租借時間：<div>{this._renderTime()}</div>
                </div>
                費用：{selectedResult.cost + "元"}
              </div>
              <div className="content-line"></div>
              <div className="content-bottom">
                若有其他疑問，請聯絡承辦單位
                <br />
                <br />
                <span
                  dangerouslySetInnerHTML={this._renderHTMLText(`承辦單位資訊<br />${
                    selectedResult.organizer !== undefined
                      ? selectedResult.organizer
                      : this.state.defaultorganizer}`
                  )}
                ></span>
              </div>
            </div>
          </div>
        </section>
        <button className="step-btn step-btn-right">查詢案件進度</button>
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

  _renderHTMLText(text) {
    return {
      __html: text,
    };
  }
}

export default withRouter(StepFour);
