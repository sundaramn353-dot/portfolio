import { useRef, useState } from 'react';
import { ArrowDown, ArrowDownRight, Download } from 'lucide-react';
import { meta } from '../../data/meta.js';
import { portrait } from '../../data/profile.js';
import { usePointerDepth } from '../../hooks/usePortfolioMotion.js';

export default function Hero() {
  const root = useRef(null);
  const [failed, setFailed] = useState(false);
  const hasPortrait = Boolean(portrait.src) && !failed;
  usePointerDepth(root);

  return (
    <section ref={root} className={`hero ${hasPortrait ? 'has-portrait' : 'portrait-unavailable'}`} id="home" tabIndex={-1} aria-labelledby="hero-heading">
      <span id="hero" className="anchor-alias" aria-hidden="true" />
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-topline"><span>MEENATCHI SUNDARAM</span><span>CHENNAI, INDIA <span className="status-dot" /></span></div>
      {hasPortrait && (
        <div className="portrait-stage">
          <img className="hero-portrait" src={portrait.src} alt={portrait.alt} width="1124" height="1399" style={{ objectPosition: portrait.position }} fetchpriority="high" decoding="async" onError={() => setFailed(true)} />
        </div>
      )}
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-name" data-reveal><span className="eyebrow">HELLO, I’M</span><h1 id="hero-heading" aria-label="Meenatchi Sundaram"><span>Meenatchi</span>{' '}<span>Sundaram</span></h1><span className="name-subtitle">ENGINEERING IDEAS INTO MOTION.</span></div>
      <div className="hero-role" data-reveal data-delay="100"><span className="eyebrow"><span className="status-dot" /> SOFTWARE × HARDWARE</span><h2>ROBOTICS<br /><span>ENGINEER</span></h2><p>ROS 2 · Autonomous Mobile Robots</p><ArrowDownRight className="hero-direction" size={48} strokeWidth={1} aria-hidden="true" /></div>
      <div className="hero-bottom">
        <p data-reveal data-delay="160">I develop robotics software and integrate the systems that help mobile robots sense, move, and navigate.</p>
        <div className="hero-actions" data-reveal data-delay="220"><a href="#work" className="button button-red">View Projects<ArrowDown size={16} aria-hidden="true" /></a><a href={meta.resumeFile} className="hero-resume" download>Download Resume<Download size={15} aria-hidden="true" /></a></div>
      </div>
      <div className="hero-foot"><span>ROS 2 / AUTONOMOUS SYSTEMS</span><a href="#statement">SCROLL TO DISCOVER<ArrowDown size={13} aria-hidden="true" /></a><span>PORTFOLIO / {new Date().getFullYear()}</span></div>
    </section>
  );
}
