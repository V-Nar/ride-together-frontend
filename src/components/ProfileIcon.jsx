import React, { useContext, useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import { AuthContext } from '../contexts/AuthContext'

const ProfileIcon = () => {
  const { user, isLoggedIn } = useContext(AuthContext)
  const { logout, isLogged } = useContext(AuthContext)
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
                    <Button href='/login' color='primary' variant='contained'>Log In</Button>
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
                        <MenuItem onClick={handleClose}><Link href='/profile' underline='none'>Profile</Link></MenuItem>
                        <MenuItem onClick={logout}><Link href='/' underline='none'>Log Out</Link></MenuItem>
                    </Menu>
                </div>
              }
                
    </div>
  )
}

export default ProfileIcon