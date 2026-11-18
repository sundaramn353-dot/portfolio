import { meta } from '../../data/meta.js';
import { trainingActivities } from '../../data/training.js';
import { ArrowLink, SectionLabel } from './Shared.jsx';

export default function TrainingCommunity() {
  return (
    <section className="training-section light-section" id="training-community" tabIndex={-1} aria-labelledby="training-heading">
      <div className="wrap">
        <SectionLabel number="03" note="SHARING PRACTICAL ROBOTICS KNOWLEDGE.">LEARNING TOGETHER</SectionLabel>
        <div className="training-heading" data-reveal>
          <h2 id="training-heading">Training & Community</h2>
          <ArrowLink href={meta.linkedin} external>LinkedIn</ArrowLink>
        </div>
        <div className="training-list">
          {trainingActivities.map((activity, index) => (
            <article className="training-activity" key={activity.id} aria-labelledby={`${activity.id}-heading`} data-reveal>
              <span className="training-number" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3 id={`${activity.id}-heading`}>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
