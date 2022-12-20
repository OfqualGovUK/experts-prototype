const e = require('express')
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

// // route for assessment specialist from task list (pre subject/evidence swap)
// // Redirect for users who only select Assessment as type of expertise
// router.get('/assessment-only', function (req, res) {

//   let expertiseType = req.session.data.expertiseType

//   // case-insensitive string match
//   let expertiseAssessmentRegex = new RegExp(/Assessment/i)
//   let expertiseTeachingRegex = new RegExp(/Teaching, lecturing or training/i)
//   let expertiseIndustryRegex = new RegExp(/Industry or occupational/i)

//   let isAssessment = expertiseAssessmentRegex.test(expertiseType)
//   let isTeaching = expertiseTeachingRegex.test(expertiseType)
//   let isIndustry = expertiseIndustryRegex.test(expertiseType)

//   let assessmentOnlyExpertise = true

//   if ((isAssessment == true) && (isTeaching == false) && (isIndustry == false)) {
//     // this is to use in the nunjucks view
//     req.session.data.assessmentOnlyExpertise = true 
//   } else {
//     assessmentOnlyExpertise = false
//   }

//   // only assessment expertise link is selected 
//   if ((isAssessment == true) && (isTeaching == false) && (isIndustry == false)) {
//     res.redirect('/application/search/assessment-subject')
//   } else {
//     res.redirect('/application/search')
//   }

// })

// Route for assessment expertise from task list
router.get('/assessment-type-answer', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentMarkingRegex = new RegExp(/Marking assessments/i)
  let assessmentModeratingRegex = new RegExp(/Moderating assessments/i)
  let assessmentDesigningRegex = new RegExp(/Designing and setting assessments/i)

  let isMarking = assessmentMarkingRegex.test(assessmentExpertise)
  let isModerating = assessmentModeratingRegex.test(assessmentExpertise)
  let isDesigning = assessmentDesigningRegex.test(assessmentExpertise)

  if (isMarking == true) {
    res.redirect('/application/assessment-expertise/add-details-marking')
  } else if (isModerating == true) {
    res.redirect('/application/assessment-expertise/add-details-moderating')
  } else if (isDesigning == true) {
    res.redirect('/application/assessment-expertise/add-details-designing')
  } else {
    res.redirect('/application/assessment-expertise/add-details-reviewing')
  }
  
})

// Route for assessment expertise from task list, once in progress or completed
router.get('/assessment-type-answer/review', function (req, res) {

  let assessmentExpertiseCompleted = req.session.data.assessmentExpertiseCompleted

  if (assessmentExpertiseCompleted === "complete") {
    res.redirect('/application/assessment-expertise/review')
  } else if (assessmentExpertiseCompleted === "inProgress") {
    res.redirect('/application/assessment-expertise/review')
  } 
  
})

// Route for assessment add details, from Marking 
router.get('/assessment-marking', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentModeratingRegex = new RegExp(/Moderating assessments/i)
  let assessmentDesigningRegex = new RegExp(/Designing and setting assessments/i)
  let assessmentReviewingRegex = new RegExp(/Reviewing assessment performance/i)

  let isModerating = assessmentModeratingRegex.test(assessmentExpertise)
  let isDesigning = assessmentDesigningRegex.test(assessmentExpertise)
  let isReviewing = assessmentReviewingRegex.test(assessmentExpertise)

  if (isModerating == true) {
    res.redirect('/application/assessment-expertise/add-details-moderating')
  } else if (isDesigning == true) {
    res.redirect('/application/assessment-expertise/add-details-designing')
  } else if (isReviewing == true) {
    res.redirect('/application/assessment-expertise/add-details-reviewing')
  } else {
    res.redirect('/application/assessment-expertise/review')
  }
  
})

// Route for assessment add details, from Moderating 
router.get('/assessment-moderating', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentDesigningRegex = new RegExp(/Designing and setting assessments/i)
  let assessmentReviewingRegex = new RegExp(/Reviewing assessment performance/i)

  let isDesigning = assessmentDesigningRegex.test(assessmentExpertise)
  let isReviewing = assessmentReviewingRegex.test(assessmentExpertise)

  if (isDesigning == true) {
    res.redirect('/application/assessment-expertise/add-details-designing')
  } else if (isReviewing == true) {
    res.redirect('/application/assessment-expertise/add-details-reviewing')
  } else {
    res.redirect('/application/assessment-expertise/review')
  }
  
})

// Route for assessment add details, from Designing 
router.get('/assessment-designing', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentReviewingRegex = new RegExp(/Reviewing assessment performance/i)

  let isReviewing = assessmentReviewingRegex.test(assessmentExpertise)

  if (isReviewing == true) {
    res.redirect('/application/assessment-expertise/add-details-reviewing')
  } else {
    res.redirect('/application/assessment-expertise/review')
  }
  
})

