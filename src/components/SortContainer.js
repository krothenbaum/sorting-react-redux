import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BubbleSort from './BubbleSort';
// import CocktailSort from './CocktailSort';
import CombSort from './CombSort'

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

// import '../css/main.css'

class SortContainer extends Component {

  componentDidMount() {
    this.props.createArrays();
  }

  render () {
    return (
      <div className="container">
        <BubbleSort />
        <CombSort />
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
