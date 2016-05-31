import React, { Component } from 'react'

class RecipeInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
        inputText: ''
      }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
      // inputText1: event.target.value,
      // inputText2: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addRecipe(this.state.inputText)
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          this="text"
          placeholder="What's your recipe?"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        {/*<input
          this="text"
          placeholder="Describe it!"
          value={this.state.input.inputText1}
          onChange={this.handleChange.bind(this, 'inputText1')}
        />*/}
        <input type="submit" text="Submit"/>
      </form>
      </div>
    )
  }
}

export default RecipeInput
