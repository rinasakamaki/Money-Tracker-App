import React from "react";
import Calendar from "./Calendar.jsx";

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
