import Immutable from 'immutable'

const options = {
  loaded: false,
  collection: new Immutable.List(),
  err: null,
}

let defaultState = new Immutable.Map(options);

function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let recipeReducer = function(recipes = [], action){
  let collection = state.get('collection');
  switch(action.type) {
    case 'ADD_RECIPE':
      return [{
          title: action.title,
          descript: action.descript,
          ingred: action.ingred,
          id: getId(recipes)
        }, ...recipes]
    // case 'ADD_RECIPE_SUCCESS':
    //   return state.set('loading', true)
    default:
      return recipes
  }
}

export default recipeReducer
