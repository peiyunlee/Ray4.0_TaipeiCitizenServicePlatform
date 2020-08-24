import React from "react";

import "./tab.css"


class Tab extends React.Component {
  constructor(props) {
    super(props);

    this._tagClick = this._tagClick.bind(this);
  }

  render() {
    const {label,activeTab} = this.props

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
        <button name="label" className={className} onClick={this._tagClick}>{label}</button>
    );
  }

  _tagClick() {
    const {label,tagClick} = this.props
    tagClick(label);
  }
}

export default Tab;
