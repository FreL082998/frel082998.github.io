# IoT-Enabled Production Monitoring System

**Industry:** Manufacturing
**Role:** Solo Developer / Solution Architect
**Project Type:** Industrial IoT and Real-Time Production Monitoring Platform
**Primary Technologies:** Laravel, PHP, React, Next.js, TypeScript, Tailwind CSS, C#/.NET, MySQL, SQLite, Redis, Docker, AWS, WebSockets

## Project Overview

The IoT-Enabled Production Monitoring System is an industrial IoT platform designed to capture, validate, and monitor production activity through real-time weight measurements.

The system connects a LattePanda edge device to an industrial weighing scale through an RS-232 serial connection. Factory workers place individual manufactured components on the weighing scale, allowing the system to determine whether each component meets the configured weight specification.

Components that fall outside the acceptable weight range are classified as defective. Components that meet the required weight criteria are recorded as valid production output, and the inventory count is automatically incremented.

The platform combines hardware integration, edge computing, real-time communication, local data storage, background processing, cloud synchronization, microservices, and a centralized back-office monitoring application.

## The Challenge

The existing production process provided limited visibility into manufacturing activity.

Back-office users did not have detailed weight records for every component processed on the production line. They also lacked accurate data for evaluating production speed, worker pacing, defect rates, and changes in output throughout a production session.

This created several operational challenges:

* No individual weight logs for processed components
* Limited visibility into accepted and defective production output
* No accurate measurement of production speed
* Difficulty identifying when production became faster or slower
* Limited information for improving production efficiency
* No real-time view of the total number of manufactured components
* Difficulty determining when production should stop
* Risk of exceeding the maximum shipment-weight limit
* Dependence on manual monitoring and calculations

The organization needed an automated platform that could collect production data, validate each measurement, monitor production performance, and provide real-time information to team leaders and back-office users.

## The Solution

I designed and developed an end-to-end IoT production monitoring platform that connected factory equipment, edge applications, backend services, and web-based monitoring channels.

The platform automatically captured readings from the weighing scale and processed them through a custom algorithm. The algorithm determined whether each reading represented a valid component placement, identified the stable weight of the component, and classified it as accepted or defective.

Validated production data was stored locally on the edge device and synchronized with cloud-hosted backend services. Production events were then broadcast in real time to the back-office monitoring application.

The solution enabled the organization to:

* Record the weight of every manufactured component
* Automatically classify accepted and defective components
* Track production counts in real time
* Measure production speed and worker pacing
* Identify periods of faster or slower output
* Monitor accumulated production and shipment weight
* Determine when production should stop before exceeding shipment limits
* Review historical production records
* Remotely control the IoT device through a tablet

## Production Workflow

```text
Factory Worker Places Component on Scale
                    ↓
Scale Sends Reading Through RS-232
                    ↓
Edge Device Collects Raw Weight Data
                    ↓
Background Algorithm Validates Reading
                    ↓
System Determines Stable Component Weight
                    ↓
Accepted or Defective Classification
                    ↓
Valid Production Count Stored Locally
                    ↓
Data Synchronized to Cloud Services
                    ↓
Real-Time Data Broadcast to Back-Office Dashboard
```

## Edge Device Architecture

The LattePanda operated as an edge computing device within the production environment.

It hosted the device-control application, local database, weight-processing algorithm, synchronization service, and supporting background processes required for real-time and offline operation.

### Device-Control Web Application

A React-based web application was hosted directly on the edge device and accessed through a tablet used by the factory team leader.

The application allowed the team leader to control the production-monitoring process through four primary actions:

* **Start:** Begin collecting and processing weight readings
* **Pause:** Temporarily suspend data collection
* **Resume:** Continue collecting data for the current production session
* **Stop:** End data collection and close the production session

The web application communicated with the edge device’s background services through WebSockets, enabling commands to be executed in real time.

### Local Web Server

The edge device hosted its own web server, allowing the tablet application to operate within the factory’s local network.

