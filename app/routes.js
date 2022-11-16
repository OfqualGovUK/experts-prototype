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

// Are you currently a member of any professional bodies, associations or institutes?
router.post('/memberships-answer', function (req, res) {

  let anyMemberships = req.session.data.anyMemberships

    if (anyMemberships === 'Yes') {
      res.redirect('/application/professional-memberships/add-membership')
    } else {
      res.redirect('/application/professional-memberships/review') 
  }

})

// Did you want to add another membership?
router.post('/review-memberships-answer', function (req, res) {

  let addAnotherMembership = req.session.data.addAnotherMembership

    if (addAnotherMembership === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/professional-memberships/section-completed') 
  }

})

// Did you want to add another refernce?
router.post('/review-references-answer', function (req, res) {

  let addAnotherReference = req.session.data.addAnotherReference

    if (addAnotherReference === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/references/section-completed') 
  }

})

// Add a qualification
// router.post('/qualification-type-answer', function (req, res) {

//   let addAQualification = req.session.data.qualificationType

//     if (addAQualification === 'GCSEs') {
//       res.redirect('/application/education/add-gcse')
//     } else if (addAQualification === 'A/AS level or equivalent') {
//       res.redirect('/application/education/add-a-level')
//     } else if ( (addAQualification === 'Undergraduate degree') || (addAQualification === 'Postgraduate degree') ) {
//       res.redirect('/application/education/add-degree')
//     } else if (addAQualification === 'Other qualification or course') {
//       res.redirect('/application/education/add-other')
//     } else {
//       res.redirect('/application/sorry') 
//   }

// })

// Do you have any qualifications that are relevant to your application?
router.post('/qualifications-answer', function (req, res) {

  let anyQualifications = req.session.data.anyQualifications

    if (anyQualifications === 'Yes') {
      res.redirect('/application/education/add-qualifcation')
    } else {
      res.redirect('/application/education/review') 
  }

})

