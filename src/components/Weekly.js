import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Total expenses per day",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40, 32]
    }
  ]
};

export default class Weekly extends React.Component {
  displayName: "BarExample";

  render() {
    return (
      <div>
        <h2>Weekly</h2>
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
