import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";
import Spinner from "../../common/Spinner";
import { isUserLoggedIn, getUserDetails, isUserAuthorised } from "../../utils/auth";

const Routes = (props) => {

  const role = getUserDetails().roleName;

  return <Suspense fallback={<Spinner />}>
    <Switch>
      {routes.map((obj, i) => {
        return (
          <Route
            key={i}
            exact={obj.exact}
            path={obj.path}
            render={(matchProps) =>
              isUserLoggedIn() ? (
                isUserAuthorised(obj.path, role) ? (
                  obj.component ? (
                    <obj.component {...matchProps} />
                  ) : (
                    <h1>page not found</h1>
                  )
                ) : <Redirect to="/unauthorised"/>
              ) : (
                <Redirect to="/" />
              )
            }
          />
        );
      })}
      <Redirect from="/" to={props.defaultPath} />
    </Switch>
  </Suspense>
};

export default Routes;
