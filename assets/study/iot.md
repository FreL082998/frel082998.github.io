# IoT-Enabled Production Monitoring System

**Industry:** Manufacturing
**Role:** Solo Developer / Solution Architect
**Project Type:** Industrial IoT and Real-Time Production Monitoring Platform
**Primary Technologies:** Laravel, PHP, React, Next.js, TypeScript, Tailwind CSS, C#/.NET, MySQL, SQLite, Redis, Docker, AWS, WebSockets, REST API

## Project Overview

This is an industrial IoT platform designed to automatically monitor production activity using weight measurements captured directly from manufacturing equipment.

Factory workers place manufactured components on an industrial weighing scale. The system reads the weight, determines when the measurement is stable, checks whether the component falls within the configured acceptable range, and automatically classifies it as accepted or defective.

Valid components are counted as production output, while every processed measurement is recorded for later monitoring and analysis.

The platform connects:

* Industrial weighing equipment
* An on-site edge computing device
* Automated weight-processing services
* Offline local storage
* Cloud-hosted backend services
* Real-time communication
* A tablet-based device-control interface
* A centralized back-office monitoring platform

### Business Value

The system replaces much of the manual monitoring around component counting and weight validation with automated data collection.

It gives production teams better visibility into:

* How many components have been produced
* Which components passed or failed weight requirements
* How quickly production is moving
* When production speeds up or slows down
* The accumulated weight of manufactured output
* When production should stop before reaching shipment-weight limits
* Historical production performance

It also continues collecting production data when internet connectivity is temporarily unavailable.

---

## The Challenge

The existing production process provided limited visibility into what was happening on the manufacturing line.

Back-office users did not have a detailed record of the weight of every processed component, making it difficult to analyze production output and performance accurately.

Key challenges included:

* No individual weight record for each processed component
* Limited visibility into accepted and defective output
* Dependence on manual production counting
* No accurate measurement of production speed
* Difficulty identifying faster or slower production periods
* Limited information for evaluating production efficiency
* No real-time view of total manufactured output
* Difficulty determining when production should stop
* Risk of exceeding shipment-weight limits
* Dependence on manual calculations and monitoring

The organization needed a system capable of collecting information directly from the production equipment rather than relying entirely on manual input.

The solution also had to remain reliable in a factory environment where connectivity to the central server could not always be guaranteed.

---

## What I Built

I designed and delivered an end-to-end industrial monitoring platform that connected physical weighing equipment to a real-time production dashboard. The system automated component weighing, validation, counting, and reporting while keeping operations reliable even when connectivity was intermittent.

At a high level:

```text
Factory Worker Places Component on Scale
                    ↓
Scale Sends Weight Reading
                    ↓
Edge Device Collects Raw Data
                    ↓
Stable Weight and Quality Classification Determined
                    ↓
Production Count Recorded Locally
                    ↓
Data Synchronized to Cloud
                    ↓
Back-Office Dashboard Updated in Real Time
```

The result was a more visible, data-driven production process that reduced reliance on manual counting and gave operations teams better insight into performance.

---

## Who Uses the System

The platform supports different users across factory and back-office operations.

### Factory Team Leaders

Use a tablet interface to:

* Start production monitoring
* Pause monitoring
* Resume an existing production session
* Stop production monitoring
* Control the IoT device within the factory network

### Production Supervisors and Back-Office Users

Use the centralized application to:

* Monitor production activity
* Review accepted and defective components
* View real-time production counts
* Analyze production pacing
* Review historical weight records
* Monitor device status
* Configure weight tolerances
* Review synchronization status

### Administrators

Manage:

* Users
* Permissions
* IoT devices
* Production configuration
* Device and system settings

---

## My Role

I owned the complete project lifecycle as both the solo developer and solution architect.

My responsibilities included:

