import { ArrowUpRight } from 'lucide-react';
import { meta } from '../../data/meta.js';
import { expertise } from '../../data/portfolio.js';
import { certifications } from '../../data/education.js';
import { ArrowLink } from './Shared.jsx';
import TechnologyBadges from './TechnologyBadges.jsx';
import MiniRobot from './MiniRobot.jsx';

export function Statement() {
  return (
    <section className="statement light-section" id="statement" tabIndex={-1} aria-labelledby="statement-heading">
      <div className="wrap">
        <div className="statement-composition" data-reveal>
          <h2 id="statement-heading"><span className="statement-where">WHERE</span><span className="statement-code">CODE MEETS</span><span className="statement-robotics">ROBOTICS<span className="orange-text">.</span></span></h2>
          <TechnologyBadges />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="about-section light-section section-space" id="about" tabIndex={-1} aria-labelledby="about-heading">
      <div className="wrap">
        <h2 className="about-heading" id="about-heading" data-reveal>SOFTWARE THAT MOVES <span className="red-text">ROBOTS.</span></h2>
        <div className="about-layout">
          <MiniRobot />
          <div className="about-copy" data-reveal data-delay="100"><p>I’m Meenatchi Sundaram, a Robotics Engineer focused on ROS 2 and autonomous mobile robots. My work brings software, sensors, embedded controllers, and robot hardware into one connected system.</p><p>At Karthikesh Robotics Limited, I contributed to the development and integration of Bumpy and Sparky as part of the engineering team—from robot assembly and bring-up to navigation and micro-ROS communication. I enjoy working through the practical details: a coordinate frame, an odometry feed, a sensor connection, or a motor controller.</p><p id="community">Alongside my engineering work, I’ve conducted a 20-day ROS 2 training program, delivered robotics masterclasses, and provided one-to-one technical sessions. As a community manager for Rookies, I coordinate technical learning activities and support learners in developing their robotics skills.</p><ArrowLink href={meta.resumeFile} download>More about me / Resume</ArrowLink></div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="skills-section light-section section-space" id="skills" tabIndex={-1} aria-labelledby="skills-heading"><div className="wrap"><p className="skills-label">Technical Skills</p><div className="section-heading" data-reveal><h2 id="skills-heading">THE RIGHT TOOLS. <span className="red-text">CONNECTED.</span></h2></div>
      <div className="skills-list">{expertise.map(([title, skills]) => <article className="skill-row" key={title} data-reveal><h3>{title}</h3><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
    </div></section>
  );
}

export function Experience() {
  return (
    <section className="experience-section light-section section-space" id="experience" tabIndex={-1} aria-labelledby="experience-heading"><div className="wrap"><div className="section-heading" data-reveal><h2 id="experience-heading">ALWAYS <span className="red-text">BUILDING.</span></h2></div>
      <div className="timeline">
        <article className="timeline-row" data-reveal><div className="timeline-date"><span>FEB 2026 — PRESENT</span><span>PROFESSIONAL / CHENNAI</span></div><div><span className="eyebrow red-text">Karthikesh Robotics Limited</span><h3>Robotics Engineer</h3><p>Contributed to the development and integration of Bumpy and Sparky AMRs as part of the engineering team. My work included hardware assembly, ROS 2 bring-up, LiDAR, TF2, odometry, localization, Nav2, and embedded communication.</p></div></article>
        <article className="timeline-row" data-reveal><div className="timeline-date"><span>FEB — MAR 2025</span><span>INTERNSHIP / CHENNAI</span></div><div><span className="eyebrow red-text">ANNA UNIVERSITY / MIT CAMPUS</span><h3>Robotics & Automation Intern</h3><p>Hands-on experience in PLC programming and SolidWorks at the Centre of Robotics and Automation.</p></div></article>
        <article className="timeline-row" id="education" data-reveal><div className="timeline-date"><span>2022 — 2026</span><span>EDUCATION / COIMBATORE</span></div><div><span className="eyebrow red-text">DHAANISH AHMED INSTITUTE OF TECHNOLOGY</span><h3>B.E. Robotics & Automation</h3><p>Engineering foundation in robotics and automation. Final-year project: a six-wheeled all-terrain robot with passive suspension.</p></div></article>
      </div>
      <div className="professional-development" aria-labelledby="development-heading">
        <h3 id="development-heading">Courses & Professional Development</h3>
        <div className="course-list">
          {certifications.filter(course => ['nptel-mobile-robots', 'udemy-ros2-plan-nav'].includes(course.id)).map(course => (
            <article className="course-entry" key={course.id} data-reveal>
              <p className="course-provider">{course.issuer}</p>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <p className="course-topic">{course.domain}</p>
              {course.image && <ArrowLink href={course.image} external>View certificate</ArrowLink>}
            </article>
          ))}
        </div>
      </div>
    </div></section>
  );
}

export function Contact() {
  return (
    <footer className="contact-section dark-section" id="contact" tabIndex={-1} aria-labelledby="contact-heading"><div className="wrap"><div className="contact-title" data-reveal><h2 id="contact-heading">LET’S BUILD ROBOTS THAT <span>WORK.</span></h2><a href={`mailto:${meta.email}`} className="contact-circle" aria-label="Email Meenatchi Sundaram"><ArrowUpRight size={52} strokeWidth={1.3} aria-hidden="true" /></a></div><div className="contact-body"><p>Get in touch about robotics engineering<br />opportunities and collaboration.</p><ArrowLink className="email-link" href={`mailto:${meta.email}`}>{meta.email}</ArrowLink></div><div className="contact-links"><ArrowLink href={meta.github} external>GitHub</ArrowLink><ArrowLink href={meta.linkedin} external>LinkedIn</ArrowLink><ArrowLink href={meta.resumeFile} download>Download Resume</ArrowLink><span>BASED IN CHENNAI, INDIA</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} MEENATCHI SUNDARAM</span><a href="#home">BACK TO TOP<ArrowUpRight size={13} aria-hidden="true" /></a></div></div></footer>
  );
}
