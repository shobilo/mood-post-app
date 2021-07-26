import { Component } from 'react'

import "./post-add-form.css"

class PostAddForm extends Component {

  state = { 
    text: ''
  }

  onValueChanged = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const text = this.state.text
    
    if (text.length === 0) {
      alert('Please enter a non-empty text')
      return
    }

    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
    
  }

  render() {
    return (
      <form 
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
        <input 
          type="text"
          placeholder="Input your note here"
          className="form-control new-post-label"
          onChange={ this.onValueChanged }
          value={ this.state.text }
        />
        <button type="submit"
                className="btn btn-outline-secondary"
                >
          Add note
        </button> 
      </form>
    )
  }
  
}

export default PostAddForm