import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import StepOne from "./one";
import StepTwo from "./two";
import StepThree from "./three";
import StepFour from "./four";
import RentalInfo from "./rentalinfo";
import Flow from "./flow";

import "./apply.css";

class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
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
            path="/apply/step1"
            component={(props) => (
              <div>
                <RentalInfo selectedResult={this.props.selectedResult} />
                <Flow light={this.state.step} />
                <StepOne setPropsValue={this.setPropsValue} />
              </div>
            )}
          />
          <Route
            path="/apply/step2"
            component={(props) => (
              <div>
                <RentalInfo selectedResult={this.props.selectedResult} />
                <Flow light={this.state.step} />
                <StepTwo setPropsValue={this.setPropsValue} />
              </div>
            )}
          />
          <Route
            path="/apply/step3"
            component={(props) => (
              <div>
                <Flow light={this.state.step} />
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
                <Flow light={this.state.step} />
                <StepFour
                  selectedResult={this.props.selectedResult}
                  info={this.state.info}
                  setPropsValue={this.setPropsValue}
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
