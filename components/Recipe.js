import React, { Component } from 'react'

class Recipe extends Component {
  render() {
    return(
      <li>
        <p>{this.props.recipe.title}</p>
        <p>{this.props.recipe.text}</p>
        <p>{this.props.recipe.ingredients}</p>
      </li>
    )
  }
}

export default Recipe
