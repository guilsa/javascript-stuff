import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/react/react-router">React Router</NavLink></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