* Requirements analysis
* Hardware and software proof of concept
* Solution architecture
* Edge-device architecture
* Database design
* User-interface design
* Frontend development
* Backend development
* IoT hardware integration
* RS-232 serial communication
* Weight-processing algorithm development
* WebSocket communication
* Microservice development
* Event-driven architecture
* Offline-data handling
* Data synchronization
* Cloud deployment
* Testing and validation
* User Acceptance Testing
* Production deployment
* Ongoing maintenance
* Technical support

This meant I was responsible not only for developing the software, but also for determining how the hardware, local applications, cloud services, databases, and user interfaces would work together as one production system.

---

## My Key Contributions

### 1. Validated the Hardware Integration Through a Proof of Concept

Before developing the complete platform, I built a proof of concept to determine whether the industrial weighing scale could communicate reliably with an edge computing device.

The scale was connected to a LattePanda device through an RS-232 serial connection.

The proof of concept verified that the system could:

* Read output from the weighing scale
* Capture continuous weight measurements
* Process measurements locally
* Detect stable values
* Transmit processed information to another application

### Why It Mattered

The proof of concept reduced technical uncertainty before building the full platform.

It confirmed that production information could be captured directly from the existing industrial equipment and processed programmatically.

---

### 2. Designed the End-to-End System Architecture

After validating the hardware integration, I designed the full architecture across the factory environment and cloud platform.

I separated the system into components responsible for:

* Device control
* Serial data collection
* Weight processing
* Local data storage
* Cloud synchronization
* Backend data ingestion
* Event broadcasting
* Authentication
* Production monitoring
* Administrative management

This created a distributed architecture where each component had a clear responsibility.

### Why It Mattered

Separating the platform into dedicated components made it possible for critical factory operations to continue locally while cloud services handled centralized monitoring and management.

It also reduced the risk that a failure in one part of the platform would stop every other part of the system.

---

### 3. Developed the Weight-Processing Algorithm

The industrial weighing scale continuously produced measurements, but not every measurement represented a finished component.

Raw values could fluctuate while a worker placed or removed an item.

I developed a C#/.NET background service that continuously analyzed these readings.

The algorithm:

* Collects continuous values from the scale
* Filters unstable or incomplete readings
* Determines whether a valid component has been placed
* Identifies the stable component weight
* Prevents duplicate counting
* Compares the weight against configured tolerances
* Classifies the component as accepted or defective
* Increments the valid production count
* Continues processing measurements in the background

### Why It Mattered

Without this logic, normal fluctuations from the scale could create incorrect production records or count the same component multiple times.

The processing algorithm transformed raw equipment readings into reliable production events that could be used by the rest of the platform.

---

### 4. Automated Accepted and Defective Component Classification

Each manufactured component could be evaluated against configured weight tolerances.

If the stable weight fell within the acceptable range, the system recorded it as valid production output.

If it fell outside the configured range, it was classified as defective.

The platform stored both accepted and defective records for later monitoring and analysis.

### Why It Mattered

This replaced part of the manual process of interpreting component weights and gave supervisors a more consistent record of production quality.

---

### 5. Designed the System to Continue Working Without Internet Connectivity

Factory operations could not depend entirely on continuous communication with a cloud server.

I therefore designed the edge device to operate independently when network connectivity was interrupted.

SQLite stored local information including:

* Raw weight readings
* Validated component weights
* Accepted production counts
* Defective component records
* Production-session information
* Synchronization status
* Device-processing information

A separate synchronization service identified records that had not yet reached the central platform and transmitted them once connectivity became available.

The synchronization process could:

* Queue records locally
* Detect unsynchronized information
* Send validated production data to backend services
* Retry failed transmissions
* Mark successfully synchronized records
* Continue operating through network interruptions

### Why It Mattered

Temporary connectivity problems did not need to stop production monitoring.

The system could continue capturing information locally and synchronize it afterward, reducing the risk of both production interruption and data loss.

---

### 6. Built a Tablet-Based Device-Control Interface

I developed a React-based web application hosted directly on the edge device.

