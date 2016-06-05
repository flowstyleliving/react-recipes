// General Manager

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
