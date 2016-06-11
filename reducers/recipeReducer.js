import Immutable from 'immutable'


let options = new Immutable.Map({
  loaded: false,
  collection: new Immutable.List(),
  err: null,
});

let defaultState = new Immutable.Map(options);

function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let recipeReducer = function(state = defaultState, action){
  // let collection = state.get('collection');
  switch(action.type) {
    case 'ADD_RECIPE':
      // console.log(action.promise.recipeParams)
      let addedCollection = collection.push(action.res.data)
      return recipes.set('collection', addedCollection)
      // return [{
      //     title: action.recipeParams.title,
      //     descript: action.recipeParams.descript,
      //     ingred: action.recipeParams.ingred,
      //     id: getId(recipes)
      //   }, ...recipes]
    // case 'ADD_RECIPE_SUCCESS':
    //   return state.set('loading', true)
    default:
      return state
  }
}

export default recipeReducer
