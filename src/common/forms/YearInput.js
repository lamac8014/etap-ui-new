import React, { Component } from "react";
import Col6 from "./Col6";
import DatePicker from "react-datepicker";
import InputGroupButton from "./InputGroupButton";
import FaIcon from "../FaIcon";

class YearInput extends Component {
  render() {
    let input;
    if (this.props.disabled) {
      input = (
        <input
          type={`${this.props.type ? this.props.type : "date"}`}
          className="form-control"
          onChange={(e) => this.props.onChange(e)}
          value={this.props.value}
          disabled
        />
      );
    } else {
      input = (
        <input
          type={`${this.props.type ? this.props.type : "date"}`}
          className="form-control"
          onChange={(e) => this.props.onChange(e)}
          value={this.props.value}
        />
      );
    }
    return (
      <Col6 size={this.props.size}>
        {/* <div className="form-group row">
          <label className="col-sm-3 col-form-label">{this.props.label}</label>
          <div className="col-sm-9">{input}</div>
        </div> */}
        <div className="form-group row">
          {this.props.label && (
            <label
              className={`${
                this.props.labelSize ? this.props.labelSize : "col-sm-3"
              } col-form-label`}
            >
              {this.props.label}
            </label>
          )}
          <div
            className={`${
              this.props.fieldSize ? this.props.fieldSize : "col-sm-9"
            }`}
          >
            <DatePicker
              className="form-control"
              selected={this.props.value}
              onChange={(date) => this.props.onChange(date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="YYYY"
            />
          </div>
        </div>
      </Col6>
    );
  }
}

export default YearInput;
