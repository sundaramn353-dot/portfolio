import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { educationData, certifications } from '../../data/education';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
  Maximize2,
  X,
  FileCheck,
  ShieldCheck,
} from 'lucide-react';

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);
  const ref = useRef(null);

  return (
    <section id="education" ref={ref} className="py-24 relative bg-[#08090d] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>SECTION 08 // ACADEMIC RECORD & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            FOUNDATIONAL RIGOR & CREDENTIALS.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            Formal engineering degree in Robotics and Automation supplemented by elite government
            and professional technical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Degree Card (B.E. Robotics & Automation) */}
          <div className="lg:col-span-5 engineering-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] bg-[#0d1017]/90 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-mono text-xs text-cyan-400 font-semibold">
                {educationData.status}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{educationData.period}</span>
              </div>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-white mb-1">
              {educationData.degree}
            </h3>
            <div className="font-heading font-semibold text-cyan-300 text-base mb-3">
              {educationData.field}
            </div>

            <div className="space-y-1 text-xs font-mono text-slate-400 mb-6">
              <div className="text-white font-medium">{educationData.institution}</div>
              <div className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>{educationData.location}</span>
              </div>
            </div>

            {/* Academic CGPA Metric */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6 flex items-center justify-between">
              <div>
                <span className="block font-mono text-[10px] text-slate-500 uppercase">
                  Cumulative Grade Point Average
                </span>
                <span className="font-heading font-bold text-2xl text-white tabular-nums">
                  {educationData.cgpa}
                </span>
              </div>
              <div className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/20">
                First Class
              </div>
            </div>

            {/* Coursework highlights */}
            <div className="space-y-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                // Specialized Coursework
              </span>
              <div className="flex flex-wrap gap-1.5">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-sans text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                // VERIFIED CERTIFICATIONS ({certifications.length})
              </span>
              <span className="text-xs font-mono text-cyan-400">Click to view authentic credentials</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group engineering-card p-5 rounded-xl border border-white/[0.06] hover:border-cyan-500/40 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                        {cert.badge}
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h4 className="font-heading font-bold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h4>

                    <div className="text-xs text-slate-400 font-mono mb-2">
                      Issuer: {cert.issuer}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{cert.domain}</span>
                    <span className="text-cyan-400 font-semibold group-hover:underline">
                      View Credential →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0d1017] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden p-6"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase">
                    Verified Credential // {selectedCert.issuer}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-white">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Preview */}
              <div className="aspect-[4/3] w-full rounded-xl bg-black/50 border border-white/[0.05] p-3 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-full max-w-full object-contain rounded"
                />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                {selectedCert.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Credential
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-semibold text-xs"
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
