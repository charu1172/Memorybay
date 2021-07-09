import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { SignupContext } from './context/SignupContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // eslint-disable-next-line
  const [user,setUser] = useContext(SignupContext);
console.log(user);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!user.userName ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/signup"} />
        )
      }
    />
  );
};


export default PrivateRoute;