import React from 'react'
import './App.css'
import { Header } from './components/header/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginComponent } from './components/login/login'
import { auth } from './firebase/firebase.utils'
import {
  CurrentUserState,
  UnsubscribeUserMethodType
} from './interfaces/app.interface'

class App extends React.Component<{}, CurrentUserState> {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth: UnsubscribeUserMethodType = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
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
        </Switch>
      </Router>
    )
  }
}

export default App
