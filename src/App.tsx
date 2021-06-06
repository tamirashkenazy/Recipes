import React from 'react'
import './App.css'
import { Header } from './components/header/header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginComponent } from './components/login/login'

function App() {
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
