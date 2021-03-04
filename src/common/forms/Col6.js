import React, { Component } from "react";

class Col6 extends Component {
  render() {
    return (
      <div className={this.props.size ? this.props.size : "col-md-6"}>
        {this.props.children}
      </div>
    );
  }
}

export default Col6;
