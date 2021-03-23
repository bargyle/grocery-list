import Item from './Item';
import { Header, List, Container } from 'semantic-ui-react'

const ItemList = ({ items, updateComplete, deleteItem, updateItem}) => {
  return (
    <>
      <Header as='h1' text align='center' inverted color='orange' block>Grocery List</Header>
      {
        <Container textAlign='center'>
          <List>
            { items.map( i => (
              <Item key={i.id} {...i}
              updateComplete={updateComplete}
              deleteItem={deleteItem}
              updateItem={updateItem}
              />
            ))}
          </List>
        </Container>
      }
    </>
  )
}

export default ItemList;