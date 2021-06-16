import firebase from '../firebase/firebase.utils'

export type UserAuthTypeFromDB = firebase.User | null

// unsubscribe a user
export type UnsubscribeUserMethodType = firebase.Unsubscribe | null

export interface User {
  displayName: string
  email: string
}

export interface ID_AND_PROPS {
  id: string
  [x: string]: string
}

export type currentUserType = ID_AND_PROPS | null
export interface CurrentUserState {
  currentUser: currentUserType
}
