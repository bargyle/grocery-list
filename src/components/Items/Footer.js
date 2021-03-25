import { Container, Menu } from 'semantic-ui-react';


const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
  }
}

const filterLink = (current, name, setFilter) => {
  if (current === name) {
    return <span>{name}</span>
  } else {
    return <span style={styles.link} onClick={() => setFilter(name)}>{name}</span>
  }
}

const Footer =({ filter, setFilter }) => {
  return (
    <Container align='center'>
      <Menu widths='10'>
        <Menu.Item>
          {['All'].map( f => filterLink(filter, f, setFilter))}
        </Menu.Item>
        <Menu.Item>
          {['Active'].map( f => filterLink(filter, f, setFilter))}
        </Menu.Item>
        <Menu.Item>
          {['Completed'].map( f => filterLink(filter, f, setFilter))}
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default Footer;