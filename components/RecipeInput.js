import React, { Component, PropTypes } from 'react'

class RecipeInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
        title: '',
        descript: '',
        ingred: ''
    }
  }

  createRecipe(e) {
    e.preventDefault();

    // let errors = [];

    let recipeParams = {
      id: this.props.id,
      title: this.state.title,
      descript: this.state.descript,
      ingred: this.state.ingred
    }

    this.props.createRecipe(recipeParams)
      .then(status => {
        if(status.type === 'ADD_RECIPE') {
          recipeParams.id = this.props.id
          recipeParams.title = this.state.title
          recipeParams.descript = this.state.descript
          recipeParams.ingred = this.state.ingred
        }
      })
  }


  handleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addRecipe(this.state.title)
  }

  render() {
    // console.log(JSON.strinify(this.getFormData(), null, 2))

    return(
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          this="text"
          placeholder="What's your recipe for?"
          value={this.state.title}
          onChange={this.handleChange.bind(this)}
        />
        {/*<input
          this="text"
          placeholder="Describe it!"
          value={this.state.descript}
          onChange={this.handleChange('descript')}
        />
        <input
          this="text"
          placeholder="What are the ingredients?"
          value={this.state.ingred}
          onChange={this.handleChange('ingred')}
        />*/}
        <input type="submit" text="Submit"/>
      </form>
      </div>
    )
  }
}

export default RecipeInput
