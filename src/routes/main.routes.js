import React, { useEffect, useState } from "react";
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";
import { routesData,flattenRoutes } from "./routes.data";

export const MainRoutes = () => {
  return (
    <Switch>
      <Redirect from="/" to="/admin/dashboard" exact />
      {flattenRoutes().map((route,key)=>(
        <Route path={route.layout + route.path} component={route.component} key={route.path} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};