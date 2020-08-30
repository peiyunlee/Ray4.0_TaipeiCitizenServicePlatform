import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import StepOne from "./one";
import StepTwo from "./two";
import StepThree from "./three";
import StepFour from "./four";
import RentalInfo from "./rentalinfo";
import CaseApplyOne from "./case-one";
import Flow from "./flow";

import "./apply.css";

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        name: "Demo",
        number: "Demo",
        phone: "Demo",
        email: "Demo",
        address: "Demo",
      },
    };

    this.setPropsValue = this.setPropsValue.bind(this);
  }

  render() {
    return (
      <HashRouter className="apply">
        <Switch>
          <Route
            path="/apply/case-step1"
            component={(props) => (
              <div>
                <Flow text={["申請完成，待審核"]} light={1} />
                <CaseApplyOne/>
              </div>
            )}
          />
          <Route
            path="/apply/step1"
            component={(props) => (
              <div>
                <RentalInfo selectedResult={this.props.selectedResult} />
                <Flow text={["預約完成，待審核"]} light={1} />
                <StepOne/>
              </div>
            )}
          />
          <Route
            path="/apply/step2"
            component={(props) => (
              <div>
                <RentalInfo selectedResult={this.props.selectedResult} />
                <Flow text={["預約完成，待審核"]} light={2} />
                <StepTwo setPropsValue={this.setPropsValue} />
              </div>
            )}
          />
          <Route
            path="/apply/step3"
            component={(props) => (
              <div>
                <Flow text={["預約完成，待審核"]} light={3} />
                <StepThree
                  setAlert={this.props.setAlert}
                  selectedResult={this.props.selectedResult}
                  info={this.state.info}
                  setPropsValue={this.setPropsValue}
                />
              </div>
            )}
          />
          <Route
            path="/apply/step4"
            component={(props) => (
              <div>
                <Flow text={["預約完成，待審核"]} light={4} />
                <StepFour
                  selectedResult={this.props.selectedResult}
                />
              </div>
            )}
          />
        </Switch>
      </HashRouter>
    );
  }

  setPropsValue(v, name) {
    this.setState({
      [name]: v,
    });
  }
}

export default Apply;
