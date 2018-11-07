import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioSort = ({ updateView, view, sortProjects, activeFilters }) => {
	return (
		<section className="sort_container">
			<div className="filter_btn" >
				<button className="sort_view_btn" ><FontAwesomeIcon icon="sliders-h" /> Filter ({activeFilters.length})</button>
			</div>
			<div className="sort_view">
				View:{" "}
				<button
					className="sort_view_btn"
					aria-pressed={view === "grid" ? true : false}
					onClick={() => updateView('grid')} >
						<FontAwesomeIcon icon="th-large" /> Grid
				</button>
				<button
					className="sort_view_btn"
					aria-pressed={view === "list" ? true : false}
					onClick={() => updateView('list')} >
						<FontAwesomeIcon icon="th-list" /> List
				</button>
			</div>
			<div className="sort_by">
				<label>Sort by:
					<select onChange={(e) => sortProjects(e.target.value) } className="sort_select">
						<option value="newest">Date - Recent</option>
						<option value="oldest">Date - Former</option>
						<option value="ascending">Title - A to Z</option>
						<option value="descending">Title - Z to A</option>
					</select>
				</label>
			</div>
		</section>
	);
}

export default PortfolioSort;
