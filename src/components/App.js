import React, { Component } from "react";
import "../css/App.css";
import icon from "../favicon.ico";
import Form from "./Form";
import Today from "./Today";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={icon} alt="app icon" />
        <span id="AppTitle">Money Tracker App</span>
        <Form />
        <Today />
        <Weekly />
        <Monthly />
        <Yearly />
      </div>
    );
  }
}

export default App;