This reduced dependency on continuous internet connectivity and allowed production activities to continue when communication with the central server was temporarily unavailable.

### Local SQLite Database

SQLite was used to store production information locally on the edge device, including:

* Raw weight readings
* Validated component weights
* Accepted component counts
* Defective component records
* Production session information
* Synchronization status
* Device activity and processing data

Local storage ensured that production records remained available until they were successfully synchronized with the central platform.

### Real-Time Weight Processing Service

I developed a C#/.NET background service to continuously process readings received from the weighing scale.

The service implemented a custom algorithm that:

* Collected continuous readings from the scale
* Filtered unstable, duplicate, or incomplete measurements
* Determined whether a reading represented a valid component
* Prevented the same component from being counted multiple times
* Identified the stable weight of the component
* Compared the measured weight against configured tolerances
* Classified the component as accepted or defective
* Incremented the production count for valid components
* Managed real-time background processing

The service also included an automatic garbage-collection process that removed unnecessary temporary readings and prevented local processing data from growing indefinitely.

### Data Synchronization Service

A separate C#/.NET synchronization service transmitted collected production records from the edge device to the central server.

The synchronization process allowed the device to:

* Queue production records locally
* Identify records that had not yet been synchronized
* Send validated readings to the backend services
* Retry failed transmissions
* Mark successfully synchronized records
* Continue operating during network interruptions
* Prevent production data from being lost

## Server-Side Architecture

The server-side platform followed a microservices-based and event-driven architecture.

### Weight Reading Service

A dedicated microservice received validated production readings from the IoT device.

Its responsibilities included:

* Receiving synchronized device data
* Validating incoming records
* Recording accepted and defective components
* Updating production counts
* Processing production session information
* Publishing events for other platform services

### Real-Time Broadcast Service

A separate service broadcast production updates to the back-office application through WebSockets.

This allowed users to view new weight readings, production counts, defect classifications, device activity, and production status without refreshing the page.

### Event-Driven Communication

The backend services communicated through events, allowing production data to be processed independently by different parts of the platform.

This architecture supported:

* Decoupled service responsibilities
* Asynchronous data processing
* Scalable real-time updates
* Failure isolation
* Retry and fallback handling
* Easier integration of future monitoring services

### Redis Caching

Redis was used to cache frequently requested information and improve the responsiveness of real-time monitoring features.

Cached information included:

* Current production status
* Active production sessions
* Device operating state
* Current production counts
* Frequently accessed monitoring data

## Back-Office Management Platform

The solution included an enterprise web application for administrators, production supervisors, and back-office users.

The frontend and backend were deployed as separate applications to support independent maintenance and deployment.

The back-office platform provided:

* User authentication
* Role-based access control
* IoT device management
* Production configuration
* Weight-tolerance settings
* Production session monitoring
* Accepted and defective component records
* Real-time production counts
* Production pacing information
* Historical weight logs
* Synchronization monitoring
* System and device configuration

## My Role

As the sole developer and solution architect, I was responsible for the complete project lifecycle—from the initial proof of concept through production deployment and ongoing support.

My responsibilities included:

* Requirements analysis
* Hardware and software proof of concept
* Solution architecture
* Edge-device architecture
* Database design
* User interface and experience design
* Frontend development
* Backend development
* IoT device integration
* RS-232 serial communication
* WebSocket implementation
* Weight-processing algorithm development
* Microservice development
* Event-driven architecture
* Cloud deployment
* Testing and validation
* User Acceptance Testing
* Production deployment
* Maintenance and technical support

## My Contributions

### Proof of Concept

Developed the initial proof of concept to validate communication between the edge device and industrial weighing scale through the RS-232 port.

The proof of concept confirmed that the system could reliably:

* Read output from the weighing scale
* Capture continuous weight values
* Process readings locally
* Identify stable measurements
* Transmit collected data to another application

### System Architecture

Designed the complete solution architecture across the edge device, local applications, central services, and back-office platform.

I separated the platform into components responsible for:

