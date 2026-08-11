# CareFlow: Online Triage and Patient Care Management System

**Industry:** Healthcare / HealthTech
**Role:** Full-Stack Developer
**Project Type:** Patient Triage, Medical Records, Checkup Scheduling, and Clinical Workflow Management Platform
**Primary Technologies:** PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, MySQL, WebSocket, SMTP, Cloudflare, LAMP

## Project Overview

This project is a web-based healthcare management platform designed to digitize outpatient patient registration, checkup scheduling, triage, vital-sign assessment, doctor assignment, diagnosis, laboratory results, prescriptions, treatments, and medical-record management.

The system provides separate workflows for patients, nurses, doctors, and system administrators.

Patients can maintain their profile, schedule medical checkups, review medical records, and manage their account.

Nurses support the triage process by recording patient vital signs, assessing check-in information, and coordinating assignment of patients to doctors for different clinical activities.

Doctors can manage assigned patients and record clinical information including diagnoses, laboratory findings, prescriptions, and treatments.

Administrators manage system users, healthcare workflows, policies, and operational activity.

The platform also supports healthcare-document workflows including:

* Health certificates
* Health declarations
* Referral forms

**Business Value:** The system centralizes outpatient healthcare workflows from patient registration and scheduling through triage, clinical assessment, treatment, and historical medical-record access. This reduces fragmented record keeping and provides healthcare personnel with a structured workflow for managing patient encounters.

---

# The Challenge

Traditional outpatient workflows often involve multiple disconnected steps.

A patient may need to:

* Register personal information
* Schedule a checkup
* Wait for assessment
* Provide medical information
* Have vital signs recorded
* Be evaluated by a healthcare professional
* Receive laboratory requests
* Receive a diagnosis
* Obtain medication instructions
* Receive treatment recommendations
* Return for follow-up care

When these processes rely heavily on paper records or independent systems, information can become difficult to track throughout the patient's care journey.

The system needed to connect several healthcare workflows within one application while maintaining clear responsibilities between patients, nurses, doctors, and administrators.

Key challenges included:

* Managing patient identities and profiles
* Maintaining healthcare-worker accounts
* Scheduling patient checkups
* Recording vital signs consistently
* Supporting patient-priority or urgency information
* Assigning healthcare providers to patients
* Maintaining diagnoses
* Recording laboratory findings
* Managing prescriptions
* Recording treatments
* Maintaining historical medical records
* Supporting follow-up care
* Issuing healthcare documents
* Maintaining configurable triage thresholds
* Tracking user and clinical activity
* Providing secure role-specific application access

---

# The Solution

I developed a centralized healthcare web application using PHP and CodeIgniter backed by a MySQL relational database.

The system connected the patient journey from scheduling to treatment through structured application modules.

The solution included:

* Patient registration and profile management
* Role-based user management
* Checkup scheduling
* Patient check-in
* Vital-sign recording
* Urgency classification
* Configurable triage policies
* Doctor assignment
* Diagnosis management
* Laboratory-result management
* Prescription management
* Treatment management
* Medical-record history
* Follow-up information
* Healthcare-document workflows
* Activity logging
* Session management

Bootstrap, JavaScript, and jQuery were used to build the browser-based interface.

WebSocket technology formed part of the application's real-time communication stack, while SMTP was included for application email delivery.

The system was deployed using a LAMP environment with Cloudflare supporting the web-delivery layer.

---

# Patient Care Workflow

```text id="l8d8wd"
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
Vital Signs Recorded
        ↓
Urgency Assessment
        ↓
Doctor Assignment
        ↓
Diagnosis
        ↓
Laboratory Assessment
        ↓
Prescription
        ↓
Treatment
        ↓
Medical Record
        ↓
Follow-Up Care
```

---

# User Roles

The platform supports four primary application roles.

## Administrator

Responsible for system administration and healthcare-platform oversight.

Administrative functionality includes:

* System-user management
* Patient and healthcare-worker account management
* Triage-policy configuration
* Clinical-workflow monitoring
* User activity review
* Account configuration
* Medical-workflow oversight

---

## Doctor

Doctors handle the clinical assessment stages of patient encounters.

Doctor workflows include:

* Reviewing assigned patients
* Recording diagnoses
* Recording laboratory findings
* Providing prescriptions
* Recording treatment recommendations
* Reviewing patient information
* Accessing patient-related clinical records

