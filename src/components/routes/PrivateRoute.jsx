import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authUserAction } from "../../actions/authActions";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { loading, authenticated } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUserAction());
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
