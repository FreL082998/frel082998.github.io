# Purchasing Support System

**Industry:** Manufacturing
**Role:** Technical Lead / Full-Stack Developer
**Project Type:** Enterprise Procurement and Approval Workflow System
**Primary Technologies:** Laravel, PHP, Next.js, TypeScript, Tailwind CSS, MySQL, Docker, AWS

## Project Overview

The Purchasing Support System is an enterprise procurement platform designed to digitize the company's purchase request and purchase order processes.

Before the system was introduced, employees relied heavily on paper forms and manual follow-ups to request purchases and obtain approvals.

The platform replaced that process with a centralized workflow where employees, procurement officers, managers, finance approvers, and executives can manage purchasing activities from one system.

Employees can submit purchase requests, procurement officers can review supplier quotations, and the system automatically determines which approvals are required based on the purchase amount and organizational rules.

Once a request is fully approved, the procurement team can generate a purchase order and send the approved information to the company's existing ERP system.

### Business Value

The platform helps the organization:

* Replace paper-based purchasing workflows
* Reduce manual follow-ups between procurement and approvers
* Apply purchasing policies consistently
* Improve visibility into pending and completed requests
* Reduce duplicate data entry
* Maintain a clearer approval history
* Connect procurement activities with the existing ERP system

At a high level:

```text
Employee Submits Purchase Request
            ↓
Procurement Reviews Request
            ↓
Supplier Canvassing
            ↓
System Determines Required Approvals
            ↓
Managers / Executives Review
            ↓
Purchase Request Approved
            ↓
Purchase Order Created
            ↓
Approved Data Sent to ERP
```

---

## The Challenge

The organization's purchasing process relied heavily on printed forms and manual coordination.

Employees completed paper purchase requests, while procurement officers manually tracked each request and contacted managers or executives for approval.

Approval requirements also changed depending on the value of the purchase.

For example, a request could require approval from:

* The requester's immediate manager
* Division management
* Department management
* Other designated executives
* The Chief Financial Officer

This created several operational challenges:

* Requests were difficult to track
* Approvals depended on manual follow-ups
* Paper documents could be delayed or misplaced
* Different purchase amounts required different approval paths
* Procurement teams had limited visibility into pending approvals
* Purchase-order information had to be entered again into the ERP system
* Manual data entry increased the risk of errors or duplicated records
* Audit and reporting activities required additional effort

The organization needed a system that could automatically apply procurement policies instead of relying on employees to remember and coordinate each approval step manually.

---

## What We Built

The Purchasing Support System replaced the manual process with a structured digital workflow covering the complete purchasing lifecycle.

The process follows:

1. An employee creates a purchase request.
2. Procurement reviews the request.
3. Supplier quotations and canvassing information are recorded.
4. The system evaluates the total purchase amount.
5. The correct approval path is selected automatically.
6. Required approvers are notified.
7. The request moves through the approval hierarchy in sequence.
8. Each approver can approve or reject the request.
9. Procurement creates a purchase order after final approval.
10. Approved purchase-order information is transmitted to the existing ERP system.

The platform also uses role-based access so users only see the information and actions relevant to their responsibilities.

---

## Who Uses the Platform

The platform supports several groups across the procurement process.

### Requesting Employees

Employees can:

* Create purchase requests
* Add requested items
* Submit requests
* Review current status
* View approval history

### Procurement Officers

Procurement personnel can:

* Review submitted requests
* Record supplier quotations
* Manage canvassing information
* Monitor approval progress
* Generate purchase orders
* Send approved purchasing data to the ERP system

### Managers and Executives

Approvers can:

* Review assigned requests
* View purchase information
* Approve or reject requests
* Review prior approval activity

### Finance and Administrative Users

Authorized personnel can oversee purchasing activity according to their assigned responsibilities.

---

## My Role

As the Technical Lead and Full-Stack Developer, I led the technical delivery of the procurement platform from architecture through production support.

I was responsible for translating purchasing policies and business workflows into a maintainable technical solution while also guiding the development team.

My responsibilities included:

* Solution architecture
* Technical design
* Business requirements analysis
* Approval-workflow design
* Role-based access design
* Backend development
* Frontend development
* Development standards
* Technical mentoring
* Code and implementation guidance
* Automated testing
* CI/CD architecture
* Deployment
* User Acceptance Testing
* Production release
* Ongoing support and maintenance

My role combined hands-on engineering with technical leadership across the full project lifecycle.

---

## My Key Contributions

### 1. Led the System Architecture and Technical Direction

I designed the overall architecture for the procurement platform and translated business purchasing rules into technical components.

My responsibilities included:

