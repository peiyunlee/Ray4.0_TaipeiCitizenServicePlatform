import React from "react";
import Button from "../button";
import "./venuecard.css";

class VenueCard extends React.Component {
  constructor(props) {
    super(props);
    
    this._renderType = this._renderType.bind(this);
  }
  render() {
    const { item } = this.props;
    return (
      <div className="venue-card">
        <div className="district">{item.district}</div>
        <div className="img"></div>
        <div className="info">
          <h4>{item.name}</h4>
          <div className="flex">
            {this._renderType(item.type)}
          </div>
          <div className="other">
            <div className="icon"></div>
            {item.number} 人
          </div>
          <div className="other">
            <div className="icon"></div>
            {item.cost} 元 / hr
          </div>
          <div className="other">
            <div className="icon"></div>
            {item.device}
          </div>
        </div>
        <Button
          className="button"
          type={1}
          nextPath={"/venuedetail/" + item.index}
          text={"線上租借"}
        />
      </div>
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
