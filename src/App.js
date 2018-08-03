import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import Main from './Main';
import Error from './Error';

class App extends Component {
  render() {
    return (
      <div>
        <Router>

          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Error" exact component={Error} />
            <Redirect path="/Error" />
          </Switch>

        </Router>

      </div>
    );
  }
}

export default App;
