# Cassava Farm Health Monitoring & Geospatial Mapping Platform

**Industry:** Agriculture / AgriTech
**Role:** Full-Stack Developer
**Project Type:** GIS-Based Cassava Disease Monitoring, Drone Survey Management, and Agricultural Decision-Support Platform
**Primary Technologies:** PHP, CodeIgniter, Bootstrap, ArcGIS, JavaScript, jQuery, MySQL, WebSocket, Node.js, Cloudflare, AWS

## Project Overview

An agricultural monitoring and decision-support platform designed to support cassava farmers, agricultural cooperatives, experts, and government agriculture personnel in monitoring cassava farms and managing CPD-related survey activities.

The platform combines cassava farm profiling, geographic mapping, drone-survey scheduling, survey-result management, CPD monitoring, projected yield analysis, preventive and mitigation protocols, reporting, alerts, and expert consultation within a centralized web application.

The system enables users to:

* Register and manage cassava farmers
* Maintain cassava farm and plantation records
* Record crop varieties and production information
* Geographically map cassava farms
* Request and schedule drone-survey activities
* Record survey results for individual farms
* Map identified survey locations
* Monitor CPD counts and status
* Estimate potential and projected crop yield
* Assess projected yield loss
* Access recommended preventive and mitigation protocols
* Receive survey-result alerts and notifications
* Monitor results in tabular and graphical formats
* Generate agricultural reports
* Communicate directly with agricultural experts
* Exchange documents and images through chat
* Support farmers, cooperatives, experts, and agriculture offices through different user roles

**Business Value:** It centralizes cassava farm information, survey activities, disease-monitoring results, yield projections, and expert recommendations so farmers and agricultural stakeholders can make better-informed decisions regarding crop health and disease mitigation.

---

## The Challenge

Monitoring crop-health conditions across geographically distributed cassava farms requires coordination between several stakeholders.

Farmers maintain individual plantations, cooperatives coordinate agricultural activities, agricultural personnel oversee farm information, survey teams conduct field assessments, and crop experts provide recommendations for identified problems.

Without a centralized platform, these activities can become disconnected.

Important information may exist separately across:

* Farmer records
* Farm locations
* Crop-production records
* Survey schedules
* Drone-survey results
* Disease observations
* Geographic coordinates
* Yield estimates
* Expert recommendations
* Mitigation documents
* Reports
* Communication channels

The project needed a platform capable of connecting these activities while preserving the relationship between a farmer, farm, production cycle, survey result, geographic location, and recommended response.

Key challenges included:

* Maintaining detailed cassava farmer profiles
* Managing farms across different geographic locations
* Coordinating survey requests and schedules
* Recording results from drone-survey activities
* Mapping surveyed farm areas
* Tracking CPD findings
* Estimating potential production and projected losses
* Providing farmers with recommended mitigation measures
* Connecting farmers and agricultural personnel with experts
* Supporting multiple agricultural organizations and administrative levels
* Providing both graphical and tabular monitoring
* Maintaining user activity and operational traceability

---

## The Solution

I developed a centralized agricultural web platform that combined GIS mapping, cassava farm management, drone-survey workflow management, disease monitoring, yield analysis, expert recommendations, reporting, and communication.

The application used PHP and CodeIgniter for server-side application logic and MySQL for relational data management.

Bootstrap, JavaScript, and jQuery were used to build the browser-based administrative and monitoring interfaces.

ArcGIS provided the geographic visualization layer for farm and survey information.

Node.js and WebSockets supported real-time communication features within the application.

AWS provided cloud infrastructure for the platform, while Cloudflare supported application delivery and public-facing infrastructure.

---

## Platform Workflow

```text
Cassava Farmer Registration
            ↓
Cassava Farm / Plantation Registration
            ↓
Farm Location and Production Information
            ↓
GIS Farm Mapping
            ↓
Drone Survey Request
            ↓
Survey Schedule Assigned
            ↓
Drone Survey Activity Conducted
            ↓
Survey Results Entered
            ↓
CPD Findings and Survey Coordinates Recorded
            ↓
Projected Yield Impact Calculated / Presented
            ↓
Farmer and Stakeholders Notified
            ↓
Preventive / Mitigation Protocol Recommended
            ↓
Expert Consultation Available
            ↓
Monitoring and Reporting
```

