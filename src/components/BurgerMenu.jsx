import * as React from 'react'
import { useContext, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { AuthContext } from '../contexts/AuthContext'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'

const BurgerMenu = () => {
  const { user, isLoggedIn } = useContext(AuthContext)
  const { logout, isLogged } = useContext(AuthContext)
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
      {!isLoggedIn ?
      <div>
        <MenuItem onClick={handleClose}><Link href='/' underline='none'>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/login' underline='none'>Log In</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/signup' underline='none'>Sign Up</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/about' underline='none'>About</Link></MenuItem>
      </div>
      :<div>
        <MenuItem onClick={handleClose}><Link href='/' underline='none'>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/profile' underline='none'>My Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/my-attendies' underline='none'>My Attendies</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/my-events' underline='none'>My Events</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/about' underline='none'>About</Link></MenuItem>
        <MenuItem onClick={logout}><Link href='/' underline='none'>Log Out</Link></MenuItem>
      </div>
      }
      </Menu>
    </div>
  );
}

export default BurgerMenu