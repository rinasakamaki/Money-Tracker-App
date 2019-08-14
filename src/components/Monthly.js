import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: "Total expenses per Month",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40, 32, 20, 12, 44, 55, 72, 88]
    }
  ]
};

export default class Monthly extends React.Component {
  displayName: "BarExample";

  render() {
    return (
      <div>
        <h2>Monthly</h2>
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
