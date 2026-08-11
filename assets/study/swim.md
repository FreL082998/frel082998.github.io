# SWIM — Smart Irrigation Monitoring and Water Control System

**Industry:** Agriculture / AgriTech
**Role:** Full-Stack Developer
**Project Type:** IoT-Enabled Irrigation Monitoring, GIS Farm Management, and Automated Water-Control Platform
**Primary Technologies:** PHP, CodeIgniter, Bootstrap, ArcGIS JavaScript API, JavaScript, jQuery, MySQL, WebSocket, Node.js, Cloudflare, AWS

## Project Overview

SWIM is an IoT and GIS-enabled agricultural irrigation platform designed to monitor farm water conditions, visualize agricultural assets geographically, collect sensor measurements, and automate irrigation-control operations.

The platform combines farm-management data, water-level sensors, flow meters, controllable ditch gates, real-time communication, geographic mapping, automated alerts, historical monitoring, and role-based access within a centralized web application.

The system enables users to:

* Register and manage agricultural farms
* Maintain crop and farm information
* Map farm boundaries geographically
* Plot sensors, flow meters, and irrigation gates on a GIS map
* Monitor water-level measurements
* Track water-flow information
* Monitor environmental temperature readings
* Track ditch-gate operating states
* Automatically respond to water-level conditions
* Receive water-level and device alerts
* Review historical sensor and device activity
* Manage farmers, controllers, monitors, and administrators
* Monitor irrigation infrastructure from a centralized application

**Business Value:** SWIM provides farmers and irrigation personnel with centralized visibility into water conditions and irrigation infrastructure while enabling automated responses to changing water levels. This helps reduce dependence on continuous manual monitoring and provides historical data for understanding irrigation activity.

---

## The Challenge

Agricultural irrigation management involves several interconnected elements:

* Farm locations and boundaries
* Crop information
* Water-level conditions
* Water-flow measurements
* Irrigation gates
* Field sensors
* Device health
* Historical measurements
* Different personnel responsible for monitoring and control

Managing these elements independently makes it difficult to maintain a complete view of irrigation activity.

The platform needed to bring farm information, geographic locations, IoT devices, water measurements, irrigation controls, alerts, and user responsibilities into a single system.

It also needed to continuously record measurements so users could understand both current and historical irrigation conditions.

Key technical requirements included:

* Representing farms geographically
* Associating IoT devices with individual farms
* Processing continuously generated sensor readings
* Maintaining historical device logs
* Responding to changing water conditions
* Controlling irrigation gates
* Distributing alerts to relevant users
* Supporting multiple operational user roles
* Providing centralized web-based monitoring
* Supporting real-time communication between system components

---

## The Solution

I developed a web-based irrigation-management platform that integrated GIS mapping, IoT monitoring, automated irrigation controls, real-time communication, and historical data management.

The platform was built around several connected domains:

* Farm management
* GIS mapping
* Water-level monitoring
* Flow-meter monitoring
* Irrigation gate control
* Automated alerts
* Historical device logging
* User and role management
* Organization management
* Activity tracking

PHP and CodeIgniter powered the primary web application and business workflows, while MySQL maintained application, device, farm, and historical monitoring data.

ArcGIS JavaScript was used for geographic visualization of farms and irrigation infrastructure.

Node.js and WebSockets supported real-time communication requirements, allowing device and monitoring information to be delivered without relying entirely on traditional page-refresh workflows.

The application was hosted using AWS infrastructure with Cloudflare supporting the public-facing application layer.

---

## Irrigation Monitoring Workflow

```text
Farm and Crop Configuration
            ↓
GIS Farm Boundary and Device Mapping
            ↓
Water-Level Sensors and Flow Meters
            ↓
Continuous Device Measurements
            ↓
Real-Time Communication Layer
            ↓
Water Conditions Evaluated
            ↓
Water Above / Below Operational Level
            ↓
Automated Alert Generated
            ↓
Irrigation Gate Open / Close Action
            ↓
Device and Gate Activity Recorded
            ↓
Web Dashboard and Historical Monitoring
```

---

## Farm Management

The platform maintains individual farm records associated with farmers.

Farm information includes:

* Farm description
* Farmer
* Location
* Nearby landmark
* Farm area
* Crop
* Crop variety
* Operational configuration
* Remarks
* Creation and update information

This provides the central business record that connects irrigation infrastructure and monitoring data to a specific agricultural property.

### Crop Information

The system maintains crop-specific farm information, allowing irrigation infrastructure to be associated with the agricultural area it supports.

The database structure includes information such as:

* Crop type
* Crop variety
* Farm area
* Farm location
* Farmer ownership

This provides additional operational context when monitoring irrigation activity.

