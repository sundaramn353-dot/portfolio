import { meta } from '../../data/meta.js';
import { simulationCollection, work } from '../../data/portfolio.js';
import ProjectRow from './ProjectRow.jsx';

export default function SelectedWork() {
  return (
    <section className="work-section surface-section section-space" id="work" tabIndex={-1} aria-labelledby="work-heading">
      <div className="wrap">
        <div className="work-heading" data-reveal>
          <p className="work-label">SELECTED WORK</p>
          <h2 id="work-heading">IDEAS INTO<br /><span className="red-text">REAL MACHINES.</span></h2>
        </div>
        <div className="project-list" id="projects">
          {[simulationCollection, ...work].map(project => <ProjectRow key={project.id} project={project} />)}
        </div>
        <div className="work-footer"><a className="github-projects-link" href={meta.github} target="_blank" rel="noopener noreferrer">Explore More Projects on GitHub</a></div>
      </div>
    </section>
  );
}
