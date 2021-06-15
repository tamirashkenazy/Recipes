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
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils'
import { commonStyles } from '../../../styles/common.styles'
import { signInValues } from './sign-in.constants'

export const SignInComponent = () => {
  const classes = signInUseStyles()
  const commonStyle = commonStyles()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [signInFormValues, setSignInFormValues] =
    useState<SignInFormProps>(signInValues)
  const [error, setError] = useState<string | null>(null)

  const handleChange =
    (prop: keyof SignInFormProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSignInFormValues({ ...signInFormValues, [prop]: event.target.value })
    }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const signInWithEmailPassword = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    const { email, password } = signInFormValues
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setSignInFormValues(signInValues)
    } catch (error) {
      const message = (error as unknown as Error).message
      setError(message)
      console.error(message)
    }
  }

  return (
    <div className={commonStyle.textCenter}>
      <div>
        <TextField
          label='Email'
          className={clsx(classes.margin, classes.textField)}
          value={signInFormValues.email}
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
            value={signInFormValues.password}
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
        <Button variant='contained' onClick={signInWithEmailPassword}>
          Sign In
        </Button>
        <Button color='primary' variant='contained' onClick={signInWithGoogle}>
          Google
        </Button>
      </div>
      {error && <div>{error}</div>}
    </div>
  )
}
