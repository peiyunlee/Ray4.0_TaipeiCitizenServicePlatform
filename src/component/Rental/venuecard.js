import React from "react";
import { Link } from "react-router-dom";
// import Button from "../button";
import "./venuecard.css";

// import DemoLink from "../demolink";

class VenueCard extends React.Component {
  constructor(props) {
    super(props);

    this._renderType = this._renderType.bind(this);
  }
  render() {
    const { item } = this.props;
    return (
      <Link to={"/venuedetail/" + item.index} className="venue-card" onClick={()=>this.props.setStateValue([],"selected")}>
        <div className="district">{item.district}</div>
        <img src={item.img != undefined ? item.img[0] : "https://service.gov.taipei/RAWebFiles/rental/41ab0acc761c/20190614/a8e76619770a4cb0.jpg"} alt="" className="img" />
        <div className="info">
          <h4>{item.name}</h4>
          <div className="type-wrapper">{this._renderType(item.type)}</div>
          <div className="other">價格：{item.cost} 元 / hr</div>
          <div className="other">設備：{item.device}</div>
          <div className="other">容納人數：{item.number} 人</div>
        </div>
      </Link>
    );
  }

  _renderType(type) {
    let t = [];
    type.forEach((item) =>
      t.push(
        <div className="type" key={item}>
          {item}
        </div>
      )
    );
    return t;
  }
}

export default VenueCard;


  /* <Button
  className="button"
  type={1}
  nextPath={"/venuedetail/" + item.index}
  text={"線上租借"}
/> */

