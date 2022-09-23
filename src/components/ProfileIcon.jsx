import React, { useContext, useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AuthContext } from "../contexts/AuthContext";

const ProfileIcon = () => {
  const { isLoggedIn, logout, user, isLoading } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(user);
  return (
    <div>
      {/* conditionning the render to loggin status */}
      {!isLoggedIn ? (
        <div>
          <Link to="/login">
            <Button color="primary" variant="contained">
              Log In
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link
              to={`/profile/${user._id}`}
              style={{ textDecoration: "none" }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <Link to="/new" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose}>Create an Event</MenuItem>
            </Link>
            <Link to="/" onClick={logout} style={{ textDecoration: "none" }}>
              <MenuItem>Log Out</MenuItem>
            </Link>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
