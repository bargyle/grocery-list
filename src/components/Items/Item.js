import React, {Component} from 'react';
import ItemForm from './ItemForm';
import { Button, List } from 'semantic-ui-react';
class Item extends Component {
  state = {editing: false}
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }
  render(){

    const  { title, id, complete, updateComplete, deleteItem,} = this.props
      return (
        <>
          <List as='h2'
            style = { complete ? {...styles.complete } : null }
            onClick={() => updateComplete(id)}
            >
              { title }
          </List>
          <Button size='mini' basic color='red' onClick={() => deleteItem(id)}>delete</Button>

          {
            this.state.editing ?
            <ItemForm {...this.props} toggleEdit={this.toggleEdit} />
            :
            <Button size='mini' basic color='brown' onClick={this.toggleEdit}>Edit</Button>
          }

        </>
      )
  }
}


    const styles = {
      complete: {
        color: 'grey',
        textDecoration: 'line-through'
      }
    }

export default Item;