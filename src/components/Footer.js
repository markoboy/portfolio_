import React from 'react';
import './footer.css';

const Footer = () => {
	// Get the current year to set up the copyright after 2018.
	let dt = new Date(),
		year = dt.getFullYear();
	return (
		<footer className="footer">
			<div className="footer_copy">
				<p>2018 {year !== 2018 && ('- ' + year)} &copy; - Athanasios Markou. All rights reserved.</p>
			</div>
			<div className="footer_social">
				<ul>
					<li>LinkedIn</li>
					<li>GitHub</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
