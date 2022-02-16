import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import MainLayout from "./containers/templateConfig/mainLayout";
import Spinner from "./common/Spinner";
import Login from "./containers/login/login";
import AuthorizedRoute from "./common/AuthorizedRoute";
import { setAuthHeader, setRespInterceptor } from "./utils/auth";
import NotFound from "./pages/maintenance/404NotFound";
import UnAuthorised from "./pages/maintenance/UnAuthorised";

setAuthHeader();
setRespInterceptor();
class App extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/etrack" component={MainLayout} exact={false} />
            <Route path="/unauthorised" component={UnAuthorised} exact={false} />
            <Route path="*" component={NotFound} exact={true} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
