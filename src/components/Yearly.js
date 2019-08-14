import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["2016", "2017", "2018", "2019"],
  datasets: [
    {
      label: "Total expenses per day",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 70]
    }
  ]
};

export default class Yearly extends React.Component {
  displayName: "BarExample";

  render() {
    return (
      <div>
        <h2>Yearly</h2>
        <Bar
          data={data}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
