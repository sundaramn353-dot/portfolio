import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { meta } from '../../data/meta';
import {
  ArrowRight,
  FileDown,
  Navigation,
  Compass,
  Radio,
  Cpu,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('radar');
  const [telemetry, setTelemetry] = useState({
    x: 1.42,
    y: 0.86,
    theta: 34.2,
    linearVel: 0.35,
    angularVel: 0.12,
    scanHz: 10.0,
    baud: 115200,
    domainId: 0,
    activeNodes: 14,
  });

  const canvasRef = useRef(null);
  const targetWaypointRef = useRef({ x: 0.7, y: 0.3 });

  // Canvas LiDAR sweep and coordinate frame animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    // Fixed simulated obstacles in local map frame
    const obstacles = [
      { r: 0.35, theta: 0.4 },
      { r: 0.42, theta: 0.9 },
      { r: 0.28, theta: 1.8 },
      { r: 0.65, theta: 2.5 },
      { r: 0.55, theta: 3.4 },
      { r: 0.38, theta: 4.2 },
      { r: 0.72, theta: 5.1 },
      { r: 0.48, theta: 5.8 },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.min(width, height) * 0.42;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Range Rings (Concentric Circles)
      const ringSteps = [0.25, 0.5, 0.75, 1.0];
      ringSteps.forEach((step, idx) => {
        const radius = maxRadius * step;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Label distance in meters
        ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.font = '9px JetBrains Mono, monospace';
        ctx.fillText(`${(step * 4.0).toFixed(1)}m`, cx + radius - 18, cy - 4);
      });

      // 2. Draw Crosshairs & Coordinate Grid
      ctx.beginPath();
      ctx.moveTo(cx - maxRadius, cy);
      ctx.lineTo(cx + maxRadius, cy);
      ctx.moveTo(cx, cy - maxRadius);
      ctx.lineTo(cx, cy + maxRadius);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Draw Planned Nav2 Trajectory to target waypoint
      const targetPxX = cx + (targetWaypointRef.current.x - 0.5) * maxRadius * 1.5;
      const targetPxY = cy - (targetWaypointRef.current.y - 0.5) * maxRadius * 1.5;

      // Trajectory curve (Bezier)
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      const cpX = (cx + targetPxX) / 2 + 25;
      const cpY = (cy + targetPxY) / 2 - 25;
      ctx.quadraticCurveTo(cpX, cpY, targetPxX, targetPxY);
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.7)';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 3]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Waypoint Marker
      ctx.beginPath();
      ctx.arc(targetPxX, targetPxY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#00d2ff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(targetPxX, targetPxY, 12, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.4)';
      ctx.stroke();

      // Waypoint label
      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText('NAV2 GOAL', targetPxX + 10, targetPxY - 4);

      // 4. LiDAR Sweep Line & Beam Shader
      const sweepAngle = angle;
      const sweepEndX = cx + Math.cos(sweepAngle) * maxRadius;
      const sweepEndY = cy + Math.sin(sweepAngle) * maxRadius;

      // Sweep gradient sector
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius);
      gradient.addColorStop(0, 'rgba(0, 210, 255, 0.25)');
      gradient.addColorStop(0.8, 'rgba(0, 210, 255, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 210, 255, 0)');

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, maxRadius, sweepAngle - 0.35, sweepAngle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Sweep ray
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sweepEndX, sweepEndY);
      ctx.strokeStyle = 'rgba(0, 210, 255, 0.85)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 5. Draw Obstacle Point Cloud Returns
      obstacles.forEach((obs) => {
        const ox = cx + Math.cos(obs.theta) * (obs.r * maxRadius);
        const oy = cy + Math.sin(obs.theta) * (obs.r * maxRadius);

        // Calculate angular difference to current sweep for glow effect
        let diff = Math.abs(angle - obs.theta);
        if (diff > Math.PI) diff = Math.PI * 2 - diff;
        const isIlluminated = diff < 0.25;

        ctx.beginPath();
        ctx.arc(ox, oy, isIlluminated ? 3.5 : 2, 0, Math.PI * 2);
        ctx.fillStyle = isIlluminated ? '#38bdf8' : 'rgba(255, 255, 255, 0.35)';
        ctx.fill();

        if (isIlluminated) {
          ctx.beginPath();
          ctx.arc(ox, oy, 7, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(0, 210, 255, 0.5)';
          ctx.stroke();
        }
      });

      // 6. Draw AMR Robot Chassis at Center (differential drive representation)
      const robotLength = 32;
      const robotWidth = 24;

      ctx.save();
      ctx.translate(cx, cy);
      // Robot orientation matches telemetry theta
      ctx.rotate((telemetry.theta * Math.PI) / 180);

      // Chassis Body
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-robotLength / 2, -robotWidth / 2, robotLength, robotWidth, 4);
      ctx.fill();
      ctx.stroke();

      // Front directional arrow
      ctx.beginPath();
      ctx.moveTo(robotLength / 2 - 2, 0);
      ctx.lineTo(robotLength / 2 - 7, -5);
      ctx.lineTo(robotLength / 2 - 7, 5);
      ctx.closePath();
      ctx.fillStyle = '#00d2ff';
      ctx.fill();

      // Left & Right Drive Wheels
      ctx.fillStyle = '#64748b';
      // Left wheel
      ctx.fillRect(-8, -robotWidth / 2 - 4, 16, 4);
      // Right wheel
      ctx.fillRect(-8, robotWidth / 2, 16, 4);

      // LiDAR Puck (Center top)
      ctx.beginPath();
      ctx.arc(4, 0, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#0284c7';
      ctx.fill();
      ctx.strokeStyle = '#38bdf8';
      ctx.stroke();

      // 7. TF2 Coordinate Frame Axes: base_link
      // X Axis (Red - Forward)
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(18, 0);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Y Axis (Green - Left)
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -18);
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();

      // Step sweep angle
      angle = (angle + 0.035) % (Math.PI * 2);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [telemetry.theta]);

  // Handle canvas click to set dynamic waypoint
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left) / rect.width;
    const clickY = (e.clientY - rect.top) / rect.height;

    targetWaypointRef.current = { x: clickX, y: 1.0 - clickY };

    // Update simulated telemetry
    setTelemetry((prev) => ({
      ...prev,
      x: parseFloat((clickX * 3.5).toFixed(2)),
      y: parseFloat((clickY * 2.8).toFixed(2)),
      theta: parseFloat(((Math.atan2(clickY - 0.5, clickX - 0.5) * 180) / Math.PI).toFixed(1)),
      linearVel: 0.38,
      angularVel: 0.15,
    }));
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Engineer Identity & Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#10141e]/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs mb-6 w-fit backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{meta.availability}</span>
            </motion.div>

            {/* Engineer Identity Subhead */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs sm:text-sm text-cyan-400 font-medium"
            >
              <span>{meta.fullName}</span>
              <span className="text-slate-600">•</span>
              <span>{meta.role}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{meta.subRole}</span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              ENGINEERING INTELLIGENCE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                INTO MOTION.
              </span>
            </motion.h1>

            {/* Supporting Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-sans"
            >
              {meta.heroSubheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-sm tracking-wide shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={meta.resumeFile}
                download="Meenatchi_sundaram_N_Resume.pdf"
                className="px-6 py-3.5 rounded-xl border border-white/[0.15] bg-[#10141e]/80 hover:bg-white/[0.06] text-white font-medium text-sm transition-all hover:border-cyan-400/50 flex items-center gap-2 backdrop-blur-md"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Quick Tech Badge Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.08]"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">
                Core Stack:
              </span>
              {['ROS 2 Jazzy', 'Nav2', 'slam_toolbox', 'micro-ROS', 'ESP32', 'Gazebo Harmonic'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-slate-300 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right Column: Advanced Robotics Laboratory HUD Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-[480px] engineering-card rounded-2xl p-4 sm:p-5 border border-white/[0.1] relative shadow-2xl overflow-hidden"
            >
              {/* Card Header with System Status */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-white tracking-wider">
                    ROS 2 AMR RVIZ2 VISUALIZER
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  <Activity className="w-3 h-3 text-cyan-400" />
                  <span>CYCLONEDDS: ACTIVE</span>
                </div>
              </div>

              {/* Interactive Radar & LiDAR Canvas */}
              <div className="relative aspect-square w-full rounded-xl bg-[#090b10] border border-white/[0.06] overflow-hidden group cursor-crosshair">
                <canvas
                  ref={canvasRef}
                  onClick={handleCanvasClick}
                  className="w-full h-full block"
                  title="Click anywhere to dispatch a new Nav2 navigation goal!"
                />

                {/* Floating Canvas Badges */}
                <div className="absolute top-3 left-3 pointer-events-none flex flex-col gap-1">
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/[0.1] font-mono text-[9px] text-cyan-300 backdrop-blur-sm">
                    TF: map → odom → base_link
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/[0.1] font-mono text-[9px] text-slate-400 backdrop-blur-sm">
                    LiDAR: YDLIDAR X2 (10 Hz)
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 font-mono text-[9px] text-cyan-300 backdrop-blur-sm animate-pulse">
                    Click to Set Goal Pose
                  </span>
                </div>
              </div>

              {/* Real-time Telemetry Readout Grid */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/[0.08] font-mono text-[11px]">
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="block text-[9px] text-slate-500 uppercase">Pose (X, Y)</span>
                  <span className="text-white font-semibold">
                    +{telemetry.x}m, +{telemetry.y}m
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="block text-[9px] text-slate-500 uppercase">Yaw (θ)</span>
                  <span className="text-cyan-400 font-semibold">{telemetry.theta}°</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="block text-[9px] text-slate-500 uppercase">Velocity</span>
                  <span className="text-emerald-400 font-semibold">{telemetry.linearVel} m/s</span>
                </div>
              </div>

              {/* Sub-node status bar */}
              <div className="mt-2.5 flex items-center justify-between px-1 text-[10px] font-mono text-slate-400">
                <span>Node: /diffbot_gpio [OK]</span>
                <span>Baud: {telemetry.baud}</span>
                <span>Domain: {telemetry.domainId}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
