/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate, Route,Routes } from 'react-router-dom';
import usePermission from './UserPermissions';

const PrivateRoute = ({ element, permissions , ...rest }) => {
  // if (!Array.isArray(permissions) || permissions.length === 0) {
  //   // Handle case where permissions are not provided or invalid
  //   return <Navigate to="/404" replace />;
  // }
  let hasPermission = true;

  // if (permissions) {
  //   hasPermission = usePermission(permissions + "read");
  // }




  return (
    <>

<Routes>
    <Route
      {...rest}
      element={hasPermission ? element : null}
    />
    </Routes>
    </>
  );
};

export default PrivateRoute;

