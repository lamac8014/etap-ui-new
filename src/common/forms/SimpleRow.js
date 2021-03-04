import React, { Component } from "react";
import { Row } from "reactstrap";
export default class SimpleRow extends Component {
  render() {
    return (
      <Row key={this.props.subkey} className={this.props.className}>
        {this.props.children}
      </Row>
    );
  }
}
