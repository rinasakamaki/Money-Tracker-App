import React from "react";
import Calendar from "./Calendar.jsx";

export default class Form extends React.Component {
  state = {
    name: "",
    cost: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: "",
      cost: ""
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
        <Calendar />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
