import React, { Component } from "react";
import { Button as ButtonComponent } from "reactstrap";

class Button extends Component {
  buttonType() {
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
  render() {
    return (
      <ButtonComponent
        className={this.props.className}
        color={this.buttonType()}
        outline ={this.props.outline}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.btnText}
      </ButtonComponent>
    );
  }
}

export default Button;
