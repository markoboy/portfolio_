import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({ closeMenu }) => {
	// Get the current year to set up the copyright after 2018.
	let dt = new Date(),
		year = dt.getFullYear();
	return (
		<footer className="footer" onClick={() => closeMenu()}>
			<div className="footer_copy">
				<p>Copyright &copy; 2018 {year !== 2018 && ('- ' + year)} - Athanasios Markou. All rights reserved.</p>
				<p>Powered by <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub pages</a>.</p>
			</div>
			<div className="footer_social">
				<h4>Get in touch:</h4>
				<ul className="social_list">
					<li>
						<a href="https://linkedin.com/in/a-markou" title="LinkedIn" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
						</a>
					</li>
					<li>
						<a href="https://github.com/markoboy" title="GitHub" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={['fab', 'github']} />
						</a>
					</li>
					<li>
						<a href="https://www.freecodecamp.org/markoboy" title="FreeCodeCamp" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={['fab', 'free-code-camp']} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
