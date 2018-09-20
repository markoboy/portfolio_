import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Test extends Component {
	componentDidMount() {
		document.title = 'Test page | Athanasios Markou'
	}

	render() {
		const { match } = this.props;
		return (
			<div>
				<p>This is the test page.</p>
				<p>{!match.params.id && (<Link to="/test/asasa">Test child</Link>)}</p>
		    <Route path="/test/:id" render={({ match }) => (<p>{match && `This is the id of a matched page ID: ${match.params.id}`}</p>)} />
		    <Link to="/">Home page link</Link>
			</div>
		);
	}
}

export default Test;
