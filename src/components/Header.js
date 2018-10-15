import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
	render() {
		const { toggleMenu, closeMenu, menuOpened } = this.props;

		return (
			<header className="header" onClick={(e) => closeMenu(e.target)}>
				<div className="header_container">
					<div className="header_heading">
						<h1>Athanasios Markou</h1>
						<p>Front-End Developer</p>
					</div>
					<div className="hamburger_container">
						<button
							className="hamburger_button"
							onClick={() => toggleMenu()}
							>Menu {menuOpened ? <FontAwesomeIcon icon="chevron-circle-down" /> : <FontAwesomeIcon icon="bars" />}</button>
					</div>
					<nav className={menuOpened ? "navlink_container open" : "navlink_container"}>
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
