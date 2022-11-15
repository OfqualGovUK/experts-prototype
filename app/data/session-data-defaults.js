/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

// Import data
const routeData = require('./routeData.json')
const agricultureData = require('./agricultureData.json')
const allOccupationData = require('./allOccupationData.json')
const bussinessData = require('./bussinessData.json')
const careData = require('./careData.json')
const cateringData = require('./cateringData.json')
const constructionData = require('./constructionData.json')
const countryData = require('./countryData.json')
const creativeData = require('./creativeData.json')
const digitalData = require('./digitalData.json')
const educationData = require('./educationData.json')
const engineeringData = require('./engineeringData.json')
const hairData = require('./hairData.json')
const healthData = require('./healthData.json')
const legalData = require('./legalData.json')
const protectiveData = require('./protectiveData.json')
const salesData = require('./salesData.json')
const subjectData = require('./subjectData.json')
const subectSearchData = require('./subectSearchData.json')
const subjectSearch2Data = require('./subjectSearchData2.json')
const subSectorSubjectAreasData = require('./subSectorSubjectAreasData.json')
const trasnsportData = require('./trasnsportData.json')
const qualificationData = require('./qualificationData.json')

// Setting the default layout settings
var settings = {
  enableErrors: "false"
}

// This is all the data needed to populate a VTQ completed application
var completedApplicationDataVTQ = {

  // Personal details
  "fullName": "Lalita Vikram",
  "email": "lalita@email.com",
  "telephone": "07552068159",
  "whereDoYouLive": "In the UK",
  "addressLine1": "43 Watson Place",
  "townOrCity": "Coventry",
  "postCode": "CV1 1DE",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "British Occupational Hygiene Society",
  "awordingOrganisation": "British Occupational Hygiene Society",
  "qualName": "Certificate of Compentence in Asbestos",
  "grade": "Pass",
  "yearQualAwarded": "1995",
  "qualUploadAvailable": "No",
  "noQualReasonHtml": "I have lost it temporarily but I have an email from the Awarding Organisation confirming I have the qualification while I am awaiting my replacement certificate",
  "qualificationUpload": "Not provided",
  "educationCompleted": "complete",

  // Work history
  "employerName": "DAC",
  "jobTitle": "Director",
  "roleEnded": "No",
  "workHistoryCompleted": "complete",

  // Professional memberships
  "anyMemberships": "Yes",
  "membershipOrganisationName": "BOHS",
  "membershipType": "Member",
  "membershipYearJoined": "2000",
  "professionalMembershipsCompleted": "complete",

  // References
  "referenceName": "Paul Hograft",
  "referenceEmail": "PH@email.com",
  "referenceTelephone": "Not provided",
  "referenceOrganisation": "Engineering2 Limited (Chosen a colleague from an AO or someone from a professional membership)",
  "referencesCompleted": "complete",

  // Types of expertise

  // Assessment
  "anyAssessmentExpertise": "Yes",
  "assessmentExpertiseType": [
    "Checking and verifying the marking of others (as a moderator, or as an internal or external verifier)",
    "Designing and/or setting assessments",
    "Designing or writing question papers or assessment tasks",
    "Designing the assessment approach for a qualification",
    "Determining key grade boundaries for examinations or assessments",
    "Evaluating the effectiveness of specific assessment design and approaches",
    "Leading a team of markers, examiners or assessors",
    "Marking assessments",
    "Reviewing or overseeing qualification standards",
    "Reviewing the performance of assessments (individual questions, assessment tasks, mark schemes)",
    "Reviewing the validity and reliability of the qualification, as part of the qualification lifecycle",
    "Setting standards for qualification outcomes",
    "Specification review Specification design",
  ],
  "assessmentExpertiseDetails": "I'd enter the qualifications I've been involved in the work designing the assessments, reviewing assessments and standardising the assessments. I'd put how long I had worked with the qualification if I had been involved from the start or entered within part of it. I'd detail my involvement and what we did in terms of designing the assessments. I'd detail the process of reviewing the qualifications and assessments and then detail the work on standardising.",
  "assessmentExpertiseCompleted": "complete",

  // Industry
  "anyIndustryExpertise": "Yes",
  "industryExpertiseDetails": "I'd be entering when I used to work as an Asbestos surveyor, my background, and when I trained and was a practicing surveyor. I would list the years that I had done this work, and who the work was for and I would detail activities, to show my experience and industry knowledge.",
  "industryExpertiseCompleted": "complete",

  // Teaching
  "anyTeachingExpertise": "Yes",
  "currentlyInTeachingRole": "Yes",
  "teachingExpertiseType": [
    "Developing classroom materials",
    "Developing teacher training materials",
    "Training other teachers/ lecturers",
    "Employer / Industry asbestos training Train asbestos training providers Commercial training provider Training other trainers",

  ],
  "teachingExpertiseDetails": "I would include here a specific summary of my teaching and training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed. It is clear now, that where there isn't a space in 'Work history' to tell you about it what I've done. I can see now these sections and how you want my work history by experience in assessment, industry, and teacher training. (Note: It may have given me comfort to know that I would have the opportunity to tell you this information before now).",
  "teachingExpertiseCompleted": "complete",

  // Areas that you can advise on
  // Subject
  "selectedSubject": "Asbestos Analyst and Surveyor (End-Point Assessment - Level 3)",
  "resultName": "Asbestos Analyst and Surveyor",
  "resultQualType": "End-Point Assessment",
  "resultLevel": "Level 3",
  "referrer": "subjectSearch",
  "hasMultipleExpertiseTypes": "True",
  "expertiseType": [
    "Assessment",
    "Industry or occupational",
    "Teaching, lecturing or training"
  ],
  // Sector
  "selectedIndustry": "Building and construction",
  "selectedQualificationSector": [
    "End-Point Assessment",
    "Technical Qualification",
    "Vocationally-Related Qualification"
  ],
  "selectedLevelSector": ["Level 4"],
  "adviseAreasCompleted": "complete",

  // Conflict of interest
  "conflictOfInterest": "Yes",
  "conflictOrganisation": "RS Public Health",
  "conflictType": "I work for an Awarding Organisation as an external consultant or advisor",
  "conflictDetails": "I work for an awarding organisation, but I am not employed. I am contracted externally. I am training, assessor, and examiner for the qualification they award. I would put the detail of the years I was an assessor for them and if I am no longer doing any work for them I'd make it clear I haven't and don't do any work for them etc.",
  "conflictStartDate": "June 2005",
  "currentConflict": "No",
  "conflictEndDate": "March 2015",
  "conflictOfInterestCompleted": "complete",

  // Self declaration
  "judgements": "No",
  // "judgementsDetails": "Test",
  "bankrupt": "No",
  // "bankruptDetails": "Test",
  "misconduct": "No",
  // "misconductDetails": "Test",
  "breach": "No",
  // "breachDetails": "I didn't pay my tax for a REALLY long time.",
  "declarationCompleted": "complete",

  // Your right to work status
  "rightToWork": "Yes",
  "rightToWorkStatus": "UK citizenship",
  "rightToWorkCompleted": "complete",

  // Provide proof of identification
  "idUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete"
}

