import { DISPLAY_NAME, EMAIL } from '../../../constants/user.constants'
import { CONFIRM_PASSWORD, PASSWORD } from '../login.constants'

export interface SignUpFormProps {
  [DISPLAY_NAME]: string
  [EMAIL]: string
  [PASSWORD]: string
  [CONFIRM_PASSWORD]: string
}
