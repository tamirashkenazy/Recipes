import create, { State } from 'zustand'
import firebase, { auth } from '../firebase/firebase.utils'
import {
  FetchStatus,
  LoadingStatus
} from '../interfaces/fetch-status.interface'

interface UserDataStore extends State, FetchStatus {
  currentUser: firebase.User | null
  fetchData: () => void
  unsubscribe: firebase.Unsubscribe | null
}

export const useUserDataStore = create<UserDataStore>((set, get) => ({
  currentUser: null,
  error: null,
  loading: LoadingStatus.INIT,
  unsubscribe: null,
  fetchData: () => {
    set({ loading: LoadingStatus.STARTED })
    const unsubscribe = auth.onAuthStateChanged((user) => {
      set({
        currentUser: user
      })
      set({
        loading: LoadingStatus.FINISHED,
        error: null,
        unsubscribe: unsubscribe
      })
    })
  }
}))