---

## GIS Farm Mapping

The platform includes geographic information for farms and irrigation devices.

Each farm can have multiple longitude and latitude coordinates representing its geographic area.

This enables farm boundaries to be represented as mapped areas rather than only textual addresses.

Using ArcGIS JavaScript, these coordinates can be used to visualize farms and their associated irrigation infrastructure.

### Mapped Infrastructure

The system maintains geographic coordinates for:

* Farms
* Water-level sensors
* Flow meters
* Irrigation gates

This allows users to understand not only the condition of a device but also where that device is physically located within the irrigation environment.

---

## IoT Device Architecture

The database separates the primary irrigation infrastructure into several device categories.

### Water-Level Sensors

Water-level sensors are associated with farms and irrigation gates.

Each sensor maintains information including:

* Sensor identifier
* Description
* Latitude
* Longitude
* Device condition
* Associated irrigation gate
* Associated farm
* Device status information

The platform continuously records readings from these devices.

Historical sensor records include:

* Water level
* Temperature
* Farm
* Sensor
* Date and time

This allows the application to maintain a chronological history of water conditions.

### Flow Meters

Flow meters provide another monitoring layer within the irrigation infrastructure.

Each device can be associated with a farm and geographic location.

Flow-meter history records:

* Water level
* Water volume
* Temperature
* Measurement timestamp

This allows the platform to track water conditions and flow-related measurements over time.

### Irrigation Gate Controllers

The system manages irrigation or ditch-gate controllers responsible for controlling water movement.

Gate records contain:

* Gate identifier
* Description
* Gate type
* Geographic location
* Device condition
* Override configuration
* Associated farm
* Operational status

Gate activity is recorded separately as historical events.

Gate logs include:

* Gate
* Farm
* Open or closed state
* Temperature
* Date and time

This creates a historical record of irrigation-control behavior.

---

## Automated Water-Level Control

One of the platform's key capabilities is automatic irrigation-gate control based on water-level conditions.

The system evaluates measurements received from water-level sensors against an operational baseline.

When the measured water level exceeds the expected level, the platform can trigger the associated ditch gate to close.

When the water level falls below the expected level, the platform can trigger the associated gate to open.

### High Water-Level Scenario

```text
Sensor Detects High Water Level
            ↓
Reading Compared with Baseline
            ↓
High-Water Condition Detected
            ↓
System Generates Alert
            ↓
Associated Gate Identified
            ↓
Gate Automatically Closed if Open
            ↓
Gate Status Recorded
```

### Low Water-Level Scenario

```text
Sensor Detects Low Water Level
            ↓
Reading Compared with Baseline
            ↓
Low-Water Condition Detected
            ↓
System Generates Alert
            ↓
Associated Gate Identified
            ↓
Gate Automatically Opened if Closed
            ↓
Gate Status Recorded
```

This transforms the platform from a passive monitoring application into a system capable of responding to irrigation conditions.

---

## Alert Management

The platform includes an alert system connected to sensor and irrigation activity.

Alerts contain:

* Alert source
* Alert description
* Target user
* Read/unread state
* Creation timestamp

Water-level alerts identify:

* The sensor reporting the condition
* The measured water level
* Whether the measurement is above or below the baseline
* The associated ditch-gate controller
* The automatic action that will be performed

Alerts are distributed to multiple users, allowing relevant personnel to remain informed about irrigation conditions and automated control decisions.

---

## Real-Time Monitoring

The system was designed to process rapidly changing irrigation information.

Historical records show measurements being captured within intervals of only a few seconds.

Real-time communication using Node.js and WebSockets supports the delivery of current information between system components and the monitoring application.

This architecture supports use cases such as:

* Live water-level monitoring
* Gate-status updates
* Flow-meter readings
* Device-state updates
* Alert delivery
* Operational dashboards

This reduces dependence on manual page refreshes when monitoring active irrigation operations.

---

## Historical Data Monitoring

The platform maintains separate historical datasets for each major IoT component.

### Sensor History

Records:

* Water level
* Temperature
* Sensor
* Farm
* Timestamp

### Flow-Meter History

Records:

* Water level
* Water volume
* Temperature
* Flow meter
* Farm
* Timestamp

### Gate History

Records:

* Open/closed state
* Temperature
* Gate
* Farm
* Timestamp

This provides a detailed operational history of irrigation conditions and control activities.

The database dump demonstrates a significant volume of time-series information, including thousands of sensor, flow-meter, and gate measurements.

---

## GIS and Device Integration

The geographic model connects physical agricultural infrastructure with application data.

