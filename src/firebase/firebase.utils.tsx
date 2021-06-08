import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
