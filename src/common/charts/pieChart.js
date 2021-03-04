import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
  render() {
    const data = {
      labels: ["Data 1", "Data 2", "Data 3"],
      datasets: [
        {
          data: [30, 20, 50],
          backgroundColor: ["#4caf50", "#7759de", "#2196f3"],
          hoverBackgroundColor: ["#4caf50", "#7759de", "#2196f3"],
        },
      ],
    };
    return (
      <Pie
        data={this.props.data}
        responsive={true}
        height={this.props.height}
        options={{
          maintainAspectRatio: false,
        }}
      />
    );
  }
}

export default PieChart;
