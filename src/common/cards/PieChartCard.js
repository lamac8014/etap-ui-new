// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "reactstrap";

// import internal(own) modules
// import StaticPieChart from "../../amChart/staticsPieChart/staticsPieChartBasic";
import PieChart from "../../common/charts/pieChart";
import FaIcon from "../FaIcon";

class PieChartCard extends PureComponent {
  render() {
    return (
      <Card className="h-100">
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body">
          {this.props.isLoading && (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
              <Spinner color="primary" />
            </div>
          )}
          {this.props.data.datasets[0].data.length === 0 ? (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
              <p># No data to display</p>
            </div>
          ) : (
            <>
              <div>{!this.props.isLoading && <PieChart {...this.props} />}</div>
              {!this.props.noKey && (
                <div className="piechart-key-outer mt-3">
                  {!this.props.isLoading &&
                    this.props.data.labels.map((item, index) => (
                      <div className="row">
                        <div className="col-md-6 offset-md-3">
                          {/* <FontAwesomeIcon
                            icon="circle"
                            // className="f-10 m-r-15"
                            style={{
                              color: `${this.props.data.datasets[0].backgroundColor[index]}`,
                            }}
                            size="sm"
                          /> */}
                          <FaIcon
                            className="mr-1"
                            size="sm"
                            iconname="faCircle"
                            color={`${this.props.data.datasets[0].backgroundColor[index]}`}
                          />
                          {item}
                          <p className="float-right  f-w-400 ">
                            {this.props.data.datasets[0].data[index]
                              ? this.props.data.datasets[0].data[index]
                              : 0}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </>
          )}
        </div>
      </Card>
    );
  }
}

PieChartCard.propTypes = {
  title: PropTypes.string,
};
PieChartCard.defaultProps = {
  title: "Pie Statics",
};

export default PieChartCard;
