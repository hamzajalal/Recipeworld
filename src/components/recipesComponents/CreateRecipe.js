import React, { Component } from 'react';

class CreateRecipe extends Component {
    state = {
        title: '',
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Creating New Recipe</h5>
            <div className="input-field">
                <label htmlFor="title">Name</label>
                <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="content"> Recipe Content</label>
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
            <button className="btn #f9a825 yellow darken-3">Create</button>
            </div>
        </form>
      </div>
    )
  }
}

export default CreateRecipe;