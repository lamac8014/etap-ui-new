import React, { Component } from "react";
import { Form, Button } from "reactstrap";
import { getHomePageforCurrentRole, getUserDetails } from "../../utils/auth";

class NotFound extends Component {

  componentDidMount(){
    const role = getUserDetails().roleName;
    this.homePage = getHomePageforCurrentRole(role);
  }

  render() {
    return (
      <div className="auth-wrapper offline" style={{ background: "#ffffff" }}>
        <div className="text-center">
          <h1 className="display-1">404</h1>
          <h3 className="mb-4">Page not found</h3>
          <h5 className="text-muted mb-4">
            Oops! The page you requested doesnot exist
          </h5>
          {/* <Form action="/"> */}
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

export default NotFound;
