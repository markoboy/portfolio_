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
						<div className="home_bottom_content">
							<h3 className="heading">Check out my Portfolio</h3>
							<p className="icon"><i className="fas fa-project-diagram"></i></p>
							<p className="description">Head over the <Link to="/portfolio">portfolio page</Link> to view all of the projects I have done utilizing my Front-End developer skills. There are not many at the moment, but as I am getting more experience you will see some beautiful projects there!</p>
						</div>
						<div className="home_bottom_content">
							<h3 className="heading">View my Resume</h3>
							<p className="description">If you are interested in hiring an entry-level passionate Front-End web developer, checkout my <Link to="/profile">resume page</Link> and I will be glad to speak with you.</p>
							<p className="icon"><i className="far fa-id-card"></i></p>
						</div>
						<div className="home_bottom_content">
							<h3 className="heading">Got questions?</h3>
							<p className="icon"><i className="fas fa-question"></i></p>
							<p className="description">Then, you can find out more about this webpage and me at the <Link to="/about">about page</Link>. If you cant find your question over there or you want to get in touch with me, head over the <Link to="/contact">contact page</Link>.</p>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default HomePage;
