# AI Bot Activity Setup via Cloudflare LogPush

Based on the official requirements, you need to set up a **Cloudflare LogPush** job to send traffic
data to Microsoft Clarity. This allows Clarity to analyze bot traffic that hits your CDN edge.

> [!WARNING] **Requirement: Paid Cloudflare Plan** Cloudflare LogPush is **NOT** available on the
> Free plan. It is typically available on **Enterprise** plans or as a paid add-on for
> **Business/Pro** plans. If you are on a **Free plan**, you cannot enable this feature.

## Configuration Details

- **Project ID**: `YOUR_CLARITY_PROJECT_ID`
- **Endpoint URL**: `https://ai.clarity.ms/collect/cloudflare/YOUR_CLARITY_PROJECT_ID`

## Step-by-Step Instructions

1. **Log in to Cloudflare**
   - Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
   - Select your domain: `sproutern.com`.

2. **Navigate to LogPush**
   - On the left sidebar, click **Analytics & logs**.
   - Select **LogPush**.
   - Click the button **Create a LogPush job**.

3. **Configure Destination**
   - Select **HTTP destination** as the destination type.
   - Enter the Endpoint URL:
     ```
     https://ai.clarity.ms/collect/cloudflare/YOUR_CLARITY_PROJECT_ID
     ```
   - Click **Continue**.

4. **Select Dataset**
   - Choose the **HTTP requests** dataset.

5. **Configure Job Details**
   - **Job Name**: `ClarityAIVisibilityLogPush`
   - **Log Selection**: Check "Select all logs" (or ensure the required fields below are captured).

   **Required Fields to Check:**
   - **Request**:
     - `ClientCountry`
     - `ClientIP`
     - `ClientRequestHost`
     - `ClientRequestMethod`
     - `ClientRequestReferer`
     - `ClientRequestScheme`
     - `ClientRequestURI`
     - `ClientRequestUserAgent`
   - **Response**:
     - `EdgeResponseStatus`
     - `EdgeResponseContentType`
   - **General**:
     - `ClientCity`
   - **Performance**:
     - `EdgeStartTimestamp`

6. **Advanced Options**
   - Locate the "Advanced Options" section.
   - Set **Timestamp format** to `rfc3339`.

7. **Finish**
   - Click **Submit** to create the job.

## Verification

After submitting, traffic data will begin flowing to Microsoft Clarity.

- Go to
  [Microsoft Clarity Dashboard](https://clarity.microsoft.com/projects/view/YOUR_CLARITY_PROJECT_ID/settings/ai-visibility).
- Navigate to **Dashboards** → **AI Visibility** → **Bot Activity**.
- Data may take up to **2-4 hours** to appear.
