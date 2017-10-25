import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Pixel from './Pixel';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class CombSort extends Component {
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

  combSort = () => {
    let array = this.state.pixels;
    let length = array.length;

    const timeoutSort = (array, i, interval) => {
      let k = 0;
      return setTimeout(() => {
        if (array[i].props.sortValue > array[i + interval].props.sortValue) {
          let small = array[i + interval];
          array[i + interval] = array[i];
          array[i] = small;
          this.setState({pixels: [...array]});
        }
        k++;
      }, k);
    }

    let interval = Math.floor(length / 1.3);
    while (interval > 0) {
      for(let i = 0 ; i + interval < length; i++) {
        timeoutSort(array, i, interval);
      }
      interval = Math.floor(interval / 1.3);
    }
  }

  render () {
    return (
      <div className="sort-container">
        {this.state.pixels}
        <button onClick={this.combSort}>Start Comb Sort</button>
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
)(CombSort)
