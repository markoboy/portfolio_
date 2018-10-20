import React, { Component } from 'react';
import PortfolioFilter from './PortfolioFilter';
import PortfolioSort from './PortfolioSort';
import PortfolioProjects from './PortfolioProjects';

class PortfolioPage extends Component {
	constructor() {
		super();
		this.state = {
			projectsView: 'grid'
		};
	}

	render() {
		return (
			<div className="main_container">
				<aside className="portfolio_filter">
					<PortfolioFilter />
				</aside>
				<main className="portfolio_main">
					<PortfolioSort />
					<PortfolioProjects projects={this.props.projects} view={this.state.projectsView} />
				</main>
			</div>
		);
	}
}

export default PortfolioPage;
