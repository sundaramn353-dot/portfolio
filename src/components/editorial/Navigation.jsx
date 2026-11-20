import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '../../data/profile.js';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const header = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    const sections = ['home', 'statement', ...navigation.map(item => item.id)]
      .map(id => document.getElementById(id)).filter(Boolean);
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollPadding = parseFloat(window.getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const anchorMargin = parseFloat(window.getComputedStyle(sections[0]).scrollMarginTop) || 0;
      const marker = Math.max((header.current?.getBoundingClientRect().bottom || 92) + 32, scrollPadding + anchorMargin + 2);
      const current = sections.filter(section => section.getBoundingClientRect().top <= marker).at(-1);
      const atBottom = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? 'contact' : ['home', 'statement'].includes(current?.id) ? '' : current?.id || '');
    };
    const request = () => { if (!frame) frame = requestAnimationFrame(update); };
    request();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    window.addEventListener('hashchange', request);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      window.removeEventListener('hashchange', request);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = event => { if (!header.current?.contains(event.target)) setOpen(false); };
    const viewport = window.matchMedia('(min-width: 901px)');
    const onResize = () => { if (viewport.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', outside);
    viewport.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', outside);
      viewport.removeEventListener('change', onResize);
    };
  }, [open]);

  const navigate = event => {
    setOpen(false);
    const target = document.getElementById(event.currentTarget.hash.slice(1));
    if (target) {
      target.focus({ preventScroll: true });
      setActive(target.id === 'home' ? '' : target.id);
    }
  };

  return (
    <header ref={header} className={`floating-header ${open ? 'menu-open' : ''}`}>
      <a className="wordmark" href="#home" onClick={navigate} aria-label="Meenatchi Sundaram, home"><span className="wordmark-glyph" aria-hidden="true">m<span className="brand-dot">.</span></span></a>
      <nav id="main-navigation" aria-label="Main navigation" className={`navigation ${open ? 'is-open' : ''}`}>
        {navigation.map(item => (
          <a key={item.id} href={`#${item.id}`} onClick={navigate} className={active === item.id ? 'active' : ''} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact" onClick={navigate}>Let’s Talk<ArrowUpRight size={15} aria-hidden="true" /></a>
      <button ref={menuButton} className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
