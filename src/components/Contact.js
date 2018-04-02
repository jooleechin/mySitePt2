
import React, { Component } from 'react'
import instaLogo from '../images/instaLogo.png'
import github from '../images/githubLogo.png'
import linkedin from '../images/linkedinLogo.png'

class Contact extends Component {
  render() {
    return(
      <div>
        <div className="together">
          <div className="blurb" id="top2">
            <h2>dont be a stranger!</h2>
          </div>
          <div className="email">
            <p>jooleechin@gmail.com | (c)847.323.6137</p>
          </div>
        </div>
        <div className="social_media">
          <ul className="list" />
            <li>
              <img src={instaLogo} alt ={instagram} />
              <a href="https://www.instagram.com/_hijools/">instagram</a>
            </li>
            <li>
              <img src={github} />
              <a href="https://github.com/jooleechin">github</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact
