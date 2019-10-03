import React, { Component } from "react";
import axios from "axios";
import icon from "../favicon.ico";
import Form from "./Form";
import Today from "./Today";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

class App extends Component {
  getHistory = async () => {
    const { data: history } = await axios.get("/api/history");
    return history;
  };

  render() {
    return (
      <div className="App">
        <img src={icon} alt="app icon" />
        <span id="AppTitle">Money Tracker App</span>
        <div id="formboxwrap">
          <Form id="formbox" />
        </div>
        <Today getHistory={this.getHistory} />
        <Weekly />
        <Monthly />
        <Yearly />
      </div>
    );
  }
}

export default App;
