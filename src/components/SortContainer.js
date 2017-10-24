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
  constructor() {
    super();

    this.startSort = this.startSort.bind(this);
  }

  startSort(e) {
    e.preventDefault();
    console.log('Start Sort');
    this.bubbleSort();
    console.log('End Sort');
  }

  bubbleSort() {

    let sortArray = [...this.props.pixelArray];
    var len = sortArray.length;
     for (let i = len - 1; i >= 0; i--){
       for(let j = 1; j <= i; j++){
         if(sortArray[j-1].props.sortValue > sortArray[j].props.sortValue){
             let temp = sortArray[j-1];
             sortArray[j-1] = sortArray[j];
             sortArray[j] = temp;
             updateArrays(sortArray);
          }

       }
     }
     return;
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
