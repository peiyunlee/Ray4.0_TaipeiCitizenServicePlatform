import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./css/App.css";
// import Home from "./component/Home/home";
import RentalHome from "./component/Rental/rentalhome";
import RentalSearch from "./component/Rental/rentalsearch";
import CaseList from "./component/Case/caselist";
import rentalData from "./data/rental";
import caseData from "./data/case";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseListName: "",
      caseListType: "sort",
      rentalResult: rentalData,
      search: {
        keyword: "",
        district: { do: false, index: 0, name: "" },
        type: { do: false, index: 0, name: "" },
      },
      check: {
        district: [
          { checked: false, name: "中正區" },
          { checked: false, name: "大同區" },
          { checked: false, name: "中山區" },
          { checked: false, name: "松山區" },
          { checked: false, name: "大安區" },
          { checked: false, name: "萬華區" },
          { checked: false, name: "信義區" },
          { checked: false, name: "士林區" },
          { checked: false, name: "松山區" },
          { checked: false, name: "內湖區" },
          { checked: false, name: "文山區" },
        ],
        type: [
          { checked: false, name: "運動" },
          { checked: false, name: "公園" },
          { checked: false, name: "廣場" },
          { checked: false, name: "演講廳" },
          { checked: false, name: "禮堂" },
          { checked: false, name: "教室" },
        ],
      },
    };

    this.setCaseList = this.setCaseList.bind(this);
    this.setRentalSearch = this.setRentalSearch.bind(this);
    this.setRentalCheck = this.setRentalCheck.bind(this);
    this.setRentalResult = this.setRentalResult.bind(this);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          {/* <Route
            exact
            path="/"
            component={() => <Home caseData={caseData} setList={this.setList} />}
          /> */}
          <Route
            exact
            path="/"
            component={() => (
              <RentalHome setRentalSearch={this.setRentalSearch} />
            )}
          />
          <Route
            path="/rentallist"
            component={() => (
              <RentalSearch
                check={this.state.check}
                result={this.state.rentalResult}
                setRentalCheck={this.setRentalCheck}
              />
            )}
          />
          <Route
            path="/caselist"
            component={() => (
              <CaseList
                caseData={caseData}
                listName={this.state.caseListName}
                listType={this.state.caseListType}
              />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }

  setCaseList(listType, listName) {
    this.setState({
      caseListName: listName,
      caseListType: listType,
    });
  }

  setRentalResult(result) {
    this.setState({
      rentalResult: result,
    });
  }

  setRentalSearch(search) {
    if (search !== {}) {
      this.setState({
        search: search,
      });

      let d, t, o;
      d = this.state.check.district;
      d.forEach((ditem) => {
        ditem.checked = false;
      });
      t = this.state.check.type;
      t.forEach((titem) => {
        titem.checked = false;
      });
      if (search.district.do && search.type.do) {
        d[search.district.index].checked = true;
        t[search.type.index].checked = true;
      } else if (search.district.do) {
        d[search.district.index].checked = true;
      } else if (search.type.do) {
        t[search.type.index].checked = true;
      }

      o = { district: d, type: t };

      this.setState({
        check: o,
      });

      let result = [];
      if (search.district.do || search.type.do) {
        rentalData.forEach((item) => {
          let d = item.district === search.district.name || !search.district.do;
          let t = item.type.includes(search.type.name) || !search.type.do;
          if (d && t) result.push(item);
        });
      } else result = rentalData;
      this.setRentalResult(result);
    }
  }

  setRentalCheck(check) {
    if (check !== {}) {
      this.setState({
        check: check,
      });

      let result = [];
      let d, t;
      rentalData.forEach((item) => {
        if (check.district.every((ditem) => !ditem.checked)) {
          d = true
        } else {
          d = check.district.some(
            (ditem) => ditem.checked && ditem.name === item.district
          );
        }
        if (check.type.every((titem) => !titem.checked)) {
          t = true
        } else {
          t = item.type.some(
            (name) => check.type.some((titem)=>titem.checked && titem.name === name)
          );
        }
        if (d && t) result.push(item);
      });

      this.setRentalResult(result);
    }
  }
}

export default App;
