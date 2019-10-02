import React from "react";
import axios from "axios";
import "../css/Today.css";

export default class Today extends React.Component {
  state = {
    all: [],
    allTotal: 0
  };

  getHistory = async () => {
    const { data: history } = await axios.get("/api/history");
    return history;
  };

  onAll = e => {
    e.preventDefault();
    this.getHistory().then(result => {
      this.setState({ all: result });
    });
  };

  componentDidMount() {
    this.getHistory().then(result => {
      this.setState({ all: result });
    });
  }

  render() {
    return (
      <div>
        <div className="tablewrap">
          <div className="tablebox">
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
                  this.setState.allTotal += h.cost;
                  return (
                    <tr>
                      <td>{h.name + " "}</td>
                      <td>{h.cost}</td>
                      <td>{h.year}</td>
                      <td>{h.month}</td>
                      <td>{h.day}</td>
                    </tr>
                  );
                })
              )}
              <tr>
                <td>Total</td>
                <td> {this.state.allTotal}</td>
                <td />
                <td />
                <td />
              </tr>
            </table>
            <button id="refresh" onClick={e => this.onAll(e)}>
              Refresh
            </button>
          </div>
        </div>
      </div>
    );
  }
}