---

## Cassava Farmer Management

The platform maintains detailed profiles for cassava farmers.

Farmer information includes:

* Farmer identification
* Name
* Address information
* Barangay
* Municipality
* Province
* Region
* Gender
* Birth date
* Contact number
* Email
* Profile information

Farmer records can then be associated with one or more cassava farms or plantations.

This creates a structured relationship between agricultural producers and the land being monitored.

---

## Cassava Farm Management

Each registered cassava farm maintains operational and geographic information.

Farm records include:

* Farmer
* Cooperative
* Landmark
* Region
* Province
* Municipality
* Barangay
* Purok
* Farm area
* Crop
* Variety
* Longitude
* Latitude
* Farm photos

The data model supports multiple farms under different farmers while preserving each farm’s geographic and agricultural characteristics.

---

## Cassava Production Monitoring

The platform separately maintains production information for agricultural monitoring.

Production records include:

* Farm
* Crop
* Variety
* Number of planted stalks
* Potential yield
* Planting date
* Harvest date

This allows survey results to be interpreted in the context of the farm’s current production cycle.

For example, the platform can associate identified crop problems with the number of planted stalks and expected yield to calculate potential production impact.

---

## GIS Farm Mapping

ArcGIS is used to provide geographic visualization of cassava farms and survey information.

Farm records maintain latitude and longitude information, allowing individual plantations to be plotted geographically.

The platform also stores separate geographic coordinates associated with survey-result data.

This allows the system to connect agricultural observations with locations within or around the surveyed farm.

### GIS Information Includes

* Farm locations
* Farmer-associated plantations
* Survey-result locations
* Geographic coordinates
* Farm areas
* Regional agricultural information

This provides agricultural personnel with a spatial view of farm and disease-monitoring information rather than relying entirely on tables and addresses.

---

## Drone Survey Management

The platform manages the workflow surrounding drone-survey activities.

Farmers or agricultural personnel can have survey requests created for registered cassava farms.

Survey requests maintain:

* Farmer
* Farm
* Requested date
* Scheduled survey date
* Survey status

The system tracks requests through states such as:

* Not yet completed
* Scheduled
* Completed

Notifications can be distributed to relevant users when drone-survey activities are scheduled.

The platform also supports recurring survey activity workflows, allowing farms to be monitored across different periods.

### Survey Request Workflow

```text
Registered Cassava Farm
          ↓
Survey Request Created
          ↓
Cooperative / Survey Personnel Notified
          ↓
Survey Date Scheduled
          ↓
Farmer Notified
          ↓
Drone Survey Conducted
          ↓
Survey Result Uploaded
          ↓
Request Marked as Completed
```

The platform manages the **survey workflow and results**; the database does not indicate that the web application directly controls the drone itself.

---

## Survey Data Entry

After a survey activity is completed, results can be entered into the platform.

Survey-result records are associated with:

* Farm
* Cooperative
* Survey service identifier
* Survey date
* CPD value
* Mapping information
* Supporting survey imagery
* Result action or status

A unique service relationship connects the survey request to the resulting agricultural data.

This provides traceability between:

```text
Farmer
   ↓
Farm
   ↓
Survey Request
   ↓
Scheduled Activity
   ↓
Survey Result
   ↓
Mapped Findings
```

---

## CPD Monitoring

A primary monitoring function of the platform is tracking CPD findings from cassava farm surveys.

Survey results include the number of identified CPD observations and present that information alongside the farm’s production data.

The platform can use this information to present:

* Number of CPD findings
* Crop age
* Potential yield per stalk
* Estimated affected production
* Projected yield loss
* Projected remaining yield
* Percentage of projected yield to gain

This transforms field-survey information into data that can be interpreted in terms of potential agricultural impact.

---

## Yield Impact Analysis

Survey information is combined with production records to provide projected yield information.

The platform considers information such as:

* Farm area
* Crop
* Variety
* Number of planted stalks
* Potential yield per stalk
* CPD findings
* Crop age

The survey result can then present estimated information such as:

* Potential total production
* Projected yield affected
* Projected yield loss
* Remaining projected yield
* Percentage of yield expected to remain

