import React, { Component } from 'react';
import { Container } from 'reactstrap'
import URLFields from '../components/URLFields';
import UiFeedback from '../components/UiFeedback';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <UiFeedback />
          <URLFields />
        </Container>
        {/* TODO: create view that allows those to edit shortURLs */}
      </Router>
    )
  }
}

export default App;
