import React, { Component } from 'react'

class RecipeInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
        title: ''
        // descript: '',
        // ingred: ''
    }
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
