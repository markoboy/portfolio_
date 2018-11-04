import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HomePage extends Component {
	componentDidMount() {
		document.title = 'Home Page | Athanasios Markou';
		window.scrollTo(0, 0);
	}

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
				<section className="home_bottom">
					<div className="home_bottom_container">
						<div className="home_bottom_content">
							<h3 className="heading">Check out my Portfolio</h3>
							<p className="icon"><FontAwesomeIcon icon="project-diagram" /></p>
							<p className="description">Head over the <Link to="/portfolio">portfolio</Link> page to view all of the projects I have done utilizing my Front-End developer skills. There are not many at the moment, but as I am getting more experience you will see some beautiful projects there!</p>
						</div>
						<div className="home_bottom_content">
							<h3 className="heading">View my Resume</h3>
							<p className="description">If you are interested in hiring an entry-level passionate Front-End web developer, check out my <Link to="/profile">resume</Link> page and I will be glad to speak with you.</p>
							<p className="icon"><FontAwesomeIcon icon="id-card" /></p>
						</div>
						<div className="home_bottom_content">
							<h3 className="heading">Got questions?</h3>
							<p className="icon"><FontAwesomeIcon icon="question" /></p>
							<p className="description">Then, you can find out more about this webpage and me at the <Link to="/about">about</Link> page. If you cant find your question over there or you want to get in touch with me, head over the <Link to="/contact">contact</Link> page.</p>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default HomePage;
