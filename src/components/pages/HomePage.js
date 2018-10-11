import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			homeBottomHeight: ''
		};
	}

	componentDidMount() {
		document.title = 'Home Page | Athanasios Markou';
		this.setHomeBottomHeight();
	}

	setHomeBottomHeight = () => {
		/* Get the footer height in order for the bottom container to get full height */
		let footer = document.querySelector('.footer');

		if (footer) {
			/* Remove 80px of the header, 50vh of the homeTopContainer and the footer height - 1 to round up the number */
			this.setState({ homeBottomHeight: { 'minHeight': `calc(100vh - 80px - 50vh - ${footer.offsetHeight}px - 1px)` } });
		}
		else {
			window.addEventListener('load', () => {
				this.setState({ homeBottomHeight: { 'minHeight': `calc(100vh - 80px - 50vh - ${footer.offsetHeight}px - 1px)` } });
			});
		}
	};

	render() {
		return (
			<main>
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
				<section className="home_bottom" style={this.state.homeBottomHeight ? this.state.homeBottomHeight : { 'minHeight': 'auto' }}>
					<div className="home_bottom_container">
						<p>This is going to be the home page</p>
						<p><Link to="/test">Test link</Link></p>
						<p><Link to="/test/some_id">Test link to a test child</Link></p>
						<p><Link to="/randompage">Random undefined route check</Link></p>
					</div>
				</section>
			</main>
		);
	}
}

export default HomePage;
