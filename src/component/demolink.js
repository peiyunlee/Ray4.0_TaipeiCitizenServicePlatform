import React from "react";

class DemoLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemoClick = this.handleDemoClick.bind(this);
  }

  handleDemoClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <a href="/#" className={this.props.classname} onClick={this.handleDemoClick}>
        {this.props.text}
      </a>
    );
  }
}

export default DemoLink;
