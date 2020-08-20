import React from "react";
import SearchBar from "./search";
import RentalFilter from "./filter";

class RentalResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._renderItems = this._renderItems.bind(this);
    this._costSort = this._costSort.bind(this);
    this._numberSort = this._numberSort.bind(this);
  }

  render() {
    return (
      <div>
        <SearchBar setRentalSearch={this.props.setRentalSearch} />
        <RentalFilter
          filter={this.props.filter}
          setRentalFilter={this.props.setRentalFilter}
        />
        <div>找到{this.props.result.length}筆結果</div>
        <div>
          <label>
            <input
              name="價格"
              type="checkbox"
              onChange={() => {
                this._costSort(0);
              }}
            />
            價格由低到高
          </label>
          <label>
            <input
              name="價格"
              type="checkbox"
              onChange={() => {
                this._costSort(1);
              }}
            />
            價格由高到低
          </label>
        </div>
        <div>
          <label>
            <input
              name="人數"
              type="checkbox"
              onChange={() => {
                this._numberSort(0);
              }}
            />
            人數由低到高
          </label>
          <label>
            <input
              name="人數"
              type="checkbox"
              onChange={() => {
                this._numberSort(1);
              }}
            />
            人數由高到低
          </label>
        </div>
        <div>{this._renderItems()}</div>
      </div>
    );
  }

  _numberSort(type) {
    const { result } = this.props;
    let r = result;
    if (!type) {
      r.sort((a, b) => {
        return a.number - b.number;
      });
    } else {
      r.sort((a, b) => {
        return b.number - a.number;
      });
    }
    this.props.setRentalResult(r);
  }

  _costSort(type) {
    const { result } = this.props;
    let r = result;
    if (!type) {
      r.sort((a, b) => {
        return a.cost - b.cost;
      });
    } else {
      r.sort((a, b) => {
        return b.cost - a.cost;
      });
    }
    this.props.setRentalResult(r);
  }

  _renderItems() {
    const { result } = this.props;
    let list = [];
    if (result !== []) {
      result.forEach((item, index) => {
        let t = [];
        item.type.forEach((titem) => t.push(<p key={titem}>{titem}</p>));
        list.push(
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.district}</p>
            <div>
              {t}
              <p>{item.number}</p>
            </div>
            <p>{item.cost}</p>
          </div>
        );
      });
    } else {
      // 找不到
    }
    return list;
  }
}

export default RentalResult;
