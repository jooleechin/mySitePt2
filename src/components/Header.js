
import React, { Component } from 'react'

class Header extends Component {
  render() {
    return(
      <div>
        <nav className="nav justify-content-center" >
          <a className="nav-link" href="index.html">home</a>
          <a className="nav-link" href="profile.html#top">profile</a>
          <a className="nav-link" href="contact.html#top2">contact</a>
        </nav>
      </div>
    )
  }
}

export default Header
