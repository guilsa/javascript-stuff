import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
// import { Router, Route, hashHistory } from 'react-router'
import { Router, hashHistory, Route } from 'react-router'

import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
