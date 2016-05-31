// Worker

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../components/App'
import configureStore from '../redux/store'

let initialState = {
  recipes: [{
    id: 0,
    pic: 'pic goes here',
    title: 'Omelette',
    text: 'Breakfast classic',
    ingredients: ['Eggs', 'Vegan Butter']
  }]
}

// Takes the from store.js and brings it in here
let store = configureStore(initialState)

render(
  // This wraps the Store around App.js
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('App')
)
