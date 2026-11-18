import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../../data/experience';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  ArrowUpRight,
  Shield,
  Layers,
} from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" ref={ref} className="py-24 relative bg-[#090b10] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SECTION 07 // PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            INDUSTRY ENGINEERING RECORD.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Direct professional employment in robotics R&D and institutional research. Strictly
            verified from resume without title inflation or exaggerated metrics.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/[0.1] ml-4 md:ml-8 pl-6 md:pl-10 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090b10] border-2 border-cyan-400 group-hover:scale-125 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="engineering-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] bg-[#0d1017]/90 shadow-xl">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/[0.06] gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                        {exp.role}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-400 font-semibold">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400">
                      <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.company}
                      </span>
                      {exp.department && <span>({exp.department})</span>}
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.05] w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300 font-semibold">{exp.duration}</span>
                  </div>
                </div>

                {/* Summary Statement */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Responsibilities & Achievements */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    // KEY CONTRIBUTIONS & DELIVERABLES
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1 text-xs"
                      >
                        <div className="font-heading font-semibold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{h.title}</span>
                        </div>
                        <p className="text-slate-400 font-sans leading-relaxed pl-5.5">
                          {h.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-500 mr-2">Environment:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#131724] border border-white/[0.06] font-mono text-[11px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
