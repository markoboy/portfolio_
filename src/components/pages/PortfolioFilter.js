import React, { Fragment } from 'react';

const PortfolioFilter = ({ languages, library, frameworks, activeFilters, updateFilters }) => {
	return (
		<section className="filter_container">
			{activeFilters.length > 0 && (
				<Fragment>
					<h4>Active filters:</h4>
					<div className="active_filters">
						{activeFilters.map((tech, i) => (
								<div key={i} className="active_filters_item">
									<button className="filter_btn clear" onClick={() => updateFilters(tech, false)} >X</button> {tech}
								</div>
							))}
					</div>
				</Fragment>
				)}
			<h4>Filter by:</h4>
			{languages.length > 0 && (<h4 className="filter_heading">Languages</h4>)}
			{languages.map((lang, i) => (
					<label key={i}><input type="checkbox" value={lang} checked={activeFilters.includes(lang)} onChange={(e) => updateFilters(e.target.value, e.target.checked) } />{lang}</label>
				))}
			{library.length > 0 && (<h4 className="filter_heading">Libraries</h4>)}
			{library.map((lib, i) => (
					<label key={i}><input type="checkbox" value={lib} checked={activeFilters.includes(lib)} onChange={(e) => updateFilters(e.target.value, e.target.checked) } />{lib}</label>
				))}
			{frameworks.length > 0 && (<h4 className="filter_heading">Frameworks</h4>)}
			{frameworks.map((fram, i) => (
					<label key={i}><input type="checkbox" value={fram} checked={activeFilters.includes(fram)} onChange={(e) => updateFilters(e.target.value, e.target.checked) } />{fram}</label>
				))}
			<div className="filter_btn_container">
				<button className="filter_btn done">{activeFilters.length > 0 ? "Apply" : "Close"}</button>
				{activeFilters.length > 0 && (<button className="filter_btn clear">Clear</button>)}
			</div>
		</section>
	);
}

export default PortfolioFilter;
