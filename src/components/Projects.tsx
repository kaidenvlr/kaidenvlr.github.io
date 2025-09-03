import React from 'react';

type Project = {
	name: string;
	description: string;
	url: string;
};

const projects: Project[] = [
	{
		name: 'Portfolio',
		description: 'This is my portfolio website, built with Vite + React TS',
		url: 'https://kaidenvlr.github.io'
	},
	{
		name: 'DataMarketplace.kz',
		description: 'Server side and DevOps: deployment, domains, backend, frontend help, Grafana+Prometheus, ELK',
		url: 'https://datamarketplace.kz'
	},
	{
		name: 'Randomfacts',
		description: 'Backend for the random facts app, with Celery Beat and Redis',
		url: 'https://randomfacts.kz'
	},
	{
		name: 'Task Tracker CLI',
		description: 'CLI for task tracking, with PostgreSQL and TypeScript',
		url: 'https://github.com/kaidenvlr/task-tracker-cli'
	},
	{
		name: 'Java JWT Auth',
		description: 'JWT Auth for Java, with Spring Boot and Spring Security',
		url: 'https://github.com/kaidenvlr/java-jwt-auth'
	},
	{
		name: 'Go Auth Service',
		description: 'Auth Service for Go, with Gin, PostgreSQL and Redis',
		url: 'https://github.com/kaidenvlr/go-auth-service'
	}
];

const Projects: React.FC = () => {
	return (
		<div className="container projects">
			<h2>Projects</h2>
			<div className="grid">
				{projects.map((p) => (
					<a key={p.name} href={p.url} className="card" target="_blank" rel="noreferrer">
						<strong>{p.name}</strong>
						<p>{p.description}</p>
					</a>
				))}
			</div>
		</div>
	);
};

export default Projects; 