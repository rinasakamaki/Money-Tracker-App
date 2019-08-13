import React from "react";
import axios from "axios";

export default class Today extends React.Component {
  state = {
    all: [],
    today: []
  };

  getHistory = async () => {
    const { data: history } = await axios.get("/api/history");
    console.log("history:", history);
    return history;
  };

  onSubmit = e => {
    e.preventDefault();
    this.getHistory().then(result => {
      this.setState({ all: result });
    });
  };

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Cost</th>
            <th>Year</th>
            <th>Month</th>
            <th>Day</th>
          </tr>
          {this.state.all.length === 0 ? (
            <p />
          ) : (
            this.state.all.map(h => {
              console.log("h.name:", h.name);
              return (
                <div>
                  <tr>
                    <td>{h.name + " "}</td>
                    <td>{h.cost}</td>
                    <td>{h.year}</td>
                    <td>{h.month}</td>
                    <td>{h.day}</td>
                  </tr>
                </div>
              );
            })
          )}
        </table>
        <button onClick={e => this.onSubmit(e)}>Refresh</button>
      </div>
    );
  }
}