```text
Farm
 ├── Geographic Boundary
 │    ├── Latitude / Longitude Points
 │    └── ArcGIS Visualization
 │
 ├── Water-Level Sensors
 │    ├── Geographic Position
 │    ├── Water-Level Readings
 │    └── Temperature
 │
 ├── Flow Meters
 │    ├── Geographic Position
 │    ├── Water Level
 │    ├── Water Volume
 │    └── Temperature
 │
 └── Irrigation Gates
      ├── Geographic Position
      ├── Open / Closed State
      ├── Override Configuration
      └── Historical Activity
```

This provides users with spatial and operational context when reviewing irrigation conditions.

---

## User and Access Management

The platform supports several operational user types.

### Administrator

Responsible for overall system administration, user management, configuration, and platform oversight.

### Farmer

Associated with agricultural properties and farm-management information.

Farm records maintain a direct relationship to farmer profiles.

### Controller

Represents personnel involved in irrigation-control activities and device operation.

### Monitor

Represents users responsible for monitoring irrigation information and operational conditions.

The system maintains separate user and profile records, supporting:

* User credentials
* PIN-based information
* User type
* Account status
* Profile information
* Designation
* Contact information
* Creation and update history

---

## User Activity Tracking

The platform maintains user activity logs separately from authentication sessions.

Activity records contain:

* User
* Activity
* Timestamp

This provides visibility into application activity such as active sessions and dashboard access.

CodeIgniter session information is also persisted in MySQL, supporting server-side session management.

---

## Organization Management

The data model also supports organizational structures.

Organizations can contain information such as:

* Organization name
* Organization type
* Address
* Area of operation

A membership model connects user profiles with organizations.

This provides a foundation for supporting irrigation associations, agencies, or other groups involved in agricultural water management.

---

## My Role

As a full-stack developer, I worked across the application's frontend, backend, database, GIS components, real-time communication, IoT integration, and cloud deployment.

My responsibilities included:

* Requirements analysis
* Application architecture
* Database architecture
* Backend development
* Frontend development
* MySQL database design
* Farm-management workflows
* GIS integration
* ArcGIS map development
* Geographic coordinate management
* IoT device integration
* Sensor-data processing
* Flow-meter integration
* Irrigation-gate integration
* Real-time WebSocket communication
* Node.js services
* Automated irrigation-control workflows
* Alert generation
* Historical data management
* User and access management
* Cloud deployment
* AWS infrastructure
* Cloudflare configuration
* Testing and troubleshooting
* Application maintenance

---

## My Contributions

### Full-Stack Application Development

Developed the web application supporting irrigation monitoring and administration.

The application included functionality for:

* Farm management
* Farmer management
* Device management
* Sensor monitoring
* Flow-meter monitoring
* Gate monitoring and control
* Alert management
* User management
* Organization management
* Historical monitoring
* GIS visualization

PHP and CodeIgniter provided the backend application structure, while Bootstrap, JavaScript, and jQuery powered the browser-based user interface.

---

### Database Architecture

Designed a relational database supporting the major operational areas of the platform.

The data model separates:

* Farms
* Farm geographic coordinates
* Sensors
* Sensor readings
* Flow meters
* Flow-meter readings
* Irrigation gates
* Gate activity
* Alerts
* Notifications
* User accounts
* User profiles
* Organizations
* Organization memberships
* User activity logs
* Application sessions

This separation enabled operational records and high-frequency device measurements to be maintained independently from configuration data.

---

### IoT Monitoring

Implemented application workflows for receiving and maintaining measurements generated by field devices.

The monitoring architecture supported:

* Water-level readings
* Water-volume measurements
* Temperature measurements
* Sensor identification
* Farm association
* Device-condition tracking
* Timestamped historical data

Measurements were stored as chronological records, enabling both current-state and historical analysis.

---

### Automated Irrigation Control

Implemented application logic connecting water-level sensor conditions with ditch-gate controllers.

The automated workflow evaluated water conditions and generated actions such as:

* Closing an open gate when the water level exceeded its baseline
* Opening a closed gate when the water level dropped below its baseline
* Recording gate state changes
* Generating alerts explaining the condition and resulting action
* Distributing alerts to affected users

This provided automated feedback between environmental monitoring and irrigation-control infrastructure.

---

### GIS Mapping

Integrated ArcGIS JavaScript to provide geographic visualization of agricultural assets.

The underlying data model supports mapping:

* Farm boundaries
* Water-level sensors
* Flow meters
* Irrigation gates

Each device can be associated with geographic coordinates and an individual farm.

Farm boundaries are represented using multiple coordinate points, allowing agricultural properties to be visualized spatially.

---

### Real-Time Communication

Implemented WebSocket-based communication with Node.js to support real-time monitoring workflows.

The real-time layer supported rapidly changing operational information such as:

