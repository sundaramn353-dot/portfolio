import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workflowSteps } from '../../data/workflow';
import {
  GitCommit,
  Cpu,
  Compass,
  Radio,
  Navigation,
  Layers,
  Terminal,
  Code2,
  FileCode,
  ArrowRight,
  CheckCircle2,
  Workflow as WorkflowIcon,
} from 'lucide-react';

const STEP_ICONS = [
  FileCode,
  Cpu,
  WorkflowIcon,
  Radio,
  Navigation,
  Layers,
];

export default function Workflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = workflowSteps[activeStepIndex];
  const ref = useRef(null);

  return (
    <section id="workflow" ref={ref} className="py-24 relative bg-[#08090d] border-t border-white/[0.05]">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <WorkflowIcon className="w-3.5 h-3.5" />
            <span>SECTION 06 // ENGINEERING PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            FROM ROBOT DESCRIPTION TO AUTONOMOUS MOTION.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            A systematic, deterministic robotics engineering methodology. Click through each phase
            to inspect kinematic modeling, embedded protocols, TF2 hierarchies, and Nav2 trajectory loops.
          </p>
        </div>

        {/* Interactive Stepper Navigation (Horizontal Timeline) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {workflowSteps.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || GitCommit;
            const isActive = activeStepIndex === idx;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                  isActive
                    ? 'border-cyan-500 bg-cyan-950/20 shadow-lg shadow-cyan-500/10'
                    : 'border-white/[0.06] bg-[#0d1017]/70 hover:border-white/[0.15] hover:bg-[#0d1017]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  />
                </div>

                <div
                  className={`font-heading text-xs font-semibold leading-snug ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {step.title.split('&')[0]}
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeTimelineGlow"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="engineering-card rounded-2xl p-6 sm:p-10 border border-white/[0.1] bg-[#0d1017]/90 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Stage Overview & Tasks */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
                    <span>STAGE {activeStep.step} OF 06</span>
                    <span>•</span>
                    <span className="text-slate-400">{activeStep.subtitle}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    {activeStep.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed font-sans">
                    {activeStep.description}
                  </p>
                </div>

                {/* Key Engineering Tasks */}
                <div>
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                    // CORE DELIVERABLES & METHODS
                  </h4>
                  <ul className="space-y-2.5">
                    {activeStep.keyTasks.map((task, tIdx) => (
                      <li key={tIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Artifacts */}
                <div className="pt-2">
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2.5">
                    // KEY PACKAGES & SYSTEM ARTIFACTS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.technicalArtifacts.map((art, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-cyan-300 flex items-center gap-2"
                      >
                        <FileCode className="w-3.5 h-3.5 text-slate-500" />
                        <span>{art.name}</span>
                        <span className="text-[10px] text-slate-500">({art.type})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Real Terminal / Code Snippet */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="rounded-xl overflow-hidden border border-white/[0.1] bg-[#07090e] shadow-xl">
                  {/* Terminal Header */}
                  <div className="px-4 py-2.5 bg-[#0e1119] border-b border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-[11px] text-slate-400 ml-2">
                        terminal // {activeStep.step}_implementation
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-400">bash/xml/cpp</span>
                  </div>

                  {/* Code Body */}
                  <div className="p-4 overflow-x-auto">
                    <pre className="font-mono text-xs text-slate-300 leading-relaxed">
                      <code>{activeStep.codeSnippet}</code>
                    </pre>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Pipeline Integrity: 100% Deterministic</span>
                  <span className="text-cyan-400">ROS 2 Jazzy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