* Defining the overall application architecture
* Designing approval and access-control mechanisms
* Translating procurement policies into system rules
* Establishing frontend and backend development standards
* Reviewing implementation approaches
* Guiding code organization
* Mentoring developers
* Coordinating technical decisions throughout the project

### Why It Mattered

The approval process was one of the most important parts of the system.

The architecture needed to support current purchasing policies while remaining maintainable if approval requirements changed later.

---

### 2. Designed and Developed the Purchase Request Module

I designed and developed the full-stack module used to manage purchase requests.

The module allows employees and procurement officers to:

* Create purchase requests
* Update request information
* Add requested items
* Submit requests for review
* Record supplier canvassing information
* Track approval status
* Review approval and rejection history
* Maintain supporting information throughout the process

I developed:

* Backend services using Laravel and PHP
* Frontend interfaces using Next.js, TypeScript, and Tailwind CSS

### Why It Mattered

This module replaced the paper request form with a centralized digital record.

Users could see where a request was in the process instead of depending on physical documents and manual follow-ups.

---

### 3. Designed and Developed the Purchase Order Module

After a purchase request completed the required approval process, procurement personnel needed a structured way to create the final purchase order.

I developed a module that allowed procurement officers to:

* Convert approved purchase requests into purchase orders
* Maintain purchase-order records
* Validate supplier and purchasing information
* Track purchase-order status
* Prepare approved information for transmission to the ERP system

### Why It Mattered

The purchase-order workflow connected the internal approval process to the organization's established enterprise systems.

This reduced the need to manually recreate approved purchasing information.

---

### 4. Designed the Automated Approval Workflow

One of my main contributions was designing and implementing the logic that automatically determines which users must approve a purchase request.

Approval requirements are based on:

* Purchase amount
* Financial thresholds
* Organizational hierarchy
* Configured procurement rules

The system automatically:

* Identifies required approvers
* Determines the correct approval sequence
* Routes requests to each approver
* Prevents required stages from being bypassed
* Records approvals and rejections
* Updates request status
* Continues routing until all approvals are completed

Conceptually:

```text
Purchase Request
      ↓
Evaluate Purchase Amount
      ↓
Select Approval Rules
      ↓
Determine Required Approvers
      ↓
Route to Approver 1
      ↓
Route to Approver 2
      ↓
Continue Until Complete
      ↓
Final Approval
```

### Why It Mattered

Procurement officers no longer needed to manually determine who should approve every request.

The system applied purchasing policies consistently and automatically.

---

### 5. Designed the Approval Logic for Maintainability

Approval rules can change as financial policies and organizational structures evolve.

I used the **Strategy Pattern** to separate different approval-routing rules rather than placing all approval logic into one tightly coupled component.

The system was also designed using **SOLID principles** to encourage:

* Clear responsibilities
* Loosely coupled components
* Reusable services
* Easier testing
* Maintainable business logic
* Extensible approval workflows

### Why It Mattered

The technical design made it easier to modify individual approval rules without changing unrelated parts of the application.

This was especially important because purchasing rules could vary depending on financial thresholds and organizational requirements.

---

### 6. Built Automated Approval Notifications

I designed and developed an email-notification service supporting the approval workflow.

Notifications are sent when:

* A purchase request is submitted
* An approver needs to take action
* A request is approved
* A request is rejected
* The workflow moves to another approver
* The complete approval process finishes

### Why It Mattered

This reduced the need for procurement officers to manually contact managers and executives to remind them about pending requests.

Users were automatically informed when their participation was required.

---

### 7. Implemented Role-Based Access Control

Different users have different responsibilities within procurement.

The platform assigns permissions based on roles such as:

* Requester
* Procurement officer
* Approver
* Administrator
* Finance-related roles

### Why It Mattered

Employees only have access to the information and actions appropriate to their responsibilities.

This also helps protect purchasing information and prevents unauthorized workflow actions.

---

### 8. Introduced Automated Testing

Because approval workflows contain many possible combinations of users, thresholds, and statuses, regression risk was an important concern.

I introduced and applied a Test-Driven Development approach across key components.

Testing covered:

* Unit tests
* Regression tests
* Smoke tests
* Integration tests
* Business-rule validation
* Approval scenarios
* Backend services
* Frontend components

The backend tests used **PHPUnit**, while frontend tests used **Jest**.

### Why It Mattered

Automated testing gave the team greater confidence when modifying complex approval logic.

It also helped identify regressions before application changes reached production.

---

### 9. Designed the CI/CD Deployment Pipeline

I designed and implemented the application's automated build and deployment process.

The pipeline used:

