# Purchasing Support System

**Industry:** Manufacturing
**Role:** Technical Lead / Full-Stack Developer
**Project Type:** Enterprise Procurement and Approval Workflow System
**Primary Technologies:** Laravel, PHP, Next.js, TypeScript, Tailwind CSS, MySQL, Docker, AWS

## Project Overview

The Purchasing Support System is an enterprise-grade, role-based procurement platform designed to digitize and streamline the company’s purchase request and purchase order processes.

The platform serves requesting employees, procurement officers, department leaders, finance approvers, and other authorized personnel involved in purchasing activities.

Employees submit purchase requests through the system, which are then reviewed by procurement officers and canvassed across available suppliers. Based on the total purchase amount, each request is automatically routed through the appropriate approval hierarchy.

Depending on the configured approval bracket, a request may require approval from:

* The requester’s immediate manager
* Division manager
* Department manager
* Other designated executives
* Chief Financial Officer

The system automatically notifies each approver and routes the request through the required approval sequence. Approvers can review, approve, or reject requests directly from the platform.

Once a purchase request has completed the approval process, the procurement officer can generate a purchase order. Approved purchase order records are then transmitted to the company’s existing enterprise resource planning system.

## The Challenge

The organization’s purchasing workflow relied heavily on paper-based forms and manual coordination.

Employees completed purchase request forms using printed documents. Procurement officers manually tracked each request and contacted the appropriate managers or executives to obtain approvals.

This process created several operational challenges:

* Purchase requests were difficult to track
* Approval processing depended on manual follow-ups
* Paper documents could be delayed, misplaced, or incomplete
* Approval requirements varied depending on the purchase amount
* Procurement officers had limited visibility into pending approvals
* Purchase order details had to be manually entered into the ERP system
* Manual data entry increased the risk of duplicate or incorrect records
* Reporting and audit-trail generation required additional effort

The organization needed a centralized system that could enforce purchasing policies, automate approval routing, and integrate approved transactions with its existing ERP platform.

## The Solution

The Purchasing Support System replaced the manual, paper-based workflow with a centralized digital procurement platform.

The solution provided a structured process covering the complete purchasing lifecycle:

1. An employee creates and submits a purchase request.
2. A procurement officer reviews the request.
3. Supplier canvassing and quotation details are recorded.
4. The system determines the required approval route based on the total amount.
5. Approvers receive automatic email notifications.
6. The request is routed sequentially through the configured approval hierarchy.
7. Approvers review, approve, or reject the request.
8. The procurement officer creates the purchase order.
9. The approved purchase order is transmitted to the existing ERP system.

The platform introduced role-based access control to ensure that users could only view and perform actions relevant to their responsibilities.

Its configurable approval workflow allowed the organization to apply different approval levels based on financial thresholds, organizational hierarchy, and procurement policies.

## System Workflow

```text
Employee Creates Purchase Request
                ↓
Procurement Officer Reviews Request
                ↓
Supplier Canvassing and Evaluation
                ↓
System Determines Approval Bracket
                ↓
Manager and Executive Approval Sequence
                ↓
Purchase Request Approved
                ↓
Procurement Officer Creates Purchase Order
                ↓
Purchase Order Sent to ERP System
```

## My Role

As the Technical Lead and Full-Stack Developer, I led the architecture, design, development, testing, deployment, and production support of the entire procurement system.

I was responsible for converting business requirements and purchasing policies into a scalable technical solution while guiding the development team throughout the project lifecycle.

## My Contributions

### System Architecture and Technical Leadership

Led the technical architecture and design of the complete procurement platform.

My responsibilities included:

* Defining the overall application architecture
* Translating procurement workflows into technical components
* Designing the role-based access and approval-routing mechanisms
* Establishing frontend and backend development standards
* Reviewing technical designs and implementation approaches
* Mentoring developers on architecture, code organization, and engineering best practices
* Coordinating technical decisions across the development lifecycle

### Purchase Request Module

Designed and developed the full-stack Purchase Request module.

The module enabled employees and procurement officers to:

* Create and update purchase requests
* Add requested items and purchasing details
* Submit requests for review
* Record supplier canvassing information
* Track the request’s current approval status
* Review approval and rejection history
* Manage supporting information throughout the procurement process

I implemented both the backend services using Laravel and PHP and the frontend interfaces using Next.js, TypeScript, and Tailwind CSS.

### Purchase Order Module

Designed and developed the Purchase Order module for approved procurement requests.

The module allowed procurement officers to:

* Convert approved purchase requests into purchase orders
* Maintain purchase order records
* Validate purchasing and supplier information
* Track the status of generated purchase orders
* Prepare approved purchasing data for transmission to the existing ERP system

### Automated Approval Workflow

Designed and implemented the approval-routing logic based on purchase amount brackets and organizational hierarchy.

