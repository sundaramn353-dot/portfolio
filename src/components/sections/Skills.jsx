import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import {
  Cpu,
  Network,
  Compass,
  Code2,
  Layers,
  Terminal,
  CheckCircle2,
  Sparkles,
  Filter,
} from 'lucide-react';

const ICON_MAP = {
  Network: Network,
  Compass: Compass,
  Code2: Code2,
  Layers: Layers,
  Cpu: Cpu,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const categories = [
    { id: 'all', name: 'All Domains' },
    ...skillCategories.map((c) => ({ id: c.id, name: c.name })),
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" ref={ref} className="py-24 relative bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>SECTION 04 // TECHNICAL EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              ROBOTICS ENGINEERING STACK.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Competencies directly verified from production AMR development, embedded micro-ROS
              firmware, and autonomous Nav2 navigation stacks. No arbitrary percentage bars.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#0e121a] border border-white/[0.08] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="flex flex-col gap-12">
          {displayedCategories.map((category, catIdx) => {
            const IconComponent = ICON_MAP[category.icon] || Cpu;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#0d1017] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                {/* Category Title Header */}
                <div className="flex items-center gap-3 pb-5 mb-6 border-b border-white/[0.06]">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white tracking-wide">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">{category.description}</p>
                  </div>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group p-4 rounded-xl bg-[#121622]/60 border border-white/[0.05] hover:border-cyan-500/30 hover:bg-[#121622] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-heading font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans mb-3">
                          {skill.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                        <span>Used In:</span>
                        <span className="text-slate-300 font-medium">{skill.usedIn}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
