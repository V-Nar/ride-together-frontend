import React from 'react'
import BurgerMenu from './BurgerMenu'
import Typography from '@mui/material/Typography'
import SearchBar from './SearchBar'
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import ProfileIcon from './ProfileIcon'

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar style={{justifyContent: "space-between"}}>
        <BurgerMenu />
        <Typography style={{fontWeight:'bold'}} >RIDE TOGETHER</Typography>
        <div style={
          {display:'flex',
           flexWrap:'nowrap',
           justifyContent:'space-between',
           alignItems: 'center',
           gap:'1rem'
          }}>
          <SearchBar />
          <ProfileIcon />
        </div>
      </Toolbar>
   </AppBar>
  )
}

export default NavBar