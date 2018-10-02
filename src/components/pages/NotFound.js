import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
	componentDidMount() {
		document.title = 'Page was not found | Athanasios Markou';
	}

	render() {
		return (
			<div className="notFound_container">
				<p>
					The page you are looking for is not found.
				</p>
				<Link to="/">Return to home page</Link>
			</div>	
		);
	}
};

export default NotFound;
