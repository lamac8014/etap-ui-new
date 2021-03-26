import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./containers/templateConfig/mainLayout";
import Spinner from "./common/Spinner";
import Login from "./containers/login/login";
import AuthorizedRoute from "./common/AuthorizedRoute";
import { setAuthHeader, setRespInterceptor } from "./utils/auth";

setAuthHeader();
setRespInterceptor();
class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route path="/etrack" component={MainLayout} exact={false} />
        </Switch>
      </Suspense>
    );
  }
}

export default App;
