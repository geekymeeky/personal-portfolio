# The Challenge
The deployment process across multiple Salesforce sandbox environments was entirely manual, relying on change sets and Ant Migration Tools. This led to a high rate of deployment errors, overwritten code by concurrent developers, and hours wasted on release days just resolving merge conflicts and validating packages.

# The Solution
I architected a fully automated Continuous Integration and Continuous Deployment (CI/CD) pipeline using **GitHub Actions** and **Salesforce CLI (SFDX)**. 

The pipeline enforces strict quality gates:
1. **Pull Request Validation**: Every PR triggers an automated build that runs `sfdx scanner:run` (PMD) for static code analysis and executes all relevant Apex unit tests.
2. **Delta Deployments**: Instead of deploying the entire metadata package, the pipeline dynamically calculates the delta (only changed files) and deploys that, reducing deployment time significantly.
3. **Sandbox Synchronization**: Once code hits the `main` branch, it is automatically deployed to the UAT sandbox, ensuring business stakeholders always test against the latest codebase.

# Tech Stack
- **Salesforce DX (SFDX) & Salesforce CLI**
- **GitHub Actions & YAML Workflows**
- **Shell Scripting (Bash)**
- **PMD Static Code Analyzer**
- **Git & Version Control**

# The ROI & Impact
> **Reduced manual deployment time by 80%**—turning multi-hour release cycles into 15-minute automated jobs.

> **Zero production deployment failures** over a 6-month period by enforcing Apex test coverage and PMD linting on every Pull Request before code could be merged.
