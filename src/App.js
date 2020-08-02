import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
    return (
        <Router>
            <div className="body">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
