/**
 * projects.js — Comprehensive robotics project case studies
 * Strictly derived from resume, verified code repositories, and real hardware documentation.
 * Each project contains an 8-part engineering breakdown.
 */
export const projects = [
  {
    id: 'bumpy-amr',
    num: '01',
    title: 'Bumpy — Autonomous Mobile Robot (AMR)',
    subtitle: 'Production Differential-Drive AMR with ROS 2 Jazzy & Nav2',
    category: 'ROS 2 | AMR | Autonomous Navigation',
    type: 'Professional Team Project',
    organization: 'Karthikesh Robotics Limited',
    period: '2026 – Present',
    badge: 'Flagship AMR',
    featured: true,
    image: './assets/bumpy-amr-two-robots.png',
    mapImage: './assets/slam-map.png',
    specs: {
      compute: 'Raspberry Pi 4 Model B (ARM64)',
      os: 'Ubuntu Server 24.04 LTS (Noble)',
      middleware: 'ROS 2 Jazzy Jalisco',
      lidar: 'YDLIDAR X2 (10 Hz, 115200 baud, /dev/ttyUSB0)',
      actuation: 'Dual DC Motors + pigpio Hardware PWM',
      kinematics: 'Differential Drive (Two driven wheels + casters)',
      telemetry: 'SSD1306 I2C OLED (luma.oled) + Rosbridge (Port 9090)',
    },
    stack: [
      'ROS 2 Jazzy',
      'Nav2',
      'slam_toolbox',
      'TF2',
      'ros2_control',
      'pigpio',
      'YDLIDAR X2',
      'Raspberry Pi 4',
      'Ubuntu 24.04',
      'C++',
      'Python',
    ],
    // The 8-Point Engineering Case Study
    caseStudy: {
      overview:
        'Bumpy is an industrial-prototype Autonomous Mobile Robot engineered for autonomous indoor navigation, 2D SLAM mapping, and telemetry reporting. Built on ROS 2 Jazzy Jalisco and Ubuntu 24.04 LTS ARM64, Bumpy integrates custom ros2_control hardware interfaces with pigpio microsecond PWM generation on a Raspberry Pi 4.',
      problemStatement:
        'Small-to-medium AMR platforms often struggle with Linux user-space CPU scheduling jitter causing uneven motor PWM pulses, sensor timing drift between host and remote workstations, and memory-exhaustion crashes when compiling heavy ROS 2 packages on resource-constrained ARM64 SBCs.',
      systemArchitecture:
        'The architecture runs a modular ROS 2 node graph: /ydlidar_ros2_driver_node publishes /scan, diffbot_gpio (custom C++ ros2_control interface) drives motor PWM pins via the pigpiod daemon, slam_toolbox constructs 2D occupancy grids, Nav2 plans smooth obstacle-free trajectories, and rosbridge_server streams real-time pose and battery telemetry over WebSockets to remote operator dashboards.',
      technologiesUsed: [
        'ROS 2 Jazzy Jalisco & CycloneDDS RMW',
        'Nav2 (DWB Local Planner, NavFn Global Planner, Costmaps, Recovery Behaviors)',
        'slam_toolbox (2D Graph SLAM for high-fidelity occupancy grid maps)',
        'TF2 Coordinate Tree (map -> odom -> base_footprint -> base_link -> laser_frame)',
        'pigpio native C++ SDK for microsecond-level hardware PWM timing',
        'YDLidar C++ SDK & ROS 2 driver node (/dev/ttyUSB0, 115200 baud)',
        'chrony NTP daemon for millisecond-level time synchronization across subnets',
        'luma.oled + Pillow for onboard SSD1306 I2C display status readouts',
      ],
      engineeringContributions: [
        'Assembled the physical chassis, power distribution bus, motor drivers, LiDAR mounting, and compute bracket.',
        'Wrote and configured the custom diffbot_gpio ros2_control hardware interface in C++ connecting cmd_vel to pigpio.',
        'Created the complete URDF/Xacro kinematic description and calibrated the TF2 transform tree.',
        'Tuned Nav2 inflation layers, costmap update frequencies, and recovery behaviors for tight indoor spaces.',
        'Developed memory-constrained colcon build scripts (--parallel-workers 1) enabling reliable compilation on ARM64.',
        'Configured udev rules (99-bumpy.rules) ensuring persistent serial port symlinks for the LiDAR scanner.',
      ],
      implementation:
        'Implemented sequentially starting from base Ubuntu 24.04 repository alignment, ROS 2 base installation, compiling native pigpio and YDLidar SDKs from source, establishing the systemd pigpiod daemon, writing the bumpy_bringup launch system, and validating teleoperation via teleop_twist_keyboard before engaging autonomous Nav2 waypoints.',
      challengesAndSolutions: [
        {
          challenge: 'User-space scheduling jitter caused irregular motor speed and odometry slip.',
          solution:
            'Integrated the pigpio C++ engine to utilize DMA-driven hardware PWM directly on Raspberry Pi GPIO pins, eliminating CPU load fluctuations.',
        },
        {
          challenge: 'Compiler memory exhaustion (OOM crashes) during colcon builds on 4GB Raspberry Pi.',
          solution:
            'Configured colcon build flags with --parallel-workers 1 --executor sequential and added swap space to serialize heavy C++ compilation.',
        },
        {
          challenge: 'TF timing buffer drops caused by clock drift between Raspberry Pi and remote RViz PC.',
          solution:
            'Deployed chrony NTP daemon across the local network, synchronizing clocks within <2ms and resolving TF extrapolation errors.',
        },
      ],
      demonstratedResults:
        'Achieved full-stack autonomous navigation: live 2D graph SLAM map generation, continuous AMCL localization, dynamic obstacle avoidance via Nav2 costmaps, and real-time remote telemetry streaming over WebSockets without frame drops.',
    },
  },
  {
    id: 'sparky-amr',
    num: '02',
    title: 'Sparky — Differential Drive Autonomous Mobile Robot',
    subtitle: 'Distributed micro-ROS Architecture with ESP32 & Raspberry Pi',
    category: 'Robotics Software | ROS 2 | Embedded Systems',
    type: 'Professional Team Project',
    organization: 'Karthikesh Robotics Limited',
    period: '2026 – Present',
    badge: 'Distributed Autonomy',
    featured: true,
    image: './assets/sparky-amr.png',
    specs: {
      chassis: '600 mm (L) × 450 mm (W) × 20 mm (H) | Mass: 5.0 kg',
      driveType: 'Differential Drive (⌀100 mm wheels, 40 cm track width)',
      casters: '4 × ⌀40 mm passive ball transfer casters',
      embeddedController: 'ESP32 Dual-Core (micro_ros_arduino Core 3.x)',
      hostCompute: 'Raspberry Pi (ROS 2 Jazzy Host Agent)',
      communication: 'micro-ROS over Wi-Fi UDP & High-Speed Serial',
      feedback: 'Dual Quadrature Wheel Encoders with Hardware Interrupts',
    },
    stack: [
      'ROS 2 Jazzy',
      'micro-ROS',
      'ESP32',
      'Raspberry Pi',
      'PID Control',
      'Gazebo',
      'RViz2',
      'URDF / Xacro',
      'C++',
      'Arduino Core 3.x',
    ],
    caseStudy: {
      overview:
        'Sparky is a dual-tier differential drive AMR engineered around a distributed micro-ROS computing architecture. A low-cost, high-performance ESP32 microcontroller handles real-time motor actuation, quadrature encoder interrupts, and discrete PID velocity regulation, communicating seamlessly over Wi-Fi UDP with a host Raspberry Pi running ROS 2 Jazzy.',
      problemStatement:
        'Real-time motor control loops and high-frequency quadrature encoder interrupts (often >1 kHz) run poorly on high-level Linux OS due to non-deterministic kernel scheduling. Conversely, microcontrollers cannot run heavy Nav2 path planning or SLAM algorithms.',
      systemArchitecture:
        'Hierarchical distributed robotics architecture: High-level ROS 2 Jazzy on Raspberry Pi runs the navigation stack and publishes /cmd_vel. The micro-ROS Agent routes messages over Wi-Fi UDP to the ESP32 micro-ROS client. The ESP32 parses linear and angular velocities, runs dual PID loops, commands motor PWM, and publishes /odom, /tf, and /encoder_ticks back into the ROS 2 graph.',
      technologiesUsed: [
        'micro-ROS for Arduino (ESP32 Core 3.x)',
        'ROS 2 Jazzy micro-ROS Agent (UDP / Serial transport)',
        'Quadrature Wheel Encoders with discrete interrupt handling',
        'PID velocity controller with anti-windup and stop-fix clamping',
        'URDF/Xacro parameterized robot model with 4 caster stability',
        'Gazebo world arena and RViz2 visualization pipeline',
      ],
      engineeringContributions: [
        'Developed the complete ESP32 micro-ROS firmware (esp32_amr_pid_stopfix.ino) managing motor PWM and encoder tick aggregation.',
        'Wrote discrete PID speed controllers for left and right wheels to eliminate open-loop drift and uneven traction.',
        'Configured micro-ROS Wi-Fi UDP agent transport between the Raspberry Pi and the ESP32.',
        'Built the parameterized URDF/Xacro model representing the 600×450mm chassis with ⌀100mm wheels and 40cm axle separation.',
        'Configured Gazebo simulation world (sparky_world.world) and verified teleoperation before hardware testing.',
      ],
      implementation:
        'Engineered the firmware to subscribe directly to geometry_msgs/msg/Twist (/cmd_vel) and publish nav_msgs/msg/Odometry (/odom), tf2_msgs/msg/TFMessage (/tf), and std_msgs/msg/Int32MultiArray (/encoder_ticks). Implemented safety timeout stops if cmd_vel heartbeats cease for >500ms.',
      challengesAndSolutions: [
        {
          challenge: 'Motor speed drift causing the robot to veer off a straight path under open-loop commands.',
          solution:
            'Implemented closed-loop PID control calculated at 20Hz based on cumulative and interval encoder ticks.',
        },
        {
          challenge: 'Zero-velocity command jitter ("creeping" when stopping).',
          solution:
            'Integrated an explicit zero-velocity brake clamp that clears PID integral error and grounds motor driver enable pins immediately on stop command.',
        },
        {
          challenge: 'Network latency spikes during micro-ROS UDP communication.',
          solution:
            'Optimized micro-ROS buffer allocation and pinned network tasks to ESP32 Core 0 while keeping motor PID on Core 1.',
        },
      ],
      demonstratedResults:
        'Seamless integration between high-level ROS 2 navigation and low-level ESP32 motor drivers. Accurate odometry estimation verified through RViz2 TF tree tracking and Gazebo simulation parity.',
    },
  },
  {
    id: 'rocker-bogie',
    num: '03',
    title: 'Six-Wheeled All-Terrain Robot with Passive Suspension',
    subtitle: 'Rocker-Bogie Mechanical Suspension with Inductive Obstacle Sensing',
    category: 'Mobile Robotics | Mechanical & Embedded Systems',
    type: 'Final Year Engineering Project',
    organization: 'Dhaanish Ahmed Institute of Technology',
    period: 'Academic Final Year',
    badge: 'Hardware & CAD',
    featured: true,
    image: './assets/rocker-bogie.jpg',
    secondaryImage: './assets/rocker-bogie-2.jpg',
    specs: {
      suspension: 'Rocker-Bogie 6-Wheel Passive Linkage Mechanism',
      wheels: '6 Driven All-Terrain Rubber Wheels with High-Torque Geared Motors',
      microcontroller: 'Arduino UNO / Atmel ATmega328P',
      sensors: 'SN04-N Inductive Proximity Sensors for Metallic Object Detection',
      teleoperation: 'Bluetooth Wireless Serial Protocol (HC-05)',
      power: 'High-Discharge Li-Ion Battery Pack with Multi-Stage Buck Regulation',
    },
    stack: [
      'AMR Kinematics',
      'Rocker-Bogie Suspension',
      'Arduino UNO',
      'SN04-N Sensors',
      'Embedded C',
      'Bluetooth Teleop',
      'SolidWorks',
      'Motor Drivers',
    ],
    caseStudy: {
      overview:
        'An all-terrain exploratory mobile robot utilizing a 6-wheel Rocker-Bogie passive suspension mechanism inspired by Mars rover kinematics. The mechanical linkage distributes ground contact forces equally across all six driven wheels, allowing the chassis to climb over large obstacles and navigate extreme terrain without active electronic suspension.',
      problemStatement:
        'Standard 4-wheel or rigid-chassis robots lose wheel traction and roll stability when traversing irregular, rocky, or stepped terrain, causing drive wheel slippage and chassis overturns in hazardous search-and-surveillance zones.',
      systemArchitecture:
        'Mechanical rocker-bogie differential link transfers vertical pitch across left and right sides without springs. An Arduino UNO controller drives high-torque DC gearmotors through dual H-bridge motor drivers, continuously monitors SN04-N inductive proximity sensors for metal detection, and executes wireless Bluetooth movement commands.',
      technologiesUsed: [
        'Rocker-Bogie kinematics and mechanical linkage force balancing',
        'SolidWorks 3D CAD mechanical modeling and kinematic assembly',
        'SN04-N NPN inductive proximity sensing (real-time metal/obstacle alerts)',
        'Arduino UNO / Embedded C control loop with PWM motor speed modulation',
        'Bluetooth teleoperation with custom Android telemetry application',
      ],
      engineeringContributions: [
        'Designed and fabricated the complete 6-wheel rocker-bogie mechanical chassis and linkage joints.',
        'Sized and installed 6 high-torque geared motors with independent suspension pivot axes.',
        'Wired the electrical harness, H-bridge motor drivers, sensor voltage divider circuits, and Bluetooth bridge.',
        'Wrote Embedded C firmware handling wireless teleoperation and real-time obstacle detection interrupts.',
      ],
      implementation:
        'Fabricated lightweight structural arms with pivot joints calibrated to clear obstacles taller than 1.5× wheel diameter. The SN04-N inductive sensors were positioned low on the front bumper to trigger automated halts and telemetry warnings upon detecting ferrous objects.',
      challengesAndSolutions: [
        {
          challenge: 'Chassis tilt instability during asymmetrical obstacle climbing.',
          solution:
            'Added a top differential bar connecting the left and right rockers, enforcing opposite pitch motion and stabilizing the center payload body.',
        },
        {
          challenge: 'Voltage drops and controller resets during simultaneous 6-motor stall currents.',
          solution:
            'Separated motor power rails from the microcontroller supply with high-current buck converters and decoupling capacitor banks.',
        },
      ],
      demonstratedResults:
        'Demonstrated reliable traversal across 15cm stepped obstacles, sand, and rough terrain while maintaining all 6 wheels in continuous ground contact. Validated remote wireless teleoperation and real-time metallic object proximity detection.',
    },
  },
  {
    id: 'simulation-suite',
    num: '04',
    title: 'ROS 2 Simulation Suite & Cafe Service AMR',
    subtitle: '10+ High-Fidelity Simulation Environments in Gazebo & Isaac Sim',
    category: 'Simulation | Nav2 | Isaac Sim & Gazebo',
    type: 'Simulation & Software Suite',
    organization: 'Robotics R&D & Open Source',
    period: '2025 – 2026',
    badge: '10+ Sim Environments',
    featured: false,
    image: './assets/gazebo-cafe-simulation.png',
    specs: {
      simulators: 'Gazebo Harmonic, Gazebo Classic, NVIDIA Isaac Sim',
      physicsEngine: 'DART & NVIDIA PhysX 5',
      environment: 'French Cafe Multi-Room Complex with Dynamic Obstacles',
      robotModel: 'Custom Differential Drive AMR with YDLidar & RGBD Camera Plugins',
      navStack: 'Nav2 with Costmap Filters and Waypoint Follower',
    },
    stack: [
      'ROS 2 Jazzy',
      'Gazebo Harmonic',
      'Isaac Sim',
      'Nav2',
      'URDF / Xacro',
      'SDF Worlds',
      'Python',
      'RViz2',
    ],
    caseStudy: {
      overview:
        'A comprehensive suite of 10+ robotics simulation environments developed to validate autonomous navigation algorithms before physical deployment. Featured project is the "French Cafe" service robot, where an AMR navigates through narrow dining aisles, interacts with simulated customers, and dispatches food orders between kitchen and table waypoints.',
      problemStatement:
        'Physical robot hardware testing is slow, expensive, and risks hardware damage during early autonomous navigation algorithm development. A realistic digital twin is necessary to test corner cases, dynamic obstacle avoidance, and sensor noise.',
      systemArchitecture:
        'URDF/Xacro models with Gazebo plugins simulate differential drive controllers, 2D LiDAR ray casting, and joint state publishers. Nav2 operates against the simulated clock (/clock), running global path planners (NavFn), local trajectory controllers (DWB), and costmap inflation layers inside Gazebo.',
      technologiesUsed: [
        'Gazebo Harmonic & SDF 3D world building',
        'NVIDIA Isaac Sim cloud-ready warehouse environment setup',
        'ROS 2 Nav2 Waypoint Follower and custom action clients in Python',
        'Xacro macro modeling for quick chassis dimension re-parameterization',
      ],
      engineeringContributions: [
        'Built 10+ simulation worlds including warehouse layouts, cafe environments, and obstacle arenas.',
        'Wrote custom Python mission dispatchers using the Nav2 Simple Commander API for autonomous patrol loops.',
        'Calibrated simulated LiDAR ray noise parameters to replicate real-world YDLIDAR X2 characteristics.',
        'Documented reproducible step-by-step installation guides for running Isaac Sim and ROS 2 Jazzy.',
      ],
      implementation:
        'Developed modular launch files (gazebo.launch.py, navigation.launch.py, rviz.launch.py) allowing headless simulation on cloud servers or full GUI debugging on local workstations.',
      challengesAndSolutions: [
        {
          challenge: 'Robot slipping and drifting unnaturally on simulated polished cafe tile flooring.',
          solution:
            'Calibrated wheel contact friction coefficients (mu1, mu2, kp, kd) in the Gazebo SDF surface properties.',
        },
      ],
      demonstratedResults:
        'Over 10 successful simulation workflows built and benchmarked. Autonomous cafe robot successfully dispatched between 8 distinct table waypoints with 100% collision-free route execution in simulation.',
    },
  },
  {
    id: 'gesture-robot',
    num: '05',
    title: 'Vision-Based Gesture-Controlled Differential Robot',
    subtitle: 'Human-Robot Interaction using MediaPipe Hand Tracking & ROS 2',
    category: 'Physical AI | Computer Vision | ROS 2',
    type: 'Applied AI & Teleoperation Project',
    organization: 'Independent R&D',
    period: '2026',
    badge: 'Physical AI',
    featured: false,
    image: './assets/gazebo-cafe-simulation.png',
    specs: {
      visionPipeline: 'Google MediaPipe Hand Landmark Model (21 3D Landmarks)',
      processing: 'OpenCV & Python rclpy Node',
      target: 'Differential Drive AMR in Gazebo Simulation & Real Hardware',
      latency: '< 30ms inference and command publish time',
    },
    stack: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'ROS 2 Jazzy',
      'geometry_msgs',
      'Teleoperation',
      'Gazebo',
    ],
    caseStudy: {
      overview:
        'A contact-free Human-Robot Interaction (HRI) system enabling intuitive gesture control of mobile robots. A live RGB camera feed processes user hand landmarks via MediaPipe and OpenCV, translating finger configurations and palm orientation into continuous velocity commands (/cmd_vel).',
      problemStatement:
        'In sterile medical settings, hazardous industrial plants, or search-and-rescue zones, operators cannot handle physical keyboards, mice, or joysticks to maneuver robotic assistants.',
      systemArchitecture:
        'A dedicated ROS 2 node (gesture_node.py) captures webcam frames, extracts 21 3D hand keypoints, classifies gestures (Forward, Reverse, Left Turn, Right Turn, Stop, Speed Scale), and publishes geometry_msgs/msg/Twist commands at 30 FPS.',
      technologiesUsed: [
        'Google MediaPipe Hand Landmark tracking architecture',
        'OpenCV image processing and visual HUD overlay',
        'ROS 2 rclpy asynchronous publisher architecture',
        'State smoothing with temporal rolling queues to eliminate gesture flicker',
      ],
      engineeringContributions: [
        'Implemented the complete gesture classification algorithms using Euclidean distances and angular vectors between finger tips and MCP joints.',
        'Integrated a temporal filter (deque history) to prevent accidental command spikes caused by brief tracking occlusions.',
        'Engineered an on-screen visual HUD displaying active gesture mode, confidence scores, and current linear/angular velocity bars.',
      ],
      implementation:
        'Mapped gestures: Open palm = Forward, Closed fist = Immediate E-Stop, Index pointing = Directional steering, Pinch distance = Proportional speed throttling.',
      challengesAndSolutions: [
        {
          challenge: 'False positives from background hand movement causing unintended robot jerks.',
          solution:
            'Added confidence threshold gating (0.85+) and required 5 consecutive identical frames before changing velocity state.',
        },
      ],
      demonstratedResults:
        'Achieved sub-30ms teleoperation response time with fluid, natural gesture control of differential-drive robots in Gazebo.',
    },
  },
  {
    id: 'metal-detector',
    num: '06',
    title: 'Automated Metal Detection AMR with Real-Time Alerts',
    subtitle: 'Autonomous Hazard Sweeping with LC Sensor Coil & Wi-Fi Alerts',
    category: 'Embedded IoT | Sensor Systems | Security Robotics',
    type: 'Embedded Systems Project',
    organization: 'Dhaanish Ahmed Institute of Technology',
    period: '2024 – 2025',
    badge: 'Embedded IoT',
    featured: false,
    image: './assets/rocker-bogie-2.jpg',
    specs: {
      sensor: 'LC Resonant Tank Coil Sensor for Ferrous/Non-Ferrous Detection',
      compute: 'ESP32 Wi-Fi Microcontroller',
      alertProtocol: 'MQTT / HTTP REST API with Mobile Push Notification',
      feedback: 'Acoustic Buzzer, High-Luminance LED Strobe & Cloud Dashboard',
    },
    stack: [
      'ESP32',
      'LC Resonant Sensors',
      'Wi-Fi IoT',
      'Embedded C',
      'MQTT',
      'Real-Time Telemetry',
    ],
    caseStudy: {
      overview:
        'An autonomous mobile sensor platform equipped with an inductive LC resonant tank circuit for detecting concealed metallic hazards, buried pipes, and industrial debris. When metallic disturbance alters the coil inductance, the onboard microcontroller registers frequency shifts and dispatches real-time remote alerts over Wi-Fi.',
      problemStatement:
        'Manual metal detection in hazardous chemical zones, construction foundations, or security perimeters puts human personnel at risk of physical injury and lacks centralized digital geo-logging.',
      systemArchitecture:
        'The LC sensor circuit oscillates at a resonant frequency. Proximity to metallic materials shifts inductance and frequency. The ESP32 measures frequency variance using hardware counter timers, triggers local audio-visual alerts, and transmits coordinates and signal strength to a cloud security station.',
      technologiesUsed: [
        'Colpitts/Hartley LC resonant tank oscillator circuit',
        'ESP32 hardware pulse counter timers',
        'Wi-Fi IoT telemetry protocol and mobile push notification API',
        'Low-noise power filtering for sensitive inductive analog readings',
      ],
      engineeringContributions: [
        'Designed and wound the search coil geometry for optimal sensitivity and ground penetration.',
        'Wrote frequency-counter firmware detecting sub-microhenry inductance shifts.',
        'Engineered the Wi-Fi communication stack sending alerts with sub-second latency.',
      ],
      implementation:
        'Calibrated sensor thresholds against non-ferrous and ferrous metals to prevent false triggers from environmental soil minerals.',
      challengesAndSolutions: [
        {
          challenge: 'Motor electromagnetic interference (EMI) corrupting LC coil readings.',
          solution:
            'Isolated the sensor coil physically and added an aluminum back-shield grounded to chassis star-ground.',
        },
      ],
      demonstratedResults:
        'Successfully detected metallic objects up to 10cm depth with 100% notification dispatch rate over Wi-Fi under 500ms.',
    },
  },
];
