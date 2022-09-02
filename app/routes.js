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

// Select the tpe of expertise
router.post('/application/select-type-answer', function (req, res) {

  let selectedType = req.session.data.selectedType

  if (selectedType.includes("Assessment expertise")) {
    res.redirect('/application/expertise/assessment-expertise')
  } else if ( (!selectedType.includes("Assessment expertise")) && (selectedType.includes("Industry or occupational expertise")) ) {
    res.redirect('/application/expertise/industry-expertise')
  } else {
    res.redirect('/application/expertise/teaching-expertise')
  }

})

// Decide where to go form the Assessment expertise page
router.post('/application/assessment-expertise-answer', function (req, res) {

  let selectedType = req.session.data.selectedType

  if (selectedType.includes("Industry or occupational expertise")) {
    res.redirect('/application/expertise/industry-expertise')
  } else if ( (!selectedType.includes("Industry or occupational expertise")) && (selectedType.includes("Teaching, lecturing or training expertise")) ) {
    res.redirect('/application/expertise/teaching-expertise')
  } else if ( (!selectedType.includes("Industry or occupational expertise")) && (!selectedType.includes("Teaching, lecturing or training expertise")) ) {
    res.redirect('/application/expertise/review')
  }

})

// Decide where to go form the Industry or occupational expertise page
router.post('/application/industry-expertise-answer', function (req, res) {

  let selectedType = req.session.data.selectedType

  if (selectedType.includes("Teaching, lecturing or training expertise")) {
    res.redirect('/application/expertise/teaching-expertise')
  } else if (!selectedType.includes("Teaching, lecturing or training expertise")) {
    res.redirect('/application/expertise/review')
  }

})

// Do you want to add more expertise? 
router.post('/review-answer', function (req, res) {

  let addAnotherExpertise = req.session.data.addAnotherExpertise

    if (addAnotherExpertise === 'yes') {
      res.redirect('/application/expertise')
    } else {
      res.redirect('/application/sorry') 
  }

})

// Do you want to add another job? 
router.post('/review-jobs-answer', function (req, res) {

  let addAnotherJob = req.session.data.addAnotherJob

    if (addAnotherJob === 'Yes') {
      res.redirect('/application/experience-details/job-details')
    } else {
      res.redirect('/application/experience-details/section-completed') 
  }

})

// Add a qualification
router.post('/qualification-type-answer', function (req, res) {

  let addAnotherJob = req.session.data.addAnotherJob

    if (addAnotherJob === 'GCSEs') {
      res.redirect('/application/experience-details/job-details')
    } else {
      res.redirect('/application/experience-details/section-completed') 
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
