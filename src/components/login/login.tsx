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
      <Grid container justify='space-evenly' spacing={3}>
        <Grid item>
          <SignInComponent />
        </Grid>
        <Grid item>
          <SignUpComponent />
        </Grid>
      </Grid>
    </div>
  )
}
