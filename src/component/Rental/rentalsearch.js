import React from "react";

class RentalSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [
        { seleted: false, min: 0, max: 30 },
        { seleted: false, min: 30, max: 60 },
        { seleted: false, min: 60, max: 100 },
        { seleted: false, min: 100, max: 200 },
        { seleted: false, min: 200, max: 500 },
        { seleted: false, min: 500, max: 1000 },
        { seleted: false, min: 1000, max: 10000 },
      ],
    };

    this._renderItems = this._renderItems.bind(this);
    this._renderCheckBox_D = this._renderCheckBox_D.bind(this);
    this._renderCheckBox_T = this._renderCheckBox_T.bind(this);
    this._districtChange = this._districtChange.bind(this);
    this._typeChange = this._typeChange.bind(this);
  }

  render() {
    return (
      <div>
        <div>{this._renderCheckBox_D()}</div>
        <div>{this._renderCheckBox_T()}</div>
        <div>{this._renderItems()}</div>
      </div>
    );
  }

  _districtChange(event) {
    const {check} = this.props
    const target = event.target;
    const index = parseInt(target.name);
    let d = check.district
    d[index].checked = !d[index].checked;

    let c;
    c = Object.assign({}, check, {
      district: d,
    });

    this.props.setRentalCheck(c);
  }

  _typeChange(event) {
    const {check} = this.props
    const target = event.target;
    const index = parseInt(target.name);
    let t = check.type
    t[index].checked = !t[index].checked;

    let c;
    c = Object.assign({}, check, {
      type: t,
    });

    this.props.setRentalCheck(c);
  }

  _renderItems() {
    const { result } = this.props;
    let list = [];
    if (result !== []) {
      result.forEach((item, index) => {
        list.push(<h3 key={index}>{item.name}</h3>);
      });
    } else {
      // 找不到
    }
    return list;
  }

  _renderCheckBox_D() {
    const { check } = this.props;
    let list = [];
    check.district.forEach((item,index) => {
      list.push(
        <label key={index}>
          <input
            key={index}
            name={index}
            type="checkbox"
            checked={check.district[index].checked}
            onChange={this._districtChange}
          />
          {check.district[index].name}
        </label>
      );
    });
    return list;
  }

  _renderCheckBox_T() {
    const { check } = this.props;
    let list = [];
    check.type.forEach((item,index) => {
      list.push(
        <label key={index}>
          <input
            key={index}
            name={index}
            type="checkbox"
            checked={check.type[index].checked}
            onChange={this._typeChange}
          />
          {check.type[index].name}
        </label>
      );
    });
    return list;
  }
}

export default RentalSearch;
