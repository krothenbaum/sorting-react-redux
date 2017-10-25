import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  updateArrays,
  createArrays
} from '../reducers/pixels';

class CocktailSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: true
    };
  }

  cocktailSort = () => {
    let newArr = this.props.sortArray;
    // let isSorted = true;

    const timeoutSort = (newArr, i) => {
      console.log('START FIRST SORT');
      let k = 0;
      return setTimeout(() => {
        if (newArr[i] > newArr[i + 1]) {
            let temp = newArr[i];
            newArr[i] = newArr[i + 1];
            newArr[i+1] = temp;
            this.setState({isSorted: true});
            console.log('FIRST IF');
            this.props.updateArrays(newArr);
         }
         k++;
      }, k*100);
    }

    const timeoutSort2 = (newArr, j) => {
      let k = 0;
      return setTimeout(() => {
        if (newArr[j-1] > newArr[j]) {
            let temp = newArr[j];
            newArr[j] = newArr[j - 1];
            newArr[j - 1] = temp;
            this.setState({isSorted: true});
            console.log('SECOND IF');
            this.props.updateArrays(newArr);
         }
        k++;
      }, k*5);
    }

    while (this.state.isSorted) {
      for (let i = 0; i < newArr.length - 1;i++) {
        (timeoutSort(newArr, i));
      }

      if (!this.state.isSorted)
          break;

      this.setState({isSorted: false});

      for (let j = newArr.length - 1; j > 0; j--) {
        (timeoutSort2(newArr, j));
      }

    }
  }

  render () {
    return (
      <div className="sort-container">
        {this.props.pixelArray}
        <button onClick={this.cocktailSort}>Start</button>
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
)(CocktailSort)
