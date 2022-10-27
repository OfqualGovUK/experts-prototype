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

// var applicationData = {
//   // Personal details
//   "fullName": "Lalita Vikram",
//   "email": "lalita@email.com",
//   "telephone": "07552068159",
//   "whereDoYouLive": "Outside the UK else",
//   "selectedCountry": "Australia",
//   "addressLine1": "43 Watson street",
//   // "addressLine2": "Something else",
//   "townOrCity": "Perth",
//   "region": "Western Australia",
//   "postCode": "Western Australia",
//   "personalDetails": "Complete",

//   // Education details
//   "education.schoolName": "Something else",
//   "education.qualName": "Something else",
//   "education.grade": "Something else",
//   "education.yearAwarded": "Something else",
//   "education.uploadAvailable": "Something else",
//   "education.noReasonHtml": "Something else",
//   "education.uploadAvailable": "Something else",
//   "education.qualificationUpload": "Something else",
//   "educationDetails": "Complete",
  
//   // Types of expertise
  
//   // Assessment
//   "anyAssessmentExpertise": "Yes",
//   "expertiseType.assessment": ["Something", "another thing"],
//   "assessmentExpertiseDetails": "Something else",
//   "assessmentExpertiseCompleted": "Complete",

//   // Industry
//   "anyIndustryExpertise": "Yes",
//   "expertiseType.industry": ["Something", "another thing"],
//   "industryExpertiseDetails": "Something else",
//   "industryExpertiseCompleted": "Complete",
  
//   // Teaching
//   "anyTeachingExpertise": "Yes",
//   "expertiseType.teaching": ["Something", "another thing"],
//   "teachingExpertiseDetails": "Something else",
//   "teachingExpertiseCompleted": "Complete",
  
//   // Work history
  
//   "job.employerName": "value",
//   "job.title": "value",
//   "job.roleEnded": "Yes",
//   "job.summaryOfActivity": "Yes",
//   "experienceDetails": "Complete",
  
//   // Professional memberships
//   "membership.organisationName": "value",
//   "membership.type": "value",
//   "membership.type": "value",
//   "membership.yearJoined": "value",
//   "professionalMembershipsCompleted": "Complete",
  
//   // References
//   "reference.name": "value",
//   "reference.email": "value",
//   "reference.telephone": "value",
//   "reference.organisation": "value",
//   "referencesCompleted": "Complete",

//   // Areas that you can advise on 
//   // Only including a subject for now
//   "selectedSubject": "Value",
//   "resultName": "Value",
//   "selectedQualification": "Value",
//   "selectedLevel": "Value",
//   "data.expertiseType": ["Something", "another thing"],
//   "adviseAreasCompleted": "Complete",
  
//   // Conflict of interest
//   "conflict.organisation": "Value",
//   "conflict.type": "Value",
//   "conflict.details": "Value",
//   "conflict.startDate": "May 2011",
//   "conflict.currentConflict": "No",
//   "conflict.endDate": "March 2015",
  
//   // Self declaration
//   "judgements": "Yes",
//   "judgementsDetails": "Test",
//   "bankrupt": "Yes",
//   "bankruptDetails": "Test",
//   "misconduct": "Yes",
//   "misconductDetails": "Test",
//   "breach": "Yes",
//   "breachDetails": "Test",
  
//   // Your right to work status
//   "rightToWork": "Yes",
//   "rightToWorkStatus": "UK citizenship",

//   // Provide proof of identification
//   "idUpload": "Yes",

//   // "opitonsChecked": ["Something", "another thing", "a third thing"]
// } 

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

  // applicationData,
  
  settings: settings,
  // personalDetails: personalDetails,

  // Setting the sections that aren't able to be started yet
  // The section is enabled with a hidden inputs in the dependant sections
  // "areaDetails": "canNotStartYet"

  // set a few things up to test
  // "anyAssessmentExpertise": "Yes",
  "anyIndustryExpertise": "Yes",
  "anyTeachingExpertise": "Yes",
  // "teachingExpertiseCompleted": "complete"

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
  "education.schoolName": "Hogwarts",
  "education.qualName": "Wizardry",
  "education.grade": "B",
  "education.yearAwarded": "2009",
  "education.uploadAvailable": "Something else",
  "education.noReasonHtml": "Something else",
  "education.uploadAvailable": "Something else",
  "education.qualificationUpload": "Something else",
  "educationDetails": "complete",
  
  // Types of expertise
  
  // Assessment
  "anyAssessmentExpertise": "Yes",
  "expertiseType.assessment": ["Something", "another thing"],
  "assessmentExpertiseDetails": "Something else",
  "assessmentExpertiseCompleted": "complete",

  // Industry
  "anyIndustryExpertise": "Yes",
  "expertiseType.industry": ["Something", "another thing"],
  "industryExpertiseDetails": "Something else",
  "industryExpertiseCompleted": "complete",
  
  // Teaching
  "anyTeachingExpertise": "Yes",
  "expertiseType.teaching": ["Something", "another thing"],
  "teachingExpertiseDetails": "Something else",
  "teachingExpertiseCompleted": "complete",
  
  // Work history
  
  "job.employerName": "value",
  "job.title": "value",
  "job.roleEnded": "Yes",
  "job.summaryOfActivity": "Yes",
  "experienceDetails": "complete",
  
  // Professional memberships
  "anyMemberships": "Yes",
  "membership.organisationName": "value",
  "membership.type": "value",
  "membership.type": "value",
  "membership.yearJoined": "value",
  "professionalMembershipsCompleted": "complete",
  
  // References
  "reference.name": "value",
  "reference.email": "value",
  "reference.telephone": "value",
  "reference.organisation": "value",
  "referencesCompleted": "complete",

  // Areas that you can advise on 
  // Only including a subject for now
  "selectedSubject": "Value",
  "resultName": "Value",
  "selectedQualification": "Value",
  "selectedLevel": "Value",
  "data.expertiseType": ["Something", "another thing"],
  "adviseAreasCompleted": "complete",
  
  // Conflict of interest
  "conflictOfInterest": "Yes",
  "conflict.organisation": "Value",
  "conflict.type": "Value",
  "conflict.details": "Value",
  "conflict.startDate": "May 2011",
  "conflict.currentConflict": "No",
  "conflict.endDate": "March 2015",
  "conflictOfInterestCompleted": "complete",
  
  // Self declaration
  "judgements": "Yes",
  "judgementsDetails": "Test",
  "bankrupt": "Yes",
  "bankruptDetails": "Test",
  "misconduct": "Yes",
  "misconductDetails": "Test",
  "breach": "Yes",
  "breachDetails": "Test",
  "declarationDetails": "complete",
  
  // Your right to work status
  "rightToWork": "Yes",
  "rightToWorkStatus": "UK citizenship",
  "rightToWorkDetails": "complete",

  // Provide proof of identification
  "idUpload": "Yes",
  "verifyIdentityCompleted": "complete",

}
