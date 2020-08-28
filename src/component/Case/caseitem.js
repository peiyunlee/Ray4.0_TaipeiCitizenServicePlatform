import React from "react";
import { Link } from "react-router-dom";

import icon from "../../assets/images/icon/go.png"

class CaseItem extends React.Component {
  constructor(props){
      super(props);

      this._renderApply = this._renderApply.bind(this);
  }

  

  render() {
    const { item,number } = this.props;
    return (
      <tr className={number%2 ? "case-item" : "case-item case-item-gray"}>
        <th>{number}</th>
        <th scope="row"><Link to={"/caseinfo/"+item.index}>{item.name}</Link></th>
        <th scope="row">{item.apply}</th>
        <th scope="row">{item.day}日</th>
        <th scope="row">{this._renderApply()}</th>
      </tr>
    );
  }

  _renderApply(){
    const { item } = this.props;
    let list = [];
    if (item.apply !== "臨櫃") {
          list.push(<Link key={item.index} to="#"><img key={item.index} src={icon} alt=""/></Link>);
    return list;
  }
  }
}

export default CaseItem;
