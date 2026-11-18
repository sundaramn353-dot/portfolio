import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { meta } from '../../data/meta';
import {
  Menu,
  X,
  Bot,
  FileDown,
  ArrowUpRight,
  ExternalLink,
  Cpu,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for backdrop blur and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#08090d]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Identity */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
                <Bot className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-wide text-white flex items-center gap-2">
                  SUNDARAM N.
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                  Robotics Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[#10141e]/70 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={meta.resumeFile}
                download="Meenatchi_sundaram_N_Resume.pdf"
                className="px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-white/20 text-xs font-mono flex items-center gap-1.5 transition-colors"
                title="Download verified resume PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-xs tracking-wide shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] flex items-center gap-1.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#0c0e14]/95 backdrop-blur-xl border-b border-white/[0.08] p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-cyan-400 hover:bg-white/[0.04] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
                <a
                  href={meta.resumeFile}
                  download="Meenatchi_sundaram_N_Resume.pdf"
                  className="w-full py-2.5 rounded-lg border border-white/[0.1] bg-white/[0.04] text-slate-200 text-center text-xs font-mono flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>Download Verified Resume</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full py-2.5 rounded-lg bg-cyan-500 text-black text-center text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
