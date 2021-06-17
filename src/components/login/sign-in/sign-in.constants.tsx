import { EMAIL } from '../../../constants/user.constants'
import { PASSWORD } from '../login.constants'
import { SignInFormProps } from './sign-in.interface'

export const signInInitValues: SignInFormProps = {
  [EMAIL]: '',
  [PASSWORD]: ''
}
