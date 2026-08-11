# CareFlow: Online Triage and Patient Care Management System

**Industry:** Healthcare / HealthTech
**Role:** Full-Stack Developer
**Project Type:** Patient Triage, Medical Records, Checkup Scheduling, and Clinical Workflow Management Platform
**Primary Technologies:** PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, MySQL, WebSocket, SMTP, Cloudflare, LAMP

## Project Overview

CareFlow is a web-based healthcare management platform designed to organize outpatient care from patient registration through triage, clinical assessment, treatment, and medical-record access.

The system provides separate workflows for:

* Patients
* Nurses
* Doctors
* System administrators

Patients can manage their information, schedule checkups, and review their medical history.

Nurses handle patient check-in, record vital signs, capture urgency information, and coordinate doctor assignments.

Doctors record diagnoses, laboratory findings, prescriptions, and treatment recommendations.

Administrators manage users, system configuration, healthcare policies, and operational activity.

The platform also supports healthcare-administration workflows such as:

* Health certificates
* Health declarations
* Referral forms

### Business Value

Outpatient care involves several steps that can become fragmented when information is maintained through paper records or disconnected systems.

CareFlow brings those activities into one structured application.

It connects the patient's journey from:

**Registration → Scheduling → Check-In → Triage → Clinical Assessment → Treatment → Medical History**

This gives healthcare personnel a clearer way to coordinate patient encounters while preserving historical clinical information across multiple visits.

---

## The Challenge

An outpatient visit can involve several different people, records, and decisions.

A patient may need to:

* Register personal information
* Schedule a checkup
* Check in for an appointment
* Have vital signs recorded
* Be assessed for urgency
* Be assigned to a doctor
* Receive a diagnosis
* Receive laboratory assessment
* Receive medication instructions
* Receive treatment recommendations
* Return for follow-up care

When these steps are handled separately, patient information can become difficult to track throughout the care journey.

The system needed to connect these workflows while maintaining clear responsibilities between patients, nurses, doctors, and administrators.

Key requirements included:

* Patient identity and profile management
* Healthcare-worker accounts
* Online checkup scheduling
* Patient check-in
* Vital-sign recording
* Urgency information
* Configurable triage criteria
* Doctor assignment
* Diagnosis records
* Laboratory findings
* Prescriptions
* Treatment records
* Medical-history access
* Follow-up information
* Healthcare-document workflows
* Role-based access
* Activity tracking
* Secure session management

The main challenge was creating a system where each stage remained separate enough to manage properly while still belonging to the same patient encounter.

---

## What I Built

I developed a centralized healthcare web application that connected the main stages of outpatient care into one workflow. It helped patients, nurses, doctors, and administrators work from a shared system instead of a collection of disconnected steps.

The platform connected the care journey from registration through follow-up:

```text
Patient Registration
        ↓
Patient Profile
        ↓
Checkup Scheduling
        ↓
Patient Check-In
        ↓
Nurse Triage
        ↓
Doctor Assignment
        ↓
Diagnosis and Treatment
        ↓
Medical Record
        ↓
Follow-Up Care
```

The system also included role-based access, configurable triage policies, activity tracking, and document workflows so care operations remained organized and auditable.

---

## Who Uses the Platform

### Patients

Patients can:

* Maintain personal information
* Manage additional profile information
* Schedule checkups
* Cancel scheduled checkups
* Review medical records
* Manage account credentials
* Review account activity

### Nurses

Nurses support patient intake and care coordination.

Their workflows include:

* Patient check-in
* Vital-sign recording
* Patient information review
* Urgency information
* Doctor assignment
* Doctor reassignment
* Healthcare-document workflows

### Doctors

Doctors manage clinical information for assigned patients.

Their workflows include:

* Reviewing assigned patients
* Recording diagnoses
* Recording laboratory findings
* Creating prescriptions
* Recording treatment recommendations
* Reviewing patient information
* Accessing clinical records

### Administrators

Administrators manage:

* Users
* Patient and healthcare-worker accounts
* Triage policies
* System configuration
* Workflow oversight
* Activity history
* Account administration

---

## My Role

As a Full-Stack Developer, I worked across the application's architecture, backend, frontend, database, clinical workflows, security, communication infrastructure, deployment, and maintenance.

My responsibilities included:

