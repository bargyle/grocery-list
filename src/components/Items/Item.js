import React, {Component} from 'react';
import ItemForm from './ItemForm';
class Item extends Component {
  state = {editing: false}
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }
  render(){

    const  { title, id, complete, updateComplete, deleteItem,} = this.props
      return (
        <>
          <li
            style = { complete ? {...styles.complete } : null }
            onClick={() => updateComplete(id)}
            >
              { title }
          </li>
          
          <button onClick={() => deleteItem(id)}>delete</button>

          {
            this.state.editing ? 
            <ItemForm {...this.props} toggleEdit={this.toggleEdit} />
            :
            <button onClick={this.toggleEdit}>Edit</button>
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