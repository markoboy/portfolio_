import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioSort = ({ updateView }) => {
	return (
		<section className="sort_container">
			<div>
				<label>Sort by:
					<select className="sort_select">
						<option value="newest">Date - Recent</option>
						<option value="oldest">Date - Former</option>
						<option value="ascending">Title - A to Z</option>
						<option value="descending">Title - Z to A</option>
					</select>
				</label>
			</div>
			<p className="sort_view">
				View:
				<button className="sort_view_btn" onClick={() => updateView('grid')} title="Grid" ><FontAwesomeIcon icon="th-large" /></button>
				<button className="sort_view_btn" onClick={() => updateView('list')} title="List" ><FontAwesomeIcon icon="th-list" /></button>
			</p>
		</section>
	);
}

export default PortfolioSort;
