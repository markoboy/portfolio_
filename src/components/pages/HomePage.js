import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	componentDidMount() {
		document.title = 'Home Page | Athanasios Markou';
	}

	render() {
		return (
			<main className="main_container">
				<section className="home_top">
					<div className="home_top_container">
						<div className="home_top_content">
							<p>Welcome to my personal webpage. My name is Athanasios and I am currently living in the city of Newcastle. I have recently received a certificate from Udacity as a Front-End Web Developer and I am in search for new opportunities.</p>
						</div>
						<div className="home_top_bullets">
							<div className="home_top_bullet"></div>
							<div className="home_top_bullet"></div>
							<div className="home_top_bullet"></div>
							<div className="home_top_bullet"></div>
						</div>
					</div>
				</section>
				<section>
					<p>This is going to be the home page</p>
					<p><Link to="/test">Test link</Link></p>
					<p><Link to="/test/some_id">Test link to a test child</Link></p>
					<p><Link to="/randompage">Random undefined route check</Link></p>
				</section>
			</main>
		);
	}
}

export default HomePage;
