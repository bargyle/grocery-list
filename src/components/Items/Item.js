const Item = ({ title, id, complete, updateComplete, deleteItem }) => {
  return (
    <>
      <li
        style = { complete ? {...styles.complete } : null }
        onClick={() => updateComplete(id)}
        >
          { title }
      </li>
      
      <button onClick={() => deleteItem(id)}>delete</button>
    </>
  )
}

const styles = {
  complete: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Item;