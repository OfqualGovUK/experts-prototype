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

var applicationData = {
  // Personal details
  "fullName": "Something else",
  "personalDetails.email": "Something else",
  "personalDetails.telephone": "Something else",
  "selectedCountry": "Something else",
  "whereDoYouLive": "Something else",
  "personalDetails.addressLine1": "Something else",
  "personalDetails.addressLine2": "Something else",
  "personalDetails.townOrCity": "Something else",
  "personalDetails.region": "Something else",
  "personalDetails": "Yes, I’ve completed this section",

  // Education details
  "education.schoolName": "Something else",
  "education.qualName": "Something else",
  "education.grade": "Something else",
  "education.yearAwarded": "Something else",
  "education.uploadAvailable": "Something else",
  "education.noReasonHtml": "Something else",
  "education.noReasonHtml": "Something else",
  "education.uploadAvailable": "Something else",
  "education.qualificationUpload": "Something else",
  "educationDetails": "Yes, I’ve completed this section",
  
  // Types of expertise
  
  // Assessment
  "anyAssessmentExpertise": "Something else",
  "expertiseType.assessment": ["Something", "another thing"],
  "assessmentExpertiseDetails": "Something else",
  "assessmentExpertiseCompleted": "Yes, I’ve completed this section",

  // Industry
  "anyIndustryExpertise": "Something else",
  "expertiseType.industry": ["Something", "another thing"],
  "industryExpertiseDetails": "Something else",
  "industryExpertiseCompleted": "Yes, I’ve completed this section",
  
  // Teaching
  "anyTeachingExpertise": "Something else",
  "expertiseType.teaching": ["Something", "another thing"],
  "teachingExpertiseDetails": "Something else",
  "teachingExpertiseCompleted": "Yes, I’ve completed this section",
  
  // Work history
  
  "job.employerName": "value",
  "job.title": "value",
  "job.roleEnded": "Yes",
  "job.summaryOfActivity": "Yes",
  "experienceDetails": "Yes, I’ve completed this section",
  
  // Professional memberships
  "membership.organisationName": "value",
  "membership.type": "value",
  "membership.type": "value",
  "membership.yearJoined": "value",
  "professionalMembershipsCompleted": "Yes, I’ve completed this section",
  
  // References
  "data.reference.name": "value",
  "data.reference.email": "value",
  "data.reference.telephone": "value",
  "data.reference.organisation": "value",
  "referencesCompleted": "Yes, I’ve completed this section",

  




  



  
  
  

  // "opitonsChecked": ["Something", "another thing", "a third thing"]
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

  applicationData,
  
  settings: settings,
  // personalDetails: personalDetails,

  // Setting the sections that aren't able to be started yet
  // The section is enabled with a hidden inputs in the dependant sections
  "areaDetails": "canNotStartYet"

  // set a few things up to test
  // "anyAssessmentExpertise": "Yes",
  // "anyIndustryExpertise": "Yes",
  // "anyTeachingExpertise": "Yes",
  // "teachingExpertiseCompleted": "complete"  

}