* AWS CodeBuild
* AWS CodeDeploy
* Docker
* Automated testing

The delivery process could:

* Build the application
* Validate changes
* Execute tests
* Prepare deployment artifacts
* Deploy application updates consistently

### Why It Mattered

This reduced manual deployment work and helped make releases more repeatable across environments.

---

### 10. Integrated the Platform with the Existing ERP System

Approved purchase-order information needed to reach the organization's established ERP platform.

The procurement system prepared and transmitted approved purchasing data to that system.

### Why It Mattered

Without integration, procurement personnel would need to manually re-enter information that had already been captured and approved.

The integration reduced duplicate data entry and connected the new procurement workflow with existing financial and operational processes.

---

### 11. Led User Acceptance Testing and Production Deployment

I led deployment activities and supported business users during User Acceptance Testing.

My responsibilities included:

* Preparing releases
* Coordinating environment configuration
* Deploying frontend and backend components
* Supporting business users during UAT
* Investigating reported workflow issues
* Implementing required corrections
* Validating fixes
* Supporting production release

### Why It Mattered

The application needed to correctly represent real procurement policies, not simply pass technical tests.

UAT allowed business users to validate the actual purchasing and approval workflows before production release.

---

### 12. Supported the Platform After Production Release

I continued supporting the platform after deployment.

Production support included:

* Investigating user-reported issues
* Resolving procurement workflow defects
* Fixing approval-routing issues
* Fixing notification issues
* Diagnosing frontend problems
* Diagnosing backend problems
* Supporting ERP integration issues
* Implementing production fixes
* Adding preventive improvements
* Monitoring application behavior after releases

### Why It Mattered

Procurement systems support real business transactions, so reliability after deployment was just as important as initial development.

---

## Technical Approach

For technical readers, the system was designed around configurable workflows, modular services, automated testing, and enterprise integration.

### Role-Based Access

Access is determined by each user's responsibilities in the purchasing process.

This keeps requester, procurement, approval, administrative, and finance-related capabilities separated.

### Configurable Approval Routing

The application determines required approvals based on purchase amount and organizational rules.

Sequential routing ensures required approval levels are completed in the correct order.

### Strategy Pattern

Approval strategies isolate different routing behaviors.

This makes it easier to change approval requirements without tightly coupling those rules to unrelated application components.

### SOLID Design

The application's architecture emphasizes:

* Separation of responsibilities
* Modular business logic
* Reusable services
* Testability
* Maintainability
* Extensibility

### Automated Testing

PHPUnit and Jest support automated validation across backend and frontend functionality.

### CI/CD

Docker, AWS CodeBuild, and AWS CodeDeploy support repeatable application builds and releases.

### ERP Integration

Approved purchase-order data is transmitted to the company's existing ERP platform.

---

## Key Results

The system transformed purchasing from a paper-heavy workflow into a structured enterprise application.

Key outcomes included:

* Digitized the complete purchase request and purchase order workflow
* Replaced paper-based purchasing forms
* Automated approval routing based on financial thresholds
* Applied organizational approval hierarchy automatically
* Reduced manual coordination between procurement teams and approvers
* Introduced automated approval notifications
* Improved visibility into current request status
* Preserved approval and rejection history
* Reduced duplicate ERP data entry
* Integrated approved purchase orders with the existing ERP platform
* Introduced automated backend and frontend testing
* Established CI/CD using AWS CodeBuild and CodeDeploy
* Improved maintainability using SOLID principles and the Strategy Pattern
* Led the project from architecture and development through UAT, deployment, and production support

---

## Skills Demonstrated

**Technical Leadership**
Architecture planning, technical decision-making, developer mentoring, development standards, implementation guidance, and end-to-end project leadership

**Procurement and Enterprise Workflows**
Purchase requests, supplier canvassing, financial approval routing, purchase orders, ERP integration, and enterprise procurement processes

**Full-Stack Development**
Laravel, PHP, Next.js, TypeScript, Tailwind CSS, MySQL, and frontend-backend development

**Workflow Engineering**
Sequential approvals, financial thresholds, organizational hierarchy, status management, notifications, and configurable business rules

**Software Architecture**
Role-based systems, modular services, approval workflow engines, Strategy Pattern, SOLID principles, and enterprise integration

**Quality Engineering**
Test-Driven Development, PHPUnit, Jest, unit testing, regression testing, smoke testing, integration testing, and business-rule validation

**Cloud and DevOps**
Docker, AWS CodeBuild, AWS CodeDeploy, CI/CD pipelines, automated testing, and production deployment

**Production Operations**
UAT, troubleshooting, defect resolution, ERP integration support, deployment validation, maintenance, and production support
