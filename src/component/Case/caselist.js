import React from "react";

import "./caselist.css";

import CaseItem from "./caseitem";
import Tab from "../tab";

class CaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // listName: props.match.params.listname,
      // listType: props.match.params.listtype,
      caselist: [],
      tablist: [],
      activeTab: "",
    };

    this._renderItem = this._renderItem.bind(this);
    this._renderTab = this._renderTab.bind(this);
    this.tagClick = this.tagClick.bind(this);
    this.tagGenerator = this.tagGenerator.bind(this);
  }

  componentDidMount() {
    this.tagGenerator();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.listName !== prevProps.listName) this.tagGenerator();
  }

  tagGenerator() {
    const { caseData, sortData } = this.props;
    const listtype = this.props.listType;
    const listname = this.props.listName;
    let list = [];
    caseData.forEach((i) => {
      const item = i;
      let index;
      index = item[listtype].findIndex((t) => t === listname);
      if (index !== -1) {
        item.listname = item[listtype][index];
        item.listtab = item[listtype + "tab"][index];
        list.push(item);
      }
    });
    this.setState({
      caselist: list,
    });

    let tablist = [];
    let index = sortData[listtype].findIndex((item) => item.name === listname);
    tablist = sortData[listtype][index].tab;
    if (tablist !== undefined) {
      this.setState({
        tablist: tablist,
        activeTab: tablist[0],
      });
    } else {
      this.setState({
        tablist: [],
        activeTab: [],
      });
    }
  }

  render() {
    return (
      <div className="case-list">
        <h3>{this.props.listName}</h3>
        <table>
          <caption>{this._renderTab()}</caption>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th scope="col">申辦案件</th>
              <th scope="col">申辦方式</th>
              <th scope="col">處理天數</th>
              <th scope="col">線上申辦</th>
            </tr>
          </thead>
          <tbody>{this._renderItem()}</tbody>
        </table>
      </div>
    );
  }

  tagClick(label) {
    this.setState({ activeTab: label });
  }

  _renderTab() {
    let list = [];
    if (this.state.tablist !== undefined) {
      this.state.tablist.forEach((tab) => {
        list.push(
          <Tab
            label={tab}
            key={tab}
            activeTab={this.state.activeTab}
            tagClick={this.tagClick}
          />
        );
      });
    }
    return list;
  }

  _renderItem() {
    let list = [];
    let i = 1;
    
    this.state.caselist.forEach((item, index) => {
      if (
        item.listtab === this.state.activeTab ||
        this.state.activeTab.length === 0
      ) {
        list.push(<CaseItem key={index} number={i} item={item} />);
        i++;
      }
    });
    return list;
  }
}

export default CaseList;
