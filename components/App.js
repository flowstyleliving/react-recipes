// The Business

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import RecipeList from './RecipeList'
import RecipeInput from './RecipeInput'

class App extends Component {

  render() {
    return(
      <div>
        <h1>This is my recipe App</h1>
        <RecipeInput addRecipe={this.props.actions.addRecipe}/>
        <RecipeList actions={this.props.actions} recipes={this.props.recipes}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
