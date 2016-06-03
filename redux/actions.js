// General Manager

import C from '../constants'
import Firebase from 'firebase'

const recipesRef = new Firebase(C.FIREBASE_URI).child('recipes')

export const listentToRecipes = () => {
  return (dispatch) => {
    recipesRef.on('value', (snapshot) => {
      dispatch({ type, data })
    })
  }
}

let actions = {
  addRecipe: (title) => {
    return {
      type: 'ADD_RECIPE',
      title: title
      // descript: descript,
      // ingred: ingred
    }
  }
}

export default actions
