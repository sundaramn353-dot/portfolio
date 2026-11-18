/**
 * experience.js — Professional engineering experience timeline
 * Strictly extracted from resume: Karthikesh Robotics Limited & Anna University (MIT).
 */
export const experiences = [
  {
    id: 'kkr',
    role: 'Robotics Engineer',
    company: 'Karthikesh Robotics Limited',
    employmentType: 'Full-time',
    period: '02/2026 – Present',
    duration: '1 Year',
    location: 'Chennai, India',
    badge: 'Current Role',
    summary:
      'Leading robotics software development and autonomous systems engineering for production-prototype Autonomous Mobile Robots (AMRs), focusing on ROS 2, Nav2, embedded communication, and technical mentoring.',
    highlights: [
      {
        title: 'End-to-End AMR Engineering',
        desc: 'Contributed to the full lifecycle development of the Bumpy and Sparky AMRs — spanning structural chassis assembly, power distribution, sensor mounts, and complete ROS 2 Jazzy software bring-up.',
      },
      {
        title: 'ROS 2 & Nav2 Autonomy Architecture',
        desc: 'Architected ROS 2 packages, authored URDF/Xacro models, managed TF2 coordinate frames, calibrated 2D LiDAR (YDLIDAR X2) drivers, and fine-tuned Nav2 costmaps and recovery behaviors.',
      },
      {
        title: 'Embedded micro-ROS Integration',
        desc: 'Engineered distributed communication between Raspberry Pi host computers and ESP32 microcontrollers via micro-ROS over Wi-Fi UDP and high-speed serial, implementing closed-loop PID wheel velocity controllers.',
      },
      {
        title: 'Masterclass Instruction & Mentorship',
        desc: 'Designed and conducted a comprehensive 20-day intensive ROS 2 training program and delivered robotics masterclasses for undergraduate engineering students.',
      },
      {
        title: 'Rookies Robotics Community Leadership',
        desc: 'Managed the "Rookies" robotics community, organizing workshops, hackathons, and structured peer learning sessions for emerging robotics talent.',
      },
    ],
    technologies: [
      'ROS 2 Jazzy',
      'Nav2',
      'micro-ROS',
      'SLAM',
      'TF2',
      'URDF / Xacro',
      'Raspberry Pi 4',
      'ESP32',
      'pigpio',
      'Python',
      'C++',
      'Ubuntu 24.04',
    ],
  },
  {
    id: 'anna-univ',
    role: 'Robotics & Automation Intern',
    company: 'Anna University (MIT Campus)',
    department: 'Centre of Robotics and Automation',
    employmentType: 'Internship',
    period: '02/2025 – 03/2025',
    duration: '2 Months',
    location: 'Chennai, India',
    badge: 'Research Internship',
    summary:
      'Completed an engineering internship focused on industrial robotics, programmable logic controllers (PLCs), and mechanical system CAD design at the prestigious Madras Institute of Technology (MIT) Campus.',
    highlights: [
      {
        title: 'Industrial PLC Programming',
        desc: 'Gained hands-on experience in PLC ladder logic programming, digital/analog I/O wiring, and industrial automation sequencing for robotic manufacturing cells.',
      },
      {
        title: 'Mechanical 3D CAD Modeling',
        desc: 'Utilized Dassault Systèmes SolidWorks for 3D part modeling, mechanical assembly design, and interference analysis for robotic linkages and tooling.',
      },
      {
        title: 'Automation & Sensor Integration',
        desc: 'Interfaced industrial optical, inductive, and capacitive proximity sensors with automation controllers, verifying signal integrity and cycle times.',
      },
    ],
    technologies: [
      'PLC Programming',
      'Ladder Logic',
      'SolidWorks',
      'Industrial Automation',
      'Sensor Integration',
      'Pneumatics',
    ],
  },
];
