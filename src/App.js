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
      rentalResult: null,
      search: {
        keyword: "",
        district: [
          { selected: false, name: "中正區" },
          { selected: false, name: "大同區" },
          { selected: false, name: "中山區" },
          { selected: false, name: "松山區" },
          { selected: false, name: "大安區" },
          { selected: false, name: "萬華區" },
          { selected: false, name: "信義區" },
          { selected: false, name: "士林區" },
          { selected: false, name: "松山區" },
          { selected: false, name: "內湖區" },
          { selected: false, name: "文山區" },
        ],
        type: [false],
      },
    };

    this.setCaseList = this.setCaseList.bind(this);
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
              <RentalHome
                search={this.state.search}
                rentalData={rentalData}
                setRentalResult={this.setRentalResult}
              />
            )}
          />
          <Route
            path="/rentallist"
            component={() => (
              <RentalSearch
                search={this.state.search}
                rentalData={rentalData}
                result={this.state.rentalResult}
                setRentalResult={this.setRentalResult}
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

  setRentalResult(result, search = {}) {
    if (search !== {}) {
      this.setState({
        search: search,
      });
    }
    this.setState({
      rentalResult: result,
    });
    
  }
}

export default App;
