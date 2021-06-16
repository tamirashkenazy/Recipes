import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { UserAuthTypeFromDB } from '../interfaces/app.interface'

const firebaseConfig = {
  apiKey: 'AIzaSyAplXyVORSlx0b9Nr3qGDh7UXpaHZYdJZw',
  authDomain: 'vega-nosaur.firebaseapp.com',
  projectId: 'vega-nosaur',
  storageBucket: 'vega-nosaur.appspot.com',
  messagingSenderId: '15564298735',
  appId: '1:15564298735:web:3a932b3a3d2bb409b7be1a',
  measurementId: 'G-02B8QT0ZSQ'
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

export const createUserProfileDocument = async (
  userAuth: UserAuthTypeFromDB,
  additionalData?: { [x: string]: unknown }
) => {
  // userAuth is returnd from the login
  if (!userAuth) return

  const userRef: firebase.firestore.DocumentReference = firestore.doc(
    `users/${userAuth.uid}`
  )

  const snapShot: firebase.firestore.DocumentSnapshot = await userRef.get()
  // if there is no such document in firebase - will create one
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error('error creating user', error.message)
    }
  }

  return userRef
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).then((user) => {})
}

export default firebase
