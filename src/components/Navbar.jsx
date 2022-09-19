import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const pull_data = (data) => {
    console.log(data);
  };
  return (
    <div className="Navbar">
      <BurgerMenu />
      <h1>
        <Link to="/">Ride Together</Link>
      </h1>
      <SearchBar func={pull_data} />
      {/* <LoggedStatus /> */}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
