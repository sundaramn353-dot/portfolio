import { ArrowDown, Minus, Plus } from 'lucide-react';
import { meta } from '../../data/meta.js';
import { simulationCollection, work } from '../../data/portfolio.js';
import { ArrowLink, SectionLabel } from './Shared.jsx';

function Architecture() {
  return (
    <div className="architecture" role="img" aria-label="Sparky architecture: Raspberry Pi ROS 2 host connects through micro-ROS to the ESP32, motor drivers, and wheel encoder feedback.">
      <span className="eyebrow">SPARKY / COMMUNICATION STUDY</span>
      <div className="architecture-node"><span>01 / HIGH-LEVEL COMPUTE</span><strong>RASPBERRY PI</strong><small>ROS 2 · Navigation · Robot state</small></div>
      <div className="architecture-wire"><span>micro-ROS / UDP + SERIAL</span><ArrowDown size={26} strokeWidth={1} aria-hidden="true" /></div>
      <div className="architecture-node"><span>02 / EMBEDDED CONTROL</span><strong>ESP32</strong><small>Motor PWM · Encoder feedback</small></div>
      <div className="architecture-outputs"><span>← LEFT MOTOR</span><span>RIGHT MOTOR →</span></div>
      <span className="architecture-caption">SYSTEM DIAGRAM / NOT A HARDWARE PHOTOGRAPH</span>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section className="work-section light-section section-space" id="work" tabIndex={-1} aria-labelledby="work-heading">
      <div className="wrap">
        <SectionLabel number="01" note="BUILT IN CODE. CONNECTED TO THE WORLD.">SELECTED WORK</SectionLabel>
        <div className="section-heading" data-reveal><h2 id="work-heading">IDEAS INTO <span className="red-text">REAL MACHINES.</span></h2><p>Robotics software, integrated hardware,<br />and the space between them.</p></div>
        <article className="simulation-collection" id={simulationCollection.id} aria-labelledby="simulation-collection-heading" data-reveal>
          <figure className="simulation-collection-media">
            <img src={simulationCollection.image} alt={simulationCollection.alt} loading="lazy" decoding="async" width="1782" height="966" />
            <figcaption>ROS 2 / GAZEBO · SIMULATION PREVIEW</figcaption>
          </figure>
          <div className="simulation-collection-copy">
            <span className="eyebrow project-category">SOURCE CODE / PROJECT COLLECTION</span>
            <h3 id="simulation-collection-heading">{simulationCollection.title}</h3>
            <p className="simulation-collection-highlight">{simulationCollection.highlight}</p>
            <p>{simulationCollection.description}</p>
            <ArrowLink href={meta.github} external>View GitHub profile</ArrowLink>
          </div>
        </article>
        <div className="project-list" id="projects">
          {work.map((project, index) => (
            <article className="project" key={project.id} id={project.id}>
              <div className="project-media" data-reveal>
                <div className={`project-visual ${project.mediaClass || ''}`} data-project={project.id}>
                  <img src={project.image} alt={project.alt} loading="lazy" decoding="async" width={project.imageWidth || (project.id === 'simulation-suite' ? 1782 : project.id === 'rocker-bogie' ? 1280 : 400)} height={project.imageHeight || (project.id === 'simulation-suite' ? 966 : project.id === 'rocker-bogie' ? 1272 : 401)} />
                  {project.mediaClass !== 'robot-photo' && <><span className="image-caption">{project.caption}</span><span className="project-image-number">0{index + 1}</span></>}
                </div>
                {project.mediaClass === 'robot-photo' && <p className="robot-photo-caption">0{index + 1} / {project.caption}</p>}
              </div>
              <div className="project-copy" data-reveal data-delay="90">
                <span className="eyebrow project-category">{project.discipline}</span>
                <h3>{project.name}</h3>{project.company && <div className="project-company">Company project · {project.company}</div>}<p className="project-purpose">{project.purpose}</p><p>{project.description}</p>
                <div className="project-contribution"><span className="eyebrow">MY CONTRIBUTION</span><p>{project.contribution}</p></div>
                <div className="tech-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <details className="project-details"><summary>Explore the engineering<Plus className="details-plus" size={17} aria-hidden="true" /><Minus className="details-minus" size={17} aria-hidden="true" /></summary><div className="detail-content"><h4>My contribution</h4><p>{project.detail}</p><h4>System overview</h4><p className="system-flow">{project.architecture}</p>{project.showArchitecture && <div className="detail-architecture"><Architecture /></div>}{project.supportingImage && <figure><img src={project.supportingImage} alt={project.supportingCaption} loading="lazy" width="600" height="602" /><figcaption>{project.supportingCaption}</figcaption></figure>}</div></details>
              </div>
            </article>
          ))}
        </div>
        <div className="work-footer"><p>More experiments. More learning. More code.</p><ArrowLink href={meta.github} external>Explore GitHub</ArrowLink></div>
      </div>
    </section>
  );
}
