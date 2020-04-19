import React, { Component } from 'react';
import { Container } from 'reactstrap'
import URLFields from '../components/URLFields';
import UiFeedback from '../components/UiFeedback';
import EditURLFields from '../components/EditURLFields';
import ErrorPage from '../components/ErrorPage';
import Loader from '../components/Loader';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>

            <Route path='/url/:id/edit'>
              <UiFeedback />
              <EditURLFields />
            </Route>

            <Route path='/url/:id/'>
              <Loader />
            </Route>

            <Route exact path="/error">
              <UiFeedback />
              <ErrorPage />
            </Route>

            <Route exact path="/">
              <UiFeedback />
              <URLFields />
            </Route>

            <Route>
              <ErrorPage />
            </Route>

          </Switch>
        </Router>
      </Container>
    )
  }
}

export default App;