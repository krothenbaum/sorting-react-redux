import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import pixels from './pixels'

export default combineReducers({
  router: routerReducer,
  pixels
})
