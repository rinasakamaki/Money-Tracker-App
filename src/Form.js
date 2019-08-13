import React from "react";
import axios from "axios";

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
    this.props.onSubmitParent(this.state);
    axios
      .post("/api/history", this.state)
      .then(response => console.log("response:", response))
      .catch(error => console.log("error:", error));
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
          name="name"
          placeholder="product name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="cost"
          placeholder="cost"
          value={this.state.cost}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="year"
          placeholder="year"
          value={this.state.year}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="month"
          placeholder="month"
          value={this.state.month}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="day"
          placeholder="day"
          value={this.state.day}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
