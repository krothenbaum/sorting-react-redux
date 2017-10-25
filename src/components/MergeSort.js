import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Pixel from './Pixel';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class MergeSort extends Component {
  constructor(props) {
    super(props);
    let tempPixelArray = [];
    for(let i = 0; i < 10; i++ ) {
      tempPixelArray.push(<Pixel color={props.colorArray[i]} key={i} sortValue={props.sortArray[i]}/>);
    }
    let state = {
      pixels: tempPixelArray
    }
    this.state = state;
  }



  merge = (left, right) => {
    //closure to save each change in the sort
    // const timeoutSort = (left, right) => {
    //   let k = 0;
    //   return setTimeout(() => {
    //     let result = [];
    //
    //     while (left.length && right.length) {
    //       if (left[0].props.sortValue <= right[0].props.sortValue) {
    //           result.push(left.shift());
    //       } else {
    //           result.push(right.shift());
    //       }
    //     }
    //
    //     while (left.length)
    //       result.push(left.shift());
    //     while (right.length)
    //       result.push(right.shift());
    //
    //     this.setState({pixels: [...result]});
    //     return result;
    //   }, k);
    // }
    // timeoutSort(left,right);
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft].props.sortValue <= right[indexRight].props.sortValue) {
          result.push(left[indexLeft]);
          indexLeft++;
      } else {
          result.push(right[indexRight]);
          indexRight++;
      }
    }

    // while (left.length)
    //   result.push(left.shift());
    // while (right.length)
    //   result.push(right.shift());

    // this.setState({pixels: [...result]});
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  }

  mergeSort = () => {
    let array = this.state.pixels;
    let length = array.length;

    if (length === 1) {
        return array;
    }


    let middle = Math.floor(length / 2);
    let left   = array.slice(0, middle);
    let right  = array.slice(middle);
    console.log(left,right);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  render () {
    return (
      <div className="sort-container">
        {this.state.pixels}
        <button onClick={this.mergeSort}>Start Merge Sort</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  colorArray: state.pixels.colorArray,
  sortArray: state.pixels.sortArray
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateArrays,
  createArrays
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MergeSort)