A factory team leader could access the application through a tablet connected to the local network.

The interface provided four primary controls:

* **Start** — Begin production monitoring
* **Pause** — Temporarily stop data collection
* **Resume** — Continue the current production session
* **Stop** — Finish monitoring and close the production session

The tablet communicated with local background services through WebSockets.

### Why It Mattered

Production personnel did not need to interact directly with technical services running on the edge device.

The tablet provided a simple operational interface for controlling the production-monitoring process.

---

### 7. Built Real-Time Back-Office Monitoring

I implemented real-time communication between the production environment and the centralized monitoring application.

A dedicated server-side service broadcast new production events through WebSockets.

Back-office users could see updates such as:

* New weight readings
* Accepted and defective components
* Production counts
* Device activity
* Production-session status

without manually refreshing the page.

### Why It Mattered

Production supervisors gained immediate visibility into what was happening on the factory floor instead of waiting for manually prepared reports or end-of-session updates.

---

### 8. Built Production Pacing and Output Visibility

Because each component was recorded individually, the system could provide more information than a simple total production count.

The platform enabled users to evaluate:

* Production speed
* Worker pacing
* Changes in output over time
* Faster production periods
* Slower production periods
* Accepted and defective output
* Historical component measurements

### Why It Mattered

The organization gained detailed production data that could be used to better understand manufacturing performance and identify changes in output throughout a production session.

---

### 9. Supported Shipment-Weight Monitoring

The system also tracked accumulated production weight.

This information helped production teams determine when manufacturing should stop before the total shipment exceeded its configured maximum weight.

### Why It Mattered

Production decisions could be based on continuously collected data rather than relying only on manual counting and calculations.

---

### 10. Designed the Cloud Backend Around Independent Services

The server-side platform followed a microservices-based and event-driven architecture.

A dedicated service received validated production readings from the IoT device.

Its responsibilities included:

* Receiving synchronized production data
* Validating incoming records
* Recording accepted and defective components
* Updating production counts
* Processing production-session information
* Publishing events for other services

A separate service handled real-time broadcasting to the back-office application.

### Why It Mattered

Separating data ingestion, processing, and real-time communication reduced tight coupling between system components.

It also made it easier for different parts of the platform to process production information independently.

---

### 11. Used Event-Driven Processing for Production Updates

Production events could be consumed by different backend services without requiring the edge device to communicate directly with every feature in the back-office application.

This architecture supported:

* Asynchronous processing
* Independent service responsibilities
* Failure isolation
* Retry and fallback handling
* Real-time updates
* Future service integration

### Why It Mattered

The edge device only needed to send production information into the central platform rather than understand every system that might eventually use that information.

---

### 12. Improved Real-Time Performance with Redis

Redis was used to cache frequently accessed production information such as:

* Current production status
* Active production sessions
* Device operating state
* Current production counts
* Frequently requested monitoring data

### Why It Mattered

Caching reduced repeated access to persistent storage for frequently requested information and helped keep monitoring features responsive.

---

### 13. Developed the Back-Office Management Platform

I built the frontend and backend functionality used by administrators and production supervisors.

The platform included:

* User authentication
* Role-based access control
* IoT-device management
* Production configuration
* Weight-tolerance settings
* Production-session monitoring
* Accepted and defective component records
* Real-time production counts
* Production-pacing information
* Historical weight logs
* Synchronization monitoring
* System and device configuration

The frontend and backend were deployed separately so they could be maintained and released independently.

---

### 14. Tested the System Across Hardware and Software Boundaries

Because the solution combined industrial hardware, local applications, cloud services, and user-facing systems, testing covered more than standard application behavior.

I tested:

* Hardware communication
* Serial-data collection
* Edge processing
* Stable-weight detection
* Weight validation
* Accepted and defective classification
* Duplicate-count prevention
* Local data storage
* Data synchronization
* Backend services
* Real-time events
* User-facing applications

