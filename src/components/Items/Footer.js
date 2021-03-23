import { Container } from 'semantic-ui-react';


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
      {
        ['All', 'Active', 'Completed'].map( f => filterLink(filter, f, setFilter))
      }
    </Container>
  )
}

export default Footer;