import React from "react";
import "./caseinfo.css";

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
    if(item.download){
      download = <div>
      <div className="title">檔案下載</div>
      <div>
        {this._renderFile(item.download)}
      </div>
    </div>
    }

    return (
      <div className="caseinfo">
        <h3>{item.name}</h3>
        <div>
          <div className="title">申辦說明</div>
          <div>
            <div className="p-title">服務說明</div>
            <p dangerouslySetInnerHTML={this._renderText(item.info)}></p>
            <div className="p-title">處理天數</div>
            <p dangerouslySetInnerHTML={this._renderText(item.day+"日")}></p>
          </div>
        </div>
        <div>
          <div className="title">申辦方式</div>
          <div>
            <div className="p-title">應備文件</div>
            <p dangerouslySetInnerHTML={this._renderText(item.file)}></p>
            <div className="p-title">臨櫃辦理</div>
            <p dangerouslySetInnerHTML={this._renderText(item.noonline)}></p>
          </div>
        </div>
          <div>
            {download}
          </div>
        <button className="fix">線上申辦</button>
      </div>
    );
  }
  _renderText(text) {
    return { __html: text };
  }

  _renderFile(download){
    let list=[];
    download.forEach((item,index)=>{
      list.push(<a href="/" key={index}>{item}</a>)
    })
    return list;
  }
}

export default CaseInfo;
