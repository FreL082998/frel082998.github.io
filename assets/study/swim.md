# SWIM — Smart Irrigation Monitoring and Water Control System

**Industry:** Agriculture / AgriTech
**Role:** Full-Stack Developer
**Project Type:** IoT-Enabled Irrigation Monitoring, GIS Farm Management, and Automated Water-Control Platform
**Primary Technologies:** PHP, CodeIgniter, Bootstrap, ArcGIS JavaScript API, JavaScript, jQuery, MySQL, WebSocket, Node.js, Cloudflare, AWS

## Project Overview

SWIM is a smart irrigation platform designed to help farmers and irrigation personnel monitor water conditions, view farms and field devices on a map, and automate irrigation responses when water levels change.

The platform brings together:

* Farm and crop information
* GIS-based farm mapping
* Water-level sensors
* Flow meters
* Irrigation gates
* Real-time monitoring
* Automated water-control logic
* Alerts and notifications
* Historical device activity
* User and organization management

### Business Value

Irrigation management becomes more difficult when farm information, sensor readings, water-control devices, and operational decisions are handled separately.

SWIM brings these activities into one system.

Users can monitor what is happening in the field, understand where devices are located, receive alerts when water conditions change, and allow the system to trigger appropriate irrigation-gate actions based on configured water-level conditions.

The platform also records historical measurements and gate activity, giving users visibility into both current conditions and previous irrigation behavior.

---

## The Challenge

Agricultural irrigation involves several connected elements:

* Farms and crop areas
* Water levels
* Water flow
* Irrigation gates
* Sensors
* Field-device locations
* Device conditions
* Historical measurements
* Personnel responsible for monitoring and control

Managing these elements independently makes it difficult to understand the complete irrigation situation.

The platform needed to solve several challenges:

* Represent farms geographically
* Associate field devices with the correct farm
* Continuously receive sensor measurements
* Track water conditions over time
* Monitor water flow
* Control irrigation gates
* Respond automatically when water levels change
* Notify users about important conditions
* Preserve device and gate history
* Support different operational roles
* Deliver current information without requiring constant page refreshes

The goal was to create a centralized platform that connected farm information, physical irrigation infrastructure, real-time monitoring, and automated control.

---

## What I Built

I developed a web-based irrigation-management platform that connected GIS mapping, IoT monitoring, real-time communication, historical data, and automated irrigation control.

At a high level, the platform works like this:

```text
Farm and Crop Configuration
            ↓
Farm Boundaries and Devices Mapped
            ↓
Water Sensors and Flow Meters Collect Data
            ↓
Measurements Sent to the Platform
            ↓
Current Water Conditions Evaluated
            ↓
Condition Compared with Operational Baseline
            ↓
Alert Generated
            ↓
Associated Irrigation Gate Opened or Closed
            ↓
Gate Activity Recorded
            ↓
Users Monitor Current and Historical Information
```

This means the platform goes beyond displaying field information.

It can connect a detected water condition with an automated irrigation response.

---

## Who Uses the Platform

The system supports several types of users.

### Farmers

Farmers are associated with agricultural properties and farm information.

### Monitors

Monitoring personnel review irrigation conditions, sensor readings, alerts, and device status.

### Controllers

Controllers are associated with irrigation-control responsibilities and field-device operations.

### Administrators

Administrators manage:

* Users
* Configuration
* Farms
* Devices
* Organizations
* Access
* System operations

This role-based structure allows different users to work with the parts of the platform relevant to their responsibilities.

---

## My Role

As a Full-Stack Developer, I worked across the complete application stack.

My responsibilities included:

* Requirements analysis
* Application architecture
* Database architecture
* Backend development
* Frontend development
* Farm-management workflows
* GIS integration
* ArcGIS map development
* Geographic coordinate management
* IoT device integration
* Sensor-data processing
* Flow-meter integration
* Irrigation-gate integration
* Automated irrigation-control logic
* Node.js services
* WebSocket communication
* Alert generation
* Historical-data management
* User and role management
* AWS deployment
* Cloudflare configuration
* Testing
* Troubleshooting
* Application maintenance

My work connected the agricultural, geographic, IoT, real-time, and automation parts of the platform into one operational system.

---

## My Key Contributions

### 1. Built the Full-Stack Irrigation Management Platform

I developed the web application used to manage and monitor the irrigation environment.

The system included functionality for:

* Farm management
* Farmer management
* Device management
* Sensor monitoring
* Flow-meter monitoring
* Gate monitoring
* Irrigation-gate control
* Alert management
* User management
* Organization management
* Historical monitoring
* GIS visualization

PHP and CodeIgniter supported the backend application, while Bootstrap, JavaScript, and jQuery were used for the browser-based interface.

### Why It Mattered

