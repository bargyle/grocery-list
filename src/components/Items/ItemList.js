import Item from './Item';
const ItemList = ({ items, updateComplete, deleteItem, updateItem}) => {
  return (
    <>
      <h1>Items for our store</h1>
      {
        <ul>
          { items.map( i => (
            <Item key={i.id} {...i} 
            updateComplete={updateComplete}
            deleteItem={deleteItem}
            updateItem={updateItem}
                                                
            />
           
          ))}
        </ul>
      }
    </>
  )
}

export default ItemList;