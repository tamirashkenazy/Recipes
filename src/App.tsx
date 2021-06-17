import React from 'react'
import './App.css'
import { Header } from './components/header/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginComponent } from './components/login/login'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {
  UserType,
  UnsubscribeUserMethodType
} from './interfaces/user.interface'
import { Home } from './components/home/home.component'

interface CurrentUserState {
  currentUser: UserType
}

class App extends React.Component<{}, CurrentUserState> {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth: UnsubscribeUserMethodType = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                email: snapShot.get('email'),
                displayName: snapShot.get('displayName')
              }
            })
          })
        }
      } else {
        this.setState({
          currentUser: null
        })
      }
    })
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/login'>
            <LoginComponent />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
