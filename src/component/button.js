import React from "react";
import { withRouter } from "react-router-dom";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.OnClick = this.OnClick.bind(this);
  }

  render() {
    if (this.props.type === 1)
      return (
        <button
          className={
            this.props.disable ? "button button1-disable" : "button button1"
          }
          onClick={() => this.OnClick(1)}
        >
          {this.props.text}
        </button>
      );
    else if (this.props.type === 2)
      return (
        <button
          value="Submit"
          className="button button2"
          onClick={this.props.onclick}
        >
          {this.props.text}
        </button>
      );
    else if (this.props.type === 3)
      return (
        <button
          className={this.props.classname}
          onClick={() => this.OnClick(3)}
        >
          {this.props.text}
        </button>
      );
    else
      return (
        <button className={this.props.classname}>{this.props.text}</button>
      );
  }

  // btn-1
  OnClick(type) {
    if (type === 1) {
      const { disable } = this.props;
      if (!disable) {
        this.props.setAlert(0, true);
        this.props.setApply();
      }
    } else if (type === 3) {
      this.props.setAlert(this.props.alerttype, false);
      this.props.history.push(this.props.nextpath);
    }
  }
}

export default withRouter(Button);
