# Deploying to Firebase App Hosting

This guide provides the steps to deploy your Next.js application to the web using Firebase App
Hosting. It's a fully-managed, secure hosting service with a generous free tier.

### Prerequisites

You need to have the Firebase Command Line Interface (CLI) installed. If you don't have it, open
your terminal and run:

```bash
npm install -g firebase-tools
```

---

### Step 1: One-Time Setup

These commands connect your local project to your Firebase project. **You only need to do this
once.**

1.  **Log in to Firebase:** This command will open a browser window to authenticate your Google
    account.

    ```bash
    firebase login
    ```

2.  **Initialize App Hosting:** This step links your local code to your Firebase project.

    ```bash
    firebase init apphosting
    ```

    - When prompted, select **"Use an existing project"** and choose your project from the list.
    - The CLI will guide you to link or create a backend. It will then create a `.firebaserc` file
      to remember your project choice.

---

### Step 2: Deploying Your Website (For Every Update)

After you've made changes to your code and are ready to publish them, run this single command. This
is the command you will use every time you want to deploy a new version.

```bash
firebase deploy --only apphosting
```

After a few moments, the CLI will build and deploy your application. You can find the live URL for
your website in the **App Hosting** section of your Firebase Console.

---

That's it! Your application is now live on Firebase.

firebase deploy --only apphosting
