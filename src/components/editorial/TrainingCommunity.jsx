import { meta } from '../../data/meta.js';
import { trainingActivities } from '../../data/training.js';
import { ArrowLink } from './Shared.jsx';

export default function TrainingCommunity() {
  return (
    <section className="training-section light-section" id="training-community" tabIndex={-1} aria-labelledby="training-heading">
      <div className="wrap">
        <div className="training-heading" data-reveal>
          <h2 id="training-heading">Training, Mentorship <span className="orange-text">&amp; Community Leadership</span></h2>
          <ArrowLink href={meta.linkedin} external>LinkedIn</ArrowLink>
        </div>
        <div className="training-list">
          {trainingActivities.map(activity => (
            <article className="training-activity" key={activity.id} aria-labelledby={`${activity.id}-heading`} data-reveal>
              <div>
                <h3 id={`${activity.id}-heading`}>{activity.title}</h3>
                <p className="training-role">Role: {activity.role}</p>
                <p>{activity.description}</p>
                {activity.image && <figure><img src={activity.image} alt={activity.imageAlt} loading="lazy" decoding="async" />{activity.imageCaption && <figcaption>{activity.imageCaption}</figcaption>}</figure>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
