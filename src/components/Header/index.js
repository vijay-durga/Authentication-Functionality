import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <ul className="ul-cont">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </ul>
    )
  }
}

export default Header