The organization no longer needed to treat farm records, sensors, irrigation controls, and monitoring data as separate systems.

These activities could be accessed through one centralized application.

---

### 2. Connected Farms and Field Devices Through GIS

I integrated ArcGIS JavaScript to visualize farms and irrigation infrastructure geographically.

The platform can map:

* Farm boundaries
* Water-level sensors
* Flow meters
* Irrigation gates

Farm boundaries are represented using multiple latitude and longitude points rather than only a text address.

Individual field devices also maintain geographic coordinates.

### Why It Mattered

Irrigation information is strongly tied to location.

A user needs to understand not only that a sensor detected a condition, but also which farm and physical location the sensor represents.

GIS mapping provides that context visually.

---

### 3. Designed the IoT Data Model

I designed a relational database that separates configuration information from continuously generated monitoring data.

The data model includes separate structures for:

* Farms
* Farm boundaries
* Water-level sensors
* Sensor readings
* Flow meters
* Flow-meter readings
* Irrigation gates
* Gate activity
* Alerts
* Users
* Organizations
* Activity logs

### Why It Mattered

Field devices generate large numbers of measurements over time.

Keeping device configuration separate from historical readings made it possible to maintain stable farm and device records while continuously adding new telemetry data.

---

### 4. Implemented Water-Level Monitoring

Water-level sensors continuously provide measurements associated with specific farms and irrigation gates.

The platform maintains information such as:

* Water level
* Temperature
* Sensor
* Farm
* Measurement time

These readings are stored chronologically.

### Why It Mattered

The platform can show both current conditions and historical changes rather than only the latest sensor value.

This gives irrigation personnel a better understanding of how water conditions evolve over time.

---

### 5. Integrated Flow-Meter Monitoring

Flow meters provide an additional view of irrigation activity.

The system maintains readings including:

* Water level
* Water volume
* Temperature
* Device
* Farm
* Timestamp

### Why It Mattered

Water-level monitoring alone does not provide the complete irrigation picture.

Flow information gives users additional context about water movement through the irrigation environment.

---

### 6. Implemented Automated Irrigation-Gate Control

One of the most important parts of the platform was connecting sensor readings directly to irrigation-control behavior.

The application evaluates incoming water-level measurements against an operational baseline.

If the water level rises above the expected level, the system can trigger the associated gate to close.

If the water level falls below the expected level, the system can trigger the associated gate to open.

For a high-water condition:

```text
Sensor Detects High Water Level
            ↓
Reading Compared with Baseline
            ↓
High-Water Condition Identified
            ↓
Alert Generated
            ↓
Associated Gate Identified
            ↓
Gate Closed if Required
            ↓
Gate State Recorded
```

For a low-water condition:

```text
Sensor Detects Low Water Level
            ↓
Reading Compared with Baseline
            ↓
Low-Water Condition Identified
            ↓
Alert Generated
            ↓
Associated Gate Identified
            ↓
Gate Opened if Required
            ↓
Gate State Recorded
```

### Why It Mattered

This changed the platform from a passive monitoring system into a responsive irrigation-control system.

Instead of only informing users that water conditions had changed, the platform could also initiate an operational response.

---

### 7. Built Real-Time Monitoring

I implemented Node.js and WebSocket-based communication for rapidly changing irrigation information.

The real-time layer supported:

* Water-level updates
* Flow-meter readings
* Irrigation-gate state changes
* Device activity
* Alerts
* Monitoring dashboards

### Why It Mattered

Users monitoring active irrigation conditions should not need to repeatedly refresh the application to see new information.

Real-time communication allowed dashboards to update as new field data became available.

---

### 8. Developed the Alert System

I implemented alert functionality tied to sensor and irrigation activity.

Alerts identify information such as:

* The source device
* The detected condition
* The user who should receive the alert
* The time of the event
* Whether the alert has been reviewed

For water-level events, the platform can also explain:

* Which sensor detected the condition
* Whether the reading was above or below the expected level
* Which irrigation gate was associated
* What automated response would occur

### Why It Mattered

Users need visibility into both the condition and the system's response.

The alert system helps explain not only that something happened, but also what action the platform took because of it.

---

### 9. Preserved Historical Sensor and Gate Activity

I implemented historical logging for each major IoT component.

The platform maintains separate histories for:

### Water-Level Sensors

Including:

* Water level
* Temperature
* Sensor
* Farm
* Timestamp

### Flow Meters

Including:

* Water level
* Water volume
* Temperature
* Device
* Farm
* Timestamp

### Irrigation Gates

Including:

* Open or closed state
* Temperature
* Gate
* Farm
* Timestamp

### Why It Mattered

The application preserves a complete operational history rather than keeping only the current state.

Users can review past irrigation behavior and understand how conditions and device responses changed over time.

---

### 10. Supported High-Frequency IoT Data

