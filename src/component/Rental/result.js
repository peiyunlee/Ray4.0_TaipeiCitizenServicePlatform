import React from "react";
import SearchBar from "./searchbar/search2";
import RentalFilter from "./filter";
import VenueCard from "./venuecard";
import TimeSlider from "./slider";

import "./result.css";
import "./searchbar/search2.css";

import sort from "../../assets/images/icon/sort-down.png";
import scrolltotop from "../../assets/images/icon/scrolltotop.png";
import mapicon from "../../assets/images/icon/map-link-icon.png";

class RentalResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdropdown: [false, false, false],
      maskclick: false,
      maskwork: false,
      sortcost: "價格排序",
      timerange: props.timerange,
      showcount: 10,
      canmore: this.props.result !== [] && this.props.result.length > 10,
    };

    this.setMaskWork = this.setMaskWork.bind(this);
    this.maskClick = this.maskClick.bind(this);
    this.handleDropdownShow = this.handleDropdownShow.bind(this);

    this._renderItems = this._renderItems.bind(this);

    this._costSort = this._costSort.bind(this);
    this._numberSort = this._numberSort.bind(this);
    this.setTimeRange = this.setTimeRange.bind(this);

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.state.maskclick) {
      this.setState({
        showdropdown: [false, false, false],
      });
      this.setMaskWork(false);
      this.props.setRentalFilter_Time(this.state.timerange);
    }
  }

  handleSelect() {
    if (this.props.result !== []) {
      if (this.state.showcount + 10 < this.props.result.length)
        this.setState({ showcount: this.state.showcount + 10 });
      else if (this.state.showcount + 10 >= this.props.result.length)
        this.setState({ showcount: this.state.showcount + 10, canmore: false });
    }
  }

  handleDropdownShow(index) {
    let a = [false, false, false];
    a[index] = !this.state.showdropdown[index];
    this.setState({
      showdropdown: a,
    });
    this.setMaskWork(a[index]);
    if (!a[index]) this.props.setRentalFilter_Time(this.state.timerange);
  }

  maskClick() {
    if (this.state.maskwork) {
      this.setState({
        maskclick: !this.state.maskclick,
      });
    }
  }

  setTimeRange(v) {
    this.setState({
      timerange: v,
    });
  }

  setMaskWork(work) {
    if (this.state.maskclick) {
      this.setState({
        maskclick: false,
      });
    }
    this.setState({
      maskwork: work,
    });
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
    console.log(type);
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
    let show = [];
    if (result !== []) {
      show = result.slice(0, this.state.showcount);
      show.forEach((item, index) => {
        list.push(<VenueCard setStateValue={this.props.setStateValue}key={index} item={item} />);
      });
    } else {
      // 找不到
    }
    return list;
  }

  render() {
    let dropdown = [];
    if (this.state.showdropdown[0]) {
      dropdown[0] = (
        <div className="re-dropdown re-dropdown-timeslider">
          <div className="time-range-title">8:00</div>
          <TimeSlider
            timerange={this.state.timerange}
            setTimeRange={this.setTimeRange}
          />
          <div className="time-range-title">22:00</div>
        </div>
      );
    }
    if (this.state.showdropdown[1]) {
      dropdown[1] = (
        <div className="re-dropdown">
          <button className="re-dropdown-btn" onClick={() => this._costSort(0)}>
            價格由低到高
          </button>
          <button className="re-dropdown-btn" onClick={() => this._costSort(1)}>
            價格由高到低
          </button>
        </div>
      );
    }
    if (this.state.showdropdown[2]) {
      dropdown[2] = (
        <div className="re-dropdown">
          <button
            className="re-dropdown-btn"
            onClick={() => this._numberSort(0)}
          >
            容納人數由少到多
          </button>
          <button
            className="re-dropdown-btn"
            onClick={() => this._numberSort(1)}
          >
            容納人數由多到少
          </button>
        </div>
      );
    }
    return (
      <div>
        <div
          className={this.state.maskwork ? "mask mask-work" : "mask"}
          onClick={this.maskClick}
        ></div>
        <img className="scroll-to-top" src={scrolltotop} alt="" onClick={()=>{window.scroll(0,0)}}/>
        <div className="rentalresult">
          <section>
            <div className="s2_search_wrapper">
              <div className="s2_title">搜尋</div>
              <SearchBar
                filter={this.props.filter}
                search={this.props.search}
                setMaskWork={this.setMaskWork}
                maskclick={this.state.maskclick}
                setRentalSearch={this.props.setRentalSearch}
              />
            </div>
            <RentalFilter
              active={this.props.filterlistactive}
              filterListClick={this.props.filterListClick}
              filter={this.props.filter}
              search={this.props.search}
              setRentalSearch={this.props.setRentalSearch}
            />
          </section>
          <section className="container">
            <div className="map-link"><img src={mapicon} alt="" />地圖搜尋</div>
            <div className="countresult">
              找到 {this.props.result.length} 筆結果
            </div>
            <div className="sort-wrapper">
              <div className="sort-item">
                <button
                  className="sort-btn sort-time"
                  name="篩選"
                  type="button"
                  onClick={() => this.handleDropdownShow(0)}
                >
                  可預約時段篩選
                  <img src={sort} alt="" />
                </button>
              </div>
              {dropdown[0]}
              <div className="sort-item">
                <button
                  className="sort-btn sort-cost"
                  name="價格"
                  onClick={() => this.handleDropdownShow(1)}
                >
                  價格排序
                  <img src={sort} alt="" />
                </button>
                {dropdown[1]}
              </div>
              <div className="sort-item">
                <button
                  className="sort-btn sort-number"
                  name="容納人數"
                  onClick={() => this.handleDropdownShow(2)}
                >
                  容納人數排序
                  <img src={sort} alt="" />
                </button>
                {dropdown[2]}
              </div>
            </div>
            <div>{this._renderItems()}</div>
            <div
              className={
                this.state.canmore ? "btn-more" : "btn-more btn-more-hide"
              }
              onClick={this.handleSelect}
            >
              看更多場地
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default RentalResult;