---

## Nurse

Nurses support patient intake and triage operations.

Nursing workflows include:

* Managing patient check-in
* Recording vital signs
* Reviewing patient information
* Assigning doctors for diagnosis
* Assigning doctors for laboratory assessment
* Assigning doctors for prescriptions
* Assigning doctors for treatment
* Supporting healthcare-document workflows

---

## Patient

Patients have access to self-service healthcare functionality.

Patient workflows include:

* Maintaining basic information
* Maintaining additional personal information
* Viewing medical records
* Scheduling checkups
* Canceling scheduled checkups
* Reviewing account activity
* Updating account credentials

---

# Patient Profile Management

The platform maintains detailed personal and healthcare-related profile information.

Profile records support information such as:

* First name
* Middle name
* Last name
* Prefix and suffix
* House number
* Street
* Barangay
* Town
* Province
* ZIP code
* Birth date
* Sex
* Gender
* Contact number
* Email address
* Disability information
* Pregnancy information
* Employment or professional position
* SSS information
* PhilHealth information
* GSIS information
* Pag-IBIG information

This provides a centralized profile that can be linked to the patient's clinical activity.

The profile structure is shared across application identities while allowing role-specific information to be maintained.

---

# Role-Based Identity Management

Authentication and profile information are separated using unique system identities.

Examples of identity classifications represented by the architecture include:

```text id="e9uf4m"
Administrator
   └── Admin Identity

Doctor
   └── Doctor Identity

Nurse
   └── Nurse Identity

Patient
   └── Patient Identity
```

Each account maintains:

* User ID
* Username
* Password
* PIN code
* User type
* Linked identity
* Account status
* Account timestamp

Separating authentication from profile information makes it possible to use a consistent account model across different healthcare roles.

---

# Checkup Scheduling

Patients can schedule checkups through their account.

The patient workflow includes a dedicated **Checkup Schedule** section.

Users can:

* Schedule a new checkup
* Review scheduled checkups
* Cancel an existing checkup

Scheduled visits then become part of the clinical workflow used by nursing and medical personnel.

### Scheduling Workflow

```text id="yo21cg"
Patient
   ↓
Checkup Schedule
   ↓
Visit Created
   ↓
Patient Check-In
   ↓
Nursing Assessment
   ↓
Clinical Workflow
```

---

# Patient Check-In

The check-in model represents an individual patient encounter.

Each check-in is associated with a patient identity and can maintain:

* Temperature
* Blood pressure
* Heart rate
* Respiration
* Height
* Weight
* Urgency
* Check-in status
* Date
* Time of entry
* Disabled/canceled state

This creates a single encounter record that can be referenced throughout the subsequent clinical workflow.

---

# Vital-Sign Management

Vital signs are recorded as part of the patient-triage process.

The system maintains measurements for:

### Temperature

Used to record the patient's body temperature.

### Blood Pressure

Used to maintain blood-pressure information associated with the visit.

### Heart Rate

Used to maintain the patient's pulse or heart-rate measurement.

### Respiration

Used to record respiratory information.

### Height

Maintained as part of the patient's assessment.

### Weight

Maintained alongside other vital information.

### Urgency

Each check-in also contains an urgency value, allowing the patient encounter to carry prioritization information.

---

# Configurable Triage Policy

The system maintains a dedicated triage-policy configuration.

Policy settings include thresholds for:

* Age
* Temperature
* Systolic blood pressure
* Diastolic blood pressure
* Minimum heart rate
* Maximum heart rate

This separates configurable health thresholds from individual patient records.

```text id="3g6p5i"
Patient Vital Signs
        ↓
Configured Triage Thresholds
        ↓
Clinical Assessment
        ↓
Urgency / Patient Prioritization
```

This architecture makes triage criteria configurable rather than permanently embedding all threshold values inside application screens.

---

# Nurse Triage Workflow

The nursing workflow forms the bridge between patient check-in and doctor assessment.

A nurse can record the patient's vital signs and then coordinate doctor assignments for different areas of care.

The application records workflows for assigning or changing a doctor for:

* Diagnosis
* Laboratory
* Prescription
* Treatment

### Nursing Workflow