// Are you able to provide a copy of this qualification?
router.post('/upload-available-answer', function (req, res) {

  let uploadAvailable = req.session.data.qualUploadAvailable

    if (uploadAvailable === 'Yes') {
      res.redirect('/application/education/upload-qualification')
    } else {
      res.redirect('/application/education/review') 
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

// Do you have any assessment expertise?
router.post('/assessment-answer', function (req, res) {
  
  let anyAssessmentExpertise = req.session.data.anyAssessmentExpertise
  
  if (anyAssessmentExpertise === "Yes") {
    res.redirect('/application/assessment-expertise/assessment-expertise.html')
  } else {
    res.redirect('/application/assessment-expertise/review')
  }
  
})

// Do you have any industry or occupational expertise?
router.post('/industry-answer', function (req, res) {
  
  let anyIndustryExpertise = req.session.data.anyIndustryExpertise
  
  if (anyIndustryExpertise === "Yes") {
    res.redirect('/application/industry-expertise/add-details.html')
  } else {
    res.redirect('/application/industry-expertise/review')
  }
  
})

// Do you have any teaching or occupational expertise?
router.post('/teaching-answer', function (req, res) {
  
  let anyTeachingExpertise = req.session.data.anyTeachingExpertise
  
  if (anyTeachingExpertise === "Yes") {
    res.redirect('/application/teaching-expertise/currently-in-role.html')
  } else {
    res.redirect('/application/teaching-expertise/review')
  }
  
})

// // Which areas do you have expertise in?
// router.post('/expertise-type-answer', function (req, res) {
  
//   let selectedType = req.session.data.expertiseType.type
  
//   if (selectedType.includes("Assessment")) {
//     res.redirect('/application/expertise-type/assessment-expertise')
//   } else if ( (!selectedType.includes("Assessment")) && (selectedType.includes("Industry or occupational")) ) {
//     res.redirect('/application/expertise-type/industry-expertise')
//   } else {
//     res.redirect('/application/expertise-type/teaching-expertise')
//   }
  
// })

// Decide where to go form the Industry or occupational expertise page
router.post('/specific-subject-search-answer', function (req, res) {
  
  let searchBySubject = req.session.data.searchBySubject
  
  if (searchBySubject === "Subject") {
    res.redirect('/application/search/subject-search')
  } else {
    res.redirect('/application/search/sector-search')
  }
  
})

// Do you know the specific GCSEs, A-Levels, apprenticeships, T-Levels or subjects that you can provide expertise on?
router.post('/subject-search-answer', function (req, res) {
  
  let searchBySubject = req.session.data.searchBySubject
  
  if (searchBySubject === "Subject") {
    res.redirect('/application/search/subject-search')
  } else {
    res.redirect('/application/search/search-by-sector')
  }
  
})

// Do you have a specific sector/ industry that you can provide your expertise on?
router.post('/sector-search-answer', function (req, res) {

  let searchBySector = req.session.data.searchBySector

    if (searchBySector === 'Yes') {
      res.redirect('/application/search/sector-search')
    } else {
      res.redirect('/application/search/assessment-specialist') 
  }

})

// Is your expertise more general in assessment or teaching?
router.post('/assessment-specialst-answer', function (req, res) {

  let assessmentSpecialst = req.session.data.assessmentSpecialst

    if (assessmentSpecialst === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/sorry') 
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
  
  const assessmentExpertise = req.session.data.anyAssessmentExpertise
  const industryExpertise = req.session.data.anyIndustryExpertise
  const teachingExpertise = req.session.data.anyTeachingExpertise
  let hasMultipleExpertiseTypes = true

  //#region suggestions

  // suggestion...
  // const yesRegEx = new RegExp(/Yes/i);

  // const typesOfExpertise = [
  //   yesRegEx.test(assessmentExpertise),
  //   yesRegEx.test(industryExpertise),
  //   yesRegEx.test(teachingExpertise)
  // ]; // [true, false, true] or [true, false, false] etc...

  // if (typesOfExpertise.filter(x => x).length >= 2) {
  //   hasMultipleExpertiseTypes = true
  // } else {
  //   hasMultipleExpertiseTypes = false
  // }
  
  //#endregion


  // Has the user has selected at least 2 types of expertise
  // if ( ((assessmentExpertise == "Yes") && (industryExpertise == "Yes") && (teachingExpertise == "Yes")) ||
  // ((assessmentExpertise == "Yes") && (industryExpertise == "Yes")) ||
  // ((assessmentExpertise == "Yes") && (teachingExpertise == "Yes")) ||
  // ((industryExpertise == "Yes") && (teachingExpertise == "Yes") )) {
  //   hasMultipleExpertiseTypes = true
  // } else {
  //   hasMultipleExpertiseTypes = false
  // }

  // Has the user has selected at least 2 types of expertise
  const typesOfExpertise2 = [
    assessmentExpertise,
    industryExpertise,
    teachingExpertise
  ]; // [true, false, true] or [true, false, false] etc...

  if (typesOfExpertise2.filter(x => x == "Yes").length >= 2) {
    // this is just for this function 
    hasMultipleExpertiseTypes = true
    // this is to use in the nunjucks view
    req.session.data.hasMultipleExpertiseTypes = true 
  } else {
    hasMultipleExpertiseTypes = false
  }
  
  // if its an "other" qual type they need to specify qual type and level
  if (isMatch) {
    res.redirect('/application/search/select-qualification?referrer=subjectSearch')
  // the user has selected at least 2 areas of expertise  
  } else if (hasMultipleExpertiseTypes === true) {
    res.redirect('/application/search/select-expertise-type?referrer=subjectSearch')
  // the user has selected less than 2 areas of expertise so we skip that screen in the flow and go straight to the review page  
  } else {
    res.redirect('/application/search/review')
  }
})

// What type of expertise do you have for this industry or sector?
// Joe helped me write this one too

router.post('/select-level-answer', function (req, res) {

  const assessmentExpertise = req.session.data.anyAssessmentExpertise
  const industryExpertise = req.session.data.anyIndustryExpertise
  const teachingExpertise = req.session.data.anyTeachingExpertise
  let hasMultipleExpertiseTypes = true
 
  const typesOfExpertise2 = [
    assessmentExpertise,
    industryExpertise,
    teachingExpertise
  ]; // [true, false, true] or [true, false, false] etc...

  if (typesOfExpertise2.filter(x => x == "Yes").length >= 2) {
    // this is just for this function 
    hasMultipleExpertiseTypes = true
    // this is to use in the nunjucks view
    req.session.data.hasMultipleExpertiseTypes = true 
  } else {
    hasMultipleExpertiseTypes = false
  }
    
  // at least 2 expertise types have been selected so we need them to tell us more   
  if (hasMultipleExpertiseTypes === true) {
    res.redirect('/application/search/select-expertise-type')
  // must have selected only one type of expertise  
  } else {
    res.redirect('/application/search/review') 
  }

})

// Did you want to add another qualification?
router.post('/review-subjects-answer', function (req, res) {

  let addAnotherSubject = req.session.data.addAnotherSubject

    if (addAnotherSubject === 'Yes') {
      res.redirect('/application/search/search-by-subject')
    } else {
      res.redirect('/application/search/section-completed') 
  }

})


// Do you have the right to work in the UK?
router.post('/right-to-work-answer', function (req, res) {

  let rightToWork = req.session.data.rightToWork

    if (rightToWork === 'Yes') {
      res.redirect('/application/right-to-work/right-to-work-status')
    } else {
      res.redirect('/application/right-to-work/review') 
  }

})

// Do you have any potential conflicts of interests?
router.post('/conflict-of-interest-answer', function (req, res) {

  let conflictOfInterest = req.session.data.conflictOfInterest

    if (conflictOfInterest === 'Yes') {
      res.redirect('/application/conflict-of-interest/add-conflict')
    } else {
      res.redirect('/application/conflict-of-interest/review') 
  }

})

// Did you want to add another conflict of interest?
router.post('/review-conflict-of-interest-answer', function (req, res) {

  let addAnotherConflictOfInterest = req.session.data.addAnotherConflictOfInterest

    if (addAnotherConflictOfInterest === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/conflict-of-interest/section-completed') 
  }

})

// Do you want to answer the equality questions?
router.post('/equality-question-answer', function (req, res) {

  let equalityQuestionAnswer = req.session.data.equalityQuestionAnswer

    if (equalityQuestionAnswer === 'yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/how-did-you-hear-about-this-service') 
  }

})

// View the application in different states
// VTQ Application

// Sets up the tasklist with a completed application when you visit a link
router.all( '/populate-application-vtq', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataVTQ)  
  res.redirect('/application');
})

// Sets up the tasklist with a completed applicationwhen you visit a link
// The applicationStatus tells the prototype which status the aplication is in
router.all( '/application-submitted-vtq-in-review', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataVTQ)
  req.session.data.applicationStatus = "In review"

  res.redirect('/dashboard');
})

