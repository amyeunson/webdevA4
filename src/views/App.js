import React, { Component } from 'react';
import { Container } from 'reactstrap'
import URLFields from '../components/URLFields';
import UiFeedback from '../components/UiFeedback';
import EditURLFields from '../components/EditURLFields';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Container>
            <UiFeedback />

            <Route path='/url/:id/edit'>
              <EditURLFields />
            </Route>

            <Route exact path="/">
              <URLFields />
            </Route>

          </Container>
        </Switch>
      </Router>
    )
  }
}

export default App;