The platform was designed to handle continuously generated device information.

The captured dataset included thousands of sensor, flow-meter, and gate records, along with a large volume of generated irrigation alerts.

### Why It Mattered

The database architecture needed to support more than static farm-management records.

It also had to handle time-series information generated continuously by connected devices.

---

### 11. Connected Device Data with Geographic Context

The platform links each major device to its physical agricultural environment.

Conceptually:

```text
Farm
 ├── Geographic Boundary
 │    └── ArcGIS Visualization
 │
 ├── Water-Level Sensors
 │    ├── Geographic Position
 │    └── Historical Measurements
 │
 ├── Flow Meters
 │    ├── Geographic Position
 │    └── Historical Measurements
 │
 └── Irrigation Gates
      ├── Geographic Position
      ├── Open / Closed State
      └── Historical Activity
```

### Why It Mattered

This lets users understand field information in both operational and geographic terms.

Sensor readings and irrigation activity remain connected to the farm and location where they occurred.

---

### 12. Implemented User and Organization Management

The platform supports multiple operational roles including:

* Administrator
* Farmer
* Controller
* Monitor

User accounts are separated from profile information.

The system also supports organizations and membership relationships.

### Why It Mattered

Irrigation management can involve more than individual farmers.

The organization model provides a foundation for supporting irrigation associations, agencies, or other groups responsible for agricultural water management.

---

### 13. Added Operational Activity Tracking

The application maintains user activity records separately from authentication sessions.

Activity logs include:

* User
* Activity
* Timestamp

### Why It Mattered

Operational logging gives administrators greater visibility into how the application is being used and provides additional information for troubleshooting.

---

### 14. Deployed and Maintained the Platform in the Cloud

I deployed and operated the application using AWS infrastructure.

The hosted platform included:

* PHP / CodeIgniter application services
* Node.js real-time services
* MySQL data storage
* Cloudflare as part of the public delivery layer

My responsibilities also included testing, troubleshooting, and ongoing maintenance.

---

## Technical Approach

For technical readers, SWIM combines IoT data collection, GIS visualization, real-time communication, automation, and relational data management.

### Backend

PHP and CodeIgniter provide the core application and business workflows.

### Frontend

Bootstrap, JavaScript, and jQuery provide the browser-based monitoring and administrative interfaces.

### GIS

ArcGIS JavaScript API provides:

* Farm-boundary mapping
* Sensor locations
* Flow-meter locations
* Irrigation-gate visualization

### IoT Data

The system stores high-frequency records for:

* Sensor measurements
* Flow-meter measurements
* Gate activity
* Alerts

### Real-Time Communication

Node.js and WebSockets support live operational updates.

### Automation

Sensor measurements can trigger condition-based gate actions and corresponding user alerts.

### Database

MySQL stores farm information, device configuration, user information, organizations, historical measurements, alerts, and activity logs.

### Infrastructure

AWS hosts the platform, while Cloudflare supports the external application-delivery layer.

---

## Key Results

The platform created a centralized smart-irrigation environment connecting farms, sensors, GIS, automation, and historical monitoring.

Key outcomes included:

* Digitized farm and irrigation-infrastructure management
* Created GIS-based visualization of farms and field devices
* Centralized water-level monitoring
* Integrated flow-meter monitoring
* Integrated irrigation-gate control
* Automated gate responses based on water conditions
* Generated automated alerts for irrigation events
* Maintained historical sensor measurements
* Maintained historical flow-meter measurements
* Maintained historical gate activity
* Supported real-time application updates
* Connected IoT devices with geographic farm locations
* Supported administrator, farmer, controller, and monitor roles
* Added operational activity tracking
* Added organization and membership management
* Supported high-frequency IoT telemetry
* Deployed the platform using cloud infrastructure

---

## Skills Demonstrated

**AgriTech**
Smart irrigation, farm management, agricultural monitoring, water management, and irrigation-control workflows

**Internet of Things**
Water-level sensors, flow meters, device monitoring, irrigation-gate control, telemetry, and device-status management

**Automation**
Condition evaluation, automatic irrigation-gate control, alert generation, and response workflows

**GIS Development**
ArcGIS JavaScript API, farm-boundary mapping, geographic coordinates, device visualization, and location-based monitoring

**Full-Stack Development**
PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, MySQL, and browser-based application development

**Real-Time Systems**
Node.js, WebSockets, live monitoring, device updates, and operational alerts

**Data Engineering**
Time-series IoT records, sensor telemetry, flow-meter measurements, historical gate activity, and relational database architecture

**System Design**
IoT monitoring, GIS integration, real-time communication, automated controls, relational data modeling, and cloud deployment

**Cloud and Infrastructure**
AWS, Cloudflare, Node.js services, PHP application hosting, MySQL, troubleshooting, and production maintenance
