// General Manager

// import Firebase from 'firebase'
//
// const Posts = new Firebase("https://reactrecipes-2381a.firebaseio.com/")

let actions = {
  addRecipe: (text) => {
    return {
      type: 'ADD_RECIPE',
      text: text
    }
  }
}

export default actions
