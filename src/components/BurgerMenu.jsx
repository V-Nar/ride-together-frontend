import * as React from 'react'
import { useContext, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { AuthContext } from '../contexts/AuthContext'
import {Link} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'

const BurgerMenu = () => {
  const { isLoggedIn, logout } = useContext(AuthContext)
 
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null)
  };

  return (
    <div>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
      {/* change menu content according the login status */}
      {!isLoggedIn ?
      <div>
        <MenuItem onClick={handleClose}><Link to='/' style={{textDecoration: 'none'}}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/login' style={{textDecoration: 'none'}}>Log In</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/signup' style={{textDecoration: 'none'}}>Sign Up</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/about' style={{textDecoration: 'none'}}>About</Link></MenuItem>
      </div>
      :<div>
        <MenuItem onClick={handleClose}><Link to='/' style={{textDecoration: 'none'}}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/my-attendies' style={{textDecoration: 'none'}}>My Attendies</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/my-events' style={{textDecoration: 'none'}}>My Events</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/about' style={{textDecoration: 'none'}}>About</Link></MenuItem>
      </div>
      }
      </Menu>
    </div>
  );
}

export default BurgerMenu