This gives agricultural stakeholders more context than simply displaying the number of affected plants.

---

## Survey Result Distribution

Once survey information is processed, the platform generates survey-result alerts for relevant users.

Results can contain:

* Farm information
* Farmer information
* Farm location
* Farm area
* Crop and variety
* Planting date
* Number of planted stalks
* Potential yield
* CPD findings
* Projected yield loss
* Remaining projected yield
* Recommended management protocol

This helps communicate survey findings to farmers and agricultural stakeholders without requiring them to manually retrieve each result.

---

## Preventive and Mitigation Protocols

The platform maintains a knowledge base of agricultural management protocols.

Experts can provide materials containing:

* Protocol title
* Description
* Instructions
* Supporting files
* Supporting photographs
* Creation and update information

Example categories represented in the system include:

* Cassava planting best practices
* Procedures for mitigating CPD-related losses
* Uprooting protocols for affected plants

Survey results can recommend a relevant management protocol based on the recorded findings.

Users can then download the associated instructional document.

### Decision-Support Workflow

```text
Survey Result
      ↓
CPD Finding Identified
      ↓
Potential Impact Presented
      ↓
Relevant Management Protocol Selected
      ↓
Farmer Receives Recommendation
      ↓
Instructional Material Available
      ↓
Expert Consultation Available if Needed
```

---

## Agricultural Expert Management

The platform includes profiles for agricultural and crop experts.

Expert records contain:

* Name
* Geographic information
* Contact information
* Designation
* Agency
* Profile information

Represented expert roles include agricultural researchers, project personnel, and plant-health specialists.

Experts can be connected with preventive and mitigation resources and can participate in consultation workflows.

---

## Expert Consultation and Messaging

The platform includes direct messaging between users.

The messaging model supports:

* Sender
* Recipient
* Message
* File attachments
* Read status
* Timestamp

Users can exchange both text and files such as:

* PDF documents
* Images
* Supporting agricultural information

This allows farmers or other stakeholders to consult with cassava experts directly through the platform when predefined recommendations are insufficient.

---

## Group Communication

In addition to direct messages, the system supports group communication.

The group-chat structure includes:

* Chat groups
* Group creators
* Group members
* Messages
* File attachments
* Message status
* Message timestamps

This provides a collaboration channel for agricultural personnel and other stakeholders involved in farm monitoring or disease-management activities.

---

## Cooperative Management

Agricultural cooperatives are represented as a separate user and organizational entity.

Cooperative information includes:

* Cooperative identity
* Representative
* Geographic area
* Municipality
* Province
* Region
* Contact information
* Designation
* Cooperative name

Cooperatives participate in the survey workflow and can coordinate drone-survey activities for registered cassava farms.

The system also associates cooperatives with municipalities, allowing their operational coverage to be represented within the platform.

---

## Municipal Agriculture Office Management

The platform contains a dedicated model for Municipal Agriculture Office personnel.

MAO information includes:

* Personnel identity
* Name
* Designation
* Contact details
* Municipality
* Province
* Region

This allows agricultural monitoring to involve local government agriculture personnel rather than limiting the system to farmers and cooperatives.

---

## Multi-Level Agricultural Administration

The data model includes user structures for:

* Municipal agriculture personnel
* Provincial personnel
* Regional personnel
* National personnel

This indicates that the platform was designed to support agricultural information across multiple administrative levels.

Combined with farm and geographic information, this allows monitoring and reporting to be organized by location and government jurisdiction.

---

## Role-Based User Management

The system maintains a centralized authentication model with several application user types.

Supported user identities include:

* Administrator
* Agricultural expert
* Municipal Agriculture Office personnel
* Cooperative personnel
* Farmer
* Other administrative agricultural roles

User accounts include:

* Username
* Secured password
* PIN
* User type
* Linked identity
* Account status
* Login status

The account record is separated from the corresponding farmer, expert, cooperative, or agricultural-personnel profile.

This creates a flexible identity model where different application roles can use the same authentication framework.

---

## Alerts and Notifications

The platform maintains both alerts and general notifications.

These can be used for events such as:

* New farm registration
* New planting information
* Drone-survey requests
* Survey scheduling
* Survey completion
* Survey results
* CPD findings
* Recommended mitigation protocols
* Other agricultural workflow updates

