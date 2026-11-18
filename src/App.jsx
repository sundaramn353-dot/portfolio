import { useRef } from 'react';
import Navigation from './components/editorial/Navigation.jsx';
import Hero from './components/editorial/Hero.jsx';
import SelectedWork from './components/editorial/SelectedWork.jsx';
import TrainingCommunity from './components/editorial/TrainingCommunity.jsx';
import { About, Contact, Experience, Skills, Statement } from './components/editorial/Sections.jsx';
import { usePortfolioMotion } from './hooks/usePortfolioMotion.js';

export default function App() {
  const root = useRef(null);
  usePortfolioMotion(root);
  return (
    <div ref={root}>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Statement />
        <SelectedWork />
        <About />
        <TrainingCommunity />
        <Skills />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}
