import React, { Component } from 'react';
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BubbleSort from './BubbleSort';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

// import '../css/main.css'

class SortContainer extends Component {
  // constructor() {
  //   super();
  //
  //   // this.startSort = this.startSort.bind(this);
  //   // this.timeoutSort = this.timeoutSort.bind(this);
  // }

  startSort = (e) => {
    e.preventDefault();
    console.log('Start Sort');
    // this.bubbleSort();
    this.bubbleSort();
    console.log('End Sort');
  }





  componentDidMount() {
    this.props.createArrays();
  }

  render () {
    return (
      <div className="container">
        <BubbleSort />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  colorArray: state.pixels.colorArray,
  sortArray: state.pixels.sortArray,
  pixelArray: state.pixels.pixelArray
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateArrays,
  createArrays
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortContainer)
