# Complete Deployment Guide for Next.js on Firebase App Hosting

This guide covers the full setup process, from handling secret keys to configuring the necessary
files, ensuring a successful deployment.

### **Problem Diagnosis: The Core Issues**

Throughout our process, we've faced three distinct types of errors:

1.  **Build-Time API Key Errors (`auth/invalid-api-key`)**: This happened because the Firebase
    Client SDK (frontend) couldn't find the necessary API keys during the `next build` process.
2.  **Server-Side Admin SDK Errors (`SERVICE_ACCOUNT_KEY environment variable is not set`)**: This
    occurred because your server-side code (specifically `/admin/page.tsx` and its actions) needs
    the Firebase Admin SDK, which requires a service account key. The build server didn't have
    access to this key.
3.  **Invalid Configuration Errors (`Invalid apphosting.yaml`)**: This was a simple but critical
    syntax error in the configuration file that prevented the deployment from even starting
    correctly.

The following steps will solve all these issues in a secure and robust way.

---

### **Step 1: Securely Manage Your Secret Keys**

This is the most critical step for security. We will use **Google Secret Manager**, via the Firebase
CLI, to store your keys. Your code will never contain the actual secret values.

#### **Action 1.1: Store the `GOOGLE_API_KEY`**

This key is used for your Genkit AI flows. _For your security, I have redacted part of your key.
Please use your actual, full key._

Open your terminal and run this command:

```bash
echo "YOUR_GOOGLE_API_KEY" | firebase apphosting:secrets:set GOOGLE_API_KEY
```

**Result:** This command securely stores your Google API key in Google Secret Manager under the name
`GOOGLE_API_KEY`.

#### **Action 1.2: Generate and Store the `SERVICE_ACCOUNT_KEY`**

This key is required for the Firebase Admin SDK to manage users and data on the backend. Because it
is a multi-line JSON file, we must encode it to a single, safe line of text using **Base64**.

1.  **Find your `service-account.json` file.** Make sure it's in your project directory (e.g.,
    `./service-account.json`).
2.  **Encode the file to Base64.** Open a PowerShell terminal and run:
    ```powershell
    [Convert]::ToBase64String([IO.File]::ReadAllBytes("./service-account.json"))
    ```
3.  **Copy the Output.** This will produce one very long string of random-looking characters. **Copy
    this entire string.** It is your Base64-encoded key.
4.  **Store the Encoded Key.** Now, run the following command, replacing `THE_LONG_BASE64_STRING`
    with the string you just copied:
    `bash     echo THE_LONG_BASE64_STRING | firebase apphosting:secrets:set SERVICE_ACCOUNT_KEY     `
    **Result:** Your service account key is now also securely stored in Google Secret Manager.

---

### **Step 2: Configure Your Application Files**

Now we will configure the files in your project to correctly use these stored secrets and handle the
different environments (local vs. deployed).

#### **Action 2.1: Configure `apphosting.yaml`**

This file is the instruction manual for Firebase App Hosting. It tells the build server which
secrets your application needs.

**Problem:** Your `apphosting.yaml` was malformed and contained hardcoded keys. **Solution:**
Replace its content with a simple reference to the secrets you stored in Step 1.

```yaml
# In ./apphosting.yaml
secrets:
  - secret: SERVICE_ACCOUNT_KEY
    availability:
      - BUILD
      - RUNTIME
  - secret: GOOGLE_API_KEY
    availability:
      - BUILD
      - RUNTIME
```

#### **Action 2.2: Configure `src/lib/firebase-admin.ts`**

This file initializes the Firebase Admin SDK for your backend tasks.

**Problem:** The previous logic was complex and didn't correctly use the credentials provided by the
App Hosting environment. **Solution:** Simplify the file to use
`admin.credential.applicationDefault()`. This is the standard method that automatically finds and
uses the service account credentials when deployed to Google Cloud.

```typescript
// In ./src/lib/firebase-admin.ts
import * as admin from 'firebase-admin';

// This check prevents initializing the app more than once, which is a common
// issue in serverless environments.
if (!admin.apps.length) {
  try {
    // When deployed to a Google Cloud environment (like App Hosting), the SDK
    // will automatically use the Application Default Credentials.
    // For local development, you MUST set the GOOGLE_APPLICATION_CREDENTIALS
    // environment variable in your .env.local file to point to your
    // service-account.json file.
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    console.error('Firebase Admin SDK initialization error:', error.message);
    console.error(
      'Ensure GOOGLE_APPLICATION_CREDENTIALS is set in .env.local for local development.',
    );
  }
}

// Use a ternary operator to safely get the services, which will be null if
// initialization failed. This prevents the app from crashing on import and
// allows for graceful error handling in server actions.
const adminDb = admin.apps.length > 0 ? admin.firestore() : null;
const adminAuth = admin.apps.length > 0 ? admin.auth() : null;
const adminStorage = admin.apps.length > 0 ? admin.storage() : null;

export { adminDb, adminAuth, adminStorage };
```

#### **Action 2.3: Ensure `.gitignore` is Correct**

This file must ignore your local secrets but **must not** ignore the deployment configuration.

**Problem:** `apphosting.yaml` was previously added to `.gitignore`, preventing it from being
deployed. **Solution:** Ensure your `.gitignore` contains `service-account.json` but **does not**
contain `apphosting.yaml`.

A correct `.gitignore` should look something like this:

```gitignore
# In ./.gitignore

# Dependencies
/node_modules
# ... other standard ignores

# Firebase
.firebaserc
firebase-debug.log*

# IMPORTANT: Ignore the local service account key file
service-account.json

# Local Environment Variables
.env*
!.env.example
```

---

### **Step 3: Grant Cloud Permissions**

This is the final configuration step within the Google Cloud Console.

**Problem:** The service that builds your app needs permission to access the secrets you stored in
Step 1. **Solution:** Grant the **Secret Manager Secret Accessor** role to the App Hosting service
account.

1.  **Find Project Number:** Go to the Google Cloud Console Dashboard and copy your **Project
    number**.
2.  **Construct Service Account Email:** Create the email address:
    `service-YOUR_PROJECT_NUMBER@gcp-sa-firebaseapphosting.iam.gserviceaccount.com`.
3.  **Grant Access:** Go to the IAM page in the Google Cloud Console, click **"+ Grant Access"**,
    paste the email as the "New principal", and assign the **`Secret Manager Secret Accessor`**
    role.

---

### **Step 4: Deploy Your Application**

With all configurations in place, you are ready for a final, successful deployment.

1.  **Commit Your Changes:** Save all the file changes from Step 2 and commit them to your
    repository.

    ```bash
    git add .
    git commit -m "feat: Finalize production deployment configuration"
    git push origin main
    ```

2.  **Deploy:** Run the Firebase deployment command.
    ```bash
    firebase deploy --only apphosting
    ```

Following these steps meticulously addresses every issue we've diagnosed. Your application is now
configured according to best practices for security and deployment on Firebase App Hosting.
