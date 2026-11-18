import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import {
  ExternalLink,
  Maximize2,
  X,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Zap,
  Bot,
  MapPin,
  ChevronRight,
  FolderGit2,
} from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);

  const filteredProjects =
    filter === 'all'
      ? projects
      : filter === 'amr'
      ? projects.filter((p) => p.category.includes('AMR'))
      : filter === 'simulation'
      ? projects.filter((p) => p.category.includes('Simulation'))
      : projects;

  return (
    <section id="projects" ref={sectionRef} className="py-24 relative bg-[#090b10] border-t border-white/[0.05]">
      {/* Background Gradients */}
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>SECTION 05 // FEATURED ROBOTICS PROJECTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              AUTONOMOUS SYSTEMS IN ACTION.
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
              Real-world differential-drive AMRs, distributed micro-ROS firmware, and Nav2
              autonomous navigation. Each project includes a complete 8-part engineering case study.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#0e121a] border border-white/[0.08]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('amr')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === 'amr'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Physical AMRs
            </button>
            <button
              onClick={() => setFilter('simulation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                filter === 'simulation'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Simulations
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group engineering-card rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'border-cyan-500/30 bg-[#0d1017]/90 hover:border-cyan-400/60'
                    : 'border-white/[0.08] bg-[#0c0e14]/70 hover:border-white/[0.2]'
                }`}
              >
                <div>
                  {/* Visual Header / Media Preview */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#06080c] border-b border-white/[0.06] flex items-center justify-center p-6">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

                    {/* Image Preview */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-black/70 border border-white/[0.1] text-cyan-300 backdrop-blur-md">
                        PROJECT {project.num}
                      </span>
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-black/70 border border-white/[0.1] text-slate-300 backdrop-blur-md">
                        {project.type}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-20">
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>

                    {/* Quick Specs Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 font-mono text-xs">
                      <div className="text-cyan-400 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Core Specifications</span>
                      </div>
                      <div className="space-y-1.5 text-slate-300">
                        {Object.entries(project.specs || {}).map(([key, val]) => (
                          <div key={key} className="flex justify-between border-b border-white/[0.05] pb-1">
                            <span className="text-slate-500 capitalize">{key}:</span>
                            <span className="text-right text-slate-200">{val}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-4 w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Launch Full 8-Part Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                      <span>{project.category}</span>
                      <span>•</span>
                      <span className="text-slate-400">{project.organization}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                      {project.caseStudy.overview}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-[#0a0c12] border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400">
                    Status: <span className="text-emerald-400">Validated</span>
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 8-PART COMPREHENSIVE CASE STUDY MODAL ────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#0c0f17] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Modal Sticky Header */}
              <div className="sticky top-0 z-20 px-6 py-4 bg-[#0c0f17]/95 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>CASE STUDY // PROJECT {selectedProject.num}</span>
                    <span>•</span>
                    <span className="text-slate-400">{selectedProject.organization}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: The 8 Engineering Facets */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
                {/* Visual Header Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-[#090b10] p-4 rounded-xl border border-white/[0.06]">
                  <div className="aspect-video w-full rounded-lg bg-black/40 border border-white/[0.04] p-3 flex items-center justify-center">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="text-cyan-400 font-bold uppercase mb-2">System Specs</div>
                    {Object.entries(selectedProject.specs || {}).map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-white/[0.04] pb-1">
                        <span className="text-slate-500 capitalize">{k}:</span>
                        <span className="text-right text-slate-200">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 1. Project Overview */}
                <div className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-cyan-400">01</span>
                    <span>Project Overview</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.caseStudy.overview}
                  </p>
                </div>

                {/* 2. Problem Statement */}
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-amber-400">02</span>
                    <span>Problem Statement & Engineering Requirements</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.caseStudy.problemStatement}
                  </p>
                </div>

                {/* 3. System Architecture */}
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-blue-400">03</span>
                    <span>System Architecture & Node Communication</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {selectedProject.caseStudy.systemArchitecture}
                  </p>

                  {/* Architecture Diagram Visualization */}
                  <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.06] font-mono text-xs text-slate-300">
                    <div className="text-slate-500 text-[10px] uppercase mb-2">// ROS 2 NODE GRAPH</div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        /ydlidar_node
                      </span>
                      <span className="text-slate-600">→ /scan →</span>
                      <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        /slam_toolbox
                      </span>
                      <span className="text-slate-600">→ /map →</span>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        /nav2_controller
                      </span>
                      <span className="text-slate-600">→ /cmd_vel →</span>
                      <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        /diffbot_gpio
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Technologies Used */}
                <div className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-cyan-400">04</span>
                    <span>Technologies & Frameworks Deployed</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.caseStudy.technologiesUsed.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-slate-300 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. My Engineering Contribution */}
                <div className="border-l-2 border-emerald-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-emerald-400">05</span>
                    <span>Direct Engineering Contributions</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.caseStudy.engineeringContributions.map((contrib, cIdx) => (
                      <li key={cIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. Implementation */}
                <div className="border-l-2 border-indigo-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-indigo-400">06</span>
                    <span>Implementation & Bring-Up Pipeline</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.caseStudy.implementation}
                  </p>
                </div>

                {/* 7. Challenges and Solutions */}
                <div className="border-l-2 border-rose-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-rose-400">07</span>
                    <span>Technical Challenges & Solutions</span>
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.caseStudy.challengesAndSolutions.map((item, csIdx) => (
                      <div
                        key={csIdx}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 text-xs"
                      >
                        <div className="flex items-start gap-2 text-rose-300">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>
                            <strong>Challenge:</strong> {item.challenge}
                          </span>
                        </div>
                        <div className="flex items-start gap-2 text-emerald-300 pl-5">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>
                            <strong>Solution:</strong> {item.solution}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. Demonstrated Results */}
                <div className="border-l-2 border-teal-500 pl-4">
                  <h4 className="font-heading font-bold text-base text-white flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-teal-400">08</span>
                    <span>Demonstrated Results & Verification</span>
                  </h4>
                  <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 text-teal-200 text-xs sm:text-sm leading-relaxed">
                    {selectedProject.caseStudy.demonstratedResults}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#0a0c12] border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">
                  Verified against production repositories & hardware.
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
