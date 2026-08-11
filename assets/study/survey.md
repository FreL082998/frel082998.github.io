# Monitoring, Survey, and Communication Platform

**Industry:** Overseas Workforce Services
**Role:** Full-Stack Developer
**Project Type:** Cross-Platform Workforce Engagement and Communication System
**Primary Technologies:** React Native, Angular, Laravel, MySQL, Firebase, Firestore, Android, iOS, AWS

## Project Overview

This is a cross-platform communication and engagement platform designed to connect overseas workers with their assigned agency handlers through an official web and mobile system.

Before the platform was introduced, workers and agency personnel relied heavily on consumer messaging applications and separate online form tools for communication and surveys.

The platform brought those activities into one controlled system.

Overseas workers can use the mobile application to:

* Communicate with their assigned agency handler
* Raise work-related or personal concerns
* Receive official announcements
* Receive push notifications
* Participate in surveys
* Review their communication history

Agency handlers can use the web and mobile applications to:

* Communicate with assigned workers
* Respond to worker concerns
* Create and distribute surveys
* Publish announcements
* Send notifications
* Monitor responses and engagement
* Access synchronized worker information

### Business Value

The platform gives the organization a dedicated channel for official worker communication instead of depending heavily on personal messaging applications and external survey tools.

It helps centralize:

* Worker concerns
* Agency responses
* Official announcements
* Surveys
* Push notifications
* Communication history
* Worker information

This gives both workers and agency personnel a more structured and manageable way to stay connected.

---

## The Challenge

Before the platform was introduced, communication and engagement activities were spread across several external tools.

Agency handlers primarily communicated with overseas workers through consumer messaging applications.

Surveys were created using separate online form services, and links were manually sent through individual or group conversations.

This created several operational problems:

* Official concerns were mixed with personal conversations
* Communication history was difficult to monitor centrally
* Important messages could be missed
* Agency handlers had limited visibility into unresolved concerns
* Surveys required several separate tools
* Survey links had to be distributed manually
* Announcements did not have a centralized official channel
* Worker information was stored in a separate enterprise system
* The organization depended on third-party consumer tools for important communication

The organization needed one platform where official communication, announcements, surveys, and worker concerns could be managed more consistently.

---

## What the Platform Does

The platform combined mobile communication with web-based administration so official workforce engagement could happen in one place instead of across personal messaging apps and separate survey tools. It gave agency handlers a more reliable way to reach workers and gave workers a consistent channel for updates, concerns, and feedback.

For announcements and surveys, the workflow followed:

```text id="ofw01"
Agency Handler Creates Announcement or Survey
                    ↓
Platform Identifies Recipients
                    ↓
Push Notification Sent
                    ↓
Worker Opens Mobile Application
                    ↓
Worker Reads Announcement or Completes Survey
                    ↓
Response Stored in the Platform
                    ↓
Agency Handler Reviews Results or Follows Up
```

For worker concerns, the platform kept each conversation visible and traceable so issues could be reviewed and followed up more consistently.

---

## Who Uses the Platform

### Overseas Workers

Workers primarily use the mobile application to:

* Contact their agency handler
* Raise concerns
* Read announcements
* Receive notifications
* Complete surveys
* Review conversations

### Agency Handlers

Handlers use the mobile application for communication and the web portal for broader administrative tasks such as:

* Managing conversations
* Creating surveys
* Reviewing responses
* Publishing announcements
* Monitoring worker engagement
* Accessing synchronized worker records

---

## My Role

As a Full-Stack Developer, I worked across the backend, web application, mobile application, integrations, deployment, performance, production support, and release operations.

My responsibilities included:

* Application maintenance
* Production troubleshooting
* Backend development
* Web development
* Mobile development
* Performance optimization
* User-interface improvements
* Third-party system integration
* AWS deployment
* Android and iOS release support
* App Store and Play Store compliance
* Production issue investigation
* Stakeholder collaboration
* Feature development
* Testing and release support

My work involved both improving the product and keeping a live multi-platform application reliable for real users.

---

## My Key Contributions

### 1. Maintained and Supported the Production Platform

I supported the live application across its mobile, web, backend, database, cloud, and integration components.

My work included:

