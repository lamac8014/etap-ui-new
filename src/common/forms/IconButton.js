import React, { Component } from "react";
import { Button } from "reactstrap";
import FaIcon from "../FaIcon";

class IconButton extends Component {
  buttonType() {
    if (this.props.noBg) {
      return "";
    } else {
      if (this.props.gradient && this.props.type) {
        return "gradient-" + this.props.type;
      } else if (this.props.gradient && !this.props.type) {
        return "gradient-primary";
      } else if (!this.props.gradient && this.props.type) {
        return this.props.type;
      } else if (!this.props.gradient && !this.props.type) {
        return "primary";
      }
    }
  }

  render() {
    return (
      <Button
        key={this.props.compKey}
        color={this.buttonType()}
        className={`${this.props.rounded && "btn-rounded"} btn-icon`}
        onClick={this.props.onClick}
        size="1x"
      >
        <FaIcon
          iconname={this.props.iconname}
          className={this.props.className}
          size={this.props.size}
          color={this.props.iconColor}
        />
      </Button>
    );
  }
}
export default IconButton;
