import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isUserLoggedIn } from "../utils/auth";

class AuthorizedRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAllowed: false,
      isLoading: true,
    };
  }

  render() {
    return (
      <>
        <Route
          path={this.props.path}
          component={this.props.component}
          exact={this.props.exact}
        />
      </>
    );
  }
}

export default AuthorizedRoute;
