import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	componentDidMount() {
		document.title = 'Home Page | Athanasios Markou';
	}

	render() {
		return (
			<section>
				<p>This is going to be the home page</p>
				<p><Link to="/test">Test link</Link></p>
				<p><Link to="/test/some_id">Test link to a test child</Link></p>
				<p><Link to="/randompage">Random undefined route check</Link></p>
			</section>
		);
	}
}

export default HomePage;
