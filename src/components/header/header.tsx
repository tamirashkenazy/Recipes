import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { headerUseStyles } from './header.style'
import { useUserDataStore } from '../../stores/user.store'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

export const Header = () => {
  const classes = headerUseStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const currentUser = useUserDataStore((state) => state.currentUser)

  return (
    <div className={classes.root}>
      <AppBar color='default' position='static'>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          > */}
          {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant='h6' className={classes.title}>
            <a href='/'>Cookie Monster</a>
          </Typography>
          {/* <Button color='inherit' href='/login'>
            Login
          </Button> */}
          {currentUser ? (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem
                  onClick={() => {
                    auth.signOut()
                  }}
                >
                  Sign Out
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to='/login'>Sign In</Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
