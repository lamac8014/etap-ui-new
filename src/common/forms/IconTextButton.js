import React, { Component } from "react";
import FaIcon from "../FaIcon";
class IconTextButton extends Component {
  render() {
    return (
      <button
        type="button"
        class={`btn btn-primary btn-icon-text ${this.props.className}`}
        onClick={this.props.onClick}
      >
        <FaIcon
          iconName={this.props.iconName ? this.props.iconName : "faPlusCircle"}
          size={this.props.size ? this.props.size : "lg"}
        />
        {" " + this.props.btnText}
      </button>
    );
  }
}

export default IconTextButton;
