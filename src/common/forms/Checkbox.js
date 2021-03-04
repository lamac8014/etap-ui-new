import React, { Component } from "react";
import { FormGroup, Label, Col } from "reactstrap";
import classnames from "classnames";

class Checkbox extends Component {
  render() {
    return (
      //   <FormGroup className={this.props.inline && "d-inline"}>
      //     <div
      //       className={`checkbox d-inline ${
      //         this.props.color
      //           ? "checkbox-" + this.props.color
      //           : "checkbox-primary"
      //       } ${this.props.outline ? "checkbox-fill" : ""}`}
      //     >
      //       <input
      //         type="checkbox"
      //         checked={this.props.checked}
      //         disabled={this.props.disabled}
      //         onChange={() => this.props.onChange()}
      //       />
      //       <Label className="cr">{this.props.label}</Label>
      //     </div>
      //   </FormGroup>
      <FormGroup
        className={classnames({
          "d-inline": this.props.inline === true,
        })}
      >
        <div
          className={classnames(
            `checkbox d-inline ${
              this.props.color && `checkbox-${this.props.color}`
            }`,
            {
              "checkbox-fill": this.props.outline === true,
            }
          )}
        >
          <input
            type="checkbox"
            id={this.props.id}
            checked={this.props.checked}
            onChange={this.props.onChange}
          />
          <Label for={this.props.id} className="cr">
            {this.props.label}
          </Label>
        </div>
      </FormGroup>
    );
  }
}
export default Checkbox;
