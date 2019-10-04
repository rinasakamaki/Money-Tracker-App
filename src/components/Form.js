import React from "react";
import axios from "axios";
import "../css/App.css";

export default class Form extends React.Component {
  state = {
    name: "",
    cost: "",
    year: "",
    month: "",
    day: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    axios.post("/api/history", this.state);
    this.setState({
      name: "",
      cost: "",
      year: "",
      month: "",
      day: ""
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="product name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          type="text"
          name="cost"
          placeholder="cost"
          value={this.state.cost}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          type="text"
          name="year"
          placeholder="year"
          value={this.state.year}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          type="text"
          name="month"
          placeholder="month"
          value={this.state.month}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          type="text"
          name="day"
          placeholder="day"
          value={this.state.day}
          onChange={e => this.change(e)}
        />
        <br />
        <button id="submit" onClick={e => this.onSubmit(e)}>
          Submit
        </button>
      </form>
    );
  }
}
