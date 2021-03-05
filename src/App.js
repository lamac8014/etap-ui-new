import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./containers/templateConfig/mainLayout";
import Spinner from "./common/Spinner";
import Login from "./containers/login/login";
import { isUserLoggedIn } from "./utils/auth";

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" component={MainLayout} />
        </Switch>
      </Suspense>
    );
  }
}

export default App;
