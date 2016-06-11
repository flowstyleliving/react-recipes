import Immutable from 'immutable'


let defaultState = new Immutable.Map({
  title: 'hi'
});

function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let recipeReducer = function(recipes = [], action){
  // let collection = state.get('collection');
  switch(action.type) {
    case 'ADD_RECIPE':
      console.log(action.promise.recipeParams)
      // let addedCollection = collection.push(action.res.data)
      // return recipes.set('title')
      return [{
          title: action.recipeParams.title,
          descript: action.recipeParams.descript,
          ingred: action.recipeParams.ingred,
          id: getId(recipes)
        }, ...recipes]
    // case 'ADD_RECIPE_SUCCESS':
    //   return state.set('loading', true)
    default:
      return recipes
  }
}

export default recipeReducer
