import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Test from './pages/Test';
import NotFound from './pages/NotFound';
import './main.css';

class MainContainer extends Component {
	render() {
		return (
			<div className="main" onClick={() => this.props.closeMenu()}>
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

export default MainContainer;
