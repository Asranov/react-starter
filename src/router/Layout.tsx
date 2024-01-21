import React from "react";
import { Outlet } from "react-router-dom";
import Router from "./Router";

const Layout: React.FC = () => {
  return (
    <>
      <Router />
      <Outlet />
    </>
  );
};

export default Layout;
