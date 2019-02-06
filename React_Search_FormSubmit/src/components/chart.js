import React, { Component } from "react";

import { CanvasJS, CanvasJSChart } from "./canvasjs";

class Chart extends Component {
  constructor() {
    super();
    this.addSymbols = this.addSymbols.bind(this);
  }

  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

    if (order > suffixes.length - 1) order = suffixes.length - 1;

    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }

  render() {
    const options = {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Repository Search Result"
      },
      axisY: {
        title: "Number of Stars",
        labelFormatter: this.addSymbols,
        scaleBreaks: {
          autoCalculate: true
        }
      },
      axisX: {
        title: "Repository Name",
        labelAngle: -90
      },
      data: [
        {
          type: "column",
          dataPoints: this.props.data.slice(0, 10).map(repository => {
            var repository = {
              label: repository.name,
              y: repository.stargazers_count
            };
            return repository;
          })
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Chart;
