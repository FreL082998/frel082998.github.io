# Cassava Farm Health Monitoring & Geospatial Mapping Platform

**Industry:** Agriculture / AgriTech
**Role:** Full-Stack Developer
**Project Type:** GIS-Based Cassava Disease Monitoring, Drone Survey Management, and Agricultural Decision-Support Platform
**Primary Technologies:** PHP, CodeIgniter, Bootstrap, ArcGIS, JavaScript, jQuery, MySQL, WebSocket, Node.js, Cloudflare, AWS

## Project Overview

This is an agricultural monitoring and decision-support platform designed to help farmers, cooperatives, agricultural personnel, and crop experts monitor cassava farms and respond to potential crop-health problems.

The platform brings together farm records, geographic mapping, drone-survey coordination, disease-monitoring results, projected yield impact, recommended agricultural actions, reporting, alerts, and expert consultation in one system.

Users can:

* Register farmers and cassava farms
* Record crop and production information
* View farms and survey findings on interactive maps
* Request and schedule drone surveys
* Record and review survey results
* Monitor CPD findings
* Estimate potential crop and yield impact
* Receive recommended preventive or mitigation protocols
* Communicate with agricultural experts
* Receive alerts and notifications
* Review farm information through dashboards and reports

### Business Value

Agricultural monitoring often involves information coming from many different people and activities.

This platform connects that information into a single workflow so farmers and agricultural stakeholders can move from:

**Farm Monitoring → Survey → Finding → Impact Assessment → Recommended Action → Expert Consultation**

Instead of keeping farm records, survey results, disease observations, yield estimates, and recommendations in separate places, the platform makes them available through one connected system.

---

## The Challenge

Monitoring crop health across geographically distributed farms requires coordination between multiple stakeholders.

Farmers manage plantations, cooperatives coordinate agricultural activities, government agriculture personnel oversee local information, field teams conduct surveys, and crop experts provide recommendations.

Without a centralized platform, important information can become fragmented across:

* Farmer records
* Farm locations
* Production information
* Survey requests and schedules
* Survey results
* Disease observations
* Geographic coordinates
* Yield estimates
* Mitigation guidance
* Reports
* Communication channels

The challenge was to create a system where all of these activities remained connected to the correct farmer, farm, production cycle, and survey.

The platform also needed to support different organizations and administrative levels while keeping information accessible to the right users.

---

## What We Built

I developed a centralized web platform that connected farm management, geographic information, survey operations, crop-health monitoring, yield analysis, agricultural recommendations, communication, and reporting. It gave agricultural stakeholders a more connected way to move from field observation to action.

At a high level, the workflow was:

```text
Farmer and Farm Registration
            ↓
Production Information
            ↓
GIS Farm Mapping
            ↓
Drone Survey Request
            ↓
Survey Scheduling
            ↓
Field Survey Conducted
            ↓
Survey Results Recorded
            ↓
CPD Findings Mapped
            ↓
Potential Yield Impact Presented
            ↓
Farmer and Stakeholders Notified
            ↓
Recommended Mitigation Protocol
            ↓
Expert Consultation
            ↓
Monitoring and Reporting
```

The platform helped turn scattered field observations into a more structured response process for farmers, cooperatives, and agricultural experts.

---

## Who Uses the Platform

The platform was designed for several agricultural stakeholders:

* Cassava farmers
* Agricultural cooperatives
* Crop and agricultural experts
* Municipal Agriculture Office personnel
* Provincial agricultural personnel
* Regional agricultural personnel
* National-level agricultural personnel
* System administrators

Each group participates in a different part of the monitoring process, so the platform uses role-based identities and permissions to manage access.

---

## My Role

As a full-stack developer, I worked across the application architecture, database, backend, frontend, GIS functionality, real-time communication, reporting, and cloud deployment.

My responsibilities included:

* Requirements analysis
* Application architecture
* Database design
* Backend development
* Frontend development
* Farmer and farm-management workflows
* Agricultural production records
* Survey requests and scheduling
* Survey-result management
* CPD monitoring
* Yield-impact workflows
* ArcGIS integration
* Geographic data management
* Dashboards and reporting
* Alerts and notifications
* Expert-management functionality
* Direct and group messaging
* File-sharing workflows
* Agricultural protocol management
* Node.js and WebSocket integration
* AWS deployment
* Cloudflare configuration
* Testing, troubleshooting, and maintenance

