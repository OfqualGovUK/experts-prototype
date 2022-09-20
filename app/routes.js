const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Example folder

// Do you want to search for a thing?
router.post('/branching-question-answer', function (req, res) {

  let doWeSearch = req.session.data.doWeSearch

  if (doWeSearch === 'Yes') {
      res.redirect('/example-folder/search-for-subject')
    } else {
      res.redirect('/example-folder/check-answers')
  }

})

// ------ Apply to provide expertise ----- //

// Account

// Do you already have an account?
router.post('/existing-account-answer', function (req, res) {

  let existingAccount = req.session.data.existingAccount

  if (existingAccount === 'Yes, sign in') {
      res.redirect('/account/check-email')
    } else {
      res.redirect('/account/create-account')
  }

})

// Select the area
router.post('/application/select-area-answer', function (req, res) {

  let selectedArea = req.session.data.selectedArea

  if (selectedArea === "Academic subjects") {
      res.redirect('/application/expertise/select-subject')
    } else if (selectedArea === "Vocational, sector or industry") {
      res.redirect('/application/expertise/select-sector')
    }

})

// Select the sector
router.post('/application/select-sector-answer', function (req, res) {

  let selectedRoute = req.session.data.selectedRoute

  if (selectedRoute === "I can't find my sector") {
      res.redirect('/application/no-sector')
    } else {
      res.redirect('/application/expertise/select-occupation')
  }

})

// Do you want to add more expertise? 
router.post('/review-answer', function (req, res) {

  let addAnotherExpertise = req.session.data.addAnotherExpertise

    if (addAnotherExpertise === 'yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/sorry') 
  }

})

// Do you want to add another job? 
router.post('/review-jobs-answer', function (req, res) {

  let addAnotherJob = req.session.data.addAnotherJob

    if (addAnotherJob === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/experience-details/section-completed') 
  }

})

// Add a qualification
router.post('/qualification-type-answer', function (req, res) {

  let addAQualification = req.session.data.qualificationType

    if (addAQualification === 'GCSEs') {
      res.redirect('/application/education/add-gcse')
    } else if (addAQualification === 'A/AS level or equivalent') {
      res.redirect('/application/education/add-a-level')
    } else if ( (addAQualification === 'Undergraduate degree') || (addAQualification === 'Postgraduate degree') ) {
      res.redirect('/application/education/add-degree')
    } else if (addAQualification === 'Other qualification or course') {
      res.redirect('/application/education/add-other')
    } else {
      res.redirect('/application/sorry') 
  }

})

// Did you want to add another qualification?
router.post('/review-qualifications-answer', function (req, res) {

  let addAnotherqualification = req.session.data.addAnotherqualification

    if (addAnotherqualification === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/education/section-completed') 
  }

})

// Do you have any professional achievements?
router.post('/achievement-answer', function (req, res) {
  
  let anyAchievement = req.session.data.anyAchievement
  
  if (anyAchievement === 'Yes') {
    res.redirect('/application/professional-achievements/add-achievements')
  } else {
    res.redirect('/application/professional-achievements/section-completed') 
  }
  
})

// Which areas do you have expertise in?
router.post('/expertise-type-answer', function (req, res) {
  
  let selectedType = req.session.data.expertiseType.type
  
  if (selectedType.includes("Assessment")) {
    res.redirect('/application/expertise-type/assessment-expertise')
  } else if ( (!selectedType.includes("Assessment")) && (selectedType.includes("Industry or occupational")) ) {
    res.redirect('/application/expertise-type/industry-expertise')
  } else {
    res.redirect('/application/expertise-type/teaching-expertise')
  }
  
})

// Decide where to go form the Assessment expertise page
router.post('/assessment-expertise-answer', function (req, res) {
  
  let selectedType = req.session.data.expertiseType.type
  
  if (selectedType.includes("Industry or occupational")) {
    res.redirect('/application/expertise-type/industry-expertise')
  } else if ( (!selectedType.includes("Industry or occupational")) && (selectedType.includes("Teaching, lecturing or training")) ) {
    res.redirect('/application/expertise-type/teaching-expertise')
  } else if ( (!selectedType.includes("Industry or occupational")) && (!selectedType.includes("Teaching, lecturing or training")) ) {
    res.redirect('/application/expertise-type/review')
  }
  
})

// Decide where to go form the Industry or occupational expertise page
router.post('/industry-expertise-answer', function (req, res) {
  
  let selectedType = req.session.data.expertiseType.type
  
  if (selectedType.includes("Teaching, lecturing or training")) {
    res.redirect('/application/expertise-type/teaching-expertise')
  } else if (!selectedType.includes("Teaching, lecturing or training")) {
    res.redirect('/application/expertise-type/review')
  }
  
})

// Decide where to go form the Industry or occupational expertise page
router.post('/search-type-answer', function (req, res) {
  
  let searchType = req.session.data.searchType
  
  if (searchType === "Yes") {
    res.redirect('/application/search/subject-search')
  } else {
    res.redirect('/application/search/sector-search')
  }
  
})

// Did you want to add another qualification?
router.post('/review-subjects-answer', function (req, res) {

  let addAnotherqualification = req.session.data.addAnotherSubject

    if (addAnotherqualification === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/search/section-completed') 
  }

})

// This route has been contributed to by Joe Ingledew
router.post('/application/search/subject-search-answer', function (req, res) {
  const qualType = req.session.data.resultQualType
  const qualLevel = req.session.data.resultLevel
  
  // case-insensitive string match
  const qualTypeRegex = new RegExp(/Other qualification type/i)
  const qualLevelRegex = new RegExp(/Other qualification level/i)

  const isMatch = qualTypeRegex.test(qualType) || qualLevelRegex.test(qualLevel)

  // TODO for Jesse
  if (isMatch) {
    // if its an "other" qual type they need ot specify qual type and level
    res.redirect('/application/search/select-qualification')
  } else {
    res.redirect('/application/search/review')
  }
})

// Did you want to add another qualification?
router.post('/right-to-work-answer', function (req, res) {

  let rightToWork = req.session.data.rightToWork

    if (rightToWork === 'Yes') {
      res.redirect('/application/right-to-work/right-to-work-status')
    } else {
      res.redirect('/application/right-to-work/review') 
  }

})

// ------ Register your interest  ----- //

// Example folder

router.post('/select-route-answer', function (req, res) {

  let selectedRoute = req.session.data.route

    if (selectedRoute === 'Agriculture, environmental and animal care') {
      res.redirect('/register-your-interest/select-pathways-agriculture')
    } else if (selectedRoute === 'Business and administration') {
      res.redirect('/register-your-interest/select-pathways-business')
    } else if (selectedRoute === 'Care services') {
      res.redirect('/register-your-interest/select-levels-care-services') 
    }

})

router.post('/add-another-answer', function (req, res) {

  let addAnother = req.session.data.addAnother

    if (addAnother === 'yes') {
      res.redirect('/register-your-interest/select-route')
    } else {
      res.redirect('/register-your-interest/review') 
  }

})


// Catch all route
// Used for sendig data on the query string 

router.get('*', function(req, res, next){
  
  if (req.query){
    res.locals.query = req.query
  }

  next()
})

module.exports = router
