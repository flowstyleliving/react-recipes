// Corporate

import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reduxReactFirebase, firebaseStateReducer } from 'redux-react-firebase'


let finalCreateStore = compose(
  reduxReactFirebase('https://reactrecipes-2381a.firebaseio.com/'),
  // applying middleware before...
  applyMiddleware(thunk, logger())
  //...store is created
)(createStore)

export default function configureStore(initialState = { recipes: [] }) {
  // newState is created by applying Middleware, createStore, and rootReducer(actions)
  return finalCreateStore(rootReducer, initialState)
}
