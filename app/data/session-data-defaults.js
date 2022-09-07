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
const subSectorSubjectAreasData = require('./subSectorSubjectAreasData.json')
const trasnsportData = require('./trasnsportData.json')
const qualificationData = require('./qualificationData.json')

// Setting the default layout settings
let settings = {
  // Methods of searching for subjects
  searchApproach: "Version 2"
}

module.exports = {

  routeData,
  agricultureData,
  allOccupationData,
  bussinessData,
  careData,
  cateringData,
  constructionData,
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
  subSectorSubjectAreasData,
  trasnsportData,
  qualificationData,
  settings: settings,

  // Setting the sections that aren't able to be started yet
  // This will be enabled through hidden inputs in the dependant sections
  // "experienceDetails": "canNotStartYet",
  "referenceDetails": "canNotStartYet"
}
