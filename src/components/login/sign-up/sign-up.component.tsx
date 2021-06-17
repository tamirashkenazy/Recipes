import React, { useState } from 'react'
import { SignUpFormProps } from './sign-up.interface'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import clsx from 'clsx'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { signUpUseStyles } from './sign-up.styles'
import { Button, Divider, Paper, Typography } from '@material-ui/core'
import {
  auth,
  createUserProfileDocument
} from '../../../firebase/firebase.utils'
import { signUpInitFormValues } from './sign-up.constants'
import { commonStyles } from '../../../styles/common.styles'
import { DISPLAY_NAME, EMAIL } from '../../../constants/user.constants'
import { CONFIRM_PASSWORD, PASSWORD } from '../login.constants'

export const SignUpComponent = () => {
  const classes = signUpUseStyles()
  const commonStyle = commonStyles()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [values, setValues] = useState<SignUpFormProps>(signUpInitFormValues)
  const [error, setError] = useState<string | null>(null)

  const handleChange =
    (prop: keyof SignUpFormProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    const { displayName, password, confirmPassword, email } = values
    if (password !== confirmPassword) {
      setError('Passwords do not match')
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      createUserProfileDocument(user, { displayName })
      setValues(signUpInitFormValues)
    } catch (error) {
      const message = (error as unknown as Error).message
      setError(message)
      console.error(message)
    }
  }
  return (
    <Paper className={clsx(commonStyle.textCenter, commonStyle.padding)}>
      <Typography className={commonStyle.marginBottom} variant='h6'>
        Sign Up
      </Typography>
      <Divider className={commonStyle.marginBottom} />
      <div>
        <TextField
          label='Name'
          className={clsx(classes.margin, classes.textField)}
          value={values[DISPLAY_NAME]}
          onChange={handleChange(DISPLAY_NAME)}
          variant='outlined'
          required
        />
      </div>
      <div>
        <TextField
          label='Email'
          className={clsx(classes.margin, classes.textField)}
          value={values[EMAIL]}
          onChange={handleChange(EMAIL)}
          variant='outlined'
          required
        />
      </div>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant='outlined'
          required
        >
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            value={values[PASSWORD]}
            onChange={handleChange(PASSWORD)}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant='outlined'
          required
        >
          <InputLabel htmlFor='outlined-adornment-confirm-password'>
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-confirm-password'
            type={showPassword ? 'text' : 'password'}
            value={values[CONFIRM_PASSWORD]}
            onChange={handleChange(CONFIRM_PASSWORD)}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={130}
          />
        </FormControl>
      </div>
      <div className={commonStyle.marginTop}>
        <Button variant='contained' onClick={handleSubmit}>
          Sign Up
        </Button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Paper>
  )
}
