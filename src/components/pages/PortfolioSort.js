import React, { Component } from 'react';

class PortfolioSort extends Component {
	render() {
		return (
			<section className="sort_container">
				<div>
					<span>Sort by:</span>
					<select className="sort_select">
						<option value="newest">Date - Recent</option>
						<option value="oldest">Date - Former</option>
						<option value="ascending">Title - A to Z</option>
						<option value="descending">Title - Z to A</option>
					</select>
				</div>
				<span className="sort_view">View: Grid | List</span>
			</section>
		);
	}
}

export default PortfolioSort;
