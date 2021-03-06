import React, { Component } from "react";
import * as Icon from "react-feather";

class FeatherIcon extends Component {
  render() {
    let iconArray = this.props.iconname.split("-");
    let icon = "";
    iconArray.map(
      (item) =>
        (icon = icon
          ? icon + item.charAt(0).toUpperCase() + item.slice(1)
          : item.charAt(0).toUpperCase() + item.slice(1))
    );
    let temp = {
      comp: Icon[icon],
    };
    return (
      <temp.comp
        color={this.props.color}
        size={this.props.size}
        strokeWidth={1.5}
        className={this.props.className}
        {...this.props}
      />
    );
  }
}

export default FeatherIcon;
