import React, { Component } from "react";
import "./App.css";
import icon from "./favicon.ico";
import Calendar from "./Calendar.jsx";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {}
  };
  onSubmit = fields => {
    this.setState({ fields });
  };

  render() {
    return (
      <div className="App">
        <img src={icon} />
        <span id="AppTitle">Money Tracker App</span>
        <Form onSubmit={fields => this.onSubmit(fields)} />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <div id="formboxwrap">
          <div id="formbox">
            <form id="form">
              <label for="fname">Product name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Apples, candy... etc"
              />
              <label for="lname">Cost</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="How much did it cost?"
              />
              <Calendar />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
