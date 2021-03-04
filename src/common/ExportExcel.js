import React, { Component } from "react";
import { CSVLink } from "react-csv";
import FaIcon from "./FaIcon";

class ExportExcel extends Component {
  render() {
    return (
      <CSVLink
        data={this.props.data}
        // headers={this.props.headers}
        filename={this.props.filename + ".csv"}
        className={`btn btn-primary ${this.props.className}`}
      >
        <span ref={this.props.compRef}>
          {this.props.iconName && <FaIcon iconName={this.props.iconName} />}{" "}
          Download As Excel
        </span>
      </CSVLink>
    );
  }
}

export default ExportExcel;
