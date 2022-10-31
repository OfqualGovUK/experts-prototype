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

// This is all the data needed to populate a completed application
var completedApplicationData = {
  // Personal details
  "fullName": "Lalita Vikram",
  "email": "lalita@email.com",
  "telephone": "07552068159",
  "whereDoYouLive": "In the UK",
  "addressLine1": "43 Watson place",
  "townOrCity": "Coventry",
  "postCode": "CV1 1DE",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "Hogwarts",
  "awordingOrganisation": "Slytherin",
  "qualName": "Wizardry",
  "grade": "B",
  "yearQualAwarded": "2009",
  "qualUploadAvailable": "No",
  "noQualReasonHtml": "I have reecenly moved house and all of my documentation has been lost by the movers.",
  "qualificationUpload": "Something else",
  "educationCompleted": "complete",
  
  // Types of expertise
  
  // Assessment
  "anyAssessmentExpertise": "Yes",
  "assessmentExpertiseType": ["Designing and/or setting assessments", "Marking assessments"],
  "assessmentExpertiseDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "assessmentExpertiseCompleted": "complete",

  // Industry
  "anyIndustryExpertise": "Yes",
  "industryExpertiseType": ["Something", "another thing"],
  "industryExpertiseDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "industryExpertiseCompleted": "complete",
  
  // Teaching
  "anyTeachingExpertise": "Yes",
  "currentlyInTeachingRole": "Yes",
  "teachingExpertiseType": ["Developing classroom materials", "Head of faculty"],
  "teachingExpertiseDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "teachingExpertiseCompleted": "complete",
  
  // Work history
  "employerName": "University College London",
  "jobTitle": "Lecturer",
  "roleEnded": "No",
  "workHistoryCompleted": "complete",
  
  // Professional memberships
  "anyMemberships": "Yes",
  "membershipOrganisationName": "University College London",
  "membershipType": "Standard",
  "membershipYearJoined": "July 2022",
  "professionalMembershipsCompleted": "complete",
  
  // References
  "referenceName": "Theodore Kwame",
  "referenceEmail": "kwameistheking@gmail.com",
  "referenceTelephone": "07552 065153",
  "referenceOrganisation": "University College London",
  "referencesCompleted": "complete",

  // Areas that you can advise on 
  // Only including a subject for now
  "selectedSubject": "Automotive Glazing Technician (End-Point Assessment - Level 3)",
  "resultName": "Automotive Glazing Technician",
  "selectedQualification": "End-Point Assessment",
  "selectedLevel": ["Level 3"],
  "referrer": "subjectSearch",
  "hasMultipleExpertiseTypes": "True",
  "expertiseType": ["Assessment", "Industry or occupational", "Teaching, lecturing or training"],
  "adviseAreasCompleted": "complete",
  
  // Conflict of interest
  "conflictOfInterest": "Yes",
  "conflictOrganisation": "The University of Manchester",
  "conflictType": "I have an immediate family member who is employed or contracted by an Awarding Organisation",
  "conflictDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "conflictStartDate": "May 2011",
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
  "breach": "Yes",
  "breachDetails": "I didn't pay my tax for a REALLY long time.",
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

  completedApplicationData,
  
  settings: settings,
  // personalDetails: personalDetails,

  // Setting the sections that aren't able to be started yet
  // The section is enabled with a hidden inputs in the dependant sections
  "adviseAreasCompleted": "canNotStartYet"

}