Each record maintains:

* Target user
* Title
* Content
* Date and time
* Read/unread state

This creates a centralized communication mechanism for important agricultural events.

---

## Monitoring Dashboard

The application supports multiple views for monitoring cassava-farm information.

Operational records show both:

* Tabular monitoring
* Graphical monitoring

The monitoring interface can be used to review CPD and projected-yield information for:

* Individual farms
* Multiple farms
* Selected time periods

This provides different ways to analyze agricultural survey results depending on the user’s needs.

---

## Reporting

The platform includes reporting functionality for agricultural information.

The reporting workflows support information such as:

* Cassava farmer profiles
* Farm information
* Geographic distribution
* CPD monitoring
* Projected yields
* Survey results

The system also contains administrative models for municipal, provincial, regional, and national information, providing a foundation for geographically scoped agricultural reporting.

---

## User Activity Logging

The platform maintains detailed activity logs for important application operations.

Logged activities include actions such as:

* User login and logout
* Dashboard access
* Farm-management actions
* Survey-request access
* Survey-result data entry
* Monitoring activities
* Report generation
* User-management actions
* Mapping access
* Alert access
* Chat access

Activity records can also store information associated with the originating request.

This provides operational traceability across administrative workflows.

---

## My Role

As a full-stack developer, I worked across the web application, backend services, frontend interfaces, GIS functionality, database architecture, real-time communication, and cloud deployment.

My responsibilities included:

* Requirements analysis
* Application architecture
* Database design
* Backend development
* Frontend development
* CodeIgniter application development
* MySQL data modeling
* User and role management
* Farmer-management workflows
* Cassava farm-management workflows
* Production-record management
* Survey-request workflows
* Survey scheduling
* Survey-result data entry
* CPD monitoring functionality
* Yield-projection workflows
* GIS integration
* ArcGIS map development
* Geographic data management
* Monitoring dashboards
* Alert and notification workflows
* Expert-management functionality
* Direct messaging
* Group communication
* File-sharing workflows
* Agricultural protocol management
* Reporting
* Real-time WebSocket communication
* Node.js integration
* AWS deployment
* Cloudflare configuration
* Testing and troubleshooting
* Application maintenance

---

## My Contributions

### Full-Stack Application Development

Developed application functionality across agricultural administration, monitoring, reporting, communication, and decision support.

Core modules included:

* Farmer management
* Cassava farm management
* Agricultural production records
* Cooperative management
* Agriculture-office management
* Expert management
* User management
* Survey requests
* Survey-result data entry
* GIS mapping
* CPD monitoring
* Yield-impact monitoring
* Preventive and mitigation protocols
* Alerts
* Notifications
* Direct messaging
* Group communication
* Reporting
* Activity logging

---

### Agricultural Data Architecture

Designed and worked with a relational data model connecting agricultural information across the complete workflow.

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
Survey Data Entry
  ↓
GIS Mapping
  ↓
CPD Result
  ↓
Yield Projection
  ↓
Mitigation Protocol
  ↓