* Requirements analysis
* Application architecture
* Database architecture
* PHP and CodeIgniter development
* Bootstrap interface development
* JavaScript and jQuery development
* MySQL data modeling
* Patient-management workflows
* Healthcare-worker management
* Role-based authentication
* Checkup scheduling
* Patient check-in
* Vital-sign workflows
* Triage-policy configuration
* Urgency management
* Doctor-assignment workflows
* Diagnosis management
* Laboratory management
* Prescription management
* Treatment management
* Medical-record workflows
* Follow-up support
* Health-certificate workflows
* Health-declaration workflows
* Referral-form workflows
* Activity logging
* Session management
* WebSocket integration
* SMTP integration
* LAMP deployment
* Cloudflare configuration
* Testing
* Troubleshooting
* Application maintenance

My work focused on connecting multiple healthcare workflows while preserving clear relationships between the patient, individual encounter, clinical records, and responsible healthcare personnel.

---

## My Key Contributions

### 1. Designed the Patient Encounter Architecture

One of the most important design decisions was structuring the application around the patient's check-in.

Instead of placing all clinical information into one large record, different areas of care are maintained separately while remaining connected to the same encounter.

```text
Patient
   ↓
Check-In
   ├── Vital Signs
   ├── Diagnosis
   ├── Laboratory
   ├── Prescription
   └── Treatment
```

### Why It Mattered

A diagnosis, prescription, laboratory result, and treatment are related, but they are not the same type of information.

Separating them keeps the data organized while the shared check-in record preserves the complete context of the patient's visit.

This architecture also allows the same patient to have multiple encounters over time without overwriting previous clinical information.

---

### 2. Developed Patient Registration and Profile Management

I developed workflows for managing patient identity and profile information.

The platform maintains information including:

* Name
* Address
* Birth date
* Sex and gender
* Contact information
* Disability information
* Pregnancy information
* Employment or professional information
* Government-related identification information represented by the system

Patient information remains connected to clinical activity through the patient's identity.

### Why It Mattered

A centralized patient profile reduces repeated entry of basic information and provides a consistent identity that can be referenced across multiple visits.

---

### 3. Built Patient Self-Service Functionality

I developed patient-facing workflows allowing users to interact directly with the healthcare platform.

Patients can:

* Maintain profile information
* Schedule checkups
* Cancel scheduled checkups
* Review medical records
* Manage account settings
* Review account activity

### Why It Mattered

Patients do not need to depend entirely on administrative personnel for routine account and scheduling activities.

The platform gives them direct access to selected parts of their healthcare journey.

---

### 4. Implemented Online Checkup Scheduling

Patients can schedule and review checkups through their account.

The workflow connects scheduling with the later clinical process:

```text
Patient
   ↓
Checkup Scheduled
   ↓
Visit Created
   ↓
Patient Check-In
   ↓
Nursing Assessment
   ↓
Clinical Workflow
```

Patients can also cancel scheduled visits.

### Why It Mattered

Scheduling is not treated as an isolated calendar function.

It becomes the entry point into the patient's later clinical encounter.

---

### 5. Developed Patient Check-In and Vital-Sign Recording

Each check-in represents one patient encounter.

The system can maintain:

* Temperature
* Blood pressure
* Heart rate
* Respiration
* Height
* Weight
* Urgency
* Check-in status
* Visit date
* Visit time

### Why It Mattered

The check-in provides a central record for the patient's visit.

Clinical information created later can remain associated with the exact encounter in which it occurred.

---

### 6. Implemented Configurable Triage Policies

The application maintains triage-related thresholds separately from individual patient records.

Configurable values include thresholds for:

* Age
* Temperature
* Systolic blood pressure
* Diastolic blood pressure
* Minimum heart rate
* Maximum heart rate

Conceptually:

```text
Patient Vital Signs
        ↓
Configured Triage Thresholds
        ↓
Clinical Assessment
        ↓
Urgency / Patient Prioritization
```

### Why It Mattered

Clinical threshold values are not permanently embedded inside individual patient records or interface logic.

They can be managed separately as policy information, providing a more configurable foundation for triage-related workflows.

---

### 7. Built the Nurse Triage Workflow

Nurses act as the bridge between patient check-in and doctor-managed clinical activities.

The nursing workflow includes:

* Reviewing patient information
* Recording vital signs
* Recording urgency information
* Assigning doctors
* Changing doctor assignments when necessary

