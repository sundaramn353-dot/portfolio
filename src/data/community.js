/**
 * community.js — Leadership, Mentoring, Community Management & Open Source
 * Section 09: Beyond Engineering
 */
export const communityData = [
  {
    id: 'rookies-community',
    title: 'Manager — Rookies Robotics Community',
    role: 'Community Lead & Coordinator',
    period: '2026 – Present',
    description:
      'Founded and manage the "Rookies" robotics community, connecting ambitious student engineers with hands-on robotics development. Curate technical learning roadmaps, host peer code reviews, and organize collaborative hardware hackathons.',
    image: './assets/community-team.jpg',
    secondaryImage: './assets/community-1.png',
    impact: [
      'Built a tight-knit community of robotics learners focusing on practical ROS 2 and AMR development.',
      'Organized hardware bring-up workshops, sensor wiring sessions, and ROS 2 debugging circles.',
      'Coordinated technical learning tracks bridging theoretical university curricula with real industry engineering.',
    ],
    tags: ['Community Leadership', 'Robotics Culture', 'Hackathons', 'Mentoring'],
  },
  {
    id: 'ros2-masterclass',
    title: '20-Day Intensive ROS 2 Training Program & Masterclasses',
    role: 'Lead Instructor & Curriculum Designer',
    period: '2026',
    description:
      'Designed and delivered a comprehensive 20-day technical training program on ROS 2 Jazzy and mobile robotics for aspiring engineering students. Taught Linux fundamentals, ROS 2 nodes, URDF modeling, Gazebo physics simulation, and autonomous Nav2 navigation.',
    impact: [
      'Authored hands-on reference guides: "ROS 2 Jazzy Masterclass: Installation and Beginner Commands".',
      'Guided 50+ students from zero ROS experience to deploying simulated autonomous mobile robots in Gazebo.',
      'Conducted live hardware demonstrations illustrating differential-drive kinematics and LiDAR SLAM mapping.',
    ],
    tags: ['Technical Training', 'ROS 2 Jazzy', 'Curriculum Design', 'Masterclasses'],
  },
  {
    id: 'open-source-github',
    title: 'Open Source Robotics on GitHub',
    role: 'Open Source Maintainer',
    period: 'Continuous',
    description:
      'Actively maintaining open-source robotics repositories on GitHub (github.com/sundaramn353-dot), sharing reproducible ROS 2 packages, custom launch systems, and embedded micro-ROS firmware for AMRs.',
    impact: [
      'Open-sourced complete AMR description and bring-up packages with modular Xacro macros.',
      'Published gesture-control vision nodes utilizing OpenCV and MediaPipe for mobile robot teleoperation.',
      'Documented reproducible colcon workspace setup guides for ARM64 single-board computers.',
    ],
    tags: ['Open Source', 'GitHub', 'ROS 2 Packages', 'Firmware Repositories'],
  },
];
