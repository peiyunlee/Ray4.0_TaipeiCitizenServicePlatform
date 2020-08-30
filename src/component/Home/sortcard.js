import React from "react";
import { Link } from "react-router-dom";

import icon_0 from "../../assets/images/sort/生育托兒.png";
import icon_1 from "../../assets/images/sort/醫療照護.png";
import icon_2 from "../../assets/images/sort/安全健康.png";
import icon_3 from "../../assets/images/sort/殯葬禮儀.png";
import icon_4 from "../../assets/images/sort/綜合申請.png";
import icon_5 from "../../assets/images/sort/戶政相關.png";
import icon_6 from "../../assets/images/sort/社會關懷.png";
import icon_7 from "../../assets/images/sort/補助獎勵.png";
import icon_8 from "../../assets/images/sort/就業扶植.png";
import icon_9 from "../../assets/images/sort/產業相關.png";
import icon_10 from "../../assets/images/sort/勞資權益.png";
import icon_11 from "../../assets/images/sort/稅務相關.png";
import icon_12 from "../../assets/images/sort/教育學習.png";
import icon_13 from "../../assets/images/sort/住屋相關.png";
import icon_14 from "../../assets/images/sort/休閒相關.png";
import icon_15 from "../../assets/images/sort/宗教相關.png";
import icon_16 from "../../assets/images/sort/動物醫護.png";
import icon_17 from "../../assets/images/sort/環境保護.png";
import icon_18 from "../../assets/images/sort/交通相關.png";
import icon_19 from "../../assets/images/sort/公共工程.png";

class SortCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { list, listtype, index } = this.props;
    const icon_list = [
      icon_0,
      icon_1,
      icon_2,
      icon_3,
      icon_4,
      icon_5,
      icon_6,
      icon_7,
      icon_8,
      icon_9,
      icon_10,
      icon_11,
      icon_12,
      icon_13,
      icon_14,
      icon_15,
      icon_16,
      icon_17,
      icon_18,
      icon_19,
    ];
    if (listtype === "theme") {
      return (
        <Link
          className="card card-theme"
          to={"/caselist/" + listtype + "/" + list.name}
        >
          <img className="card-theme-icon" src={icon_list[index]} alt="" />
          <h3>{list.name}</h3>
          <div className="card-line"></div>
          <p>{list.info}</p>
        </Link>
      );
    } else {
      return (
        <Link
          className="card card-organ"
          to={"/caselist/" + listtype + "/" + list.name}
        >
          <h3>{list.name}</h3>
        </Link>
      );
    }
  }
}

export default SortCard;
