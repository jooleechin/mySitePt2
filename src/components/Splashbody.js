
import React, { Component } from 'react'
import yayoi from '../images/yayoi.jpg'

class Splashbody extends Component {
  render() {
    return(
      <div className="content">
        <h1 className="name">JOOLEE</h1>
        <div className="words">
            <p>software developer.<br />seattle.</p>
        </div>
        <div className="photo">
            <img src={yayoi} alt={yayoi}/>
        </div>
      </div>
    )
  }
}

export default Splashbody
