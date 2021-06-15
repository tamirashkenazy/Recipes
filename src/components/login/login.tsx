import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'

const useGridStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
)

export const LoginComponent = () => {
  const classes = useGridStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <SignInComponent />
        </Grid>
        <Grid item xs={6} sm={6}>
          <SignUpComponent />
        </Grid>
      </Grid>
    </div>
  )
}
