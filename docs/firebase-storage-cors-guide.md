### `firebase-storage-cors-guide.md`

### 1\. The Problem

When uploading a file from your application to Firebase Storage, the browser may block the request
due to a **CORS (Cross-Origin Resource Sharing)** policy. This happens because your development
server (e.g., `localhost:9002`) is a different origin than the Firebase Storage server
(`firebasestorage.app`), and by default, Firebase does not allow cross-origin requests.

The error you see in your browser console will look like this:

> `Access to XMLHttpRequest from origin 'http://localhost:9002' has been blocked by CORS policy.`

### 2\. The Solution

The solution is to configure your Firebase Storage bucket to explicitly allow requests from your
application's origin. This is done by creating a `cors.json` file and using the `gsutil`
command-line tool to apply the policy.

---

### Step 1: Create the CORS Configuration File

In the root folder of your project (the same folder that contains your `package.json`), create a new
file named `cors.json`.

Copy the following code and paste it into the new file:

```json
[
  {
    "origin": ["http://localhost:9002", "https://YOUR_PROJECT_ID.web.app"],
    "method": ["GET", "PUT", "POST", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600,
    "responseHeader": ["Content-Type"]
  }
]
```

### Step 2: Install and Configure the Google Cloud CLI

The `gsutil` command is part of the Google Cloud CLI. If you have not already done so, you need to
install it.

1.  **Download the installer:** Go to the official Google Cloud SDK download page and follow the
    instructions for your operating system.
    > [https://cloud.google.com/sdk/docs/install](https://cloud.google.com/sdk/docs/install)
2.  **Initialize the CLI:** After installation is complete, open your terminal and run the following
    command to link the CLI to your Firebase project:
    ```bash
    gcloud init
    ```
3.  **Sign in:** The command will open a browser window for you to sign in with your Google account.
4.  **Select your project:** In the terminal, you will be prompted to choose a project from a list.
    Select the number corresponding to your Firebase project, which is `YOUR_PROJECT_ID`.

### Step 3: Apply the CORS Policy

Now that your terminal is configured, you can run the final command.

1.  **Open your terminal** and navigate to your project's root directory:
    ```bash
    cd /path/to/project
    ```
2.  **Run the `gsutil` command:** Copy and paste the following command and press Enter. Make sure
    you use the correct bucket name, which ends in `.firebasestorage.app`.
    ```bash
    gsutil cors set cors.json gs://YOUR_PROJECT_ID.firebasestorage.app
    ```

### Step 4: Verify the Configuration

To confirm that the CORS policy was applied, you can run the following command:

```bash
gsutil cors get gs://YOUR_PROJECT_ID.firebasestorage.app
```

This command should output the content of your `cors.json` file, confirming that the settings are
active on your bucket.

### Step 5: Update Your Application Code

The final step is to ensure your application code is also using the correct bucket name. In your
source code, find where the file upload URL is defined and change the bucket name from
`YOUR_PROJECT_ID.appspot.com` to `YOUR_PROJECT_ID.firebasestorage.app`.

### Step 6: Test the Upload

Now that the CORS policy has been set and your code is using the correct bucket name, you can go
back to your application and try uploading your resume. The upload will no longer be blocked by the
browser, and you should see a successful upload.

---

### Troubleshooting Common Issues

- **`'gsutil' is not recognized as an internal or external command`**: This means the `gsutil`
  program's location is not in your system's PATH. You can solve this by either adding the Google
  Cloud SDK's `bin` folder to your PATH or by using the full path to the command. For example:

  ```bash
  gsutil cors set ...
  ```

- **`NotFoundException: 404 The specified bucket does not exist.`**: This error almost always means
  you are using the wrong bucket name. Your Firebase Storage bucket name is
  `YOUR_PROJECT_ID.firebasestorage.app`, not `YOUR_PROJECT_ID.appspot.com`. The name in your
  `gsutil` command **and** your application code must be the correct `.firebasestorage.app` name.

      Setting CORS on gs://YOUR_PROJECT_ID.appspot.com/...

  NotFoundException: 404 The specified bucket does not exist.
  $ gsutil cors set cors.json gs://YOUR_PROJECT_ID.appspot.com
  Setting CORS on gs://YOUR_PROJECT_ID.appspot.com/...
  NotFoundException: 404 The specified bucket does not exist.
  $ gsutil cors set cors.json gs://YOUR_PROJECT_ID.firebasestorage.app
  Setting CORS on gs://YOUR_PROJECT_ID.firebasestorage.app/...

gsutil cors set cors.json gs://YOUR_PROJECT_ID.firebasestorage.app
