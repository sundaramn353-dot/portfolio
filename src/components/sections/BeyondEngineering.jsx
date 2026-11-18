import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { communityData } from '../../data/community';
import { meta } from '../../data/meta';
import {
  Users,
  Presentation,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';

export default function BeyondEngineering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="community" ref={ref} className="py-24 relative bg-[#090b10] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>SECTION 09 // BEYOND ENGINEERING & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            EMPOWERING THE ROBOTICS ECOSYSTEM.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Mentoring emerging robotics engineers, leading community technical initiatives, and
            sharing open-source ROS 2 packages with the global developer community.
          </p>
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {communityData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="engineering-card rounded-2xl border border-white/[0.08] bg-[#0d1017]/90 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Media preview if available */}
                {item.image && (
                  <div className="relative aspect-video w-full overflow-hidden bg-black/40 border-b border-white/[0.06]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 border border-white/[0.1] font-mono text-[10px] text-cyan-300 backdrop-blur-md">
                        {item.role}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                    <span>{item.period}</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block">
                      // Tangible Impact
                    </span>
                    {item.impact.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Tags */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] font-mono text-[10px] text-slate-400"
                    >
                      #{tag}
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
