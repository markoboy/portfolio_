import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header_container">
					<div className="header_heading">
						<h1>Athanasios Markou</h1>
						<p>Front-End Developer</p>
					</div>
					<nav className="navlink_container">
						<ul className="navlink_list">
							<li className="navlink_item"><NavLink exact to="/">Home</NavLink></li>
							<li className="navlink_item"><NavLink to="/portfolio">Portfolio</NavLink></li>
							<li className="navlink_item"><NavLink to="/profile">Resume</NavLink></li>
							<li className="navlink_item"><NavLink to="/contact">Contact</NavLink></li>
							<li className="navlink_item"><NavLink to="/about">About</NavLink></li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;
