import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  render() {
    return (
      <Line
        data={this.props.data}
        height={this.props.height}
        responsive={true}
        options={{
          responsive: true,
          barValueSpacing: 20,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: this.props.yLabel ? true : false,
                  labelString: `${this.props.yLabel}`,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: this.props.xLabel ? true : false,
                  labelString: `${this.props.xLabel}`,
                },
              },
            ],
          },
        }}
      />
    );
  }
}

export default LineChart;
