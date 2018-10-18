import React, { Component } from 'react';
import PortfolioFilter from './PortfolioFilter';
import PortfolioSort from './PortfolioSort';

class PortfolioPage extends Component {
	render() {
		return (
			<div className="main_container">
				<aside className="portfolio_filter">
					<PortfolioFilter />
				</aside>
				<main className="portfolio_main">
					<PortfolioSort />
				</main>
			</div>
		);
	}
}

export default PortfolioPage;