* Device control
* Serial data collection
* Real-time weight processing
* Local data persistence
* Cloud synchronization
* Backend data ingestion
* Event broadcasting
* User authentication
* Production monitoring
* Administrative management

### Weight-Reading Algorithm

Designed and implemented the algorithm responsible for interpreting continuous readings from the weighing scale.

The algorithm distinguished between temporary weight fluctuations and valid component placements. It identified the stable component weight, prevented duplicate production counts, and determined whether the component met the configured weight specification.

### Full-Stack Application Development

Developed the frontend and backend applications used across the platform.

This included:

* Tablet-based device-control interface
* Back-office production dashboard
* Authentication and authorization
* Production configuration
* Device and session management
* Weight-reading APIs
* Real-time monitoring features
* Historical production records
* System settings

### IoT and Hardware Integration

Integrated the industrial weighing scale with the LattePanda through RS-232 serial communication.

I handled:

* Device connectivity
* Serial communication
* Scale output formats
* Continuous reading collection
* Background processing
* Communication errors
* Device recovery scenarios

### Real-Time Communication

Implemented WebSocket communication between:

* The tablet application and local edge services
* The server-side broadcast service and back-office application

This enabled immediate device commands and live production updates.

### Offline Data Handling and Synchronization

Designed the platform to continue capturing production data when the central server was temporarily unavailable.

Records were stored in SQLite and synchronized when connectivity became available, reducing the risk of data loss and production interruption.

### Testing and Deployment

Tested the system across:

* Hardware communication
* Edge processing
* Weight validation
* Duplicate-count prevention
* Data synchronization
* Backend services
* Real-time events
* User-facing applications

I also deployed the platform using Docker and AWS and supported its transition into the production environment.

### Maintenance and Support

Provided ongoing maintenance and production support for hardware communication, applications, synchronization processes, and production-related concerns.

This included diagnosing:

* Communication failures
* Incorrect weight detection
* Duplicate or missing production counts
* Synchronization issues
* Device-control problems
* Server-side errors
* User-reported concerns

## Technical Highlights

### Edge Computing

Critical weight-validation and production-counting logic ran directly on the edge device. This allowed manufacturing operations to continue with minimal dependence on the central server.

### Offline-First Operation

SQLite-based local storage and the synchronization service allowed production data to be captured during network interruptions and transmitted later.

### Real-Time Processing

C#/.NET background services continuously processed scale readings, while WebSockets delivered immediate device commands and production updates.

### Microservices Architecture

The backend separated data ingestion, processing, broadcasting, authentication, and management responsibilities into independently maintainable services.

### Event-Driven Architecture

Production events could be consumed by multiple services without tightly coupling the edge device to every back-office feature.

### Dual Database Strategy

SQLite supported local edge-device operations, while MySQL served as the central source of production and management information.

## Key Results

* Digitized weight monitoring for individual manufactured components
* Created detailed production records for every processed component
* Automated the classification of accepted and defective components
* Automated production and inventory counting
* Enabled real-time production monitoring
* Provided visibility into production pacing and output speed
* Helped identify periods of faster and slower production
* Supported production-stopping decisions based on shipment-weight limits
* Reduced reliance on manual counting and handwritten records
* Enabled offline data collection with automatic cloud synchronization
* Provided tablet-based remote control of the IoT device
* Delivered the project independently from proof of concept through production support

## Skills Demonstrated

**Industrial IoT:** Hardware integration, RS-232 communication, edge computing, device control, and production-data collection

**Software Architecture:** Microservices, event-driven architecture, distributed systems, offline-first design, and real-time processing

**Full-Stack Development:** Laravel, PHP, React, Next.js, TypeScript, Tailwind CSS, C#/.NET, MySQL, and SQLite

**Real-Time Systems:** WebSockets, background processing, event broadcasting, and live production monitoring

**Cloud and Infrastructure:** Docker, AWS deployment, service hosting, and distributed application configuration

**End-to-End Ownership:** Proof of concept, architecture, design, development, testing, deployment, maintenance, and user support
