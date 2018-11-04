import React from 'react';

const PortfolioFilter = ({ languages, library, frameworks }) => {
	return (
		<section className="filter_container">
			<h4>Active filters:</h4>
			<h4>Filter by:</h4>
			{languages.length > 0 && (<h4>Languages</h4>)}
			{languages.map((lang, i) => (
					<label key={i}><input type="checkbox" />{lang}</label>
				))}
			{library.length > 0 && (<h4>Libraries</h4>)}
			{library.map((lib, i) => (
					<label key={i}><input type="checkbox" />{lib}</label>
				))}
			{frameworks.length > 0 && (<h4>Frameworks</h4>)}
			{frameworks.map((fram, i) => (
					<label key={i}><input type="checkbox" />{fram}</label>
				))}
		</section>
	);
}

export default PortfolioFilter;
