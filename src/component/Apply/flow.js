import React from "react";

class Flow extends React.Component {
  render() {
    const { light } = this.props;
    const { text } = this.props;
    return (
      <div className="flow">
        <div className="flow-line"></div>
        <div
          className={
            light === 1 ? "flow-circle flow-circle-light" : "flow-circle"
          }
        >
          1<span>簽署同意書</span>
        </div>
        <div
          className={
            light === 2 ? "flow-circle flow-circle-light" : "flow-circle"
          }
        >
          {" "}
          2<span>填寫資料</span>
        </div>
        <div
          className={
            light === 3 ? "flow-circle flow-circle-light" : "flow-circle"
          }
        >
          {" "}
          3<span>確認資料</span>
        </div>
        <div
          className={
            light === 4 ? "flow-circle flow-circle-light" : "flow-circle"
          }
        >
          {" "}
          4<span>{text}</span>
        </div>
      </div>
    );
  }
}

export default Flow;
