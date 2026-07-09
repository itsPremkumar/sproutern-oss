# Firestore Database Schema

This document outlines the structure of the Firestore database used in this application. The
consistent identifier for users across all collections is their Firebase Authentication User ID
(`userId`).

## `users` collection

This collection stores a document for every user who signs up. The document ID is the user's
Firebase Authentication UID (`userId`).

- **userId**: (Document ID) `string` - The user's unique Firebase Auth ID.
- **fullName**: `string` - The user's full name or company name.
- **email**: `string` - The user's email address.
- **userType**: `string` - Can be either `'student'` or `'startup'` or `'admin'`.
- **photoURL**: `string` (optional) - A URL to the user's profile picture stored in Firebase
  Storage.

## `studentProfiles` collection

This collection stores detailed profiles for users whose `userType` is `'student'`. The document ID
is the user's `userId`, linking it to their record in the `users` collection.

- **photoURL**: `string` (optional) - A URL to the user's profile picture.
- **resumeUrl**: `string` (optional) - A URL to the student's resume PDF stored in Firebase Storage.
- **resumeFileName**: `string` (optional) - The original filename of the uploaded resume (e.g.,
  "my_resume.pdf").
- **dob**: `string` - The student's date of birth.
- **age**: `number` - The student's age.
- **gender**: `string` - The student's gender.
- **phoneNumber**: `string` - The student's phone number.
- **department**: `string` - The student's academic department.
- **yearOfStudy**: `string` - The student's current year of study.
- **studyingStatus**: `string` - e.g., 'Studying' or 'Passed Out'.
- **cgpa**: `number` - The student's current CGPA.
- **skills**: `string[]` - An array of the student's skills.
- **experience**: `object[]` - An array of work experience objects.
  - **title**: `string`
  - **company**: `string`
  - **description**: `string`
- **education**: `object`
  - **degree**: `string`
  - **university**: `string`
  - **year**: `string`

## `startupProfiles` collection

This collection stores detailed profiles for users whose `userType` is `'startup'`. The document ID
is the user's `userId`.

- **mission**: `string` - The company's mission statement.
- **photoURL**: `string` (optional) - A URL to the startup's profile picture/logo.
- **details**: `object`
  - **industry**: `string`
  - **founded**: `string`
  - **location**: `string`
  - **website**: `string`
  - **contactEmail**: `string`
  - **contactPhone**: `string`

## `internships` collection

This collection stores all the internship openings posted by startups.

- **companyName**: `string` - The name of the startup.
- **jobTitle**: `string` - The title of the internship.
- **location**: `string` - The location of the internship (e.g., "Remote", "New York, NY").
- **description**: `string` - A detailed description of the role.
- **requirements**: `string` - The skills and qualifications required.
- **workMode**: `string` - The mode of work (e.g., 'Online', 'Offline', 'Hybrid').
- **duration**: `string` - The duration of the internship (e.g., '3 Months').
- **stipend**: `string` - The stipend offered (e.g., '₹10,000/month', 'Unpaid').
- **placementOffer**: `boolean` - Whether a placement offer is available after the internship.
- **postedByUserId**: `string` - The `userId` of the startup user who posted the internship.
- **postedAt**: `Timestamp` - The date and time the internship was posted.

## `applications` collection

This collection stores a record for each internship application submitted by a student.

- **internshipId**: `string` - The ID of the internship being applied for.
- **jobTitle**: `string` - Denormalized job title for easy display.
- **companyName**: `string` - Denormalized company name.
- **studentUserId**: `string` - The `userId` of the student who applied.
- **studentName**: `string` - Denormalized name of the student.
- **studentEmail**: `string` - Denormalized email of the student.
- **startupUserId**: `string` - The `userId` of the startup that posted the internship.
- **status**: `string` - The current status of the application (e.g., `'applied'`, `'viewed'`,
  `'rejected'`).
- **appliedAt**: `Timestamp` - The date and time the application was submitted.
