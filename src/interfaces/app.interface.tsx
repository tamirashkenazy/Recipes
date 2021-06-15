import firebase from '../firebase/firebase.utils'

export type CurrentUserType = firebase.User | null

// unsubscribe a user
export type UnsubscribeUserMethodType = firebase.Unsubscribe | null

export interface CurrentUserState {
  currentUser: CurrentUserType
}
