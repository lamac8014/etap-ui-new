import React, { Component } from "react";
import SimpleRow from "./SimpleRow";
import Col6 from "./Col6";

class ButtonRow extends Component {
  position = () => {
    if (this.props.position === "left") {
      return "justify-content-start";
    }
    if (this.props.position === "center") {
      return "justify-content-center";
    }
    if (this.props.position === "right") {
      return "justify-content-end";
    }

    return "justify-content-end";
  };
  render() {
    let position = this.position();
    return (
      <SimpleRow className={this.props.className}>
        <Col6 size={`col-md-12 d-flex ${position}`}>{this.props.children}</Col6>
      </SimpleRow>
    );
  }
}

export default ButtonRow;