My work covered the complete application workflow from farm registration through monitoring, analysis, communication, and reporting.

---

## My Key Contributions

### 1. Connected Farmers, Farms, Production, and Survey Data

A major part of the platform was designing the agricultural data so information generated at different stages remained connected.

The core relationship followed this structure:

```text
Farmer
  ↓
Cassava Farm
  ↓
Production Record
  ↓
Survey Request
  ↓
Survey Schedule
  ↓
Survey Result
  ↓
Mapped Findings
  ↓
CPD Monitoring
  ↓
Yield Projection
  ↓
Mitigation Recommendation
```

This allowed users to trace a survey result back to the farmer, farm, production information, and geographic location that produced it.

### Why It Mattered

Without these relationships, disease findings and survey information would exist as isolated records.

Connecting the data gives agricultural stakeholders the context needed to understand where a problem occurred, what production may be affected, and what actions may be appropriate.

---

### 2. Built GIS-Based Farm and Survey Monitoring

I integrated ArcGIS so agricultural information could be viewed geographically rather than only through tables and addresses.

The mapping functionality supported:

* Cassava farm locations
* Plantation visualization
* Farmer-associated farms
* Survey-result locations
* Geographic coordinates
* Farm areas
* Regional agricultural information

Survey findings could also be associated with specific geographic coordinates.

### Why It Mattered

Agricultural information is inherently location-based.

Displaying farms and survey findings on a map helps users understand where monitored farms are located and where important observations were recorded.

---

### 3. Digitized the Drone-Survey Workflow

I developed the workflow used to request, schedule, track, and record drone-based cassava surveys.

The platform coordinates:

```text
Registered Farm
      ↓
Survey Request
      ↓
Cooperative / Survey Personnel Notification
      ↓
Survey Scheduled
      ↓
Farmer Notification
      ↓
Drone Survey Conducted
      ↓
Survey Result Recorded
      ↓
Mapped Findings
      ↓
Request Completed
```

The system tracks survey status and preserves the relationship between the survey request and the resulting agricultural information.

It also supports recurring survey activities so farms can be monitored across different periods.

### Why It Mattered

Survey operations involve several people and stages.

Digitizing the workflow gives stakeholders a clearer process for knowing which farms require surveys, when activities are scheduled, whether they have been completed, and where the results belong.

---

### 4. Connected Disease Findings with Potential Yield Impact

The platform does more than record CPD observations.

I implemented workflows that combine survey findings with agricultural production information such as:

* Crop variety
* Number of planted stalks
* Farm area
* Potential yield
* Crop age
* CPD findings

The system can then present information such as:

* Number of CPD findings
* Potential production
* Estimated affected production
* Projected yield loss
* Remaining projected yield
* Percentage of projected yield expected to remain

### Why It Mattered

A disease count alone does not explain its potential business or agricultural impact.

Connecting survey findings with production information gives farmers and agricultural personnel additional context for understanding what the findings could mean for expected output.

---

### 5. Built an Agricultural Decision-Support Workflow

The platform continues beyond identifying a crop-health problem.

Survey results can be connected to preventive and mitigation protocols containing:

* Recommended procedures
* Written instructions
* Supporting documents
* Supporting photographs

This creates the workflow:

**Detection → Impact Assessment → Recommendation → Expert Consultation**

If predefined guidance is not enough, users can communicate directly with agricultural experts through the platform.

### Why It Mattered

Monitoring is more useful when the system can help users understand what to do next.

By connecting findings with mitigation guidance and expert support, the platform turns collected survey data into actionable agricultural information.

---

### 6. Developed Expert Consultation and Communication

I implemented communication functionality that connects farmers, cooperatives, agricultural personnel, and experts within the same platform.

The system includes:

* Direct messaging
* Group conversations
* File attachments
* Image attachments
* Read/unread states
* Alerts
* Notifications

Node.js and WebSockets were used as part of the real-time communication stack.

Users can also exchange supporting materials such as documents and images during consultation.

### Why It Mattered

Agricultural problems may require discussion that cannot be handled through predefined recommendations alone.

Built-in communication gives users a way to consult experts without moving the conversation outside the platform.

---

### 7. Supported Multiple Agricultural Organizations and Administrative Levels

The platform was designed for more than individual farmers.

It includes organizational structures for:

* Cooperatives
* Municipal agriculture personnel
* Provincial personnel
* Regional personnel
* National personnel
* Agricultural experts
* Administrators

