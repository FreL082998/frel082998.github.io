# MLM Membership and Binary Genealogy Management Platform

**Industry:** Direct Selling / Membership Management
**Role:** Full-Stack Developer
**Project Type:** Membership, Binary Genealogy, Bonus, Payout, and Administration Platform
**Primary Technologies:** PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, MySQL, Cloudflare, LAMP

## Project Overview

This is a web-based membership and network-management platform designed to manage members, multiple membership accounts, binary network structures, activation codes, bonuses, payouts, notifications, and administrative operations.

In this type of membership model, a member can own multiple network accounts. Each account can be positioned beneath another account on either the left or right side, creating a continuously expanding hierarchy.

The platform provides separate experiences for members and administrators.

### Members can:

* Manage their membership information
* Maintain multiple network accounts
* View their binary genealogy
* Request activation or account codes
* Monitor pairing activity
* Track bonuses
* Submit payout requests
* Receive workflow notifications

### Administrators can:

* Manage members and accounts
* Approve code requests
* Monitor the network structure
* Manage account placement
* Review qualifying pairs
* Process payout requests
* Review notifications
* Monitor system activity

The platform supports two network classifications:

* **Tiger**
* **Eagle**

Both use the same general left/right network structure while maintaining their own accounts, pairing records, bonus values, and payout-related information.

### Business Value

Binary membership networks become difficult to manage manually as the number of members and accounts grows.

The platform centralizes the complete workflow from membership creation through network placement, pairing, bonuses, payout processing, and administrative oversight.

At a high level:

```text
Member Registration
        ↓
Activation / Membership Code
        ↓
Network Account Created
        ↓
Tiger or Eagle Network
        ↓
Left / Right Placement
        ↓
Network Expansion
        ↓
Qualified Pair
        ↓
Bonus Recorded
        ↓
Payout Request
        ↓
Administrator Approval
        ↓
Payout Recorded
        ↓
Member Notification
```

---

## The Challenge

The application needed to manage more than a simple list of members.

A single person could own several network accounts, and each account could occupy a different position within a growing binary hierarchy.

As the network expanded, the system needed to keep track of:

* Which accounts belonged to each member
* Where each account was positioned
* Parent and child relationships
* Left and right branches
* Qualified account pairs
* Bonus history
* Different network types
* Membership and activation codes
* Code requests and approvals
* Member payout requests
* Completed payouts
* Member notifications
* Administrative activity

The challenge was keeping these relationships accurate while giving members and administrators interfaces that were still understandable and manageable.

The system also needed to keep the network structure separate from financial events so historical bonus and payout information would remain traceable as the genealogy continued to grow.

---

## What I Built

I developed a centralized web application using PHP, CodeIgniter, and MySQL.

The system combines:

* Member management
* Multiple network accounts
* Binary genealogy
* Left/right account placement
* Tiger and Eagle network structures
* Pair qualification
* Bonus tracking
* Activation-code management
* Code-request approvals
* Payout requests
* Payout processing
* Member notifications
* Administrative dashboards
* User-activity logging

Bootstrap, JavaScript, and jQuery were used for the browser-based interface.

The application was deployed using a LAMP environment, with Cloudflare supporting its external delivery layer.

---

## Who Uses the Platform

The platform supports two primary user groups.

### Members

Members can:

* Access their dashboard
* View their network accounts
* Explore their binary genealogy
* Request activation codes
* Submit payout requests
* Review notifications
* Monitor account-related activities

### Administrators

Administrators can:

* Manage users and members
* Create and monitor accounts
* Review binary genealogy
* Position accounts within the network
* Review pair activity
* Approve code requests
* Process payouts
* Manage notifications
* Review system activity

---

## My Role

As a full-stack developer, I worked across the application's architecture, backend, frontend, database design, business rules, deployment, and maintenance.

My responsibilities included:

* Requirements analysis
* Database architecture
* PHP and CodeIgniter development
* Frontend development
* MySQL data modeling
* Authentication
* Member management
* Multiple-account support
* Binary-tree implementation
* Genealogy visualization
* Tiger and Eagle workflows
* Account placement
* Pairing logic
* Bonus tracking
* Activation-code generation
* Code-request workflows
* Payout workflows
* Notifications
* Activity logging
* LAMP deployment
* Cloudflare configuration
* Testing
* Troubleshooting
* Application maintenance

