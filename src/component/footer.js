import React from "react";
import "./footer.css";

import DemoLink from "./demolink";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <DemoLink text="網站導覽" />
          </li>
          <li>
            <DemoLink text="台北卡" />
          </li>
          <li>
            <DemoLink text="政府網站資料開放宣言" />
          </li>
          <li>
            <DemoLink text="隱私權及資訊安全政策" />
          </li>
        </ul>
        <p>
          地址：11008臺北市信義區市府路1號 Tel: 02-27208889(8585)
          臺北市民免付費當家熱線1999(公共電話，放心講及第二類電信除外)
        </p>
      </footer>
    );
  }
}

export default Footer;
