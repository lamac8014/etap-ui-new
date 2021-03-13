import React, { Component } from "react";
import { Card } from "reactstrap";
import { MAINLOGO } from "../../assets/images";

class LoginCard extends Component {
  render() {
    return (
      <Card className={this.props.className}>
        <div className="card-body mt-3">
          <div className="b-login d-flex justify-content-center my-2">
            <img src={MAINLOGO} alt="" className="contain-img" />
          </div>
          {this.props.children}
        </div>
      </Card>
    );
  }
}

export default LoginCard;
