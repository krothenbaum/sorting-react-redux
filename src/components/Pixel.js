import React, { Component } from 'react';

// import '../css/main.css'

class Pixel extends Component {

  render () {
    return (
      <div className={`pixel ${this.props.color}`}>
      </div>
    )
  }
}

export default Pixel
