import React from "react";
import { withRouter } from "react-router";

import "./caseinfo.css";

import DemoLink from "../demolink";

class CaseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._renderText = this._renderText.bind(this);
    this._renderFile = this._renderFile.bind(this);
  }
  render() {
    const { item } = this.props;
    let download = "";
    if (item.download) {
      download = (
        <div className="card">
          <div className="card-title">檔案下載</div>
          <div className="card-p-wrapper">
            {this._renderFile(item.download)}
          </div>
        </div>
      );
    }

    return (
      <div className="caseinfo">
        <h3>{item.name}</h3>
        <div className="card">
          <div className="card-title">服務資訊</div>
          <div className="card-p-wrapper">
            <div className="card-p-title">服務說明</div>
            {item.info !== undefined ? (<p dangerouslySetInnerHTML={this._renderText(item.info)}></p>) : ""}
          </div>
        </div>
        <div className="card">
          <div className="card-title">申辦方式</div>
          <div className="card-p-wrapper">
            <div className="card-p-title">應備文件</div>
            {item.file !== undefined ? (<p dangerouslySetInnerHTML={this._renderText(item.file)}></p>) : ""}
            <div className="card-p-title">處理天數</div>
            {item.day !== undefined ? (<p dangerouslySetInnerHTML={this._renderText(item.day)}></p>) : ""}
            <div className="card-p-title">臨櫃辦理</div>
            {item.noonline !== undefined ? (<p dangerouslySetInnerHTML={this._renderText(item.noonline)}></p>) : ""}
          </div>
        </div>
        {download !== undefined ? <div>{download}</div> : ""}
        <button className="caseinfo-btn-fixed"
          onClick={() => {
            this.props.history.push("/apply/case-step1");
          }}>我要線上申辦</button>
      </div>
    );
  }
  _renderText(text) {
    return { __html: text };
  }

  _renderFile(download) {
    let list = [];
    download.forEach((item, index) => {
      list.push(
        <DemoLink classname="card-file-item" key={index} text={item}></DemoLink>
      );
    });
    return list;
  }
}

export default  withRouter(CaseInfo);
