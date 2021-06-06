import React, { useState } from 'react'
import { SignInFormProps } from './sign-in.interface'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import clsx from 'clsx'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { signInUseStyles } from './sign-in.styles'
import { Button } from '@material-ui/core'

export const SignInComponent = () => {
  const classes = signInUseStyles()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [values, setValues] = useState<SignInFormProps>({
    email: '',
    password: ''
  })
  console.log(values)
  const handleChange =
    (prop: keyof SignInFormProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <React.Fragment>
      <div>
        <TextField
          label='Email'
          className={clsx(classes.margin, classes.textField)}
          value={values.email}
          onChange={handleChange('email')}
          variant='outlined'
        />
      </div>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant='outlined'
        >
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
        <Button variant='contained'>Sign In</Button>
        <Button color='primary' variant='contained'>
          Google
        </Button>
      </div>
    </React.Fragment>
  )
}
