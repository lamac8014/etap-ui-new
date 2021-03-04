import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "./containers/templateConfig/mainLayout";
import Spinner from "./common/Spinner";

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
