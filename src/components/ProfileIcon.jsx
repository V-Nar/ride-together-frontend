import React, { useContext, useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import { AuthContext } from '../contexts/AuthContext'

const ProfileIcon = () => {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {!isLoggedIn ?
        <div>
            <Link to='/login'>
            <Button color='primary' variant='contained'>Log In</Button>
            </Link>
        </div>
        :<div>
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
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to='/profile' style={{textDecoration: 'none'}}>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/my-attendies' style={{textDecoration: 'none'}}>My Attendies</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/my-events' style={{textDecoration: 'none'}}>My Events</Link></MenuItem>
                <MenuItem ><Link to='/' onClick={logout} style={{textDecoration: 'none'}}>Log Out</Link></MenuItem>
            </Menu>
        </div>
      }
                
    </div>
  )
}

export default ProfileIcon