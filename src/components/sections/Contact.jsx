import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { meta } from '../../data/meta';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
  Bot,
  MessageSquare,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/BrandIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Autonomous Mobile Robot Opportunity / ROS 2 Collaboration',
    message: '',
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${meta.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative bg-[#08090d] border-t border-white/[0.05]">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>SECTION 10 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            HAVE A ROBOTICS CHALLENGE? LET'S BUILD IT.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-sans">
            I'm always interested in connecting with robotics engineers, researchers, and teams
            building the next generation of autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Status Box */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-center gap-3.5">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <div className="font-heading font-semibold text-white text-sm">
                  Available for Robotics Positions
                </div>
                <div className="font-mono text-xs text-slate-400">
                  Chennai, India • Open to Relocation & Remote
                </div>
              </div>
            </div>

            {/* Email Card with Quick Copy */}
            <div className="engineering-card p-5 rounded-xl border border-white/[0.08] bg-[#0d1017]/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase">
                    Primary Email
                  </span>
                  <a
                    href={`mailto:${meta.email}`}
                    className="font-mono text-sm text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    {meta.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-cyan-400 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="engineering-card p-5 rounded-xl border border-white/[0.08] bg-[#0d1017]/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${meta.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    {meta.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Code Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-card p-4 rounded-xl border border-white/[0.08] hover:border-cyan-500/40 flex items-center gap-3 group transition-all"
              >
                <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase">
                    LinkedIn
                  </span>
                  <span className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 font-semibold flex items-center gap-1">
                    sundaram-n
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </span>
                </div>
              </a>

              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-card p-4 rounded-xl border border-white/[0.08] hover:border-cyan-500/40 flex items-center gap-3 group transition-all"
              >
                <div className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-500 uppercase">
                    GitHub
                  </span>
                  <span className="text-xs font-mono text-slate-200 group-hover:text-cyan-300 font-semibold flex items-center gap-1">
                    sundaramn353
                    <ArrowUpRight className="w-3 h-3 text-slate-500" />
                  </span>
                </div>
              </a>
            </div>

            {/* Download Resume Banner */}
            <div className="p-5 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#121622] to-[#0a0c12] flex items-center justify-between">
              <div>
                <span className="font-heading font-semibold text-white text-sm block">
                  Complete Curriculum Vitae
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Verified PDF with complete technical history
                </span>
              </div>
              <a
                href={meta.resumeFile}
                download="Meenatchi_sundaram_N_Resume.pdf"
                className="px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-mono flex items-center gap-2 border border-white/[0.1] transition-colors"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Composer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 engineering-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] bg-[#0d1017]/90 shadow-2xl"
          >
            <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/[0.06]">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span className="font-heading font-bold text-base text-white">
                Direct Engineering Inquiry
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova / Autonomous Robotics R&D"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm font-sans transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@robotics-ai.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm font-sans transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm font-sans transition-colors placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 mb-1.5">
                  Message / Project Details
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your autonomous robotics project, ROS 2 requirements, team role, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090b10] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-white text-xs sm:text-sm font-sans transition-colors resize-none placeholder:text-slate-600 leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-sm tracking-wide shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Inquiry (Opens Mail Client)</span>
              </button>

              <p className="text-[11px] font-mono text-slate-500 text-center">
                Guaranteed direct response within 24 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
