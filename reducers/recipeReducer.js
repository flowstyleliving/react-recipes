let recipeReducer = function(recipes = [], action){
  switch(action.type) {
    case 'ADD_RECIPE':
      return [{
        title: action.title,
        descript: action.descript},
        ...recipes]
    default:
      return recipes
  }
}

export default recipeReducer
