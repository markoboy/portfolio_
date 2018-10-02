import React, { Component } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
