import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { meta } from '../../data/meta';
import {
  Cpu,
  Layers,
  Compass,
  Radio,
  Sparkles,
  Award,
  Terminal,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="py-24 relative bg-[#090b10] border-t border-white/[0.05]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>SECTION 03 // {meta.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            {meta.about.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Bridging theoretical autonomy algorithms and rugged physical deployment through ROS 2,
            deterministic embedded control, and hardware-software synergy.
          </p>
        </div>

        {/* Narrative & Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Detailed Professional Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            {meta.about.summary.map((paragraph, idx) => (
              <p key={idx} className="bg-white/[0.015] p-4 rounded-xl border border-white/[0.04]">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap gap-2">
              {[
                'ROS 2 Jazzy',
                'Nav2 Costmaps',
                'micro-ROS',
                'slam_toolbox',
                'ESP32 PID',
                'YDLIDAR X2',
                'Raspberry Pi 4',
                'Gazebo Harmonic',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 5 Core Engineering Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-3.5"
          >
            {meta.about.coreFocus.map((focus, idx) => (
              <div
                key={idx}
                className="group engineering-card p-4 sm:p-5 rounded-xl border border-white/[0.06] hover:border-cyan-500/40 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-semibold text-base mb-1 group-hover:text-cyan-300 transition-colors">
                    {focus.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {focus.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Verified Resume Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/[0.08] pt-12"
        >
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">
              // VERIFIED ENGINEERING BENCHMARKS (DIRECT FROM RESUME)
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {meta.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0e1119] border border-white/[0.06] flex flex-col items-center text-center group hover:border-cyan-500/30 transition-all"
              >
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-cyan-400 transition-colors tabular-nums">
                  {stat.value}
                  <span className="text-cyan-400">{stat.suffix}</span>
                </div>
                <div className="font-mono text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-sans">
                  {stat.subtext}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 font-mono italic">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
