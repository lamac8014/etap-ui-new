import React, { Component } from "react";
import { Form, Button } from "reactstrap";
import {nanoid} from "nanoid";
import { getHomePageforCurrentRole, getUserDetails } from "../../utils/auth";

class UnAuthorised extends Component {

  componentDidMount(){
    const role = getUserDetails().roleName;
    this.homePage = getHomePageforCurrentRole(role);
  }
  
  render() {
    return (
      <div className="auth-wrapper offline" style={{ background: "#ffffff" }}>
        <div className="text-center">
          <h1 className="display-1">401</h1>
          <h3 className="mb-4">Access Denied</h3>
          <h5 className="text-muted mb-4">
            The requested action is blocked by the Admin
          </h5>
          {/* <Form action={this.homePage}> */}
            <Button className="mb-4" color="primary" onClick={() => {this.props.history.push(this.homePage)}}>
              <i className="feather icon-home" />
              Back to Home
            </Button>
          {/* </Form> */}
        </div>
      </div>
    );
  }
}

export default UnAuthorised;
