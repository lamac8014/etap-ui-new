import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class FormRow extends Component {
  render() {
    return (
      <Row className={this.props.className}>
        <Col md="12">{this.props.children}</Col>
      </Row>
    );
  }
}

export default FormRow;
