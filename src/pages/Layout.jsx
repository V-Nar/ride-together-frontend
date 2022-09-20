import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
