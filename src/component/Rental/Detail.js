import React from "react";

class VenueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._renderText = this._renderText.bind(this);
  }
  render() {
    const { item } = this.props;
    // const a = Date.parse(item.opentime); 
    // const b = Date.parse('22:09:30 GMT+0800'); 
    return (
      <div>
        <div>{item.name}</div>
        <ul>
          <li>人數：{item.number} 人</li>
          <li>費用：{item.costcontent}</li>
          <li>大小：{item.size}</li>
          <li>使用規範：請參考附件</li>
          <li
            dangerouslySetInnerHTML={this._renderText("承辦單位資訊<br />" + item.organizer)}
          ></li>
        </ul>
      </div>
    );
  }

  _renderText(text) {
    return { __html: text };
  }
}

export default VenueDetail;
