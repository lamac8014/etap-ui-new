import React, { Component } from "react";
import { Card } from "reactstrap";

class SimpleCard extends Component {
  render() {
    return (
      <Card className={this.props.className}>
        {this.props.title && (
          <div className="card-header">
            <h5>{this.props.title}</h5>
          </div>
        )}
        <div className="card-body">{this.props.children}</div>
      </Card>
    );
  }
}

export default SimpleCard;
