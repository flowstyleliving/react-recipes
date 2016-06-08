// General Manager
import request from 'axios'

const BACKEND_URL = '/api/recipes';

let actions = {
  getRecipes: (id) => {
    return{
      // type: ['GET_RECIPES', 'GET_RECIPES_SUCCESS', 'GET_RECIPES_FAILURE']
      type: 'GET_RECIPES',
      promise: request.get(BACKEND_URL + '/' + id)
    }
  },
  makeRecipe: (recipeParams) => {
    console.log('hi')
    
    return {
      // type: ['ADD_RECIPE', 'ADD_RECIPE_SUCCESS', 'ADD_RECIPE_FAILURE']
      type: 'ADD_RECIPE',
      promise: request.post(BACKEND_URL, {
        recipeParams: recipeParams,
      })
    }
  }
}

export default actions