Farmer / Stakeholder Notification
```

This data structure allowed information generated at different stages of the process to remain connected to the originating farmer and farm.

---

### Drone Survey Workflow

Developed workflows for requesting, scheduling, tracking, and recording the results of drone-based cassava surveys.

The platform coordinated:

* Survey requests
* Farmer notifications
* Cooperative notifications
* Scheduling
* Completion status
* Survey-result entry
* Geographic mapping
* Result distribution

This provided a structured digital process around field-survey operations.

---

### GIS Integration

Integrated ArcGIS into the platform to connect agricultural records with geographic locations.

GIS functionality supported:

* Farm-location visualization
* Cassava plantation mapping
* Survey-location mapping
* Geographic monitoring
* Location-based farm information

This allowed users to interpret survey and farm information spatially.

---

### CPD and Yield Monitoring

Implemented monitoring workflows that combined survey findings and agricultural production information.

The application presented CPD findings together with potential production and projected crop impact.

Users could monitor this information using both tabular and graphical views.

---

### Agricultural Decision Support

Connected survey results with preventive and mitigation protocols.

Instead of ending the workflow after identifying a problem, the platform could provide the user with recommended agricultural actions and downloadable reference materials.

This created a workflow from:

**Detection → Impact Assessment → Recommendation → Expert Consultation**

---

### Communication Platform

Implemented communication functionality connecting farmers, agricultural personnel, cooperatives, and experts.

The system included:

* Direct messaging
* Group chat
* File attachments
* Image attachments
* Read/unread states
* Alerts
* Notifications

Node.js and WebSockets were used as part of the real-time communication stack.

---

### Reporting and Monitoring

Developed monitoring and reporting functionality for farm and agricultural information.

The platform supported:

* Tabular monitoring
* Graphical monitoring
* Farmer profiling
* Farm-specific analysis
* Time-based monitoring
* CPD reporting
* Projected-yield reporting
* Geographic agricultural information

---

### Cloud Deployment

Deployed and operated the platform using AWS infrastructure.

Cloudflare supported the application's external delivery layer, while the backend application, database, and real-time communication services formed the core hosted architecture.

---

## Technical Highlights

### GIS-Enabled Agriculture Platform

ArcGIS connects farmer and farm records with geographic information, enabling map-based agricultural monitoring.

### Drone-Survey Workflow Management

The system digitally manages the lifecycle of a survey from request and scheduling through result entry and notification.

### Disease Monitoring

CPD observations are maintained against individual farms and survey activities rather than as isolated records.

### Yield Impact Analysis

Agricultural survey findings are combined with production information to present projected crop impact.

### Decision-Support Workflow

Survey results connect directly to preventive and mitigation protocols.

### Expert Consultation

Users can communicate with agricultural experts and exchange supporting documents through the application.

### Multi-Stakeholder Architecture

Farmers, cooperatives, agricultural experts, agriculture offices, and administrators are represented through separate profiles and a centralized authentication system.

### Geographic Administrative Structure

Municipal, provincial, regional, and national structures support geographically organized agricultural data.

### Real-Time Communication

Node.js and WebSockets support real-time application communication and collaboration features.

### Operational Traceability

Detailed activity logs record important administrative and monitoring actions performed throughout the application.

---

## Key Results

* Digitized cassava farmer and plantation management
* Centralized farm and crop-production information
* Created GIS-based cassava farm visualization
* Digitized drone-survey request and scheduling workflows
* Centralized survey-result data entry
* Connected survey results with geographic coordinates
* Enabled CPD monitoring at the farm level
* Provided projected-yield and crop-impact information
* Delivered survey-result alerts to stakeholders
* Connected detected conditions with mitigation protocols
* Provided downloadable agricultural guidance
* Enabled direct consultation with cassava experts
* Implemented direct and group messaging
* Supported file and document exchange
* Provided tabular and graphical monitoring
* Supported agricultural reporting
* Established multi-role access for agricultural stakeholders
* Supported municipal, provincial, regional, and national information structures
* Added detailed application-activity logging
* Deployed the platform using cloud infrastructure

---

## Skills Demonstrated

**AgriTech:** Cassava farm management, crop monitoring, agricultural surveys, disease monitoring, yield analysis, and farmer-support systems

**GIS Development:** ArcGIS, geographic farm mapping, latitude/longitude management, spatial survey data, and location-based agricultural monitoring

**Full-Stack Development:** PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, and MySQL

**Agricultural Decision Support:** Survey-result processing, CPD monitoring, yield-impact presentation, mitigation protocols, and expert recommendations

**Workflow Engineering:** Survey requests, survey scheduling, result entry, stakeholder notifications, and status management

**Real-Time Systems:** Node.js, WebSockets, real-time messaging, alerts, and communication workflows

**Data Architecture:** Relational database design, farmer/farm relationships, production data, survey records, GIS data, messaging, and user identity models

**Communication Systems:** Direct messaging, group chat, document sharing, image sharing, read states, alerts, and notifications

**Reporting and Analytics:** Tabular monitoring, graphical monitoring, agricultural profiling, CPD tracking, and projected-yield reporting

**Security and Access:** Authentication, role-based identities, account states, session management, and operational activity logging

**Cloud and Infrastructure:** AWS, Cloudflare, Node.js services, web application deployment, and cloud-hosted infrastructure
