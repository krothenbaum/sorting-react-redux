import React, { Component } from 'react';
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import Pixel from './Pixel';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels'

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

  timeoutSort = (newArr, j) => {
    let k = 0;
    return setTimeout(() => {
      if (newArr[j] < newArr[j - 1]) {
        let tmp = newArr[j];
        newArr[j] = newArr[j - 1];
        newArr[j - 1] = tmp;
        this.props.updateArrays(newArr);
      }
      k++;
    }, k*5);
  }

  bubbleSort = () => {
    // const update = this.props.updateArrays;
    let newArr = this.props.sortArray;
    let length = this.props.sortArray.length;
    for (let i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (let j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            console.log(this.timeoutSort);
            (this.timeoutSort(newArr, j));
            // if (newArr[j] < newArr[j - 1]) {
            //     //Swap the numbers
            //     let tmp = newArr[j];
            //     newArr[j] = newArr[j - 1];
            //     newArr[j - 1] = tmp;
            //     this.props.updateArrays(newArr);
            // }
        }
    }
  }

  componentDidMount() {
    this.props.createArrays();
  }

  render () {
    return (
      <div className="sort-container">
        {this.props.pixelArray}
        <button onClick={this.startSort}>Start</button>
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
