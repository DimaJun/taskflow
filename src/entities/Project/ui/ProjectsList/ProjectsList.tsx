import s from './ProjectsList.module.scss';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export function ProjectsList() {
	return (
		<ul className={s.list}>
			<li>
				<ProjectCard />
			</li>
			<li>
				<ProjectCard />
			</li>
			<li>
				<ProjectCard />
			</li>
			<li>
				<ProjectCard />
			</li>
			<li>
				<ProjectCard />
			</li>
			<li>
				<ProjectCard />
			</li>
			<li>
				<ProjectCard />
			</li>
		</ul>
	);
}
