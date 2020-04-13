import React, { Component } from 'react';
import { Container } from 'reactstrap'
import URLFields from '../components/URLFields';

class App extends Component {
  render() {
    return (
      <Container>
        <URLFields />
      </Container>
    )
  }
}

export default App;