* Reproducing reported issues
* Reviewing application logs
* Diagnosing backend defects
* Diagnosing frontend issues
* Investigating mobile-specific problems
* Fixing data-retrieval issues
* Resolving communication problems
* Resolving notification concerns
* Validating production fixes
* Monitoring behavior after deployment
* Supporting users across web, Android, and iOS

### Why It Mattered

A problem reported by a worker or agency handler could originate from several different parts of the system.

Supporting the platform required tracing issues across the complete application stack rather than treating the web, mobile, and backend applications as isolated systems.

---

### 2. Improved Application Performance by Approximately 60%

Several frequently used platform features previously required roughly **4 to 5 seconds** to load.

I investigated performance bottlenecks across the frontend, backend, and data-retrieval layers.

My optimization work included:

* Reviewing slow API requests
* Improving backend query execution
* Reducing unnecessary data retrieval
* Optimizing frontend rendering
* Improving application state handling
* Removing avoidable processing
* Testing performance under production-like conditions

After the improvements, key loading times were reduced to approximately **1 to 2 seconds**.

This represented an estimated **60% improvement in application loading performance**.

### Why It Mattered

For users who depend on the platform regularly for communication, surveys, and official information, waiting several seconds for frequently used features creates unnecessary friction.

Reducing loading time made common workflows faster and more responsive across the application.

---

### 3. Revamped the User Experience

I redesigned and improved key areas of the application interface to make workflows easier to understand and use.

The improvements focused on:

* Clearer navigation
* Better information hierarchy
* More understandable actions
* Improved mobile usability
* More consistent visual presentation
* Better loading and processing feedback
* Reduced friction in commonly used workflows

### Why It Mattered

The platform serves users with varying levels of technical familiarity.

Making actions clearer and reducing interface friction helped make the application easier to use for both overseas workers and agency personnel.

---

### 4. Supported Worker–Agency Communication

The platform provides a dedicated communication channel between overseas workers and their assigned handlers.

The communication experience includes:

* Direct worker-to-handler conversations
* Conversation history
* Concern follow-up
* Mobile access
* Centralized communication records

### Why It Mattered

Official concerns no longer needed to remain mixed with personal conversations inside consumer messaging applications.

The platform provided a dedicated communication history that could be accessed within the organization’s own system.

---

### 5. Supported Centralized Survey Management

Agency personnel can create and distribute surveys directly through the platform.

Workers receive notifications when surveys become available and can submit responses using the mobile application.

### Why It Mattered

Previously, surveys required an external form service plus separate manual distribution through messaging applications.

Centralizing this process reduced the number of tools involved and made survey distribution easier to manage.

---

### 6. Supported Official Announcement Distribution

Agency handlers can publish official announcements directly through the platform.

Workers receive push notifications when new information becomes available.

### Why It Mattered

Important organizational messages have a dedicated channel instead of depending entirely on external chat applications where they may be mixed with other conversations.

---

### 7. Implemented and Supported Master-Data Integration

Worker information was maintained in an external enterprise system.

I implemented and supported the integration used to retrieve this information into the platform.

My work included:

* Retrieving worker records
* Retrieving organizational records
* Mapping external data to internal structures
* Validating incoming information
* Handling integration errors
* Supporting changes in external data formats
* Troubleshooting synchronization and retrieval issues

The integration supported information such as:

* Worker profiles
* Agency assignments
* Handler relationships
* Organizational references
* Other required master data

### Why It Mattered

Agency personnel did not need to manually recreate worker information already maintained elsewhere.

The integration helped keep application data aligned with the organization's existing source of record.

---

### 8. Deployed Backend Updates to AWS

I deployed application changes across live AWS environments.

My deployment responsibilities included:

* Preparing releases
* Managing environment-specific configuration
* Deploying backend changes
* Running database and application updates
* Validating deployed functionality
* Investigating deployment issues
* Supporting rollback and recovery when required
* Monitoring the application after release

### Why It Mattered

My role extended beyond development into production delivery and operational ownership.

I was responsible for helping ensure that application changes moved safely from development into live environments.

---

### 9. Supported Android and iOS Application Releases

I supported the continued availability of the mobile application across both the Apple App Store and Google Play Store.

This included adapting the application to changing mobile-platform and store requirements.

My responsibilities included:

* Preparing mobile release builds
* Updating platform configuration
* Addressing compatibility requirements
* Supporting signing and release settings
* Resolving store-review issues
* Updating dependencies when required
* Validating Android behavior
* Validating iOS behavior
* Coordinating application submissions