User authentication is separated from the person's agricultural profile, allowing different types of stakeholders to use a common account framework.

### Why It Mattered

Agricultural monitoring can involve both local farm-level activity and broader government or organizational oversight.

Supporting multiple administrative levels allows information to be organized according to geographic and operational responsibilities.

---

### 8. Built Monitoring, Reporting, and Operational Traceability

I developed dashboards and reporting functionality for reviewing agricultural information in different ways.

The platform supports:

* Tabular monitoring
* Graphical monitoring
* Farmer profiles
* Farm-specific analysis
* Time-based monitoring
* CPD monitoring
* Projected-yield reporting
* Geographic agricultural information

The system also records important user activity, including actions related to:

* Farm management
* Survey requests
* Survey-result entry
* Mapping
* Monitoring
* Reports
* User management
* Alerts
* Communication

### Why It Mattered

Different stakeholders need different levels of visibility.

Farm-level users may need information about an individual plantation, while agricultural administrators may need broader monitoring and reporting across locations.

Activity logging also provides traceability for important administrative and monitoring actions.

---

### 9. Deployed and Supported the Platform in the Cloud

I deployed and maintained the application using AWS infrastructure.

Cloudflare supported the application's external delivery layer, while the hosted architecture included the web application, database, and real-time communication services.

My work also included testing, troubleshooting, and ongoing application maintenance.

---

## Technical Approach

For technical readers, the application used a traditional web architecture combined with GIS and real-time communication services.

### Backend

PHP and CodeIgniter handled server-side application logic and business workflows.

### Database

MySQL stored the relational data connecting:

* Farmers
* Farms
* Production records
* Survey requests
* Survey results
* GIS information
* CPD findings
* Agricultural protocols
* Users and roles
* Messages
* Alerts
* Reports

### Frontend

Bootstrap, JavaScript, and jQuery were used to build the browser-based administrative and monitoring interfaces.

### Geographic Information

ArcGIS provided the mapping layer used to visualize farms, geographic coordinates, and survey findings.

### Real-Time Communication

Node.js and WebSockets supported the application's real-time communication functionality.

### Infrastructure

AWS hosted the platform, while Cloudflare supported its public-facing delivery infrastructure.

---

## Key Results

The platform created a centralized digital workflow for cassava farm health monitoring and agricultural decision support.

Key outcomes included:

* Digitized cassava farmer and plantation management
* Centralized farm and crop-production information
* Created GIS-based visualization of farms and survey findings
* Digitized drone-survey requests and scheduling
* Centralized survey-result management
* Connected survey results with geographic coordinates
* Enabled farm-level CPD monitoring
* Combined survey findings with projected yield information
* Provided potential crop-impact information
* Delivered survey-result alerts to stakeholders
* Connected identified conditions with mitigation protocols
* Provided downloadable agricultural guidance
* Enabled direct consultation with agricultural experts
* Supported direct and group communication
* Enabled document and image sharing
* Provided tabular and graphical monitoring
* Supported agricultural reporting
* Supported multiple agricultural stakeholder roles
* Represented municipal, provincial, regional, and national administrative structures
* Added detailed application-activity logging
* Deployed the platform using cloud infrastructure

---

## Skills Demonstrated

**AgriTech**
Cassava farm management, crop monitoring, agricultural surveys, disease monitoring, yield analysis, and farmer-support systems

**GIS Development**
ArcGIS integration, farm mapping, geographic coordinates, spatial survey information, and location-based agricultural monitoring

**Full-Stack Development**
PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, MySQL, and frontend-backend development

**Agricultural Decision Support**
Survey-result processing, CPD monitoring, yield-impact presentation, mitigation protocols, and expert consultation

**Workflow Engineering**
Survey requests, scheduling, status tracking, result entry, stakeholder notifications, and multi-step agricultural workflows

**Data Architecture**
Relational database design connecting farmers, farms, production information, surveys, GIS data, user identities, communication, and reports

**Real-Time Communication**
Node.js, WebSockets, direct messaging, group communication, alerts, and notifications

**Reporting and Monitoring**
Farm-level monitoring, graphical and tabular views, CPD tracking, geographic information, and projected-yield reporting

**Security and Access**
Authentication, role-based identities, account states, user access, and operational activity logging

**Cloud and Infrastructure**
AWS, Cloudflare, Node.js services, web application deployment, troubleshooting, and cloud-hosted infrastructure
