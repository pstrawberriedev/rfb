import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Nav from './components/Nav'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import StorePicker from './components/StorePicker'
import App from './components/App'

// Routing
const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route exact path="/store/:storeId" component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

render(
  <div id="main-wrap">
    <Nav />
    <Routes />
    <Footer />
  </div>,
  document.getElementById('mount')
)