```text id="nhpk92"
Patient Checks In
       ↓
Nurse Reviews Patient
       ↓
Vital Signs Recorded
       ↓
Urgency Information Recorded
       ↓
Doctor Assigned
       ↓
Diagnosis Assignment
       ↓
Laboratory Assignment
       ↓
Prescription Assignment
       ↓
Treatment Assignment
```

This allows patient routing and clinical responsibilities to be managed through the application.

---

# Doctor Assignment

The application supports assigning doctors to specific clinical tasks.

A doctor can be assigned to a patient for:

* Diagnosis
* Laboratory assessment
* Prescription
* Treatment

The nursing workflow also supports changing the assigned doctor.

This provides flexibility when clinical assignments need to change during a patient's encounter.

---

# Diagnosis Management

The system maintains diagnoses separately from patient check-in records.

Each diagnosis is associated with:

* Patient check-in
* Diagnosis information
* Doctor
* Date
* Record status

Separating diagnosis data from the check-in record allows clinical information to remain structured around the individual patient encounter.

### Clinical Relationship

```text id="xgzjzm"
Patient
  ↓
Check-In
  ↓
Diagnosis
  ↓
Responsible Doctor
```

This also provides a basis for building longitudinal medical records from multiple patient visits.

---

# Laboratory Management

Laboratory information is maintained as a separate clinical domain.

Each laboratory record contains:

* Patient check-in
* Laboratory information or findings
* Responsible doctor
* Date
* Record status

This allows laboratory-related information to remain connected to the corresponding patient encounter without mixing it directly into diagnosis or treatment data.

---

# Prescription Management

Doctors can maintain prescription information for individual patient encounters.

A prescription can contain:

* Medication instructions
* Dosage or quantity information
* Frequency
* Responsible doctor
* Prescription date
* Follow-up information

Prescriptions remain associated with the patient check-in record.

### Prescription Workflow

```text id="xrw596"
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

---

# Treatment Management

Treatment recommendations are also maintained independently.

Treatment records contain:

* Patient check-in
* Treatment instructions
* Responsible doctor
* Date
* Record status

This separates treatment planning from diagnoses and medication prescriptions while maintaining their connection through the patient's check-in encounter.

---

# Medical Record Management

Patients have access to a dedicated Medical Record section.

The database architecture makes it possible to reconstruct a patient's encounter history through check-in-linked clinical information.

A medical record can bring together:

```text id="s5qgwt"
Patient Profile
     ↓
Check-In History
     ├── Vital Signs
     ├── Diagnosis
     ├── Laboratory
     ├── Prescription
     └── Treatment
```

This provides a longitudinal view of the patient's previous healthcare encounters.

---

# Follow-Up Care

Prescription records contain dedicated follow-up information.

This provides a foundation for recording whether additional patient care is required after an encounter.

Combined with checkup scheduling, this enables a workflow where patients can return for subsequent healthcare assessment.

---

# Health Certificate Workflow

The system includes functionality for issuing health certificates.

Nursing and administrative activity records show dedicated access to an **Issuance of Health Certificate** workflow.

This extends the platform beyond clinical records by supporting healthcare documents that may be needed for employment, education, travel, or other administrative purposes.

The database does not store a dedicated health-certificate table in this dump, so the portfolio description should describe this as an application workflow rather than claiming a specific certificate-storage architecture.

---

# Health Declaration Workflow

The application also contains an **Issuance of Health Declaration** workflow.

This provides healthcare personnel with another patient-document function alongside clinical assessment and medical-record management.

---

# Referral Form Workflow

Healthcare personnel can access a dedicated **Issuance of Referral Form** workflow.

This supports situations where a patient may need to be referred for additional evaluation or services.

### Extended Patient Workflow

```text id="me56x2"
Patient Assessment
      ↓
Clinical Decision
      ↓
Continue Internal Treatment
          or
Issue Referral Form
          or
Issue Health Certificate
          or
