import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  render() {
    const data = {
      labels: [0, 1, 2, 3],
      datasets: [
        {
          label: "Data 1",
          data: [25, 45, 74, 85],
          borderColor: "#2196f3",
          backgroundColor: "#2196f3",
          hoverborderColor: "#2196f3",
          hoverBackgroundColor: "#2196f3",
        },
        {
          label: "Data 2",
          data: [30, 52, 65, 65],
          borderColor: "#7759de",
          backgroundColor: "#7759de",
          hoverborderColor: "#7759de",
          hoverBackgroundColor: "#7759de",
        },
      ],
    };

    return (
      <Bar
        data={this.props.data}
        height={this.props.height}
        options={{
          barValueSpacing: 20,
          scales: {
            xAxes: [
              {
                stacked: this.props.stacked,
                scaleLabel: {
                  display: this.props.xLabel ? true : false,
                  labelString: `${this.props.xLabel}`,
                },
              },
            ],
            yAxes: [
              {
                stacked: this.props.stacked,
                scaleLabel: {
                  display: this.props.yLabel ? true : false,
                  labelString: `${this.props.yLabel}`,
                },
              },
            ],
          },
        }}
      />
    );
  }
}

export default BarChart;
