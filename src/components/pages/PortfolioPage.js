import React, { Component } from 'react';
import { sortByDate, sortByTitle } from '../../utils/DataAPI';
import PortfolioFilter from './PortfolioFilter';
import PortfolioSort from './PortfolioSort';
import PortfolioProjects from './PortfolioProjects';

class PortfolioPage extends Component {
	constructor() {
		super();
		this.state = {
			projectsView: 'grid',
			filtersLanguages: [],
			filtersLibrary: [],
			filtersFrameworks: [],
			activeFilters: []
		};
	}

	componentDidMount() {
		document.title = 'Portfolio Page | Athanasios Markou';
		window.scrollTo(0, 0);

		this.setProjects();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.projects !== this.props.projects) {
			this.setProjects();
		}
	}

	setProjects = () => {
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

		this.setState({ filtersLanguages, filtersLibrary, filtersFrameworks });
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
			this.setState({ projects: sortByDate(this.props.projects, by) });
		if (testTitle.test(by))
			this.setState({ projects: sortByTitle(this.props.projects, by) });
	};

	updateFilters = (name, isChecked) => {
		this.setState(prevState => ({
			activeFilters: isChecked ? prevState.activeFilters.concat(name) : prevState.activeFilters.filter(fil => fil !== name)
		}));
	};

	render() {
		let activeProjects = [];
		activeProjects = this.state.activeFilters.length === 0 ?
			this.props.projects :
			this.props.projects.filter(project => {
				let techs = [];
				project.techUsed.forEach(tech => techs.push(tech.title));

				let check = true;
				this.state.activeFilters.forEach(filter => check = check && techs.includes(filter));
				return check;
			});
		return (
			<div className="main_container">
				<aside className="portfolio_filter">
					<PortfolioFilter
						languages={this.state.filtersLanguages}
						library={this.state.filtersLibrary}
						frameworks={this.state.filtersFrameworks}
						activeFilters={this.state.activeFilters}
						updateFilters={this.updateFilters}
						/>
				</aside>
				<main className="portfolio_main">
					<PortfolioSort updateView={this.updateProjectsView} view={this.state.projectsView} sortProjects={this.sortProjects} />
					<PortfolioProjects projects={activeProjects} view={this.state.projectsView} />
				</main>
			</div>
		);
	}
}

export default PortfolioPage;
