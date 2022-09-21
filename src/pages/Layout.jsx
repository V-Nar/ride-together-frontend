import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main style={{ marginTop: "4.5rem" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
