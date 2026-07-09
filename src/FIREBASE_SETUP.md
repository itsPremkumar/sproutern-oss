# Firebase Setup Guide

This document contains the necessary Firebase configuration for the Sproutern application to
function correctly. This includes Firestore security rules, Storage security rules, and required
Firestore indexes.

---

## 1. Firestore Security Rules

Navigate to your Firebase project -> **Build > Firestore Database > Rules**.

Copy the entire content below and paste it into the rules editor, then click **Publish**. These
rules are wide open for development and debugging.

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

## 2. Cloud Storage Security Rules

Navigate to your Firebase project -> **Build > Storage > Rules**.

Copy the entire content below and paste it into the rules editor, then click **Publish**. This is
required for resume and profile picture uploads.

```
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {

    // --- Rules for Resumes ---
    match /resumes/{userId}/{fileName} {
      // Allow a user to read their own resume.
      allow read: if request.auth != null && request.auth.uid == userId;

      // Allow a user to write/upload their own resume if it's a PDF and under 5MB.
      allow write: if request.auth != null &&
                      request.auth.uid == userId &&
                      request.resource.size < 5 * 1024 * 1024 &&
                      request.resource.contentType == 'application/pdf';
    }

    // --- Rules for Profile Pictures ---
    match /profile-pictures/{userId}/{fileName} {
      // Allow anyone to read a profile picture.
      allow read: if true;

      // Allow a user to write/upload their own profile picture if it's an image and under 2MB.
      allow write: if request.auth != null &&
                      request.auth.uid == userId &&
                      request.resource.size < 2 * 1024 * 1024 &&
                      request.resource.contentType.matches('image/.*');
    }
  }
}
```

---

## 3. Firestore Indexes

Navigate to your Firebase project -> **Build > Firestore Database > Indexes**.

You must create four **composite indexes** for the queries in the application to work without
errors. Click "Add index" and create the following:

### Index 1: For Internship Listings Page

- **Collection ID:** `internships`
- **Fields to index:**
  1. `postedByUserId` (Ascending)
  2. `postedAt` (Descending)
- **Query scope:** Collection

### Index 2: For Checking Application Status

- **Collection ID:** `applications`
- **Fields to index:**
  1. `internshipId` (Ascending)
  2. `studentUserId` (Ascending)
- **Query scope:** Collection

### Index 3: For Startups to View Received Applications

- **Collection ID:** `applications`
- **Fields to index:**
  1. `startupUserId` (Ascending)
  2. `appliedAt` (Descending)
- **Query scope:** Collection

### Index 4: For Students to View Their Applications

- **Collection ID:** `applications`
- **Fields to index:**
  1. `studentUserId` (Ascending)
  2. `appliedAt` (**Descending**)
- **Query scope:** Collection
