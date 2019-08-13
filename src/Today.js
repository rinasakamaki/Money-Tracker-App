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
        {this.state.all.length === 0 ? (
          <h5>loading...</h5>
        ) : (
          this.state.all.map(h => {
            console.log("h.name:", h.name);
            return (
              <p>
                {h.name + " "}
                {h.cost + "yen "}
                {h.year + "/"}
                {h.month + "/"}
                {h.day + " "}
              </p>
            );
          })
        )}
        <button onClick={e => this.onSubmit(e)}>Refresh</button>
      </div>
    );
  }
}
