import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from './Loader';
import NotFound from './NotFound';
import './PortfolioSingleProject.css';

const PortfolioSingleProject = ({ id, projects }) => {
	// There is no state change so scroll window to top when the component is loaded.
	window.scrollTo(0, 0);
	// If the projects are still loading show the loader.
	if (!projects.length > 0) return (<Loader />);

	let project, ind;
	if (id) {
		// Get the project based on the url param id.
		project = projects.filter((project, i) => {
			if (project.id === id) ind = i;
			return project.id === id;
		})[0];
	}

	// If the project was not found then display the NotFound Component.
	if (projects.length > 0 && !project) return (<NotFound />);

	// Store previous and next projects to show at the bottom of the page.
	let moreProjects = [];
	if (ind === 0) {
		moreProjects.push(projects[projects.length - 1]);
		moreProjects.push(projects[ind + 1]);
	} else if (ind === projects.length - 1) {
		moreProjects.push(projects[ind - 1]);
		moreProjects.push(projects[0]);
	} else {
		moreProjects.push(projects[ind - 1]);
		moreProjects.push(projects[ind + 1]);
	}

	return (
		<Fragment>
			<nav aria-label="Breadcrumb">
				<ol className="breadcrumb">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/portfolio">Portfolio</Link></li>
					<li>{project.title}</li>
				</ol>
			</nav>
			<div className="project_main_image_container" aria-label={`${project.title} project image`} style={{ backgroundImage: `url(${project.image.regular})` }}>
				<div className="project_logo_container">
					<div className="project_main_logo">
						{project.techUsed.map((tech, ind) => (
							<span className="brand_logo" key={ind} title={tech.title} style={{ 'color': `${tech.color}`}}>
								{tech.iconType === "svg" ? <img src={process.env.PUBLIC_URL+tech.icon} alt={tech.title}></img> : <FontAwesomeIcon icon={[tech.iconType, tech.icon]} />}
							</span>
						))}
					</div>
				</div>
			</div>
			<main className="project_main_container">
				<h3>{project.title}</h3>
				<div className="project_main_dates">
					<p>{project.startDate.str} to {project.endDate.str}</p>
				</div>
				<div className="project_main_desc">
					<h4>Overview</h4>
					<p>{project.desc}</p>
				</div>
				<div className="project_main_achievements">
					<h4>Achievements</h4>
					<ul className="achievements_list">
						{project.achievements.map((achieve, i) => <li key={i}>{achieve}</li>)}
					</ul>
				</div>
				<div className="project_main_links">
					<p>View on: {project.location.map((loc, ind) => (
						<a
							key={ind}
							href={loc.url}
							target="_blank"
							className="brand_logo"
							title={loc.title}
							style={{ 'color': `${loc.color}`}}><FontAwesomeIcon icon={[loc.iconType, loc.icon]} /></a>
						))}
					</p>
				</div>
				<div className="project_main_more">
					<h4>View more projects</h4>
					<div className="project_main_more_container">
						{moreProjects.map(proj => (
							<div className="project_main_more_project" key={proj.id}>
								<Link to={`/portfolio/${proj.id}`}>
									<span className="project_main_more_image" style={{backgroundImage: `url(${proj.image.regular})`}}></span>
									<p>{proj.title}</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</main>
		</Fragment>
	);
};

export default PortfolioSingleProject;
