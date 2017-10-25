import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BubbleSort from './BubbleSort';
import CocktailSort from './CocktailSort';
import CombSort from './CombSort';
import InsertionSort from './InsertionSort';
import MergeSort from './MergeSort';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

// import '../css/main.css'

class SortContainer extends Component {
  constructor(props) {
    super(props);
    props.createArrays();
  }

  render () {
    // this.props.createArrays();
    return (
      <div className="container">
        <BubbleSort />
        <CombSort />
        <InsertionSort />
        <MergeSort />
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
)(SortContainer)
