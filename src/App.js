import React, { Component } from "react";
import "./App.css";
import icon from "./favicon.ico";
import Form from "./Form";
import Today from "./Today";

class App extends Component {
  state = {
    fields: {}
  };
  onSubmitParent = fields => {
    this.setState({ fields });
  };

  render() {
    return (
      <div className="App">
        <img src={icon} alt="app icon" />
        <span id="AppTitle">Money Tracker App</span>
        <Form onSubmitParent={fields => this.onSubmitParent(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <Today />
      </div>
    );
  }
}

export default App;
