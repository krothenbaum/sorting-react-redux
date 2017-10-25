
// export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
// export const INCREMENT = 'counter/INCREMENT'
// export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
// export const DECREMENT = 'counter/DECREMENT'
import React from 'react';
import Pixel from '../components/Pixel';

export const UPDATE_ARRAYS = 'pixels/UPDATE_ARRAYS';
export const CREATE_ARRAYS = 'pixels/CREATE_ARRAYS';

const initialState = {
  colorArray: [],
  sortArray: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case CREATE_ARRAYS:
      return {
        ...state,
        colorArray: [...action.colors],
        sortArray: [...action.values],
      }
    case UPDATE_ARRAYS:

      return {
        ...state
      }

    default:
      return state
  }
}

export const createArrays = () => {
  let values = [];
  let colors = [];
  let colorValues = ["red","yellow","green","blue","violet"];

  for(let i = 0; i < 256; i++) {
    let rand = Math.floor(Math.random() * colorValues.length);
    let randomColor = colorValues[rand]
    values.push(rand);
    colors.push(randomColor);
  }

  return dispatch => {
    dispatch({
      type: CREATE_ARRAYS,
      colors: colors,
      values: values
    })
  }
}

export const updateArrays = (array) => {
  let tempPixelArray = [];
  let colorValues = ["red","yellow","green","blue","violet"];
  for(let i = 0; i < 256; i++ ) {
    let randomColor = colorValues[array[i]];
    tempPixelArray.push(<Pixel color={randomColor} key={i} sortValue={array[i]}/>);
  }

  return dispatch => {
    dispatch({
      type: UPDATE_ARRAYS
    })
  }
}
