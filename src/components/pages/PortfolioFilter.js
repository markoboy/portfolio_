import React, { Component } from 'react';

class PortfolioFilter extends Component {
	render() {
		return (
			<section className="filter_container">
				<h4>Active filters:</h4>
				<h4>Filter by:</h4>
				<h4>Languages</h4>
				<label><input type="checkbox" /> HTML5</label>
				<label><input type="checkbox" /> CSS3</label>
				<label><input type="checkbox" /> JavaScript</label>
				<h4>Libraries</h4>
				<label><input type="checkbox" /> jQuery</label>
				<label><input type="checkbox" /> React</label>
				<h4>Frameworks</h4>
				<label><input type="checkbox" /> Angular</label>
				<label><input type="checkbox" /> Jasmine</label>
			</section>
		);
	}
}

export default PortfolioFilter;
