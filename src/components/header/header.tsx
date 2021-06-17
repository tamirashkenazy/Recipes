import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { headerUseStyles } from './header.style'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { UserType } from '../../interfaces/user.interface'

export const Header: FunctionComponent<{ currentUser: UserType }> = ({
  currentUser
}) => {
  const classes = headerUseStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar color='default' position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <a href='/'>VEGANOSAUR</a>
          </Typography>
          {currentUser ? (
            <div>
              <Typography display='inline'>
                Hello {currentUser.displayName}
              </Typography>
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
