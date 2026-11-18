/**
 * education.js — Academic degree and verified technical certifications
 * Strictly extracted from resume with authentic verification credentials.
 */
export const educationData = {
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Robotics and Automation',
  institution: 'Dhaanish Ahmed Institute of Technology',
  location: 'Coimbatore, Tamil Nadu, India',
  period: '2022 – 2026',
  gradYear: '2026',
  cgpa: '7.7 / 10',
  status: 'Graduate (2026)',
  highlights: [
    'Comprehensive curriculum covering Autonomous Robotics, Control Systems, Kinematics & Dynamics, Embedded Systems, Machine Vision, and Industrial Automation.',
    'Final Year Project: Six-Wheeled All-Terrain Robot with Rocker-Bogie Passive Suspension & Inductive Metal Detection.',
    'Led collegiate robotics competitions and practical laboratory workshops.',
  ],
  coursework: [
    'Mobile Robot Kinematics',
    'Control Systems & PID',
    'Sensor Technology & Transducers',
    'Industrial Robotics & PLC',
    'Computer Vision & Image Processing',
    'Microcontrollers & Embedded C',
  ],
};

export const certifications = [
  {
    id: 'nptel-mobile-robots',
    title: 'Wheeled Mobile Robots',
    issuer: 'NPTEL (IIT Madras / MoE)',
    level: 'ELITE Certification',
    description:
      'Rigorous academic certification covering wheeled mobile robot kinematics, non-holonomic constraints, path planning, differential drive modeling, trajectory tracking, and wheel slip dynamics.',
    image: './assets/cert-nptel.png',
    badge: 'Elite Grade',
    domain: 'Robot Kinematics & Dynamics',
  },
  {
    id: 'udemy-ros2-plan-nav',
    title: 'Self Driving & ROS 2: Learn by Doing (Plan & Navigation)',
    issuer: 'Udemy',
    level: 'Professional Certificate',
    description:
      'Hands-on mastery of the ROS 2 navigation stack (Nav2), SLAM map generation, AMCL particle filter localization, costmap tuning, and autonomous trajectory planning for mobile robotics.',
    image: './assets/cert-ros2.png',
    badge: 'ROS 2 & Nav2',
    domain: 'Autonomous Navigation',
  },
  {
    id: 'mit-robotics-internship',
    title: 'Robotics and Automation Engineering Certificate',
    issuer: 'Anna University (MIT Campus)',
    level: 'Research Internship',
    description:
      'Issued by the Centre of Robotics and Automation at Madras Institute of Technology for industrial PLC ladder programming, sensor bus interfacing, and SolidWorks 3D CAD simulation.',
    image: './assets/cert-internship.png',
    badge: 'Industrial Automation',
    domain: 'PLCs & SolidWorks',
  },
  {
    id: 'infosys-certificate',
    title: 'Infosys Certified Professional',
    issuer: 'Infosys Springboard',
    level: 'Professional Certification',
    description:
      'Certified coursework in modern software engineering principles, Linux fundamentals, Python algorithms, and systems architectures.',
    image: './assets/cert-infosys.png',
    badge: 'Software Engineering',
    domain: 'Software Architecture',
  },
];
