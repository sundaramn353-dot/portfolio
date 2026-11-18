/**
 * meta.js — Personal brand identity & verified resume metadata
 * Meenatchi Sundaram N. (Sundaram N.)
 * Robotics Engineer | ROS 2 Developer | Autonomous Mobile Robots
 */
export const meta = {
  // Display names & title
  fullName: 'Meenatchi Sundaram',
  legalName: 'Meenatchi Sundaram N',
  role: 'Robotics Engineer',
  specialization: 'ROS 2 Developer & Autonomous Mobile Robots',
  subRole: 'ROS 2 | AMR | Autonomous Navigation | Physical AI',

  // Professional positioning statement
  positioning:
    'I engineer intelligent robotic systems, developing autonomous mobile robots through ROS 2, navigation, perception, simulation, and hardware-software integration.',

  // Hero headline
  heroHeadline: 'ENGINEERING INTELLIGENCE INTO MOTION.',
  heroSubheadline:
    'I build autonomous robotic systems using ROS 2, intelligent navigation, robotics software, and real-world hardware integration.',

  // Contact details (verified directly from resume)
  email: 'sundaramn353@gmail.com',
  phone: '+91 73392 57336',
  location: 'Chennai, India',
  availability: 'Available for Robotics & Autonomous Systems Roles',
  locationNote: 'Open to On-Site, Relocation & Remote Opportunities',

  // Social & Professional Profiles
  github: 'https://github.com/sundaramn353-dot',
  githubUsername: 'sundaramn353-dot',
  linkedin: 'https://www.linkedin.com/in/sundaram-n/',
  linkedinUsername: 'sundaram-n',
  resumeFile: './Meenatchi_sundaram_N_Resume.pdf',

  // Verified Statistics from Resume
  stats: [
    {
      value: 1,
      suffix: '+',
      label: 'Years Industry R&D',
      subtext: 'Robotics Engineer at Karthikesh Robotics Limited',
      detail: 'End-to-end AMR deployment',
    },
    {
      value: 2,
      suffix: '',
      label: 'Production AMRs Built',
      subtext: 'Bumpy & Sparky AMRs',
      detail: 'Hardware assembly to Nav2 autonomy',
    },
    {
      value: 10,
      suffix: '+',
      label: 'ROS 2 Simulations',
      subtext: 'Gazebo Harmonic & Isaac Sim',
      detail: 'Kinematics, SLAM, & path dispatching',
    },
    {
      value: 20,
      suffix: '-Day',
      label: 'Masterclass Delivered',
      subtext: 'Technical Training & Mentorship',
      detail: 'Trained engineering students in ROS 2',
    },
    {
      value: 7.7,
      suffix: '',
      label: 'CGPA B.E. Robotics',
      subtext: 'Dhaanish Ahmed Inst. of Tech.',
      detail: 'Robotics & Automation (2022–2026)',
    },
  ],

  // About Section Narrative (Strictly Verified from Resume)
  about: {
    heading: 'BEYOND CODE. BUILDING INTELLIGENT MACHINES.',
    badge: 'ENGINEERING PROFILE',
    summary: [
      'Robotics and Automation engineer with professional experience in ROS 2 development and autonomous mobile robotics. My work spans the full spectrum of autonomous systems — from precision mechanical assembly and embedded micro-ROS firmware to high-level Nav2 trajectory generation and Gazebo simulation.',
      'At Karthikesh Robotics Limited, I contributed to the end-to-end engineering of the Bumpy and Sparky differential-drive AMRs. I architected the ROS 2 Jazzy software stacks, managed the TF2 coordinate trees, integrated 2D LiDAR sensors, implemented odometry feeds, and tuned Nav2 costmaps and recovery behaviors for reliable navigation.',
      'Passionate about technical leadership, I conducted a 20-day ROS 2 training program, delivered robotics masterclasses for engineering students, and managed the Rookies robotics community. I believe true physical AI happens when solid algorithms meet robust hardware in the physical world.',
    ],
    coreFocus: [
      {
        title: 'ROS 2 & Middleware Stack',
        description: 'Architecting ROS 2 Jazzy nodes, TF2 coordinate transforms, micro-ROS agents, and lifecycle state machines.',
      },
      {
        title: 'Autonomous Mobile Robots (AMRs)',
        description: 'End-to-end differential drive kinematics, wheel encoder odometry, hardware PWM control, and chassis bring-up.',
      },
      {
        title: 'Navigation & SLAM',
        description: 'Graph-based 2D SLAM (slam_toolbox), probabilistic localization (AMCL), Nav2 costmap configuration, and recovery plugins.',
      },
      {
        title: 'Hardware-Software Integration',
        description: 'Interfacing Raspberry Pi 4, ESP32 microcontrollers, YDLIDAR sensors, IMUs, and motor drivers via micro-ROS and pigpio.',
      },
      {
        title: 'Simulation & Physical AI',
        description: 'Creating realistic Gazebo Harmonic and Isaac Sim worlds, URDF/Xacro models, sensor plugins, and synthetic testing benches.',
      },
    ],
  },
};
