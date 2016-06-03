function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let recipeReducer = function(recipes = [], action){
  switch(action.type) {
    case 'ADD_RECIPE':
      return [{
        title: action.title,
        // descript: action.descript,
        // ingred: action.ingred,
        id: getId(recipes)
      },
        ...recipes]
    default:
      return recipes
  }
}

export default recipeReducer