Issue Health Declaration
```

---

# System User Management

Administrators have access to dedicated system-user management functionality.

The account architecture supports:

* Administrators
* Doctors
* Nurses
* Patients

Account management includes:

* User creation
* Account status
* Username
* Password
* PIN
* Linked profile identity
* User type

This provides role-specific application access using one centralized authentication model.

---

# Account Security

Passwords stored in the user database are represented using password hashes rather than readable plain-text passwords.

The platform also maintains account:

* PIN codes
* Activation status
* Role information
* Session information

CodeIgniter session records are persisted in the database and include client IP-address information.

---

# Session Management

The platform uses server-side CodeIgniter session storage.

Session records include:

* Session identifier
* IP address
* Session timestamp
* Serialized session data

This supports authenticated sessions across the role-based web application.

---

# Email Communication

SMTP formed part of the project's technology stack for application email delivery.

The underlying profile model contains user email addresses, while the authentication model supports account status and PIN-based account information.

The SQL dump alone does not establish every specific email workflow, so the portfolio should describe SMTP as part of the application's communication infrastructure without claiming unsupported notification types.

---

# Real-Time Communication

WebSocket technology was also included in the project's application stack.

It provided a real-time communication capability alongside the traditional PHP/CodeIgniter application.

Because the database does not contain a dedicated chat or WebSocket-event table, the portfolio should avoid claiming a specific real-time feature unless additional source code or documentation is available.

---

# Activity Logging

The application maintains extensive activity logs for both clinical and administrative operations.

Logged events include:

* User login
* User logout
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
* Health-certificate workflow access
* Health-declaration workflow access
* Referral-form workflow access
* System-user management

This provides operational traceability across the major application workflows.

---

# My Role

As a full-stack developer, I worked across application architecture, backend development, frontend development, database design, healthcare workflow implementation, security, communication infrastructure, and deployment.

My responsibilities included:

* Requirements analysis
* Application architecture
* Database architecture
* PHP development
* CodeIgniter development
* Bootstrap interface development
* JavaScript development
* jQuery integration
* MySQL data modeling
* Patient-management workflows
* Healthcare-worker user management
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
* Follow-up workflow support
* Health-certificate workflows
* Health-declaration workflows
* Referral-form workflows
* Activity logging
* Session management
* WebSocket integration
* SMTP integration
* Cloudflare configuration
* LAMP deployment
* Testing
* Troubleshooting
* Application maintenance

---

# My Contributions

## Full-Stack Healthcare Application Development

Developed the major application workflows used by patients and healthcare personnel.

The platform included modules for:

* Patients
* Doctors
* Nurses
* System administrators
* Checkups
* Vital signs
* Diagnosis
* Laboratory
* Prescription
* Treatment
* Medical records
* Healthcare documents
* Policies
* User administration
* Activity history

The application connected these areas through shared patient identities and check-in records.

---

## Patient Encounter Architecture

Designed the core patient-encounter model around the check-in record.

Instead of storing all clinical information in one large record, the application separates different stages of care.

```text id="iqlu30"
Patient
   ↓
Check-In
   ├── Vital Signs
   ├── Diagnosis
   ├── Laboratory
   ├── Prescription
   └── Treatment
