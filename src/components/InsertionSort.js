import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Pixel from './Pixel';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class InsertionSort extends Component {
  constructor(props) {
    super(props);
    let tempPixelArray = [];
    for(let i = 0; i < 256; i++ ) {
      tempPixelArray.push(<Pixel color={props.colorArray[i]} key={i} sortValue={props.sortArray[i]}/>);
    }
    let state = {
      pixels: tempPixelArray
    }
    this.state = state;
  }

  insertionSort = () => {
    let array = this.state.pixels;
    let length = array.length;

    //closure to save each change in the sort
    const timeoutSort = (array, i) => {
      let k = 0;
      return setTimeout(() => {
        //Compare the adjacent positions
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j].props.sortValue > temp.props.sortValue) {
          array[j + 1] = array[j];
          j--;
          // this.setState({pixels: [...array]})
        }
        array[j + 1] = temp;
        this.setState({pixels: [...array]})
        k++;
      }, k);
    }

    for(var i = 0; i < length; i++) {
      timeoutSort(array, i);
    }
  }

  render () {
    return (
      <div className="sort-container">
        {this.state.pixels}
        <button onClick={this.insertionSort}>Start insertion Sort</button>
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
)(InsertionSort)