I also supported User Acceptance Testing before transitioning the system into production.

---

### 15. Deployed and Supported the Production System

I deployed the platform using Docker and AWS and supported it after implementation.

Production support included diagnosing issues such as:

* Hardware communication failures
* Incorrect weight detection
* Duplicate production counts
* Missing production counts
* Synchronization failures
* Device-control issues
* Server-side errors
* User-reported concerns

### Why It Mattered

For an IoT system, successful development is only part of the challenge.

The platform also had to operate reliably across physical equipment, local networks, edge software, cloud infrastructure, and production users.

---

## Technical Architecture

For technical readers, the system followed a distributed edge-and-cloud architecture.

```text
Industrial Weighing Scale
          ↓ RS-232
     LattePanda Edge Device
          ↓
 ┌───────────────────────────────┐
 │ Local Device-Control App      │
 │ C# Weight Processing Service  │
 │ SQLite Local Database         │
 │ Synchronization Service       │
 └───────────────────────────────┘
          ↓
   Cloud Backend Services
          ↓
 ┌───────────────────────────────┐
 │ Weight Reading Service        │
 │ Event Processing              │
 │ Redis Cache                   │
 │ Real-Time Broadcast Service   │
 │ Central MySQL Database        │
 └───────────────────────────────┘
          ↓
 Back-Office Monitoring Platform
```

### Edge Computing

Critical weight-processing and production-counting logic ran directly inside the factory on the edge device.

This minimized dependence on the central server for time-sensitive production activities.

### Dual Database Strategy

SQLite stored data locally on the edge device, while MySQL served as the central database for synchronized production and management information.

### Offline-First Operation

Production records remained locally available until they were successfully synchronized with the cloud.

### Real-Time Processing

C#/.NET background services processed scale readings continuously, while WebSockets supported immediate device commands and monitoring updates.

### Microservices

Server-side responsibilities such as data ingestion and real-time broadcasting were separated into dedicated services.

### Event-Driven Architecture

Production events could be distributed across backend services without tightly coupling the edge device to every downstream application feature.

---

## Key Results

The platform transformed production monitoring from a largely manual process into an automated, connected workflow.

Key outcomes included:

* Digitized weight monitoring for individual manufactured components
* Created detailed production records for every processed component
* Automated accepted and defective component classification
* Automated production counting
* Reduced reliance on handwritten production records
* Enabled real-time production monitoring
* Provided visibility into production speed and worker pacing
* Helped identify faster and slower production periods
* Supported production decisions using accumulated shipment weight
* Enabled production monitoring during network interruptions
* Automatically synchronized locally stored information with cloud services
* Provided tablet-based control of the IoT device
* Created historical production and weight records
* Delivered an integrated solution spanning industrial hardware, edge computing, web applications, cloud services, and real-time communication
* Delivered the project independently from proof of concept through production deployment and ongoing support

---

## Skills Demonstrated

**Industrial IoT**
Industrial hardware integration, RS-232 communication, edge computing, device control, production-data collection, and factory-system integration

**Solution Architecture**
Distributed systems, edge-and-cloud architecture, microservices, event-driven architecture, offline-first design, and real-time processing

**Full-Stack Development**
Laravel, PHP, React, Next.js, TypeScript, Tailwind CSS, C#/.NET, MySQL, SQLite, and integrated frontend-backend development

**Algorithm Development**
Continuous data processing, stable-weight detection, measurement validation, duplicate-count prevention, and tolerance-based classification

**Real-Time Systems**
WebSockets, background services, event broadcasting, device commands, and live production monitoring

**Offline and Synchronization Engineering**
Local persistence, synchronization queues, retries, connectivity recovery, and data-loss prevention

**Cloud and Infrastructure**
Docker, AWS deployment, service hosting, distributed application configuration, and production operations

**End-to-End Ownership**
Requirements analysis, proof of concept, architecture, hardware integration, application development, testing, UAT, deployment, maintenance, and technical support
