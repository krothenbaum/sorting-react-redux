import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Pixel from './Pixel';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class CocktailSort extends Component {
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

  cocktailSort = () => {
    let array = this.state.pixels;
    let length = array.length;
    let isSorted = true;

    const timeoutSort = (array, k) => {
      return setTimeout(() => {
        this.setState({pixels: [...array]});
      }, k);
    }

    // const timeoutSort2 = (array, j) => {
    //   let k = 0;
    //   return setTimeout(() => {
    //
    //     k++;
    //   }, k);
    // }

    while (isSorted) {

      for (let i = 0; i < length - 1;i++) {
        let k = 0;
        if (array[i].props.sortValue > array[i + 1].props.sortValue) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i+1] = temp;
            isSorted = true;
            timeoutSort(array, k);
            k++;
            // this.setState({pixels: [...array]});
         }
      }

      if (!isSorted)
          break;

      isSorted = false;

      for (let j = length - 1; j > 0; j--) {
        let l = 0;
        if (array[j-1].props.sortValue > array[j].props.sortValue) {
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            isSorted = true;
            timeoutSort(array, l);
            l++;
            // this.setState({pixels: [...array]});
         }
      }
    }
  }

  render () {
    return (
      <div className="sort-container">
        {this.state.pixels}
        <button onClick={this.cocktailSort}>Start</button>
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
)(CocktailSort)
