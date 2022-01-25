import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