// Route for teaching expertise from task list
router.get('/teaching-type-answer', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingDevelopingRegex = new RegExp(/Developing learning materials/i)
  let teachingSeniorRegex = new RegExp(/Working in a senior role/i)

  let isDeveloping = teachingDevelopingRegex.test(teachingExpertise)
  let isSenior = teachingSeniorRegex.test(teachingExpertise)

  if (isDeveloping == true) {
    res.redirect('/application/teaching-expertise/add-details-developing')
  } else if (isSenior == true) {
    res.redirect('/application/teaching-expertise/add-details-senior-role')
  } else {
    res.redirect('/application/teaching-expertise/add-details-training-staff')
  }
  
})

// Route for teaching expertise from task list, once in progress or completed
router.get('/teaching-type-answer/review', function (req, res) {

  let teachingExpertiseCompleted = req.session.data.teachingExpertiseCompleted

  if (teachingExpertiseCompleted === "complete") {
    res.redirect('/application/assessment-expertise/review')
  } else if (teachingExpertiseCompleted === "inProgress") {
    res.redirect('/application/assessment-expertise/review')
  } 
  
})

// Route for teaching add details, from developing
router.get('/teaching-developing', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingSeniorRegex = new RegExp(/Working in a senior role/i)
  let teachingTrainingRegex = new RegExp(/Training other staff/i)

  let isSenior = teachingSeniorRegex.test(teachingExpertise)
  let isTraining = teachingTrainingRegex.test(teachingExpertise)

  if (isSenior == true) {
    res.redirect('/application/teaching-expertise/add-details-senior-role')
  } else if (isTraining == true) {
    res.redirect('/application/teaching-expertise/add-details-training-staff')
  } else {
    res.redirect('/application/teaching-expertise/review')
  }
  
})

// Route for teaching add details, from senior
router.get('/teaching-senior', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingTrainingRegex = new RegExp(/Training other staff/i)

  let isTraining = teachingTrainingRegex.test(teachingExpertise)

  if (isTraining == true) {
    res.redirect('/application/teaching-expertise/add-details-training-staff')
  } else {
    res.redirect('/application/teaching-expertise/review')
  }
  
})

// If areas of expertise is complete 
router.get('/assessment-only/review', function (req, res) {
  
  let adviseAreasCompleted = req.session.data.adviseAreasCompleted
  
  if (adviseAreasCompleted === "complete") {
    res.redirect('/application/search/review')
  } else {
    res.redirect('/application/search/')
  }
  
})

// Does your assessment expertise relate to a subject?
router.post('/assessment-subject-answer', function (req, res) {
  
  let assessmentSubject = req.session.data.assessmentSubject
  
  if (assessmentSubject === "Yes") {
    res.redirect('/application/search/subject-search?referrer=assessmentExpertise')
  } else {
    res.redirect('/application/search/assessment-qualifications?referrer=assessmentExpertise')
  }
  
})

// Does your assessment expertise relate to specific qualifications?
router.post('/assessment-qual-answer', function (req, res) {
  
  let assessmentQual = req.session.data.assessmentQual
  
  if (assessmentQual === "Yes") {
    res.redirect('/application/search/select-qualification')
  } else {
    res.redirect('/application/search/assessment-expertise')
  }
  
})

// This route has been contributed to by Joe Ingledew  
router.post('/subject-search-answer', function (req, res) {
  const qualType = req.session.data.resultQualType
  const qualLevel = req.session.data.resultLevel

  // case-insensitive string match
  const qualTypeRegex = new RegExp(/End-point assessment/i)
  const qualLevelRegex = new RegExp(/T Level/i)

  const isMatch = qualTypeRegex.test(qualType) || qualLevelRegex.test(qualLevel)

  // const assessmentExpertise = req.session.data.anyAssessmentExpertise
  // const industryExpertise = req.session.data.anyIndustryExpertise
  // const teachingExpertise = req.session.data.anyTeachingExpertise
  // let hasMultipleExpertiseTypes = true

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

  // // Has the user has selected at least 2 types of expertise 
  // const typesOfExpertise2 = [
  //   assessmentExpertise,
  //   industryExpertise,
  //   teachingExpertise
  // ]; // [true, false, true] or [true, false, false] etc...

  // if (typesOfExpertise2.filter(x => x == "Yes").length >= 2) {
  //   // this is just for this function 
  //   hasMultipleExpertiseTypes = true
  //   // this is to use in the nunjucks view
  //   req.session.data.hasMultipleExpertiseTypes = true 
  // } else {
  //   hasMultipleExpertiseTypes = false
  // }

  // if it's not End-point or T-level qual type they need to specify qual type and level
  if (isMatch == false) {
    res.redirect('/application/search/select-qualification')
  } else {
    res.redirect('/application/search/select-expertise-type')
  }
})

// // What type of expertise do you have for this industry or sector?
// // Joe helped me write this one too


// router.post('/select-level-answer', function (req, res) {  

