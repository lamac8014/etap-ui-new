// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

// import internal(own) modules
// import StaticPieChart from "../../amChart/staticsPieChart/staticsPieChartBasic";
import LineChart from "../../common/charts/lineChart";

class LineChartCard extends PureComponent {
  render() {
    return (
      <Card>
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body">
          <div>
            <LineChart {...this.props} />
          </div>
          {/* <div className="mt-3">
            {this.props.data.labels.map((item, index) => (
              <span className="d-block mb-2" key={index}>
                <FontAwesomeIcon
                  icon="circle"
                  className="f-10 m-r-15"
                  style={{
                    color: `${this.props.data.datasets[0].backgroundColor[index]}`,
                  }}
                />
                {item}
                <span className="float-right f-w-400">
                  {this.props.data.datasets[0].data[index]}
                </span>
              </span>
            ))}
          </div> */}
        </div>
      </Card>
    );
  }
}

LineChartCard.propTypes = {
  title: PropTypes.string,
};
LineChartCard.defaultProps = {
  title: "Pie Statics",
};

export default LineChartCard;
