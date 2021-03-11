import React, { Component } from "react";
import Col6 from "./Col6";

class InputGroupButton extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
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
            className={`input-group ${
              this.props.fieldSize ? this.props.fieldSize : "col-sm-9"
            }`}
            style={{ background: "transparent" }}
          >
            {/* <div className="input-group "> */}
            <input
              type="text"
              className="form-control"
              style={{ minHeight: "100%" }}
              placeholder={this.props.placeholder}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={this.props.value}
              onChange={this.props.onChange}
              disabled={this.props.disabled ? true : false}
            />
            <div className="input-group-append">
              <button
                className={`btn ${
                  this.props.btnType ? this.props.btnType : "btn-primary"
                }`}
                type="button"
                onClick={this.props.onClick}
              >
                {this.props.btnText}
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Col6>
    );
  }
}

export default InputGroupButton;
