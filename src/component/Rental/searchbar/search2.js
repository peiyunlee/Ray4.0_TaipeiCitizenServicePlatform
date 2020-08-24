import React from "react";
import { withRouter } from "react-router-dom";

class RentalResultSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcalender: [false, false, false],
      search: {
        keyword: "",
        dateStart: "租借開始日期",
        dateEnd: "租借結束日期",
        time: "租借時段",
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCalenderShow = this.handleCalenderShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      search: Object.assign({}, this.state.search, {
        [name]: target.value,
      }),
    });
  }

  handleSubmit(event) {
    // this.props.setRentalSearch(s);
  }

  handleCalenderShow(index) {
    let a = [false, false, false];
    a[index] = !this.state.showcalender[index];
    this.setState({
      showcalender: a,
    });
  }

  render() {
    const calender = [];
    if (this.state.showcalender[0]) {
      calender[0] = <div className="calender"></div>;
    }
    if (this.state.showcalender[1]) {
      calender[1] = <div className="calender"></div>;
    }
    if (this.state.showcalender[2]) {
      calender[2] = <div className="calender"></div>;
    }
    return (
      <form className="s2_form" onSubmit={this.handleSubmit}>
        <label className="s2_container">
          場地名稱
          <input
            className="s2_input_t"
            type="text"
            name="keyword"
            placeholder="輸入場地名稱、類型"
            value={this.state.search.keyword}
            onChange={this.handleInputChange}
          />
        </label>
        <div className="s2_container">
          租借開始日期
          <input
            className="s2_button"
            type="button"
            name="datestart"
            value={this.state.search.dateStart}
            onClick={() => this.handleCalenderShow(0)}
          />
          {calender[0]}
        </div>
        <div className="s2_container">
          租借結束日期
          <input
            className="s2_button"
            type="button"
            name="dateend"
            value={this.state.search.dateEnd}
            onClick={() => this.handleCalenderShow(1)}
          />
          {calender[1]}
        </div>
        <div className="s2_container">
            租借時段
          <input
            className="s2_button"
            type="button"
            name="time"
            value={this.state.search.time}
            onClick={() => this.handleCalenderShow(2)}
          />
          {calender[2]}
        </div>
        <div>
          <input type="submit" value="搜尋" />
        </div>
      </form>
    );
  }
}

export default withRouter(RentalResultSearchBar);
