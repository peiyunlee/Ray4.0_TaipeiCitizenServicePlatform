import React from "react";

class CaseList extends React.Component {
  constructor(props) {
    super(props);

    this._renderItem = this._renderItem.bind(this);
  }

  render() {
    const { listName } = this.props;

    return (
      <div>
        <h2>{listName}</h2>
        {this._renderItem()}
      </div>
    );
  }

  _renderItem() {
    const { caseData,listType, listName } = this.props;
    let list = [];
    if (listType === "sort") {
      caseData.forEach((item,index) => {
        if (item.sort.includes(listName))
          list.push(<h3 key={index}>{item.name}</h3>);
      });
    } else if (listType === "organ") {
    }
    return list;
  }
}

export default CaseList;
