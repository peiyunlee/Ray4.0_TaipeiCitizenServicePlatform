import React from "react";
import { withRouter } from "react-router-dom";
import "./button.css";

class Button extends React.Component {
  constructor(props){
    super(props);

    this.OnClick = this.OnClick.bind(this);
  }
  
  render() {
    if(this.props.type === 1)
        return <button className="button button1" onClick={()=>{this.OnClick(this.props.nextPath)}}>{this.props.text}</button>;
    else
        return <button>{this.props.text}</button>;
  }

  OnClick(nextPath){
    this.props.history.push(nextPath);
  }
}

export default withRouter(Button);