* Sensor measurements
* Flow-meter measurements
* Irrigation-gate states
* Device activity
* Water-condition alerts

This allowed operational dashboards to remain responsive as new field information became available.

---

### Alert and Notification System

Developed alert-management functionality for distributing important irrigation conditions to application users.

Alerts recorded:

* Source device
* Condition description
* User recipient
* Read/unread state
* Timestamp

Automatic water-level alerts also communicated the control action associated with the condition, providing users with visibility into both the detected issue and the system response.

---

### Historical Monitoring

Implemented persistent logging for IoT and irrigation-control activity.

Separate historical records were maintained for:

* Water-level sensors
* Flow meters
* Irrigation gates

This allowed the application to preserve detailed time-series information instead of maintaining only the latest device state.

---

### User and Role Management

Implemented user-management functionality supporting several operational responsibilities.

The application supports:

* Administrators
* Farmers
* Controllers
* Monitors

Account records were separated from personal profile information, providing a structured model for authentication and user administration.

---

### Cloud Deployment

Deployed and operated the web platform using AWS infrastructure.

Cloudflare was incorporated into the application-delivery layer, while the application stack included PHP/CodeIgniter services, Node.js real-time services, and MySQL persistence.

---

## Technical Highlights

### IoT-Based Irrigation Monitoring

The platform integrates water sensors, flow meters, and irrigation gates into one management application.

### Automated Gate Control

Sensor conditions can drive automatic open/close behavior for associated irrigation gates.

### GIS-Based Farm Management

Farm boundaries and field devices are represented geographically using coordinate data and ArcGIS.

### High-Frequency Time-Series Data

Sensor and flow-meter measurements are recorded at frequent intervals, creating detailed historical datasets.

### Real-Time Communication

Node.js and WebSockets provide a communication layer for live monitoring and operational updates.

### Role-Based Application Model

Administrators, farmers, controllers, and monitors have distinct identities within the platform.

### Device Traceability

Measurements remain connected to their originating sensor, farm, flow meter, or gate.

### Operational Alerts

Water-level conditions generate user-targeted alerts describing both the detected condition and associated control behavior.

### Cloud-Based Deployment

AWS and Cloudflare provide the infrastructure and delivery environment for the application.

---

## Key Results

* Digitized farm and irrigation-infrastructure management
* Created GIS-based visualization for farms and field devices
* Centralized water-level monitoring
* Integrated flow-meter monitoring
* Integrated irrigation-gate control
* Automated gate responses based on water-level conditions
* Generated automatic alerts for irrigation events
* Maintained historical sensor measurements
* Maintained historical flow-meter measurements
* Maintained historical gate activity
* Supported real-time application communication
* Connected farms with geographically located IoT devices
* Supported administrator, farmer, controller, and monitor user roles
* Provided user-activity tracking
* Created organization and membership management capabilities
* Deployed the application using cloud infrastructure

---

## Database and Data Engineering Highlights

The system's database contains **17 tables**, including application-session storage and 16 domain-specific tables covering users, farms, devices, alerts, organizations, and historical readings.

The captured dataset demonstrates substantial time-series activity:

* More than 13,000 flow-meter log entries represented by the dump's sequence
* More than 4,400 irrigation-gate log entries
* More than 4,400 sensor log entries
* Tens of thousands of generated water-level alerts

These records demonstrate that the data model was designed not only for static configuration but also for continuously generated IoT telemetry and operational events.

---

## Skills Demonstrated

**AgriTech:** Smart irrigation, farm management, agricultural monitoring, water management, and irrigation-control workflows

**Internet of Things:** Sensor integration, flow-meter monitoring, device management, irrigation-gate control, telemetry, and device-status tracking

**GIS Development:** ArcGIS JavaScript API, geographic coordinates, farm-boundary mapping, asset visualization, and location-based monitoring

**Full-Stack Development:** PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, and MySQL

**Real-Time Systems:** Node.js, WebSockets, live monitoring, device updates, and event-driven user notifications

**Automation:** Water-level evaluation, automatic irrigation-gate control, condition-based alerts, and operational-response workflows

**Data Engineering:** Time-series IoT records, historical logging, sensor telemetry, flow-meter measurements, and relational database architecture

**Backend Development:** CodeIgniter, PHP, authentication, user management, business logic, device-management workflows, and database integration

**Frontend Development:** Bootstrap, JavaScript, jQuery, dashboard interfaces, administrative interfaces, and interactive GIS mapping

**Cloud and Infrastructure:** AWS hosting, Cloudflare, Node.js services, web application deployment, and cloud infrastructure

**System Design:** IoT monitoring, GIS integration, real-time communication, automated controls, relational data modeling, and cloud deployment
