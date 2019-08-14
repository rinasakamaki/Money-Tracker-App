import React, { Component } from "react";
import "./App.css";
import icon from "./favicon.ico";
import Form from "./Form";
import Today from "./Today";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={icon} alt="app icon" />
        <span id="AppTitle">Money Tracker App</span>
        <Form />
        <Today />
      </div>
    );
  }
}

export default App;
