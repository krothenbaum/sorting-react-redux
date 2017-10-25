import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Pixel from './Pixel';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class BubbleSort extends Component {
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

  componentDidMount() {

  }

  bubbleSort = () => {
    let array = this.state.pixels;
    let length = array.length;
    const timeoutSort = (array, j) => {
      let k = 0;
      return setTimeout(() => {
        //Compare the adjacent positions
        if(array[j].props.sortValue < array[j-1].props.sortValue) {
          let temp = array[j];
          array[j] = array[j-1];
          array[j-1] = temp;
          this.setState({pixels: [...array]});
        }
        k++;
      }, k);
    }

    for(let i = length - 1; i >= 0; i--) {
      for(let j = length -1; j > 0; j--) {
        timeoutSort(array, j);
      }
    }
  }

  render () {
    return (
      <div className="sort-container">
        {this.state.pixels}
        <button onClick={this.bubbleSort}>Start Bubble Sort</button>
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
)(BubbleSort)
