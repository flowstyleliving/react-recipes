// General Manager

// import Firebase from 'firebase'
//
// const Posts = new Firebase("https://reactrecipes-2381a.firebaseio.com/")

let actions = {
  addRecipe: (title, descript, ingred) => {
    return {
      type: 'ADD_RECIPE',
      title: title,
      descript: descript,
      ingred: ingred
    }
  }
}

export default actions
