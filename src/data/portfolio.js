// Concise public copy grounded in the existing project content and resume.
export const work = [
  {
    id: 'bumpy-amr', name: 'Bumpy', company: 'Karthikesh Robotics Limited', discipline: 'AUTONOMOUS MOBILE ROBOT',
    purpose: 'From a mobile base to autonomous navigation.',
    description: 'Contributed to the development and integration of a differential-drive AMR using ROS 2. My work focused on hardware assembly, LiDAR integration, coordinate frames, odometry, and localization.',
    contribution: 'Hardware bring-up · ROS 2 integration · SLAM & Nav2',
    tags: ['ROS 2', 'Nav2', 'LiDAR', 'TF2'], image: './assets/bumpy-amr-two-robots.png', imageWidth: 478, imageHeight: 433, mediaClass: 'robot-photo',
    alt: 'Bumpy project image showing two compact robots with blue LiDAR units and exposed layered chassis', caption: 'BUMPY AMR / PROFESSIONAL TEAM PROJECT',
    detail: 'As part of the company team, I contributed to the chassis and electronics assembly, configured the robot description and TF2 frames, integrated LiDAR and wheel odometry, and worked on SLAM, localization, and Nav2 navigation.',
    architecture: 'LiDAR + wheel odometry → ROS 2 / TF2 → SLAM & localization → Nav2 → motor control',
    supportingImage: './assets/slam-map.png', supportingCaption: 'Occupancy grid map from the existing Bumpy project assets.',
  },
  {
    id: 'sparky-amr', name: 'Sparky', company: 'Karthikesh Robotics Limited', discipline: 'EMBEDDED ROBOTICS / MICRO-ROS',
    purpose: 'Bridging high-level software and motor control.',
    description: 'Contributed to the development and integration of a differential-drive AMR with a Raspberry Pi host and ESP32 controller. My work focused on ROS 2 and micro-ROS communication, motor drivers, and PWM-based control.',
    contribution: 'micro-ROS communication · ESP32 integration · Motor control',
    tags: ['micro-ROS', 'ESP32', 'C++', 'Raspberry Pi'],
    image: './assets/sparky-amr.png', imageWidth: 600, imageHeight: 393, mediaClass: 'robot-photo',
    alt: 'Sparky AMR shown in the supplied project photograph', caption: 'SPARKY AMR / PROFESSIONAL TEAM PROJECT',
    showArchitecture: true,
    detail: 'As part of the company team, my contribution focused on communication between the Raspberry Pi ROS 2 host and the ESP32 microcontroller, alongside motor driver wiring, PWM control, and robot integration. The existing project documents encoder feedback, wheel velocity control, and a URDF/Xacro model for simulation.',
    architecture: 'ROS 2 host / Raspberry Pi → micro-ROS transport → ESP32 → motor drivers + encoder feedback',
  },
  {
    id: 'simulation-suite', name: 'ROS 2 / Gazebo', discipline: 'ROS 2 / GAZEBO SIMULATION',
    purpose: 'A place to build, test, and understand robot behavior.',
    description: 'ROS 2 and Gazebo projects covering robot models, sensor integration, teleoperation, and navigation. Simulation makes it possible to work through the software before bringing it to hardware.',
    contribution: 'URDF models · Simulation setup · Navigation integration',
    tags: ['Gazebo', 'ROS 2', 'URDF', 'Python'], image: './assets/gazebo-cafe-simulation.png',
    alt: 'Gazebo cafe environment from the existing ROS 2 simulation project', caption: 'SIMULATION / GAZEBO',
    detail: 'I developed ROS 2 and Gazebo simulations with URDF robot descriptions, sensor plugins, teleoperation, and navigation. The existing work includes a cafe environment for exploring mobile robot navigation and waypoint behavior.',
    architecture: 'URDF robot model → Gazebo physics + sensors → ROS 2 → teleoperation & Nav2',
  },
  {
    id: 'rocker-bogie', name: 'Six-wheeled robot', discipline: 'SIX-WHEELED ROBOT / FINAL YEAR PROJECT',
    purpose: 'Exploring mobility through passive suspension.',
    description: 'A six-wheeled all-terrain robot with a rocker-bogie suspension. I designed the robot and integrated Arduino control, inductive proximity sensing, and Bluetooth teleoperation.',
    contribution: 'Mechanical design · Embedded control · Sensor integration',
    tags: ['Arduino', 'Embedded C', 'SolidWorks', 'Bluetooth'], image: './assets/rocker-bogie.jpg',
    alt: 'Robot prototype from the passive suspension project assets, with exposed chassis, motors, and wiring', caption: 'HARDWARE / PASSIVE SUSPENSION',
    detail: 'This final-year project brought mechanical design and embedded control together. I worked on the six-wheel passive suspension chassis, motor and electrical integration, Arduino control, inductive proximity sensing, and Bluetooth teleoperation.',
    architecture: 'Bluetooth commands → Arduino UNO → motor drivers → six-wheel chassis / inductive sensing',
    supportingImage: './assets/rocker-bogie-2.jpg', supportingCaption: 'Additional view of the project hardware.',
  },
];

// Count and collection description supplied by Meenatchi Sundaram.
// Individual repositories could not be verified from this network-restricted environment.
export const simulationCollection = {
  id: 'ros2-simulation-projects',
  title: 'ROS 2 Simulation Projects',
  highlight: '10+ completed simulation projects',
  description: 'A collection of my ROS 2 simulation projects, with source code available on GitHub.',
  image: './assets/gazebo-cafe-simulation.png',
  alt: 'Existing Gazebo cafe simulation screenshot from the portfolio project assets',
};

export const expertise = [
  ['Programming', ['Python', 'C++', 'Bash']],
  ['Robotics', ['ROS 2 / Jazzy', 'Nav2 · SLAM · AMCL', 'TF2 · URDF / Xacro · Gazebo']],
  ['Integration', ['LiDAR · Odometry', 'ESP32 · micro-ROS', 'Raspberry Pi · PWM · Encoders']],
  ['Tools', ['Linux / Ubuntu', 'Git · CMake · RViz2', 'SolidWorks · Arduino']],
];
