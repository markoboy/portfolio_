import React, { Component } from 'react';
import { sortByDate, sortByTitle } from '../../utils/DataAPI';
import PortfolioFilter from './PortfolioFilter';
import PortfolioSort from './PortfolioSort';
import PortfolioProjects from './PortfolioProjects';

class PortfolioPage extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			projectsView: 'grid',
			filtersLanguages: [],
			filtersLibrary: [],
			filtersFrameworks: []
		};
	}

	componentDidMount() {
		document.title = 'Portfolio Page | Athanasios Markou';

		this.setState({ projects: this.props.projects });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.projects !== this.props.projects) {
			let filtersLanguages = [], filtersLibrary = [], filtersFrameworks = [];

			this.props.projects.forEach(project => {
				project.techUsed.forEach(tech => {
					switch (tech.type) {
						case "language":
							if (!filtersLanguages.includes(tech.title))
								filtersLanguages.push(tech.title);
							break;
						case "library":
							if (!filtersLibrary.includes(tech.title))
								filtersLibrary.push(tech.title);
							break;
						case "framework":
							if (!filtersFrameworks.includes(tech.title))
								filtersFrameworks.push(tech.title);
							break;
						default:
							console.log(`${tech.title} - was not placed in any filter.`);
					}
				})
			});

			this.setState({ projects: this.props.projects, filtersLanguages, filtersLibrary, filtersFrameworks });
		}
	}

	updateProjectsView = view => {
		if (view !== this.state.projectsView)
			this.setState({ projectsView: view });
	};

	sortProjects = by => {
		// Create regex to test how to sort projects.
		let testDate = /(newest|oldest)/;
		let testTitle = /(ascending|descending)/;

		if (testDate.test(by))
			this.setState({ projects: sortByDate(this.state.projects, by) });
		if (testTitle.test(by))
			this.setState({ projects: sortByTitle(this.state.projects, by) });
	};

	render() {
		return (
			<div className="main_container">
				<aside className="portfolio_filter">
					<PortfolioFilter
						languages={this.state.filtersLanguages}
						library={this.state.filtersLibrary}
						frameworks={this.state.filtersFrameworks}
						/>
				</aside>
				<main className="portfolio_main">
					<PortfolioSort updateView={this.updateProjectsView} sortProjects={this.sortProjects} />
					<PortfolioProjects projects={this.state.projects} view={this.state.projectsView} />
				</main>
			</div>
		);
	}
}

export default PortfolioPage;
