# Guide for Sharing Your Interview Experience

Thank you for helping the community by sharing your interview experience! Your insights are
incredibly valuable. Please follow this structure to ensure your submission is clear, comprehensive,
and easy for others to learn from.

You can either fill out a JSON file with the following fields or use this guide to structure your
submission in a Word/PDF document and email it to us.

---

## Profile & Resume (Optional but Recommended) github url can be provided

To make your interview experience even more helpful and credible, you can provide a profile picture
and a link to your resume.

- **`studentImage`**: A public URL to your profile picture.
- **`resumeUrl`**: A public URL to your redacted resume (e.g., PDF, LaTeX source on GitHub).

### Guidelines for Profile & Resume:

- **Hosting:** You can host your photo and resume on any platform. We recommend using a GitHub
  repository.
- **URL:** Please provide a direct, public URL to the assets. For GitHub, a "raw" URL is preferred.
- **Privacy First:** Before sharing your resume, **you must remove all personal contact
  information**, such as your email address and phone number.
- **Resume Format:** While any format is acceptable, if you have your resume in LaTeX, we encourage
  you to share the source code for better rendering. Our platform will automatically show a "View
  LaTeX Source" button for `.tex` files.

---

## 1. Basic Information

- **`id`**: (Leave blank, we will generate this)
- **`studentName`**: Your Full Name (e.g., "Priya Sharma")
- **`regNo`**: Your Registration Number.
- **`batch`**: Your graduation year (e.g., "2025")
- **`department`**: Your branch of study (e.g., "Computer Science and Engineering")
- **`specialization`**: (Optional) Your specialization, if any (e.g., "AI/ML", "Cybersecurity").

## 2. Company & Role Details

- **`company`**: The name of the company (e.g., "Amazon")
- **`companyLogo`**: (Optional) A public URL to the company's logo.
- **`role`**: The job title you interviewed for (e.g., "Software Development Engineer Intern")
- **`date`**: The date of your final interview round (e.g., "2023-10-15")
- **`verdict`**: The final outcome of your interview.
  - _Options_: "Selected", "Rejected", "Pending"
- **`difficulty`**: The overall perceived difficulty of the interview process.
  - _Options_: "Easy", "Medium", "Hard"

## 3. Job Details

- **`salary`**: (Optional) The compensation offered, if you are comfortable sharing (e.g., "25 LPA",
  "1,20,000/month stipend").
- **`location`**: (Optional) The job location (e.g., "Bangalore", "Remote").
- **`jobType`**: (Optional) The type of employment.
  - _Options_: "Full-time", "Internship", "Contract"
- **`workMode`**: (Optional) The work arrangement.
  - _Options_: "On-site", "Remote", "Hybrid"
- **`joiningDate`**: (Optional) The date you are expected to join (e.g., "2025-07-01").

## 4. Interview Process

- **`interviewMode`**: (Optional) The overall mode of the interviews.
  - _Options_: "Online", "Offline", "Hybrid"
- **`totalDuration`**: (Optional) The total duration of the entire interview process from
  application to result (e.g., "3 weeks", "1 month").
- **`applicationMethod`**: (Optional) How you applied for the role.
  - _Options_: "Campus Placement", "Referral", "Direct Apply", "Off-campus Drive"
- **`numberOfApplicants`**: (Optional) Approximate number of applicants, if known.
- **`numberOfSelected`**: (Optional) Approximate number of candidates selected, if known.
- **`eligibilityCriteria`**: (Optional) Any specific eligibility criteria for the role (e.g.,
  "CGPA > 7.0, No backlogs").

## 5. Academic Details

- **`cgpa`**: (Optional) Your CGPA or percentage (e.g., "8.5" or "85%").

## 6. Skills & Preparation

- **`primarySkills`**: (Optional) A list of your key skills relevant to the role (e.g.,
  `["Java", "Python", "React"]`).
- **`topicsCovered`**: (Optional) A list of technical topics that were covered in the interviews
  (e.g., `["DSA", "System Design", "DBMS"]`).
- **`preparationTime`**: (Optional) How long you prepared for this role (e.g., "3 months").
- **`resources`**: (Optional) A list of resources you used for preparation (e.g.,
  `["LeetCode", "GeeksforGeeks", "Sproutern"]`).
- **`problemsSolved`**: (Optional) Approximate number of coding problems you solved during
  preparation.
- **`mockInterviews`**: (Optional) Number of mock interviews you participated in.

## 7. Projects & Experience

- **`githubProfile`**: (Optional) A link to your GitHub profile.
- **`relevantProjects`**: (Optional) A list of brief descriptions of projects relevant to the role.
- **`previousInternships`**: (Optional) A list of your previous internship companies.
- **`certifications`**: (Optional) A list of any relevant certifications you hold.
- **`hackathons`**: (Optional) A list of any hackathons you've participated in.

## 8. Contact & Mentorship

- **`linkedIn`**: (Optional) A link to your LinkedIn profile.
- **`willingToMentor`**: (Optional) Set to `true` if you are willing to mentor other students.
- **`availableForMockInterview`**: (Optional) Set to `true` if you are available to conduct mock
  interviews.

## 9. Additional Insights

- **`whatWorkedWell`**: (Optional) A list of things you did that you believe worked well in your
  favor.
- **`mistakesToAvoid`**: (Optional) A list of mistakes you made that others can learn from.
- **`companyCulture`**: (Optional) A brief description of your impression of the company culture.
- **`workLifeBalance`**: (Optional) A rating from 1 to 5 on the perceived work-life balance.
- **`learningOpportunities`**: (Optional) A rating from 1 to 5 on the perceived learning
  opportunities.

## 10. Interview Rounds (Detailed)

This is the most important section. Please be as detailed as possible for each round. Add a new
object in the `rounds` array for each round.

- **`roundName`**: The name of the round (e.g., "Online Assessment", "Technical Round 1", "HR
  Round").
- **`duration`**: (Optional) How long the round lasted (e.g., "90 minutes", "1 hour").
- **`mode`**: (Optional) The mode of the round (e.g., "Online", "Offline").
- **`platform`**: (Optional) The platform used for the round (e.g., "Zoom", "HackerRank", "Google
  Meet").
- **`description`**: Describe the round. What was the format? Who interviewed you (e.g., SDE-2)?
  What was the focus?
- **`questions`**: A list of specific questions you were asked. For coding questions, please provide
  the full problem statement if you can remember it. For theoretical questions, list the topics
  covered.

**Example for a round:**

```json
{
  "roundName": "Technical Round 1",
  "duration": "60 minutes",
  "mode": "Online",
  "platform": "Google Meet",
  "description": "The interview was conducted by an SDE-2 with 5 years of experience. The focus was on Data Structures and Algorithms.",
  "questions": [
    "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    "What is the difference between SQL and NoSQL databases?",
    "Explain the concept of virtual memory."
  ]
}
```

## 11. Overall Experience & Tips

If you are not providing a structured `rounds` description, you can write a detailed summary of your
entire experience in this field.

- **`content`**: A markdown-supported field for a detailed, unstructured summary of your experience.
  Include your preparation strategy, resources, and any final tips for aspirants.
- **`tips`**: (Optional) A list of specific, actionable tips for future candidates.

---

## Submission

Once you have prepared your document or updated the JSON, please email it to
**https://github.com/itsPremkumar/sproutern-oss** with the subject line: `Interview Experience - [Your Name] - [Company]`.

Thank you again for your contribution!
