import { DISPLAY_NAME, EMAIL } from '../../../constants/user.constants'
import { CONFIRM_PASSWORD, PASSWORD } from '../login.constants'
import { SignUpFormProps } from './sign-up.interface'

export const signUpInitFormValues: SignUpFormProps = {
  [DISPLAY_NAME]: '',
  [EMAIL]: '',
  [PASSWORD]: '',
  [CONFIRM_PASSWORD]: ''
}
