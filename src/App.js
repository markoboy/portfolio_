import React, { Component } from 'react';
import { getData, sortByDate } from './utils/DataAPI'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import './app.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion, faIdCard, faProjectDiagram, faBars, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

library.add(faQuestion, faIdCard, faProjectDiagram, faBars, faChevronCircleDown, faLinkedinIn, faGithub, faFreeCodeCamp);

class App extends Component {
	constructor() {
		super();
		this.state = {
			menuOpened: false,
			projects: []
		}
	}

	componentDidMount() {
		/* Get the projects data. */
		getData('projects')
			.then( projects => {
				this.setState({ projects: sortByDate(projects, 'newest') });
			});
	}

	closeMenu = (target) => {
		// Dont close the menu if the clicked target on header is a menu link
		if (target && target.tagName === 'A') return;
		if (this.state.menuOpened)
			this.setState({ menuOpened: false });
	};

	toggleMenu = () => {
		this.setState(state => ({ menuOpened: !state.menuOpened }));
	};

  render() {
    return (
      <div className="App">
        <Header toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} menuOpened={this.state.menuOpened} />
        <MainContainer
					closeMenu={this.closeMenu}
					projects={this.state.projects} />
        <Footer closeMenu={this.closeMenu} />
      </div>
    );
  }
}

export default App;
