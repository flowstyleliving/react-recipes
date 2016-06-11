import React, { Component, PropTypes } from 'react'

class RecipeInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
        title: '',
        descript: '',
        // ingred: ''
    }
  }

  handleChange(event) {
    let newState = {
      title: event.target.title,
      descript: event.target.descript,
      // ingred: event.target.elements[2].value
    }
    this.setState(newState)
  }

  handleSubmit(event) {
      event.preventDefault();

        // let errors = [];
        console.log('hihihi')
        let recipeParams = {
            // id: this.props.id,
            title: this.state.title,
            descript: this.state.descript,
            // ingred: this.state.ingred
        }

      this.props.actions.makeRecipe(recipeParams)
      console.log('hihi')
      // recipeParams.id = this.props.id
      recipeParams.title = this.state.title
      recipeParams.descript = this.state.descript
      // recipeParams.ingred = this.state.ingred
      }

  render() {
    // console.log(JSON.strinify(this.getFormData(), null, 2))

    return(
      <div>
      <canvas type='food.get'></canvas>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="What's your recipe for?"
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
        />{' '}
        <input
          type="text"
          placeholder="Describe it!"
          value={this.state.descript}
          onChange={this.handleChange.bind(this)}
        />{' '}
        <input
          type="text"
          placeholder="What are the ingredients?"
          value={this.state.ingred}
          onChange={this.handleChange.bind(this, 'ingred')}
        />{' '}
        <input type="submit" text="Submit"/>
      </form>
      {this.state.title}
      </div>
    )
  }
}

export default RecipeInput
