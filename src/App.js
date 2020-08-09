import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Media from './components/Media'
import NoMatch from './components/NoMatch'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/media' component={Media} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
