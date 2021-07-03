import React from 'react'
import Grid from '@material-ui/core/Grid'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import './login.css'

export const LoginComponent = () => {
  return (
    <div className={'login-page-bg'}>
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
