# Monitoring, Survey, and Communication Platform

**Industry:** Overseas Workforce Services
**Role:** Full-Stack Developer
**Project Type:** Cross-Platform Workforce Engagement and Communication System
**Primary Technologies:** React Native, Angular, Laravel, MySQL, Firebase, Firestore, Android, iOS, AWS

## Project Overview

The Monitoring, Survey, and Communication Platform is a cross-platform application designed to centralize communication between overseas workers and their assigned agency handlers.

The platform enables overseas workers to communicate directly with agency personnel, receive important announcements, and participate in surveys through an Android or iOS mobile application.

Agency handlers use the system to:

* Communicate with assigned overseas workers
* Create and distribute announcements
* Create and manage surveys
* Monitor responses
* Address worker concerns
* Access synchronized worker information

Agency handlers can use both the web and mobile applications. The mobile experience is primarily designed for communication, while administrative features such as survey and announcement management are available through the web application.

The platform integrates with an external enterprise system that serves as the source of worker and organizational master data.

## Application Architecture

The system follows a monolithic application structure stored in a single repository, while maintaining separate directories and components for:

* Laravel backend services
* Angular web application
* React Native mobile application

Although the applications share one repository, the backend, web frontend, and mobile application are maintained as distinct parts of the system.

The platform includes:

* Android and iOS mobile applications
* A web-based agency management portal
* Real-time communication features
* Push notifications
* Survey management
* Announcement distribution
* Third-party master-data integration
* Cloud-hosted backend services

## The Challenge

Before the platform was introduced, agency handlers and overseas workers relied primarily on consumer messaging applications for communication.

Surveys were created using external online forms, and agency handlers manually distributed survey links to workers through individual or group messages.

This fragmented process created several operational challenges:

* Worker concerns were mixed with personal conversations
* Communication history was difficult to monitor centrally
* Important messages could be missed in external messaging applications
* Agency handlers had limited visibility into unresolved concerns
* Survey creation and distribution required multiple applications
* Survey links had to be manually shared with workers
* Announcements were not managed through a centralized channel
* Worker information was stored in a separate external system
* The organization depended on third-party consumer tools for official communication

The agency needed a centralized platform where official communication, surveys, announcements, and worker concerns could be managed through one controlled system.

## The Solution

The platform consolidated communication, survey management, and announcement distribution into a single web and mobile ecosystem.

Overseas workers could use the mobile application to:

* Communicate with their assigned agency handler
* Raise work-related or personal concerns
* Receive official announcements
* Receive push notifications
* Participate in surveys
* Review communication history

Agency handlers could use the platform to:

* Communicate directly with assigned workers
* Respond to worker concerns
* Create surveys
* Distribute surveys to selected users
* Publish announcements
* Send notifications to mobile devices
* Monitor responses and worker engagement
* Access synchronized worker information

The solution reduced reliance on external messaging applications and online form tools while giving the agency a more centralized and manageable communication channel.

## Platform Workflow

```text
Agency Handler Creates Announcement or Survey
                        ↓
Platform Identifies Intended Recipients
                        ↓
Push Notification Sent to Mobile Devices
                        ↓
Overseas Worker Opens the Mobile Application
                        ↓
Worker Reads Announcement or Completes Survey
                        ↓
Response Stored in the Central Platform
                        ↓
Agency Handler Reviews Results or Follows Up
```

For direct communication:

```text
Overseas Worker Sends a Concern
                 ↓
Assigned Agency Handler Receives the Message
                 ↓
Handler Reviews and Responds
                 ↓
Conversation Remains Available in the Platform
```

## Core Features

### Worker–Agency Communication

The in-app communication feature enabled overseas workers to send concerns directly to their assigned agency handlers.

This created a dedicated communication channel for official worker support and reduced dependence on personal messaging accounts.

The feature supported:

* Direct worker-to-handler communication
* Conversation history
* Concern follow-up
* Mobile access for both workers and handlers
* Centralized communication records

### Survey Management

Agency handlers could create and distribute surveys directly through the platform.

Workers received mobile notifications when a new survey became available and could submit their responses through the application.

This replaced the fragmented process of creating forms externally and manually distributing links through messaging applications.

### Announcement Management

Agency handlers could publish official announcements to overseas workers.

Push notifications informed users when new information was available, helping the agency communicate important updates more efficiently.

### Push Notifications

The platform used mobile push notifications to notify workers about:

* New announcements
* Available surveys
* Communication updates
* Other important agency information

This improved the visibility of time-sensitive information without requiring users to check the application continuously.

### Third-Party Master-Data Integration

The platform integrated with an external enterprise system where worker master data was maintained.

This allowed the application to retrieve authoritative information without requiring agency personnel to recreate and maintain the same records manually.

Integrated information supported:

* Worker profiles
* Agency assignments
* Handler relationships
* Organizational references
* Other required master data

## My Role

As a Full-Stack Developer, I was responsible for maintaining, improving, deploying, and supporting the platform across its backend, web, and mobile applications.

My work involved both production support and active product development, including application optimization, user-interface improvements, integration work, deployment, mobile-store compliance, and stakeholder coordination.

## My Contributions

### Production Maintenance and Support

Maintained and supported the production applications by investigating concerns reported by overseas workers, production support and active product development, including application optimization, user-interface improvements, integration work, deployment, mobile-store compliance, and stakeholder coordination agency handlers, and other users.

My responsibilities included:

