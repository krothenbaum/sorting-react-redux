import React, { Component } from 'react';
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class BubbleSort extends Component {
  bubbleSort = () => {
    let newArr = this.props.sortArray;
    let length = this.props.sortArray.length;

    //closure to save each change in the sort
    const timeoutSort = (newArr, j) => {
      let k = 0;
      return setTimeout(() => {
        //Compare the adjacent positions
        if (newArr[j] < newArr[j - 1]) {
          let tmp = newArr[j];
          newArr[j] = newArr[j - 1];
          newArr[j - 1] = tmp;
          this.props.updateArrays(newArr);
        }
        k++;
      }, k*5);
    }

    for (let i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (let j = (length - i); j > 0; j--) {

            (timeoutSort(newArr, j));
        }
    }
  }

  render () {
    return (
      <div className="sort-container">
        {this.props.pixelArray}
        <button onClick={this.bubbleSort}>Start</button>
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
)(BubbleSort)
