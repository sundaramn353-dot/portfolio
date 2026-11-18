/**
 * workflow.js — The 6-Stage Robotics Engineering Pipeline
 * Section 06: "FROM ROBOT DESCRIPTION TO AUTONOMOUS MOTION"
 */
export const workflowSteps = [
  {
    step: '01',
    title: 'Robot Description & Kinematics',
    subtitle: 'URDF, Xacro, Coordinate Frames & Inertia Tensors',
    description:
      'Laying the kinematic foundation of the autonomous system. Defining physical links, joint types, visual and collision geometries, mass distributions, and Gazebo transmission plugins.',
    keyTasks: [
      'Parametric robot modeling using Xacro macros for easy chassis re-dimensioning.',
      'Calibrating differential-drive wheel track separation, wheel radius, and caster offsets.',
      'Computing precise link inertia tensors (ixx, iyy, izz) for realistic physics dynamics.',
      'Establishing rigid transforms between base_footprint, base_link, and sensor brackets.',
    ],
    technicalArtifacts: [
      { name: 'sparky_amr.urdf.xacro', type: 'Xacro File' },
      { name: 'display.launch.py', type: 'RViz2 Launch' },
      { name: 'joint_state_publisher', type: 'ROS 2 Node' },
    ],
    codeSnippet: `<!-- Differential Drive Base Footprint -> Base Link -->
<link name="base_footprint"/>
<joint name="base_joint" type="fixed">
  <parent link="base_footprint"/>
  <child link="base_link"/>
  <origin xyz="0 0 0.05" rpy="0 0 0"/>
</joint>`,
  },
  {
    step: '02',
    title: 'Hardware & Embedded Integration',
    subtitle: 'Micro-ROS, ESP32, Raspberry Pi, Motor Drivers & Sensors',
    description:
      'Bridging low-level physical actuators with high-level compute. Deploying micro-ROS on microcontrollers, hardware PWM generators, and sensor buses.',
    keyTasks: [
      'Deploying micro-ROS on ESP32 Arduino Core 3.x communicating over Wi-Fi UDP and serial.',
      'Configuring pigpio hardware PWM engine on Raspberry Pi GPIO pins to eliminate Linux CPU jitter.',
      'Interfacing quadrature wheel encoders with interrupt routines for deterministic odometry ticks.',
      'Implementing persistent udev rules (99-bumpy.rules) for /dev/ttyUSB0 LiDAR port binding.',
    ],
    technicalArtifacts: [
      { name: 'esp32_amr_pid_stopfix.ino', type: 'Firmware' },
      { name: 'diffbot_gpio.cpp', type: 'C++ Hardware Plugin' },
      { name: '99-sparky.rules', type: 'udev Rules' },
    ],
    codeSnippet: `// ESP32 micro-ROS Motor Subscriber
RCCHECK(rclc_subscription_init_default(
  &subscriber, &node,
  ROSIDL_GET_MSG_TYPE_SUPPORT(geometry_msgs, msg, Twist),
  "/cmd_vel"));`,
  },
  {
    step: '03',
    title: 'ROS 2 Core Architecture',
    subtitle: 'Nodes, Topics, Services, Actions & TF2 Tree',
    description:
      'Architecting the distributed ROS 2 software graph. Establishing high-throughput DDS message exchanges and keeping coordinate transform frames unified.',
    keyTasks: [
      'Configuring CycloneDDS RMW layer with ROS_DOMAIN_ID=0 for seamless inter-device networking.',
      'Broadcasting dynamic transforms: odom -> base_footprint and base_footprint -> laser_frame.',
      'Synchronizing host and workstation system clocks with chrony NTP to prevent TF extrapolation drops.',
      'Structuring lifecycle nodes for controlled startup, activation, and safe shutdown.',
    ],
    technicalArtifacts: [
      { name: 'TF2 Transform Tree', type: 'Spatial Graph' },
      { name: 'rosbridge_server:9090', type: 'WebSocket' },
      { name: 'cyclonedds.xml', type: 'RMW Configuration' },
    ],
    codeSnippet: `# View the active TF2 transform graph
ros2 run tf2_tools view_frames
# Inspect real-time transform translation & rotation
ros2 run tf2_ros tf2_echo odom base_footprint`,
  },
  {
    step: '04',
    title: 'Perception & Mapping',
    subtitle: 'LiDAR Scan, Sensor Fusion, Graph SLAM & Occupancy Grids',
    description:
      'Transforming raw optical sensor data into spatial environmental intelligence. Scanning obstacles and building 2D metric occupancy grids in real time.',
    keyTasks: [
      'Bringing up YDLIDAR X2 sensor node streaming sensor_msgs/LaserScan at 10Hz.',
      'Running slam_toolbox synchronous 2D graph SLAM for drift-free indoor mapping.',
      'Fusing wheel encoder ticks with 6-DOF IMU angular rates via robot_localization EKF.',
      'Saving persistent .yaml and .pgm occupancy grid maps for autonomous localization.',
    ],
    technicalArtifacts: [
      { name: 'slam_toolbox.yaml', type: 'SLAM Configuration' },
      { name: 'map.yaml & map.pgm', type: 'Occupancy Grid' },
      { name: 'ekf_filter_node', type: 'State Estimation' },
    ],
    codeSnippet: `# Launch 2D graph SLAM with slam_toolbox
ros2 launch slam_toolbox online_sync_launch.py
# Save generated map to disk
ros2 run nav2_map_server map_saver_cli -f ~/maps/facility_map`,
  },
  {
    step: '05',
    title: 'Navigation & Autonomy',
    subtitle: 'AMCL Localization, Nav2 Costmaps, Path Planners & Recovery',
    description:
      'Enabling true autonomy. Estimating robot pose probabilistically and computing collision-free paths around static and dynamic obstacles.',
    keyTasks: [
      'Configuring AMCL (Adaptive Monte Carlo Localization) particle filter with laser scan matchers.',
      'Tuning Nav2 global and local costmap inflation radiuses and obstacle layers.',
      'Configuring DWB local controller for dynamic obstacle swerving and smooth deceleration.',
      'Implementing automated recovery behaviors: wait, spin recovery, and costmap clearing.',
    ],
    technicalArtifacts: [
      { name: 'nav2_params.yaml', type: 'Nav2 Config' },
      { name: 'dwb_controller', type: 'Local Planner' },
      { name: 'nav2_bringup.launch.py', type: 'Launch File' },
    ],
    codeSnippet: `# Launch complete Nav2 autonomous navigation stack
ros2 launch nav2_bringup bringup_launch.py \\
  use_sim_time:=False \\
  map:=~/maps/facility_map.yaml \\
  params_file:=~/bumpy_ws/config/nav2_params.yaml`,
  },
  {
    step: '06',
    title: 'Simulation & Real-World Validation',
    subtitle: 'Gazebo Harmonic, Isaac Sim, RViz2 Telemetry & Field Deployment',
    description:
      'Rigorous verification in simulated physics before executing autonomous missions on real hardware. Bridging the sim-to-real gap.',
    keyTasks: [
      'Building digital twin simulation arenas in Gazebo Harmonic with realistic surface friction.',
      'Testing Nav2 waypoint patrol scripts in simulation to stress-test corner cases and tight doors.',
      'Validating wheel odometry accuracy against ground-truth Gazebo pose.',
      'Field deploying onto physical AMR chassis for continuous autonomous navigation runs.',
    ],
    technicalArtifacts: [
      { name: 'sparky_world.world', type: 'Gazebo World' },
      { name: 'NVIDIA Isaac Sim', type: 'Physics Engine' },
      { name: 'teleop_twist_keyboard', type: 'Teleop' },
    ],
    codeSnippet: `# Launch Gazebo digital twin simulation
ros2 launch sparky_amr_description gazebo.launch.py
# Teleoperate robot to benchmark sensor reaction
ros2 run teleop_twist_keyboard teleop_twist_keyboard`,
  },
];
