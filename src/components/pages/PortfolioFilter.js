import React from 'react';

const PortfolioFilter = ({ languages, library, frameworks, filtersList, updateFilters }) => {
	let activeFilters = [];
	filtersList.forEach((value, name) => value && activeFilters.push(name));

	return (
		<section className="filter_container">
			{activeFilters.length > 0 && (<h4>Active filters:</h4>)}
			<div className="active_filters">
				{activeFilters.map((tech, i) => (
						<div key={i} className="active_filters_item">
							<button className="filter_close_btn" onClick={() => updateFilters(tech, false)} >X</button>{tech}
						</div>
					))}
			</div>
			<h4>Filter by:</h4>
			{languages.length > 0 && (<h4>Languages</h4>)}
			{languages.map((lang, i) => (
					<label key={i}><input type="checkbox" value={lang} checked={filtersList.get(lang)} onChange={(e) => updateFilters(e.target.value, e.target.checked) } />{lang}</label>
				))}
			{library.length > 0 && (<h4>Libraries</h4>)}
			{library.map((lib, i) => (
					<label key={i}><input type="checkbox" value={lib} checked={filtersList.get(lib)} onChange={(e) => updateFilters(e.target.value, e.target.checked) } />{lib}</label>
				))}
			{frameworks.length > 0 && (<h4>Frameworks</h4>)}
			{frameworks.map((fram, i) => (
					<label key={i}><input type="checkbox" value={fram} checked={filtersList.get(fram)} onChange={(e) => updateFilters(e.target.value, e.target.checked) } />{fram}</label>
				))}
		</section>
	);
}

export default PortfolioFilter;
