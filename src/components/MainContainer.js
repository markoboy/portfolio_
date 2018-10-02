import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Test from './pages/Test';
import NotFound from './pages/NotFound';
import './main.css';

class MainContainer extends Component {
	render() {
		return (
			<main className="main_container">
				<Switch>
					<Route exact path="/" component={HomePage} />

					<Route exact path="/test" component={Test} />
					<Route exact path="/test/:id" component={Test} />

					<Route component={NotFound} />
				</Switch>
			</main>
		);
	}
}

export default MainContainer;