My work focused particularly on representing a complex and continuously growing network structure while keeping membership, compensation, and administrative workflows clearly separated.

---

## My Key Contributions

### 1. Designed the Binary Genealogy Architecture

The core technical challenge was representing a network where every account could have two additional accounts beneath it:

* One on the left
* One on the right

Those child accounts could then have their own left and right children, allowing the network to continue growing without a fixed depth.

Conceptually:

```text
                  Account
                 /       \
              Left       Right
             /   \       /   \
           L1    L2    R1    R2
          / \    / \   / \    / \
         ...    ...   ...     ...
```

I developed the data and application architecture used to maintain these recursive relationships.

### Why It Mattered

The platform needed to support networks that could grow continuously rather than being limited to a predefined number of levels.

The recursive account structure allowed the genealogy to expand dynamically while preserving parent, left-child, and right-child relationships.

---

### 2. Separated Member Identity from Network Accounts

One of the most important architectural decisions was treating the person and their network position as separate entities.

Instead of:

```text
One Member = One Network Position
```

the platform supports:

```text
Member
  ├── Network Account 1
  ├── Network Account 2
  ├── Network Account 3
  └── Additional Accounts
```

Each account maintains its own position within the genealogy.

### Why It Mattered

A member could participate in the network through multiple accounts without requiring a separate user profile for every position.

This gave the system much more flexibility while keeping personal membership information centralized.

---

### 3. Built Left and Right Account Placement

New accounts could be positioned beneath existing accounts on either the left or right side.

The placement process maintains the relationship between:

* Parent account
* Left child
* Right child

This allows the overall genealogy to grow over time as new accounts are introduced.

### Why It Mattered

Account placement was an active business workflow, not simply a visual representation.

The system needed to preserve the exact location of each account so genealogy, pairing, and downstream bonus activity could be processed correctly.

---

### 4. Supported Multiple Network Plans

The platform supports two network classifications:

* Tiger
* Eagle

Each maintains its own:

* Activation codes
* Accounts
* Binary placements
* Pair records
* Bonus information
* Payout classifications

The overall genealogy concept is similar across the two networks, while plan-specific information is maintained independently.

### Why It Mattered

The application could support more than one membership or compensation structure without mixing their account and bonus histories.

---

### 5. Separated Genealogy from Bonus History

The network structure and compensation records were deliberately modeled separately.

The genealogy represents where accounts currently sit within the network.

Pair records represent historical events where qualifying left and right accounts generated a bonus.

The relationship is:

```text
Network Structure
        ↓
Qualifying Left + Right Accounts
        ↓
Pair Event
        ↓
Bonus Recorded
```

### Why It Mattered

If compensation history were stored only as part of the current network structure, historical information could become difficult to preserve as the genealogy changed.

Keeping pair records separate allowed the system to maintain a history of bonus-generating events while the network continued to expand.

---

### 6. Implemented Pairing and Bonus Workflows

The platform records eligible left/right account pairs.

A qualifying pair links:

* The parent account
* The qualifying left account
* The qualifying right account
* The associated bonus

Conceptually:

```text
Parent Account
      ↓
Left Account + Right Account
      ↓
Pair Qualification
      ↓
Pair Record
      ↓
Bonus Recorded
```

Tiger and Eagle pair information is maintained independently.

### Why It Mattered

The system could track not only who was connected in the network, but also which specific account combinations resulted in compensation.

---

### 7. Built Activation-Code and Approval Workflows

The platform uses generated codes as part of membership and additional-account creation.

Members can request codes by specifying:

* Network type
* Requested quantity

Administrators can then review the request before generating the corresponding codes.

The workflow follows:

```text
Member Requests Code
        ↓
Request Recorded
        ↓
Administrator Reviews Request
        ↓
Request Approved
        ↓
Codes Generated
        ↓
Member Can Use Code
```

### Why It Mattered

Code issuance was controlled through an approval process rather than allowing accounts to be created without administrative oversight.

The system also kept requests separate from generated codes, making it easier to track what was requested, what was approved, and what was ultimately created.

---

### 8. Developed the Payout Workflow

Members can submit payout requests through the platform.

The system separates:

* Payout requests
* Approval status
* Completed payout transactions
* Member notifications

The workflow follows:

```text
Member Earnings
      ↓
Payout Request
      ↓
Administrator Review
      ↓
Approved / Processed
      ↓
Payout Record Created
      ↓
Member Notification
```