```

This architecture provides clearer separation between clinical domains while preserving their common relationship to the patient encounter.

---

## Triage and Vital-Sign Workflow

Implemented patient-intake functionality for capturing vital measurements and urgency information.

The workflow supported:

* Temperature
* Blood pressure
* Heart rate
* Respiration
* Height
* Weight
* Urgency

The application also maintained configurable threshold values separately through its policy model.

---

## Healthcare Workflow Coordination

Developed workflows enabling nurses to assign doctors to patients for different clinical responsibilities.

Assignments covered:

* Diagnosis
* Laboratory
* Prescription
* Treatment

The system also allowed healthcare personnel to change assignments when required.

This provided more flexibility than assigning one doctor globally to an entire patient record.

---

## Clinical Record Management

Developed structured workflows for recording:

* Diagnoses
* Laboratory findings
* Prescriptions
* Treatments

Each clinical record remains linked to the patient check-in and responsible doctor.

This provides traceability from the original encounter through the resulting healthcare decisions.

---

## Patient Self-Service Portal

Developed patient-facing functionality supporting:

* Profile management
* Additional-information management
* Checkup scheduling
* Schedule cancellation
* Medical-record access
* Account settings
* Activity-history access

This allowed patients to interact directly with the healthcare platform rather than relying exclusively on administrative personnel.

---

## Healthcare Document Workflows

Implemented application workflows supporting:

* Health certificates
* Health declarations
* Referral forms

These features extended the system beyond triage and treatment into broader healthcare-administration workflows.

---

## User and Access Management

Implemented role-based user management for administrators, doctors, nurses, and patients.

Authentication accounts were linked to separate profile identities, providing a reusable identity architecture across all user types.

---

## Security and Session Management

Implemented authentication and session-management workflows using CodeIgniter and server-side session persistence.

The platform supported:

* Password hashing
* PIN-based account information
* Account status
* Role-specific access
* Server-side session storage
* Session IP information

---

## Operational Activity Tracking

Developed activity logging around important healthcare and user operations.

This provided a historical view of how the application was being used and helped with:

* Operational monitoring
* Troubleshooting
* Administrative oversight
* Workflow traceability

---

## Communication Infrastructure

Integrated WebSocket and SMTP technologies into the application stack.

WebSocket provided real-time communication capabilities, while SMTP supported email delivery requirements.

The specific event and email workflows are not represented in the available SQL dump, so these are best presented as infrastructure capabilities rather than database-backed feature claims.

---

## LAMP Deployment

Deployed the PHP and CodeIgniter application using a LAMP environment.

The deployment stack included:

* Linux
* Apache
* MySQL
* PHP

Cloudflare was used as part of the public-facing delivery infrastructure.

---

# Technical Highlights

## Structured Patient Encounter Model

Diagnosis, laboratory, prescription, and treatment data are separated into their own records while remaining connected to a shared patient check-in.

---

## Role-Specific Clinical Workflows

Patients, nurses, doctors, and administrators use different parts of the system according to their responsibilities.

---

## Configurable Triage Policy

Health thresholds are stored separately from patient measurements, creating a configurable basis for triage-related rules.

---

## Nurse-to-Doctor Handoff

The system supports explicit handoff from nursing assessment to doctor-managed clinical workflows.

---

## Multi-Stage Clinical Documentation

The patient journey can progress through:

**Vitals → Diagnosis → Laboratory → Prescription → Treatment**

while maintaining each stage as a separate data domain.

---

## Longitudinal Medical Records

Multiple check-ins can be associated with the same patient identity, creating a history of encounters rather than overwriting the patient's previous clinical information.

---

## Healthcare Document Support

Health certificates, health declarations, and referral forms are integrated into the healthcare workflow.

---

## Activity Traceability

Major patient, clinical, account, and administrative operations are recorded through the application activity log.

---

## Secure Authentication Architecture

Password hashes, account statuses, role identities, and CodeIgniter sessions provide the foundation for authenticated role-based access.

---

# Key Results

* Digitized patient registration and profile management
* Implemented role-based access for administrators, doctors, nurses, and patients
* Created online checkup-scheduling workflows
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
* Implemented patient self-service functionality
* Added health-certificate workflows
* Added health-declaration workflows
* Added referral-form workflows
* Implemented system-user management
* Added extensive operational activity logging
* Implemented server-side CodeIgniter sessions
* Integrated WebSocket technology
* Integrated SMTP email infrastructure
* Deployed the system using a LAMP environment
* Integrated Cloudflare into the web-delivery infrastructure

---

# Skills Demonstrated

**HealthTech:** Patient triage, outpatient workflows, healthcare records, checkup scheduling, clinical documentation, and patient self-service

**Full-Stack Development:** PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, and MySQL

**Healthcare Workflow Engineering:** Patient intake, nursing assessment, doctor assignment, diagnosis, laboratory, prescription, treatment, and referrals

**Database Architecture:** Patient identities, check-in records, clinical data separation, medical-history relationships, and user-account modeling

**Triage Systems:** Vital-sign capture, urgency information, configurable thresholds, and clinical-assessment workflows

**Backend Development:** CodeIgniter, PHP, authentication, sessions, role management, clinical workflows, and relational data access

**Frontend Development:** Bootstrap, JavaScript, jQuery, patient portals, clinical dashboards, and administrative interfaces

**Security:** Password hashing, role-based identities, account states, PINs, and server-side session management

**Real-Time Systems:** WebSocket integration and real-time communication infrastructure

**Email Infrastructure:** SMTP integration and application email-delivery capability

**Auditability:** Activity logging, patient-workflow tracking, account activity, and administrative oversight

**Infrastructure:** LAMP, Linux, Apache, MySQL, PHP, Cloudflare, and web application deployment
