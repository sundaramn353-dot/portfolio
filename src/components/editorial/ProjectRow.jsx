import { ArrowDown, Minus, Plus } from 'lucide-react';
import { ArrowLink } from './Shared.jsx';
import ProjectMedia from './ProjectMedia.jsx';

function Architecture() {
  return (
    <div className="architecture" role="img" aria-label="Sparky architecture: Raspberry Pi ROS 2 host connects through micro-ROS to the ESP32, motor drivers, and wheel encoder feedback.">
      <div className="architecture-node"><span>01 / HIGH-LEVEL COMPUTE</span><strong>RASPBERRY PI</strong><small>ROS 2 · Navigation · Robot state</small></div>
      <div className="architecture-wire"><span>micro-ROS / UDP + SERIAL</span><ArrowDown size={26} strokeWidth={1} aria-hidden="true" /></div>
      <div className="architecture-node"><span>02 / EMBEDDED CONTROL</span><strong>ESP32</strong><small>Motor PWM · Encoder feedback</small></div>
      <div className="architecture-outputs"><span>← LEFT MOTOR</span><span>RIGHT MOTOR →</span></div>
      <span className="architecture-caption">SYSTEM DIAGRAM / NOT A HARDWARE PHOTOGRAPH</span>
    </div>
  );
}

/** Optional fields follow the same order for collections and individual projects. */
export default function ProjectRow({ project }) {
  const headingId = `${project.id}-heading`;
  const hasDetails = project.detail || project.architecture || project.showArchitecture || project.supportingImage;

  return (
    <article className={`project${project.compact ? ' project--compact' : ''}`} id={project.id} aria-labelledby={headingId}>
      <ProjectMedia {...project} />
      <div className="project-copy" data-reveal data-delay="90">
        {project.discipline && <span className="eyebrow project-category">{project.discipline}</span>}
        <h3 id={headingId}>{project.name}</h3>
        {project.compact && project.robotName && project.company ? (
          <div className="project-company project-metadata"><span>{project.robotName} · Company project</span><span>{project.company}</span></div>
        ) : <>
          {project.robotName && <p className="project-robot-name">Robot name: {project.robotName}</p>}
          {project.company && <div className="project-company">Company project · {project.company}</div>}
        </>}
        {project.purpose && <p className="project-purpose">{project.purpose}</p>}
        {project.description && <p>{project.description}</p>}
        {project.contribution && (
          <div className="project-contribution">
            <span className="eyebrow">MY CONTRIBUTION</span>
            <p>{project.contribution}</p>
          </div>
        )}
        {project.tags?.length > 0 && <div className="tech-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
        {project.link && <ArrowLink href={project.link.href} external>{project.link.label}</ArrowLink>}
        {project.watchLink && <a className="arrow-link" href={project.watchLink}>Watch Simulation</a>}
        {hasDetails && (
          <details className="project-details">
            <summary>Explore the engineering<Plus className="details-plus" size={17} aria-hidden="true" /><Minus className="details-minus" size={17} aria-hidden="true" /></summary>
            <div className="detail-content">
              {project.detail && <><h4>My contribution</h4><p>{project.detail}</p></>}
              {project.contributionDetails?.length > 0 && <><h4>Detailed contributions</h4><ul className="project-contribution-details">{project.contributionDetails.map(item => <li key={item}>{item}</li>)}</ul></>}
              {project.architecture && <><h4>System overview</h4><p className="system-flow">{project.architecture}</p></>}
              {project.showArchitecture && <div className="detail-architecture"><Architecture /></div>}
              {project.supportingImage && <figure><img src={project.supportingImage} alt={project.supportingCaption} loading="lazy" /><figcaption>{project.supportingCaption}</figcaption></figure>}
            </div>
          </details>
        )}
      </div>
    </article>
  );
}