Doctors can be assigned separately for:

* Diagnosis
* Laboratory assessment
* Prescription
* Treatment

### Why It Mattered

The system does not assume that one doctor must handle every part of an encounter.

Clinical responsibilities can be assigned independently, giving the workflow more flexibility when different healthcare personnel need to handle different stages.

---

### 8. Developed Structured Diagnosis Management

Diagnosis information is stored separately from the patient check-in.

Each diagnosis remains connected to:

* The patient encounter
* Diagnosis information
* The responsible doctor
* The date
* Record status

### Why It Mattered

Separating diagnosis data keeps the clinical structure clear while maintaining traceability back to the original encounter.

---

### 9. Developed Laboratory Management

Laboratory information is maintained as its own clinical domain.

Laboratory records remain associated with:

* Patient check-in
* Laboratory findings
* Responsible doctor
* Date
* Record status

### Why It Mattered

Laboratory findings stay connected to the patient encounter without being mixed directly into diagnosis or treatment data.

---

### 10. Implemented Prescription Management

Doctors can maintain prescriptions for specific patient encounters.

Prescription information can include:

* Medication instructions
* Dosage or quantity
* Frequency
* Responsible doctor
* Prescription date
* Follow-up information

The workflow can follow:

```text
Patient Check-In
      ↓
Doctor Assessment
      ↓
Diagnosis / Laboratory Information
      ↓
Prescription
      ↓
Medication Instructions
      ↓
Optional Follow-Up
```

### Why It Mattered

Medication information remains traceable to the visit and healthcare professional responsible for it.

---

### 11. Implemented Treatment Management

Treatment recommendations are stored separately from diagnosis, laboratory, and prescription data.

Treatment records remain connected to:

* Patient check-in
* Treatment instructions
* Responsible doctor
* Date
* Record status

### Why It Mattered

This preserves separation between different types of clinical information while keeping them connected through the same patient encounter.

---

### 12. Built Longitudinal Medical Records

The platform allows multiple check-ins to remain associated with the same patient.

A patient's history can therefore bring together:

```text
Patient Profile
     ↓
Check-In History
     ├── Vital Signs
     ├── Diagnosis
     ├── Laboratory
     ├── Prescription
     └── Treatment
```

### Why It Mattered

Previous healthcare information is preserved rather than being replaced by the patient's latest visit.

This creates a longitudinal view of the patient's history across multiple encounters.

---

### 13. Supported Follow-Up Care

Prescription information includes dedicated follow-up data.

Combined with scheduling functionality, this provides a foundation for patients returning for additional assessment after an encounter.

### Why It Mattered

The patient journey does not necessarily end after the first treatment decision.

The system can preserve information indicating whether additional care may be required.

---

### 14. Developed Healthcare-Document Workflows

The platform includes workflows for:

* Health certificates
* Health declarations
* Referral forms

These extend the application beyond direct clinical treatment into healthcare-administration activities.

### Why It Mattered

Healthcare systems often need to support documents associated with employment, education, travel, referrals, or other administrative needs.

These workflows allow those activities to remain within the same healthcare application.

---

### 15. Implemented Role-Based Identity Management

The platform supports separate identities for:

* Administrators
* Doctors
* Nurses
* Patients

Authentication accounts are linked to role-specific profile identities.

### Why It Mattered

The same authentication framework can support different healthcare roles without forcing all users into the same profile structure.

It also makes it possible to restrict functionality according to each user's responsibilities.

---

### 16. Implemented Security and Session Management

I implemented authentication and server-side session-management workflows using CodeIgniter.

The platform includes:

* Password hashing
* PIN-based account information
* Account status
* Role-based access
* Server-side session persistence
* Session IP information

### Why It Mattered

Healthcare workflows require authenticated access and clear separation between user roles.

The platform's account and session architecture provides the foundation for controlling access across patient, clinical, and administrative workflows.

---

### 17. Added Operational Activity Logging

I implemented extensive activity logging across clinical and administrative actions.

Tracked activities include:

* Login and logout
* Dashboard access
* Patient-page access
* Checkup scheduling
* Checkup cancellation
* Vital-sign entry
* Doctor assignment
* Doctor reassignment
* Diagnosis entry
* Laboratory entry
* Prescription entry
* Treatment entry
* Medical-record access
* Account updates
* Healthcare-document workflows
* User management