### Why It Mattered

Mobile applications must continue adapting as Apple, Google, operating systems, and platform requirements change.

Maintaining compatibility ensured that overseas workers could continue accessing the application on supported Android and iOS devices.

---

### 10. Investigated Issues Across the Complete Technology Stack

Production support required working across:

* React Native mobile applications
* Angular web interfaces
* Laravel backend services
* MySQL databases
* Firebase
* Firestore
* Third-party integrations
* AWS environments

I traced issues between these components to identify their root causes rather than only addressing visible symptoms.

### Why It Mattered

In a multi-platform application, the source of an issue is not always where the user experiences it.

A mobile problem could originate in an API, database query, external integration, notification service, cloud environment, or mobile application itself.

---

### 11. Worked Directly with Stakeholders

I collaborated with stakeholders to understand production concerns, requested changes, and new feature requirements.

My work included:

* Clarifying business needs
* Reviewing requested changes
* Translating requirements into technical work
* Assessing implementation impact
* Recommending technical approaches
* Developing requested functionality
* Testing completed changes
* Supporting stakeholder validation
* Preparing features for release

### Why It Mattered

Direct stakeholder involvement helped ensure that application changes addressed real operational problems rather than being based only on technical assumptions.

---

## Technical Approach

For technical readers, the platform combines a Laravel backend, Angular web application, and React Native mobile application.

### Application Structure

The backend, web frontend, and mobile application are maintained within one repository while remaining separated into their own application areas.

This provides a shared project structure while keeping the responsibilities of each application distinct.

### Mobile Application

React Native supports the cross-platform application used across Android and iOS.

The mobile application provides functionality such as:

* Worker communication
* Surveys
* Announcements
* Notifications
* Mobile access for agency handlers

### Web Application

Angular supports the agency management portal.

The web application is used for administrative activities including:

* Survey creation
* Survey monitoring
* Announcement management
* Worker monitoring

### Backend

Laravel provides application services and APIs supporting:

* Authentication
* Communication
* Surveys
* Announcements
* User management
* Third-party data retrieval
* Notifications
* Web and mobile applications

### Mobile and Real-Time Services

Firebase and Firestore support mobile and application capabilities including push notifications and related data requirements.

### Infrastructure

The backend application is hosted on AWS, supporting production deployment, maintenance, and availability.

---

## Key Results

The platform consolidated several fragmented workforce-engagement processes into a centralized web and mobile system.

Key outcomes included:

* Centralized communication between overseas workers and agency handlers
* Reduced dependence on consumer messaging applications for official concerns
* Consolidated surveys, announcements, and communication into one platform
* Replaced manual distribution of external survey links
* Created a dedicated communication history for worker concerns
* Enabled official announcement distribution through mobile notifications
* Reduced core-feature loading times from approximately **4–5 seconds to 1–2 seconds**
* Delivered an estimated **60% improvement in application loading performance**
* Improved the usability of web and mobile workflows
* Maintained application availability across Android and iOS stores
* Supported production deployments across live AWS environments
* Integrated worker master data from an external enterprise system
* Resolved production issues across mobile, web, backend, integrations, and cloud infrastructure
* Collaborated directly with stakeholders on feature changes and releases

---

## Skills Demonstrated

**Workforce Engagement Systems**
Worker communication, surveys, announcements, concern management, notifications, and agency-support workflows

**Full-Stack Development**
Laravel, PHP, Angular, React Native, MySQL, Firebase, Firestore, and integrated web/mobile/backend development

**Mobile Development**
React Native, Android, iOS, cross-platform development, push notifications, mobile troubleshooting, and store compliance

**Performance Engineering**
API optimization, database-query improvement, data-retrieval optimization, frontend rendering, state management, and load-time reduction

**Enterprise Integration**
Third-party master-data retrieval, data mapping, synchronization, validation, and integration troubleshooting

**Cloud Operations**
AWS deployment, environment configuration, database updates, release validation, rollback support, and post-deployment monitoring

**Production Support**
Root-cause analysis, log investigation, defect resolution, cross-stack troubleshooting, user support, and production monitoring

**Stakeholder Collaboration**
Requirements clarification, change assessment, feature development, technical recommendations, validation, and release coordination
