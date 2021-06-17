import { DISPLAY_NAME, EMAIL } from '../constants/user.constants'
import firebase from '../firebase/firebase.utils'

export type UserAuthTypeFromDB = firebase.User | null

// unsubscribe a user
export type UnsubscribeUserMethodType = firebase.Unsubscribe | null

export interface User {
  id: string
  [EMAIL]: string
  [DISPLAY_NAME]: string
}

export type UserType = User | null
