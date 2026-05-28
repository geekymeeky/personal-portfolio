# The Challenge
Migrating millions of historical records from a legacy on-premise system into Salesforce while simultaneously ensuring the org did not exceed its data storage limits. Storing millions of cold-storage records natively in Salesforce would result in exorbitant licensing costs.

# The Solution
I designed a hybrid data architecture bridging **Salesforce** and **AWS S3**. 

Active, actionable records were migrated directly into Salesforce objects using Data Loader and Bulk API. However, historical, compliance-only records were archived into AWS S3. 

To ensure a seamless user experience, I built a custom **Lightning Web Component (LWC)** UI integrated with a RESTful Apex callout framework. When a user queries a historical record in Salesforce, the Apex controller securely authenticates with AWS via **Named Credentials**, fetches the JSON payload from the S3 bucket, and renders it in the LWC instantly.

# Tech Stack
- **Salesforce Apex (REST Callouts, Batch Apex)**
- **AWS S3 & IAM**
- **Salesforce Bulk API & Data Loader**
- **Lightning Web Components (LWC)**
- **OAuth 2.0 & Named Credentials**

# The ROI & Impact
> **Saved thousands of dollars annually** in Salesforce data storage costs by successfully offloading 80% of historical data to AWS S3.

> Maintained **instant data accessibility** for end-users, ensuring compliance teams could still audit 5-year-old records without ever leaving the Salesforce UI.
