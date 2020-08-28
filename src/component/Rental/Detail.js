import React from "react";
import DemoLink from "../demolink";

import "./detail.css";
import DayPicker from "./calender/daypicker";
import Button from "../button";

class VenueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [
        this.props.item.img,
        "https://blog.xuite.net/hsu042/twblog1/468696142/cover600.jpg",
        "https://service.gov.taipei/RAWebFiles/rental/3a9fcb5f04e4/20190325/e54a345bde5a46dc.jpg",
      ],
      showimg: 0,
      btndisable: true,
    };

    this._renderText = this._renderText.bind(this);
    this.setShowImg = this.setShowImg.bind(this);
    this.setBtnEnable = this.setBtnEnable.bind(this)
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
            <img
              className={
                this.state.showimg === 0
                  ? "venue-img venue-img-s venue-img-active"
                  : "venue-img venue-img-s"
              }
              src={this.state.img[0]}
              alt=""
              onClick={() => this.setShowImg(0)}
            />
            <img
              className={
                this.state.showimg === 1
                  ? "venue-img venue-img-s venue-img-active"
                  : "venue-img venue-img-s"
              }
              src={this.state.img[1]}
              alt=""
              onClick={() => this.setShowImg(1)}
            />
            <img
              className={
                this.state.showimg === 2
                  ? "venue-img venue-img-s venue-img-active"
                  : "venue-img venue-img-s"
              }
              src={this.state.img[2]}
              alt=""
              onClick={() => this.setShowImg(2)}
            />
          </div>
          <div className="info-wrapper">
            <h3>{item.name}</h3>
            <ul>
              <li>人數：{item.number} 人</li>
              <li>費用：{item.costcontent}</li>
              {item.size !== undefined && <li>大小：{item.size}</li>}
              {item.device !== undefined && <li>設備：{item.device}</li>}
              {item.traffic !== undefined && (
                <li
                  dangerouslySetInnerHTML={this._renderText(
                    "交通方式<br />" + item.traffic
                  )}
                ></li>
              )}
              <li>
                其他相關資訊
                <div>
                  <DemoLink text="場地使用規範"></DemoLink>、
                  <DemoLink text="場地平面圖"></DemoLink>
                </div>
              </li>
              <li
                dangerouslySetInnerHTML={this._renderText(
                  "承辦單位資訊<br />" + item.organizer
                )}
              ></li>
            </ul>
          </div>
        </section>
        <section className="venue-detail-daypicker">
          <DayPicker setBtnEnable={this.setBtnEnable}/>
        </section>
        <Button disable={this.state.btndisable} type={1} nextPath="/apply/step1" text="開始租借" />
      </div>
    );
  }

  setBtnEnable(type){
    this.setState({
      btndisable:!type
    })
  }

  _renderText(text) {
    return { __html: text };
  }

  setShowImg(index) {
    this.setState({
      showimg: index,
    });
  }
}

export default VenueDetail;
