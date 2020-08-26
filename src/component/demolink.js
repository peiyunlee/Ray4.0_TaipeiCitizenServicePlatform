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
      <a href="/#" onClick={this.handleDemoClick}>
        {this.props.text}
      </a>
    );
  }
}

export default DemoLink;
