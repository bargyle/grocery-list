import { Component } from 'react';

class ItemForm extends Component {
  state = { title: "", complete: false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({ title: "", complete: false })
  }

  render () {
    const { title } = this.state
    
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={title}
          name="title"
          onChange={this.handleChange}
          required
          placeholder="add an item"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default ItemForm;