//   const assessmentExpertise = req.session.data.anyAssessmentExpertise
//   const industryExpertise = req.session.data.anyIndustryExpertise
//   const teachingExpertise = req.session.data.anyTeachingExpertise
//   let hasMultipleExpertiseTypes = true
 
//   const typesOfExpertise2 = [
//     assessmentExpertise,
//     industryExpertise,
//     teachingExpertise
//   ]; // [true, false, true] or [true, false, false] etc...

//   if (typesOfExpertise2.filter(x => x == "Yes").length >= 2) {
//     // this is just for this function 
//     hasMultipleExpertiseTypes = true
//     // this is to use in the nunjucks view
//     req.session.data.hasMultipleExpertiseTypes = true 
//   } else {
//     hasMultipleExpertiseTypes = false
//   }
    
//   // at least 2 expertise types have been selected so we need them to tell us more    
//   if (hasMultipleExpertiseTypes === true) {
//     res.redirect('/application/search/select-expertise-type')
//   // must have selected only one type of expertise  
//   } else {
//       res.redirect('/application/search/review') 
//   }

// })

// After selecting subject type of expertise, go to the granular checkboxes for those selected
router.post('/expertise-granular', function (req, res) {
  let expertiseType = req.session.data.expertiseType

  // case-insensitive string match
  let expertiseAssessmentRegex = new RegExp(/Assessment/i)
  let expertiseTeachingRegex = new RegExp(/Teaching, lecturing or training/i)

  let isAssessment = expertiseAssessmentRegex.test(expertiseType)
  let isTeaching = expertiseTeachingRegex.test(expertiseType)

  if (isAssessment == true) {
    // this is to use in the nunjucks view
    req.session.data.isAssessment = true 
  } else {
    isAssessment = false
  }

  if (isTeaching == true) {
    // this is to use in the nunjucks view
    req.session.data.isTeaching = true 
  } else {
    isTeaching = false
  }

  if (isAssessment == true) {
    res.redirect('/application/search/assessment-expertise')
  } else if (isTeaching == true) {
    res.redirect('/application/search/teaching-expertise')
  } else {
    res.redirect('/application/search/review')
  }
})

// After completing granular assessment, go to the granular teaching or review screen?
router.post('/expertise-teaching-granular', function (req, res) {
  let expertiseType = req.session.data.expertiseType

  // case-insensitive string match
  let expertiseTeachingRegex = new RegExp(/Teaching, lecturing or training/i)

  let isTeaching = expertiseTeachingRegex.test(expertiseType)

  // if teaching, they need to say what types 
  if (isTeaching == true) {
    res.redirect('/application/search/teaching-expertise')
  } else {
    res.redirect('/application/search/review')
  }
})

// // After selecting subject type of expertise, go to the granular checkboxes for those selected
// router.post('/expertise-granular', function (req, res) {

//   let expertiseType = req.session.data.expertiseType

//   if (expertiseType === "Assessment") {
//     res.redirect('/application/search/assessment-expertise')
//   } else {
//     if (expertiseType === "Teaching, lecturing or training") {
//       res.redirect('/application/search/teaching-expertise') 
//     }
//     else {
//       res.redirect('/application/search/review')
//     }
//   }
// })

// // After completing granular assessment, go to the granular teaching or review screen?
// router.post('/expertise-teaching-granular', function (req, res) {

//   let expertiseType = req.session.data.expertiseType

//   if (expertiseType === 'Teaching, lecturing or training') {
//     res.redirect('/application/search/teaching-expertise')
//   } else {
//       res.redirect('/application/search/review')
//   }
// })

// For assessment only, qual only route - Do you want to add another qualification?
router.post('/review-subjects-answer', function (req, res) {  

  let addAnotherSubject = req.session.data.addAnotherSubject
  let assessmentQual = req.session.data.assessmentQual

  if (assessmentQual === 'Yes') {
    if (addAnotherSubject === 'Yes') {
      res.redirect('/application/search/select-qualification')
    } else {
      res.redirect('/application/search/section-completed') 
    }
  } else {
    if (addAnotherSubject === 'Yes') {
      res.redirect('/application/search/subject-search')
    } else {
      res.redirect('/application/search/section-completed') 
    }
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
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-vtq-in-review', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataVTQ)
  
  res.redirect('/dashboard?applicationStatus=In review');
})

// Sets up the tasklist with a completed application when you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-vtq-accepted', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataVTQ)
  
  res.redirect('/dashboard?applicationStatus=Application accepted');
})

// GQ Application

// Sets up the tasklist with a completed application when you visit a link
router.all( '/populate-application-gq', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)  
  res.redirect('/application');
})

// Sets up the tasklist with a completed applicationwhen you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-gq-in-review', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)
  
  res.redirect('/dashboard?applicationStatus=In review');
})

// Sets up the tasklist with a completed application when you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-gq-accepted', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)
  
  res.redirect('/dashboard?applicationStatus=Application accepted');
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
