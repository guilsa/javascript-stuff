// Reflections/Commentary from Lesson 6

// Repos.js

import React from 'React' // load React
import { Link } from 'react-router' // load Link component in react-router

export default React.createClass({ // create a component
  render({ // prepare render method
    return(
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Link to="/repos/react/react-router">React Router</Link></li> // link to route repos/react/react-router
          <li><Link to="/repos/facebook/react">React</Link></li> // idem
        </ul>
      </div>
    )
  })
})

// NavLink.js
// blueprint of NavLink component
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){
    // React's Link knows whether the path it links to is active so we can style it differently.
    // so we're wrapping the primary nav links into a special "NavLink" component
    return <Link {...this.props} activeClassName="active"/>
  }
})

// App.js
import React from 'react'
import NavLink from './NavLink' // load NavLink

export default React.createClass({ // prepare App component
  render(){
    <div>
      <h1>Ghettohub Issues</h1>
      <ul role="nav">
        <li><NavLink to="/about">About</NavLink></li> // reuse NavLink, link to xyz
        <li><NavLink to="/repos">Repos</NavLink></li> // idem
      </ul>
      // render chidren () inside App component
      // this is accessing the inner html or nested components of another component
      // similar to ember yield or angular transclusion or web component's content
      // App knows about its children because of the html nesting on index.js.
      { this.props.children }
    </div>
  }
})

// Repo.js
import React from 'react'
export default React.createClass({
  render(){
    return (
      <div>
        // Passing a string via URL params, thanks to the Router.
        <h2>{ this.props.params.repoName }</h2> //
      </div>
    )
  }
})

// index.js
import React from 'react'
import {render} from 'react-dom'
import App from './modules/App'
import { Router, hashHistory, Route } from 'react-router'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

render((
  <Router>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
