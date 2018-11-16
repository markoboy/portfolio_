import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NotFound extends Component {
	componentDidMount() {
		document.title = 'Page was not found | Athanasios Markou';
	}

	render() {
		const { history } = this.props;
		return (
			<main className="notFound_container">
				<div className="cog_container">
					<FontAwesomeIcon icon="cog" size="5x" className="cog_left" />
					<FontAwesomeIcon icon="cog" size="4x" className="cog_right" />
				</div>
				<h4><FontAwesomeIcon icon="exclamation-triangle" style={{color: "#997300"}}/> The page you requested was not found.</h4>
				<p>You may have clicked a link that is still under development or mistyped the address.</p>
				<ul>
					<li><Link to="/">Return home</Link></li>
					{history.length > 1 && (<li><Link to="#" onClick={() => history.goBack()}>Go to the previous page</Link></li>)}
				</ul>
			</main>
		);
	}
};

export default withRouter(NotFound);
