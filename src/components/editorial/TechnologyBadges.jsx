import { useRef } from 'react';
import { useSurfaceMotion } from '../../hooks/useSurfaceMotion.js';
import { motion } from '../../motion/settings.js';

const technologies = ['ROS 2', 'Nav2', 'SLAM', 'Python', 'C++', 'Docker', 'RViz'];
const rotations = [-4, 3, -2, 4, -3, 2, -2];

export default function TechnologyBadges() {
  const root = useRef(null);
  useSurfaceMotion(root);
  return (
    <ul className="technology-badges" ref={root} aria-label="Technologies">
      {technologies.map((technology, index) => (
        <li key={technology} className="technology-badge" data-reveal="badge" data-delay={index * motion.stagger} style={{ '--float-time': `${6.5 + index * 0.43}s`, '--float-delay': `${-index * 0.7}s`, '--badge-roll': `${rotations[index]}deg`, '--badge-depth': `${5 + index % 3 * 3}px` }}>
          <span className="badge-parallax"><span className="badge-float"><span className="badge-label">{technology}</span></span></span>
        </li>
      ))}
    </ul>
  );
}