### Why It Mattered

Activity history improves:

* Operational monitoring
* Troubleshooting
* Administrative oversight
* Workflow traceability

It provides a historical view of how important patient and administrative workflows were used.

---

### 18. Integrated Communication Infrastructure

WebSocket and SMTP technologies were included in the application's technology stack.

WebSocket provided real-time communication capability, while SMTP supported application email delivery infrastructure.

### Why It Mattered

These technologies provided a foundation for application communication requirements alongside the traditional PHP-based web architecture.

Specific real-time events and email-notification workflows are not documented in the available source, so these are presented as infrastructure capabilities rather than specific product features.

---

### 19. Deployed and Maintained the Application

I deployed the application using a LAMP environment consisting of:

* Linux
* Apache
* MySQL
* PHP

Cloudflare was also used as part of the public-facing delivery infrastructure.

My responsibilities included:

* Deployment
* Configuration
* Testing
* Troubleshooting
* Ongoing maintenance

---

## Technical Approach

For technical readers, the platform is structured around role-specific workflows and a shared patient-encounter model.

### Patient Encounter Model

The check-in acts as the central reference for clinical data.

Diagnosis, laboratory, prescription, and treatment information remain separate but share the same encounter.

### Relational Data Model

MySQL maintains structured relationships between:

* Patient identities
* Check-ins
* Vital signs
* Diagnoses
* Laboratory records
* Prescriptions
* Treatments
* Healthcare personnel
* User accounts
* Sessions
* Activity records

### Triage Configuration

Triage thresholds are stored separately from patient measurements, providing configurable policy data.

### Role-Based Access

Administrators, doctors, nurses, and patients have separate identities and workflows.

### Backend

PHP and CodeIgniter provide application logic, authentication, workflow processing, and relational data access.

### Frontend

Bootstrap, JavaScript, and jQuery provide the browser-based patient, clinical, and administrative interfaces.

### Communication Infrastructure

WebSocket and SMTP were integrated as communication technologies within the application stack.

### Infrastructure

The application was deployed using a LAMP environment with Cloudflare supporting the external delivery layer.

---

## Key Results

The platform created a centralized outpatient-care workflow connecting patient self-service, nursing assessment, clinical records, and healthcare administration.

Key outcomes included:

* Digitized patient registration and profile management
* Implemented role-based access for patients, nurses, doctors, and administrators
* Added online checkup scheduling
* Implemented patient check-in
* Digitized vital-sign recording
* Added urgency information to patient encounters
* Created configurable triage-policy thresholds
* Implemented nurse-to-doctor assignment workflows
* Supported doctor reassignment
* Digitized diagnosis records
* Digitized laboratory findings
* Digitized prescription management
* Digitized treatment recommendations
* Created longitudinal patient medical records
* Supported follow-up information
* Added patient self-service functionality
* Added health-certificate workflows
* Added health-declaration workflows
* Added referral-form workflows
* Implemented system-user administration
* Added extensive operational activity logging
* Implemented server-side session management
* Integrated WebSocket communication infrastructure
* Integrated SMTP email infrastructure
* Deployed the system using a LAMP environment
* Integrated Cloudflare into the web-delivery infrastructure

---

## Skills Demonstrated

**HealthTech**
Patient triage, outpatient workflows, healthcare records, checkup scheduling, clinical documentation, and patient self-service

**Healthcare Workflow Engineering**
Patient intake, nursing assessment, doctor assignment, diagnosis, laboratory workflows, prescription management, treatment, follow-up care, and referrals

**Full-Stack Development**
PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, MySQL, and browser-based application development

**Database Architecture**
Patient identities, encounter modeling, clinical-data separation, longitudinal records, healthcare-worker relationships, and user-account architecture

**Triage Systems**
Vital-sign capture, urgency information, configurable thresholds, and patient-prioritization workflows

**Security and Access**
Password hashing, role-based identities, account status, PIN information, and server-side session management

**Auditability**
Clinical activity logging, workflow tracking, account activity, troubleshooting support, and administrative oversight

**Real-Time and Email Infrastructure**
WebSocket integration and SMTP-based application communication infrastructure

**Infrastructure**
Linux, Apache, MySQL, PHP, Cloudflare, LAMP deployment, testing, troubleshooting, and application maintenance
