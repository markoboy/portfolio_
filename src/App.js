import React, { Component } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import './app.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion, faIdCard, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

library.add(faQuestion, faIdCard, faProjectDiagram, faLinkedinIn, faGithub, faFreeCodeCamp);

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
