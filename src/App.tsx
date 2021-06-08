import React, { useEffect } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginComponent } from './components/login/login'
import { useUserDataStore } from './stores/user.store'

function App() {
  const { fetchUser, unsubscribe } = useUserDataStore((state) => ({
    fetchUser: state.fetchData,
    unsubscribe: state.unsubscribe
  }))

  useEffect(() => {
    fetchUser()
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [fetchUser, unsubscribe])

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/login'>
          <LoginComponent />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
