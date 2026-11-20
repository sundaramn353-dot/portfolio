import { meta } from './meta.js';

// Concise public copy grounded in the existing project content and resume.
export const work = [
  {
    id: 'bumpy-amr', name: 'Bumpy', company: 'Karthikesh Robotics Limited', discipline: 'AUTONOMOUS MOBILE ROBOT',
    purpose: 'From a mobile base to autonomous navigation.',
    description: 'Contributed to the development and integration of a differential-drive AMR using ROS 2. My work focused on hardware assembly, LiDAR integration, coordinate frames, odometry, and localization.',
    contribution: 'Hardware bring-up · ROS 2 integration · SLAM & Nav2',
    tags: ['ROS 2', 'Nav2', 'LiDAR', 'TF2'], image: './assets/bumpy-amr-two-robots-cropped.png', imageWidth: 478, imageHeight: 340,
    alt: 'Bumpy project image showing two compact robots with blue LiDAR units and exposed layered chassis', caption: 'BUMPY AMR / PROFESSIONAL TEAM PROJECT',
    detail: 'As part of the company team, I contributed to the chassis and electronics assembly, configured the robot description and TF2 frames, integrated LiDAR and wheel odometry, and worked on SLAM, localization, and Nav2 navigation.',
    architecture: 'LiDAR + wheel odometry → ROS 2 / TF2 → SLAM & localization → Nav2 → motor control',
    supportingImage: './assets/slam-map.png', supportingCaption: 'Occupancy grid map from the existing Bumpy project assets.',
  },
  {
    id: 'sparky-amr', name: 'AMR', robotName: 'Sparky', company: 'Karthikesh Robotics Limited', discipline: 'ROS 2 · INDUSTRIAL AUTONOMOUS MOBILE ROBOT',
    compact: true,
    purpose: 'ROS 2-based industrial autonomous navigation.',
    description: 'Contributed to Sparky’s ROS 2 integration, focusing on SLAM, Nav2, URDF modeling, and RViz debugging, alongside odometry, LiDAR, motor drivers, and sensor integration.',
    contribution: 'Mapping & navigation · Robot modeling · Hardware & sensor integration',
    tags: ['ROS 2', 'SLAM', 'Nav2', 'URDF', 'RViz', 'Odometry', 'LiDAR'],
    image: './assets/sparky-amr.png', imageWidth: 600, imageHeight: 393,
    alt: 'Sparky AMR shown in the supplied project photograph', caption: 'SPARKY / ROS 2 INDUSTRIAL AMR / PROFESSIONAL TEAM PROJECT',
    showArchitecture: true,
    detail: 'Contributed to the development and integration of Sparky, a differential-drive industrial autonomous mobile robot. My work focused on SLAM-based mapping, Nav2 navigation, URDF robot modeling, and visualization and debugging in RViz. I also worked on odometry, LiDAR, motor-driver integration, and other sensors to connect the physical robot with the ROS 2 system. As part of the company team, I contributed to the complete AMR system. Supporting architecture includes a Raspberry Pi ROS 2 host communicating through micro-ROS with an ESP32 motor controller for motor control and encoder feedback.',
    contributionDetails: ['SLAM & mapping', 'Nav2 navigation', 'URDF modeling', 'RViz visualization and debugging', 'Odometry & LiDAR integration', 'Motor drivers & sensors'],
    architecture: 'URDF robot model + LiDAR + odometry → ROS 2 / SLAM mapping / RViz → Nav2 navigation → Raspberry Pi host / micro-ROS → ESP32 / motor drivers + encoder feedback',
  },
  {
    id: 'simulation-suite', name: 'ROS 2 / Gazebo & Digital Twins', discipline: 'ROS 2 / GAZEBO / DIGITAL TWINS',
    purpose: 'A place to build, test, and understand robot behavior.',
    description: 'Hands-on experience with ROS 2 and Gazebo simulation, including digital-twin development, robot modeling, sensor integration, teleoperation, and navigation testing before hardware deployment.',
    contribution: 'URDF robot modeling · Simulation environment setup · Sensor integration · ROS 2 communication & navigation integration',
    tags: ['Gazebo', 'ROS 2', 'URDF', 'Digital Twins', 'Python'], image: './assets/ros2-gazebo-digital-twins.png', imageWidth: 860, imageHeight: 607, imageFit: 'contain',
    alt: 'Industrial robot simulation with robotic arms, conveyors, safety fencing, and a sorting area', caption: 'ROS 2 / Gazebo & Digital Twins',
    detail: 'I developed ROS 2 and Gazebo simulations with URDF robot descriptions, sensor plugins, teleoperation, and navigation. The existing work includes a cafe environment for exploring mobile robot navigation and waypoint behavior.',
    architecture: 'URDF robot model → Gazebo physics + sensors → ROS 2 → teleoperation & Nav2',
  },
  {
    id: 'rocker-bogie', name: 'Six-wheeled robot', discipline: 'SIX-WHEELED ROBOT / FINAL YEAR PROJECT',
    purpose: 'Exploring mobility through passive suspension.',
    description: 'A six-wheeled all-terrain robot with a rocker-bogie suspension. I designed the robot and integrated Arduino control, inductive proximity sensing, and Bluetooth teleoperation.',
    contribution: 'Mechanical design · Embedded control · Sensor integration',
    tags: ['Arduino', 'Embedded C', 'SolidWorks', 'Bluetooth'], image: './assets/rocker-bogie.jpg', imageWidth: 1280, imageHeight: 1272, imagePosition: 'center 17%',
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
  name: 'ROS 2 Simulation Projects',
  discipline: 'SOURCE CODE / PROJECT COLLECTION',
  caption: 'ROS 2 / GAZEBO · SIMULATION PREVIEW',
  link: { href: meta.github, label: 'View GitHub profile' },
  purpose: '10+ completed simulation projects',
  description: 'A collection of my ROS 2 simulation projects, with source code available on GitHub.',
  image: './assets/gazebo-diwali-poster.jpg', imageWidth: 1440, imageHeight: 900, imageFit: 'cover',
  watchLink: './assets/gazebo-diwali.mp4',
  alt: 'Frame from my Gazebo Diwali street environment demonstration',
};

export const expertise = [
  ['Programming', ['Python', 'C++', 'Bash']],
  ['Robotics', ['ROS 2 / Jazzy', 'Nav2 · SLAM · AMCL', 'TF2 · URDF / Xacro · Gazebo', 'Digital Twin Simulation']],
  ['Integration', ['LiDAR · Odometry', 'ESP32 · micro-ROS', 'Raspberry Pi · PWM · Encoders']],
  ['Tools', ['Linux / Ubuntu', 'Git · CMake · RViz2', 'SolidWorks · Arduino']],
];