// Sets up the tasklist with a completed application when you visit a link
// The applicationStatus tells the prototype which status the aplication is in
router.all( '/application-submitted-vtq-accepted', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataVTQ)
  req.session.data.applicationStatus = "Application accepted"
  
  res.redirect('/dashboard');
})

// GQ Application

// Sets up the tasklist with a completed application when you visit a link
router.all( '/populate-application-gq', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)  
  res.redirect('/application');
})

// Sets up the tasklist with a completed applicationwhen you visit a link
// The applicationStatus tells the prototype which status the aplication is in
router.all( '/application-submitted-gq-in-review', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)
  req.session.data.applicationStatus = "In review"
  
  res.redirect('/dashboard');
})

// Sets up the tasklist with a completed application when you visit a link
// The applicationStatus tells the prototype which status the aplication is in
router.all( '/application-submitted-gq-accepted', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)  
  req.session.data.applicationStatus = "Application accepted"

  res.redirect('/dashboard');
})

// Sets up the tasklist with a completed application when you visit a link
// The applicationStatus tells the prototype which status the aplication is in
router.all( '/application-submitted-gq-action-required', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)  
  req.session.data.applicationStatus = "Action required"
  req.session.data.personalDetailsCompleted = "Action required"

  res.redirect('/dashboard');
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
      res.redirect('/register-your-interest/how-did-you-hear-about-us') 
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
