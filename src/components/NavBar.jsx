import React from "react";
import BurgerMenu from "./BurgerMenu";
import Typography from "@mui/material/Typography";
import SearchBar from "./SearchBar";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import ProfileIcon from "./ProfileIcon";
import { Link } from "react-router-dom";

// gathering all navbar components to a global rendering
const NavBar = () => {
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <BurgerMenu />
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Typography style={{ fontWeight: "bold" }}>RIDE TOGETHER</Typography>
        </Link>
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <SearchBar />
          <ProfileIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
