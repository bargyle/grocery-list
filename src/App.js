import { Component }  from 'react';
import ItemList from './components/Items/ItemList';
import ItemForm from './components/Items/ItemForm';
import Footer from './components/Items/Footer';

class App extends Component {
  state = { items: [
      { id: 1, title: "Apples", complete: true },
      { id: 2, title: "Oranges", complete: false },
      { id: 3, title: "Peaches", complete: true }
    ],
    filter: 'All'
  }

  setFilter = (filter) => this.setState({ filter })
  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(1);
  }

  addItem = (incomingItem) => {
    const {items} = this.state
    const { title, complete } = incomingItem
    const newItem = { id: this.getUniqId(), title, complete }
    this.setState({ items: [newItem, ...items]})
  }

  updateComplete = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map( i => {
        if (i.id === id) {
          return {
            ...i,
            complete: !i.complete
          }
        }
        return i
      })
    })
  }

  visibleItems = () => {
    const { items, filter } = this.state
    switch(filter) {
      case 'Active':
        return items.filter( i => !i.complete)
      case 'Completed':
        return items.filter( i => i.complete )
      default:
        return items
    }
  }


render() {
  const { items, filter } = this.state
  return (
    <>
      <Footer filter={filter} setFilter={this.setFilter} />
      <ItemList items={this.visibleItems()} updateComplete={this.updateComplete} />
      <ItemForm addItem={this.addItem} />
    </>
    )
  }
}

export default App;

