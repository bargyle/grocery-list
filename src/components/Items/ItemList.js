import Item from './Item';
const ItemList = ({ items, updateComplete }) => {
  return (
    <>
      <h1>Items for our store</h1>
      {
        <ul>
          { items.map( i => (
            <Item key={i.id} {...i} updateComplete={updateComplete} />
          ))}
        </ul>
      }
    </>
  )
}

export default ItemList;