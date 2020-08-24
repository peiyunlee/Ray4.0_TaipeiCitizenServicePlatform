import React from "react";
import CaseItem from "./caseitem";
import Tab from "../tab";

import "./caselist.css"

class CaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: props.match.params.listname,
      listType: props.match.params.listtype,
      caselist: [],
      tablist: [],
      activeTab: "",
    };

    this._renderItem = this._renderItem.bind(this);
    this._renderTab = this._renderTab.bind(this);
    this.tagClick = this.tagClick.bind(this);
  }

  componentDidMount() {
    const { caseData, sortData } = this.props;
    const listtype = this.state.listType;
    const listname = this.state.listName;
    let list = [];
    caseData.forEach((i) => {
      const item = i;
      let index = item[listtype].findIndex((t) => t === listname);
      if (index !== -1) {
        item.listname = item[listtype][index];
        item.listtab = item[listtype + "tab"][index];
        list.push(item);
      }
    });
    this.setState({
      caselist: list,
    });

    let index = sortData[listtype].findIndex((item) => item.name === listname);
    let tablist = sortData[listtype][index].tab;
    if (tablist !== undefined) {
      this.setState({
        tablist: tablist,
        activeTab: tablist[0],
      });
    }
  }

  render() {
    return (
      <div className="case-list">
        <h3>{this.state.listName}</h3>
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
    return list;
  }

  _renderItem() {
    let list = [];
    let i = 1;
    this.state.caselist.forEach((item, index) => {
      if (item.listtab === this.state.activeTab) {
        list.push(<CaseItem key={index} number={i} item={item} />);
        i++;
      }
    });
    return list;
  }
}

export default CaseList;
