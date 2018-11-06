import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioProjects = ({ projects, view }) => {
	return (
		<section className={`projects_container ${view}`}>
			{projects.map( project => (
				<div key={project.id} className="project_container">
					<div className="project_header" style={{ "backgroundImage": `url(${project.image.regular})` }} title={project.title} >
						<div className="project_logo_container">
							{project.techUsed.map((tech, ind) => (
								<span className="brand_logo" key={ind} title={tech.title} style={{ 'color': `${tech.color}`}}>
									{tech.iconType === "svg" ? <img src={process.env.PUBLIC_URL+tech.icon} alt={tech.title}></img> : <FontAwesomeIcon icon={[tech.iconType, tech.icon]} />}
								</span>
							))}
						</div>
					</div>
					<div className="project_content">
						<Link to={`/portfolio/${project.id}`}>
							<h3>{project.title}</h3>
						</Link>
						<p className="project_desc">{project.shortDesc}</p>
						<div className="project_links">
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
					</div>
				</div>
			))}
		</section>
	);
};

export default PortfolioProjects;
