import { meta } from '../../data/meta.js';
import { trainingActivities } from '../../data/training.js';
import { ArrowLink } from './Shared.jsx';
import ProjectMedia from './ProjectMedia.jsx';

export default function TrainingCommunity() {
  return (
    <section className="training-section surface-section" id="training-community" tabIndex={-1} aria-labelledby="training-heading">
      <div className="wrap">
        <div className="training-heading" data-reveal>
          <h2 id="training-heading">Training, Mentorship <span className="red-text">&amp; Community Leadership</span></h2>
          <ArrowLink href={meta.linkedin} external>LinkedIn</ArrowLink>
        </div>
        {trainingActivities.map(featuredActivity => (
          <article className={`training-featured${featuredActivity.mediaLeft ? ' training-featured--media-left' : ''}`} key={featuredActivity.id} aria-labelledby={`${featuredActivity.id}-heading`}>
            <div className="project-copy" data-reveal>
              <h3 id={`${featuredActivity.id}-heading`}>{featuredActivity.title}</h3>
              {featuredActivity.role && <p className="training-role">Role: {featuredActivity.role}</p>}
              {featuredActivity.description && <p>{featuredActivity.description}</p>}
              {featuredActivity.subgroup && (
                <div className="training-subgroup" aria-labelledby={`${featuredActivity.subgroup.id}-heading`}>
                  <h4 id={`${featuredActivity.subgroup.id}-heading`}>{featuredActivity.subgroup.title}</h4>
                  <p>{featuredActivity.subgroup.description}</p>
                </div>
              )}
            </div>
            {featuredActivity.image && (
              <ProjectMedia image={featuredActivity.image} alt={featuredActivity.imageAlt} imageWidth={featuredActivity.imageWidth} imageHeight={featuredActivity.imageHeight} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
