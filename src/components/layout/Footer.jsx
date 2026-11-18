import { meta } from '../../data/meta';
import { Bot, ArrowUp, Activity, Terminal } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06080c] border-t border-white/[0.08] text-slate-400 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06] items-start">
          {/* Left: Brand Identity */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-base tracking-wide">
                SUNDARAM N.
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm font-sans leading-relaxed">
              {meta.positioning}
            </p>

            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STACK: ROS 2 JAZZY • NAV2 • micro-ROS</span>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-3 text-xs font-mono">
            <div>
              <span className="text-white font-semibold block mb-2 uppercase text-[10px] tracking-wider">
                Index
              </span>
              <ul className="space-y-1.5">
                <li>
                  <a href="#hero" className="hover:text-cyan-400 transition-colors">
                    01 // Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition-colors">
                    02 // About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-cyan-400 transition-colors">
                    03 // Expertise
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-cyan-400 transition-colors">
                    04 // Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-white font-semibold block mb-2 uppercase text-[10px] tracking-wider">
                Records
              </span>
              <ul className="space-y-1.5">
                <li>
                  <a href="#workflow" className="hover:text-cyan-400 transition-colors">
                    05 // Workflow
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-cyan-400 transition-colors">
                    06 // Experience
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-cyan-400 transition-colors">
                    07 // Education
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-cyan-400 transition-colors">
                    08 // Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Social & Back to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full gap-4">
            <div className="flex items-center gap-2">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors border border-cyan-500/20"
                title="Scroll back to top"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="font-mono text-[11px] text-slate-500 md:text-right">
              <div>Chennai, India</div>
              <div>Available for Global Roles</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Sundaram N. (Meenatchi Sundaram N). All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Deterministic Autonomy</span>
            <span>•</span>
            <span className="text-cyan-400">ROS 2 Jazzy Jalisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
