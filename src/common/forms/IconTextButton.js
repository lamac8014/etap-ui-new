import React, { Component } from "react";
import FaIcon from "../FaIcon";
import Button from "./Button";

class IconTextButton extends Component {
  render() {
    return (
      <Button
        {...this.props}
        className={`btn btn-primary btn-icon-text ${this.props.className}`}
        onClick={this.props.onClick}
      >
        <FaIcon
          iconname={this.props.iconname ? this.props.iconname : "faPlusCircle"}
          size={this.props.size ? this.props.size : "lg"}
        />
        {" " + this.props.btnText}
      </Button>
    );
  }
}

export default IconTextButton;