### Why It Mattered

Keeping payout requests separate from completed transactions provides clearer traceability between what a member requested and what was actually processed.

---

### 9. Implemented Member Notifications

I developed notifications for important workflow events.

Examples include:

* New payout requests
* Approved payouts
* Code requests
* Payout receipt

Notifications maintain read/unread status so important updates remain visible until users review them.

### Why It Mattered

Members and administrators could see when important account or financial workflows changed state without relying entirely on external communication.

---

### 10. Built Administrative Management Interfaces

I developed administrative interfaces for managing the platform's operational workflows.

Administrators could manage:

* Members
* Accounts
* Activation codes
* Code requests
* Binary genealogy
* Account placement
* Pairing
* Payouts
* Notifications
* User activity

### Why It Mattered

These workflows were centralized into one administrative system rather than requiring separate tools or manual tracking.

---

### 11. Implemented Detailed Activity Logging

The platform records important user and administrator activities.

Logged operations include:

* Login and logout
* Dashboard access
* Member creation
* Account creation
* Code requests
* Code approvals
* Genealogy access
* Account pairing
* Payout requests
* Payout approvals
* Notification access
* Settings access

### Why It Mattered

Activity history gave administrators additional visibility into how the system was being used and provided useful information when investigating operational issues.

---

## Technical Approach

For technical readers, the main architectural challenge involved modeling recursive network relationships alongside transactional workflows.

### Recursive Binary Structure

Each network account contains references to:

* A left child account
* A right child account

Those accounts can contain their own child references, enabling genealogy traversal without a fixed network depth.

### Identity and Account Separation

The member profile is separate from network accounts.

This allows:

```text
One Member
    ↓
Multiple Network Accounts
    ↓
Multiple Independent Network Positions
```

### Compensation History

Pairing records are stored separately from genealogy records.

This preserves historical bonus events without tying compensation directly to the network's current structure.

### Multi-Plan Architecture

Tiger and Eagle account information is maintained separately while using similar binary-network principles.

### Approval-Based Workflows

Sensitive operations such as code generation and payouts follow request-and-approval processes.

### Authentication and Traceability

The platform includes member authentication, hashed passwords, account states, notifications, and detailed user-activity logging.

### Infrastructure

The application used:

* PHP
* CodeIgniter
* MySQL
* Bootstrap
* JavaScript
* jQuery
* Linux
* Apache
* Cloudflare

---

## Key Results

The platform centralized complex membership, network, compensation, and administrative workflows into one application.

Key outcomes included:

* Digitized member registration and management
* Supported members with multiple network accounts
* Implemented dynamically expanding binary genealogy structures
* Provided left/right account placement
* Supported separate Tiger and Eagle network types
* Implemented pair-based bonus tracking
* Preserved compensation history separately from genealogy
* Centralized binary-network monitoring
* Digitized activation-code requests
* Implemented administrator approval for code generation
* Generated and tracked unique membership codes
* Centralized payout requests
* Implemented administrator payout approval
* Maintained completed payout transaction records
* Added member and administrator notifications
* Created dedicated member and administrative interfaces
* Implemented detailed user-activity logging
* Deployed the platform using a LAMP environment
* Integrated Cloudflare into the application's delivery infrastructure

---

## Skills Demonstrated

**Full-Stack Development**
PHP, CodeIgniter, Bootstrap, JavaScript, jQuery, MySQL, and browser-based application development

**Data Structures**
Recursive binary trees, parent-child relationships, left/right branch management, genealogy traversal, and dynamically expanding network structures

**Database Architecture**
Relational modeling, member-account separation, genealogy relationships, compensation history, workflow requests, and activity logs

**Business Workflow Engineering**
Membership onboarding, account placement, approval workflows, code requests, code generation, payouts, and notifications

**Financial Workflow Development**
Pair bonuses, payout requests, approval states, completed payout transactions, and financial-workflow traceability

**Backend Engineering**
Authentication, business-rule implementation, member management, code generation, pairing, payouts, notifications, and administration

**Administrative Systems**
Member management, network monitoring, genealogy administration, payout processing, and activity auditing

**Security and Traceability**
Password hashing, authentication, account status management, workflow approvals, activity logging, and administrative oversight

**Infrastructure**
LAMP deployment, Linux, Apache, MySQL, PHP, and Cloudflare
