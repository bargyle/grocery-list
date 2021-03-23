import { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
class ItemForm extends Component {
  state = { title: "", complete: false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateItem(this.props.id, this.state)
      this.props.toggleEdit()
    }else{
      this.props.addItem(this.state)
    }
    this.setState({ title: "", complete: false })
  }

  render () {
    const { title } = this.state

    return(
      <Container align='center'>
        <form onSubmit={this.handleSubmit}>
          <input
            value={title}
            name="title"
            onChange={this.handleChange}
            required
            placeholder="Item Name"
          />
          <Button color='Blue' size='small' type="submit">Submit</Button>
        </form>
      </Container>
    )
  }
}

export default ItemForm;