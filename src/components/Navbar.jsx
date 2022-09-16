import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import LoggedStatus from './LoggedStatus'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className="Navbar">
        <BurgerMenu />
        <h1><Link to="/">Ride Together</Link></h1>
        <SearchBar />
        <LoggedStatus />
    </div>

  )
}

export default Navbar