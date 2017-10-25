import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class CombSort extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isSorted: true
  //   };
  // }

  combSort = () => {
    let array = this.props.sortArray;

    const timeoutSort = (array, i, interval) => {
      let k = 0;
      return setTimeout(() => {
        if (array[i] > array[i + interval]) {
          let small = array[i + interval];
          array[i + interval] = array[i];
          array[i] = small;
          this.props.updateArrays(array);
        }
        k++;
      }, k*5);
    }

    let interval = Math.floor(array.length / 1.3);
    while (interval > 0) {
      for(let i = 0 ; i + interval < array.length; i++) {
        timeoutSort(array, i, interval);
      }
      interval = Math.floor(interval / 1.3);
    }
  }

  render () {
    return (
      <div className="sort-container">
        {this.props.pixelArray}
        <button onClick={this.combSort}>Start</button>
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
)(CombSort)
