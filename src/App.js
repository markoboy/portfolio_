import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/" render={() => (
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/test">Test link</Link>
        )} />

        <Route exact path="/test" render={() => (
          <p className="App-intro">
            This is the test page.
          </p>
          <Link to="/">Home page link</Link>
        )} />
      </div>
    );
  }
}

export default App;
