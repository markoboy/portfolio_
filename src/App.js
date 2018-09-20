import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Test from './components/Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/test" component={Test} />
          <Route exact path="/test/:id" component={Test} />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