// This is all the data needed to populate a GQ completed application
var completedApplicationDataGQ = {

  // Personal details
  "fullName": "GQ Lalita Vikram",
  "email": "lalita@email.com",
  "telephone": "07552068159",
  "whereDoYouLive": "In the UK",
  "addressLine1": "43 Watson Place",
  "townOrCity": "Coventry",
  "postCode": "CV1 1DE",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "University of Central Lancashire",
  "awordingOrganisation": "",
  "qualName": "Performing arts degree / Certificate & Masters in Education",
  "grade": "",
  "yearQualAwarded": "1982",
  "qualUploadAvailable": "Yes",
  "noQualReasonHtml": " ",
  "qualificationUpload": "Allcerts.jpg",
  "educationCompleted": "complete",

  // Work history
  "employerName": "Brenton College",
  "jobTitle": "Head of Performing Arts",
  "roleEnded": "Yes",
  "workHistoryCompleted": "complete",

  // Professional memberships
  "anyMemberships": "Yes",
  "membershipOrganisationName": "Union and Drama teachers network",
  "membershipType": "",
  "membershipYearJoined": "1983",
  "professionalMembershipsCompleted": "complete",

  // References
  "referenceName": "A N Headteacher",
  "referenceEmail": "headteacher@school.com",
  "referenceTelephone": "Not provided",
  "referenceOrganisation": "A N Head",
  "referencesCompleted": "complete",

  // Types of expertise

  // Assessment
  "anyAssessmentExpertise": "Yes",
  "assessmentExpertiseType": [
    "Checking and verifying the marking of others (as a moderator, or as an internal or external verifier)",
    "Designing and/or setting assessments",
    "Designing or writing question papers or assessment tasks",
    "Designing the assessment approach for a qualification",
    "Determining key grade boundaries for examinations or assessments",
    "Evaluating the effectiveness of specific assessment design and approaches",
    "Leading a team of markers, examiners or assessors",
    "Marking assessments",
    "Reviewing or overseeing qualification standards",
    "Reviewing the performance of assessments (individual questions, assessment tasks, mark schemes)",
    "Reviewing the validity and reliability of the qualification, as part of the qualification lifecycle",
    "Setting standards for qualification outcomes",
    "Specification review Specification design",
  ],
  "assessmentExpertiseDetails": "I've done a lot of training for exam boards.  I've run quite a few standards meetings.  I've been a standards verifier for BTEC performing arts.  Examiner for GCSE Performing Arts for AQA.  Examiner for GCC drama and set the standards Btech Performing Arts.  I would descsribe my involvement, activities and responsibilities to link with the information selected.  For the analytical, judgement and communication skills, I would link and describe to my experience and professional achievements.",
  "assessmentExpertiseCompleted": "complete",

  // Industry
  "anyIndustryExpertise": "No",
  "industryExpertiseDetails": "",
  "industryExpertiseCompleted": "complete",

  // Teaching
  "anyTeachingExpertise": "Yes",
  "currentlyInTeachingRole": "Yes",
  "teachingExpertiseType": [
    "Developing classroom materials",
    "Developing teacher training materials",
    "Training other teachers/ lecturers",
    "Employer / Industry asbestos training Train asbestos training providers Commercial training provider Training other trainers",

  ],
  "teachingExpertiseDetails": "I would enter all my experience relevant to teacher, training and lecturing and I'd evidence with the bullets I've selected. I might enter detail under each of the headings. I'd want to prepare this elsewhere and paste it here to make sure that I get it right and cover everything I've selected.",
  "teachingExpertiseCompleted": "complete",

  // Areas that you can advise on
  // Subject
  "selectedSubject": "Performing arts (GCE AS/A Level - Level 3)",
  "resultName": "Performing arts",
  "resultQualType": "GCE AS/A Level",
  "resultLevel": "Level 3",
  "referrer": "subjectSearch",
  "hasMultipleExpertiseTypes": "True",
  "expertiseType": [
    "Assessment",
    "",
    "Teaching, lecturing or training"
  ],
  // Sector
  "selectedIndustry": "Performing arts",
  "selectedQualificationSector": [
    "End-Point Assessment",
    "GCE A Level",
    "GCE AS Level"
  ],
  "selectedLevelSector": ["Level 4"],
  "adviseAreasCompleted": "complete",

  // Conflict of interest
  "conflictOfInterest": "Yes",
  "conflictOrganisation": "Supply work / External consultant",
  "conflictType": "I work for an Awarding Organisation as an external consultant or advisor",
  "conflictDetails": "I'd want to select more options, I have been employed by an AO, I've worked on the subject as a supply teacher and I do work as an advisor.",
  "conflictStartDate": "June 2005",
  "currentConflict": "Yes",
  "conflictEndDate": "",
  "conflictOfInterestCompleted": "complete",

  // Self declaration
  "judgements": "No",
  // "judgementsDetails": "Test",
  "bankrupt": "No",
  // "bankruptDetails": "Test",
  "misconduct": "No",
  // "misconductDetails": "Test",
  "breach": "No",
  // "breachDetails": "I didn't pay my tax for a REALLY long time.",
  "declarationCompleted": "complete",

  // Your right to work status
  "rightToWork": "Yes",
  "rightToWorkStatus": "UK citizenship",
  "rightToWorkCompleted": "complete",

  // Provide proof of identification
  "idUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete"
}

module.exports = {

  // This section pulls in various data sources
  routeData,
  agricultureData,
  allOccupationData,
  bussinessData,
  careData,
  cateringData,
  constructionData,
  countryData,
  creativeData,
  digitalData,
  educationData,
  engineeringData,
  hairData,
  healthData,
  legalData,
  protectiveData,
  salesData,
  subjectData,
  subectSearchData,
  subSectorSubjectAreasData,
  trasnsportData,
  qualificationData,
  subjectSearch2Data,

  completedApplicationDataGQ,
  completedApplicationDataVTQ,

  settings: settings,

  // Setting the sections that aren't able to be started yet
  // The section is enabled with hidden inputs in the dependant section
  "adviseAreasCompleted": "canNotStartYet"

}