* Reproducing reported issues
* Reviewing application logs
* Diagnosing backend and frontend defects
* Investigating mobile-specific problems
* Fixing data-retrieval issues
* Resolving communication and notification concerns
* Validating production fixes
* Monitoring application behavior after deployment
* Supporting users across web, Android, and iOS platforms

### Application Performance Optimization

Investigated performance bottlenecks affecting the platform’s core features.

Before optimization, several frequently used features required approximately four to five seconds to load. Through frontend, backend, and data-retrieval improvements, I reduced loading time to approximately one to two seconds.

This represented an estimated **60% improvement in application loading performance**.

The optimization work included:

* Reviewing slow API requests
* Improving backend query execution
* Reducing unnecessary data retrieval
* Optimizing frontend rendering behavior
* Improving application state handling
* Removing avoidable processing
* Validating performance across production-like scenarios

### User-Interface Revamp

Revamped key parts of the application interface to make the system more intuitive, interactive, and user-friendly.

The improvements focused on:

* Clearer navigation
* Better information hierarchy
* More understandable user actions
* Improved mobile usability
* More consistent visual presentation
* Better feedback during loading and processing
* Reduced friction in frequently used workflows

### Third-Party System Integration

Implemented and supported the integration with the external system used as the source of master data.

My work included:

* Retrieving worker and organizational records
* Mapping external data to application structures
* Handling integration errors
* Validating incoming information
* Supporting changes in external data formats
* Troubleshooting synchronization and retrieval issues

This integration helped maintain consistent information across systems and reduced duplicate data maintenance.

### AWS Deployment

Deployed backend application updates across the platform’s live AWS environments.

My deployment responsibilities included:

* Preparing release builds
* Managing environment-specific configuration
* Deploying backend changes
* Running database and application updates
* Validating deployed functionality
* Investigating deployment-related problems
* Supporting rollback and recovery activities when required
* Monitoring the application after release

### App Store and Play Store Support

Supported the continued availability of the mobile application on both the Apple App Store and Google Play Store.

This included handling application updates required to comply with changing platform requirements.

My responsibilities included:

* Preparing mobile release builds
* Updating platform configurations
* Addressing compatibility requirements
* Supporting application-signing and release settings
* Resolving store-review concerns
* Updating dependencies when required
* Validating Android and iOS application behavior
* Coordinating the submission of new releases

### Production Issue Investigation

Investigated and resolved production issues across the complete application stack.

This required working with:

* React Native mobile applications
* Angular web interfaces
* Laravel backend services
* MySQL databases
* Firebase and Firestore
* Third-party integrations
* AWS-hosted environments

I traced issues across these components to identify root causes and implement appropriate fixes.

### Stakeholder Collaboration

Worked directly with stakeholders to understand reported issues, requested changes, and new feature requirements.

My involvement included:

* Clarifying business needs
* Reviewing proposed changes
* Translating requests into technical requirements
* Assessing the impact of changes
* Recommending implementation approaches
* Developing and testing requested features
* Supporting stakeholder validation
* Preparing completed changes for release

This direct collaboration helped ensure that application improvements addressed actual operational needs.

## Technical Approach

### Shared Repository with Separated Applications

The backend, web frontend, and mobile application were stored in one repository but organized into separate directories.

This provided a shared codebase for the complete platform while keeping each application’s responsibilities distinct.

### Cross-Platform Mobile Application

React Native supported the delivery of the worker application across both Android and iOS platforms.

The shared mobile codebase simplified the implementation of communication, survey, announcement, and notification features across the two operating systems.

### Web-Based Administration

Angular was used for the agency handler’s web portal, supporting administrative workflows such as survey creation, announcement management, and worker monitoring.

### Laravel Backend

Laravel provided the backend services and business logic for:

* Authentication
* Communication
* Survey processing
* Announcement distribution
* User management
* Third-party data retrieval
* Notification handling
* Web and mobile APIs

### Cloud Infrastructure

The platform’s backend environments were hosted on AWS, supporting production deployment, maintenance, and application availability.

### Mobile Messaging and Data Services

Firebase and Firestore supported mobile and real-time application capabilities, including push notifications and application data requirements.

## Key Results

* Centralized communication between overseas workers and agency handlers
* Reduced dependence on consumer messaging applications for official concerns
* Consolidated announcements, surveys, and worker communication into one platform
* Replaced the manual distribution of external survey links
* Reduced core-feature loading times from approximately four to five seconds to one to two seconds
* Delivered an estimated 60% improvement in application loading performance
* Improved the usability and visual experience of the web and mobile applications
* Maintained application availability across Android and iOS stores
* Supported backend deployments across live AWS environments
* Integrated worker master data from an external enterprise system
* Resolved production issues across mobile, web, backend, and cloud components
* Collaborated directly with stakeholders on feature changes and new releases

## Skills Demonstrated

**Full-Stack Development:** Laravel, PHP, Angular, React Native, MySQL, Firebase, and Firestore

**Mobile Development:** Android and iOS deployment, push notifications, cross-platform development, application-store compliance, and mobile troubleshooting

**Performance Engineering:** API optimization, query improvement, rendering optimization, and application load-time reduction

**Cloud Operations:** AWS deployment, environment configuration, production validation, monitoring, and release support

**Enterprise Integration:** Third-party master-data retrieval, data mapping, synchronization, and integration troubleshooting

**Production Support:** Root-cause analysis, defect resolution, user support, log investigation, and post-deployment monitoring

**Stakeholder Collaboration:** Requirements gathering, change assessment, feature delivery, release coordination, and User Acceptance Testing support