The workflow automatically:

* Identified the required approvers
* Routed requests in the correct sequence
* Enforced the configured approval hierarchy
* Prevented users from bypassing required approval stages
* Recorded approval and rejection activities
* Updated the request status after each action
* Continued routing until all required approvals were completed

I applied the **Strategy Pattern** to separate approval-routing rules and make the workflow easier to maintain and extend.

The implementation followed **SOLID principles** to improve modularity, testability, and long-term maintainability.

### Email Notification Service

Designed and developed the email notification service used throughout the approval process.

Notifications were automatically sent when:

* A purchase request was submitted
* An approval action was required
* A request was approved
* A request was rejected
* The request moved to the next approver
* The complete approval workflow was finished

This reduced the need for procurement officers to manually contact approvers and follow up on pending requests.

### Test-Driven Development and Quality Assurance

Introduced and applied a Test-Driven Development approach across key system components.

I developed automated tests covering:

* Unit testing
* Regression testing
* Smoke testing
* System integration testing
* Business-rule validation
* Approval workflow scenarios
* Backend service behavior
* Frontend component behavior

The backend test suite was developed using **PHPUnit**, while frontend tests were implemented using **Jest**.

Automated testing helped validate complex approval scenarios, reduce regression risks, and improve deployment confidence.

### Continuous Integration and Deployment

Designed and developed the CI/CD process for automated application deployment.

The deployment pipeline used:

* AWS CodeBuild for building and validating the application
* AWS CodeDeploy for automated deployment
* Docker for consistent application environments
* Automated testing as part of the delivery workflow

The pipeline reduced manual deployment steps and helped ensure that releases were repeatable and consistent across environments.

### Deployment and User Acceptance Testing

Led the system deployment and supported User Acceptance Testing.

My responsibilities included:

* Preparing the application for deployment
* Coordinating environment configuration
* Deploying frontend and backend components
* Supporting business users during UAT
* Investigating defects and workflow issues
* Implementing required corrections
* Validating fixes before production release

### Production Maintenance and Support

Provided ongoing maintenance and production support after deployment.

This included:

* Investigating issues reported by users
* Resolving procurement workflow defects
* Fixing approval-routing and notification concerns
* Diagnosing frontend and backend problems
* Supporting integration issues with the ERP system
* Implementing production fixes and preventive improvements
* Monitoring application behavior following releases

## Technical Approach

### Role-Based Access Control

Access was assigned according to each user’s responsibilities, including requester, procurement officer, approver, administrator, and finance-related roles.

This ensured that users could only access authorized information and perform permitted actions.

### Configurable Approval Routing

Approval requirements were determined by the purchase amount and configured organizational rules.

The workflow supported multiple approval levels and sequential routing without requiring procurement officers to manually identify and contact every approver.

### Strategy Pattern

The Strategy Pattern was used to isolate approval-routing behavior and business rules.

This made it easier to support different approval brackets and modify approval requirements without tightly coupling the rules to the rest of the application.

### SOLID Principles

The application was designed using SOLID principles to promote:

* Clear separation of responsibilities
* Loosely coupled components
* Reusable services
* Easier automated testing
* Maintainable business logic
* Extensible approval workflows

### ERP Integration

Approved purchase order data was prepared and transmitted to the company’s existing ERP system.

This reduced duplicate data entry and connected the newly developed procurement workflow with the organization’s established financial and operational processes.

## Key Results

* Digitized the complete purchase request and purchase order workflow
* Replaced paper-based purchasing forms with a centralized enterprise platform
* Automated approval routing based on financial thresholds and organizational hierarchy
* Reduced manual coordination between procurement officers and approvers
* Introduced automatic email notifications for approval-related activities
* Improved visibility into request and approval statuses
* Reduced duplicate data entry through ERP integration
* Established automated testing using PHPUnit and Jest
* Implemented a repeatable CI/CD deployment pipeline using AWS CodeBuild and CodeDeploy
* Improved maintainability by applying SOLID principles and the Strategy Pattern
* Led the project from architecture and development through UAT, deployment, and production support

## Skills Demonstrated

**Technical Leadership:** Architecture planning, technical decision-making, code review, mentoring, and development standards

**Full-Stack Development:** Laravel, PHP, Next.js, TypeScript, Tailwind CSS, and MySQL

**Software Architecture:** Role-based systems, approval workflow engines, modular services, and enterprise integrations

**Engineering Practices:** Test-Driven Development, SOLID principles, Strategy Pattern, automated testing, and maintainable code design

**Cloud and DevOps:** Docker, AWS CodeBuild, AWS CodeDeploy, CI/CD pipelines, and production deployment

**Quality Assurance:** Unit, regression, smoke, integration, and User Acceptance Testing

**Production Operations:** Troubleshooting, maintenance, customer support, defect resolution, and release validation
