import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<h1>Athanasios Markou</h1>
				<nav className="navlink_container">
					<ul className="navlink_list">
						<li className="navlink_item"><NavLink exact to="/">Home</NavLink></li>
						<li className="navlink_item"><NavLink to="/portfolio">Portfolio</NavLink></li>
						<li className="navlink_item"><NavLink to="/profile">Resume</NavLink></li>
						<li className="navlink_item"><NavLink to="/contact">Contact</NavLink></li>
						<li className="navlink_item"><NavLink to="/about">About</NavLink></li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
