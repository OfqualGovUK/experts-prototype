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

// GOV.UK One Login

// Do you already have a GOV.UK One Login account?
router.post('/existing-account-answer', function (req, res) {

  let existingAccount = req.session.data.existingAccount

  if (existingAccount === 'Yes, sign in') {
      res.redirect('/one-login/check-email')
    } else {
      res.redirect('/one-login/create-account')
  }

})

// gov.uk log in - security code option 
router.post('/security-code-option', function (req, res) {

  let securityOption = req.session.data.securityCodeOption

  if (securityOption === 'Text message') {
      res.redirect('/one-login/mobile')
    } else {
      res.redirect('/one-login/authenticator-app')
  }

})

// gov.uk log in - route after mobile code  
router.post('/phone-code', function (req, res) {

  let linkReferral = req.session.data.referrer

  if (linkReferral === 'createAccount') {
      res.redirect('/one-login/account-created')
    } if (linkReferral === 'existingSpecialist') {
      res.redirect('/account?applicationStatus=Submitted')
    } else {
      res.redirect('/application')
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
      res.redirect('/application/work-history/section-completed') 
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
      res.redirect('/application/qualifications/add-qualifcation')
    } else {
      res.redirect('/application/qualifications/review') 
  }

})

// Are you able to provide a copy of this qualification?
router.post('/upload-available-answer', function (req, res) {

  let uploadAvailable = req.session.data.qualUploadAvailable

    if (uploadAvailable === 'Yes') {
      res.redirect('/application/qualifications/upload-qualification')
    } else {
      res.redirect('/application/qualifications/review') 
  }

})

// Did you want to add another qualification?
router.post('/review-qualifications-answer', function (req, res) {

  let addAnotherqualification = req.session.data.addAnotherqualification

    if (addAnotherqualification === 'Yes') {
      res.redirect('/application/sorry')
    } else {
      res.redirect('/application/qualifications/section-completed') 
  }

})

// // route for assessment specialist from task list (pre subject/evidence swap)
// // Redirect for users who only select Assessment as type of expertise
// router.get('/assessment-only', function (req, res) {

//   let expertiseType = req.session.data.expertiseType

//   // case-insensitive string match
//   let expertiseAssessmentRegex = new RegExp(/Assessment/i)
//   let expertiseTeachingRegex = new RegExp(/Teaching, lecturing or training/i)
//   let expertiseIndustryRegex = new RegExp(/Industry, occupational or professional/i)

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
router.all('/assessment-type-answer', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentDesigningRegex = new RegExp(/Designing and developing assessments/i)
  let assessmentJudgementRegex = new RegExp(/Making assessment judgements/i)
  let assessmentStandardSettingRegex = new RegExp(/Standard setting and awarding qualifications/i)
  let assessmentEvaluatingRegex = new RegExp(/Evaluating assessments or assessment approaches/i)
  
  let isDesigning = assessmentDesigningRegex.test(assessmentExpertise)
  let isJudgement = assessmentJudgementRegex.test(assessmentExpertise)
  let isStandardSetting = assessmentStandardSettingRegex.test(assessmentExpertise)
  let isEvaluating = assessmentEvaluatingRegex.test(assessmentExpertise)

  if (isDesigning == true) {
    // this is to use in the nunjucks view
    req.session.data.isDesigning = true 
  } else {
    isDesigning = false
  }

  if (isJudgement == true) {
    // this is to use in the nunjucks view
    req.session.data.isJudgement = true 
  } else {
    isJudgement = false
    req.session.data.isJudgement = false
  }

  if (isStandardSetting == true) {
    // this is to use in the nunjucks view
    req.session.data.isStandardSetting = true 
  } else {
    isStandardSetting = false
    req.session.data.isStandardSetting = false 
  }

  if (isEvaluating == true) {
    // this is to use in the nunjucks view
    req.session.data.isEvaluating = true 
  } else {
    isEvaluating = false
    req.session.data.isEvaluating = false 
  }

  if (isDesigning == true) {
    res.redirect('/application/assessment-experience/add-details-designing-developing')
  } else if (isJudgement == true) {
    res.redirect('/application/assessment-experience/add-details-making-judgements')
  } else if (isStandardSetting == true) {
    res.redirect('/application/assessment-experience/add-details-standard-setting')
  } else {
    res.redirect('/application/assessment-experience/add-details-evaluating')
  }
  
})

// Route for assessment expertise from task list, once in progress or completed
router.all('/assessment-type-answer/review', function (req, res) {

  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentDesigningRegex = new RegExp(/Designing and developing assessments/i)
  let assessmentJudgementRegex = new RegExp(/Making assessment judgements/i)
  let assessmentStandardSettingRegex = new RegExp(/Standard setting and awarding qualifications/i)
  let assessmentEvaluatingRegex = new RegExp(/Evaluating assessments or assessment approaches/i)
  
  let isDesigning = assessmentDesigningRegex.test(assessmentExpertise)
  let isJudgement = assessmentJudgementRegex.test(assessmentExpertise)
  let isStandardSetting = assessmentStandardSettingRegex.test(assessmentExpertise)
  let isEvaluating = assessmentEvaluatingRegex.test(assessmentExpertise)

  if (isDesigning == true) {
    // this is to use in the nunjucks view
    req.session.data.isDesigning = true 
  } else {
    isDesigning = false
  }
  
  if (isJudgement == true) {
    // this is to use in the nunjucks view
    req.session.data.isJudgement = true 
  } else {
    isJudgement = false
    req.session.data.isJudgement = false
  }

  if (isStandardSetting == true) {
    // this is to use in the nunjucks view
    req.session.data.isStandardSetting = true 
  } else {
    isStandardSetting = false
    req.session.data.isStandardSetting = false 
  }
  
  if (isEvaluating == true) {
    // this is to use in the nunjucks view
    req.session.data.isEvaluating = true 
  } else {
    isEvaluating = false
    req.session.data.isEvaluating = false 
  }

  let assessmentExpertiseCompleted = req.session.data.assessmentExpertiseCompleted

  if (assessmentExpertiseCompleted === "complete") {
    res.redirect('/application/assessment-experience/review')
  } else if (assessmentExpertiseCompleted === "inProgress") {
    res.redirect('/application/assessment-experience/review')
  } 
  
})

// Route for assessment add details, from Designing 
router.get('/assessment-designing', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentJudgementRegex = new RegExp(/Making assessment judgements/i)
  let assessmentStandardSettingRegex = new RegExp(/Standard setting and awarding qualifications/i)
  let assessmentEvaluatingRegex = new RegExp(/Evaluating assessments or assessment approaches/i)
  
  let isJudgement = assessmentJudgementRegex.test(assessmentExpertise)
  let isStandardSetting = assessmentStandardSettingRegex.test(assessmentExpertise)
  let isEvaluating = assessmentEvaluatingRegex.test(assessmentExpertise)

  if (isJudgement == true) {
    res.redirect('/application/assessment-experience/add-details-making-judgements')
  } else if (isStandardSetting == true) {
    res.redirect('/application/assessment-experience/add-details-standard-setting')
  } else if (isEvaluating == true) {
    res.redirect('/application/assessment-experience/add-details-evaluating')
  } else {
    res.redirect('/application/assessment-experience/review')
  }
  
})

// Route for assessment add details, from judgement 
router.get('/assessment-judgement', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentStandardSettingRegex = new RegExp(/Standard setting and awarding qualifications/i)
  let assessmentEvaluatingRegex = new RegExp(/Evaluating assessments or assessment approaches/i)
  
  let isStandardSetting = assessmentStandardSettingRegex.test(assessmentExpertise)
  let isEvaluating = assessmentEvaluatingRegex.test(assessmentExpertise)

  if (isStandardSetting == true) {
    res.redirect('/application/assessment-experience/add-details-standard-setting')
  } else if (isEvaluating == true) {
    res.redirect('/application/assessment-experience/add-details-evaluating')
  } else {
    res.redirect('/application/assessment-experience/review')
  }
  
})

// Route for assessment add details, from standard setting 
router.get('/assessment-standard-setting', function (req, res) {
  let assessmentExpertise = req.session.data.assessmentExpertiseType

  // case-insensitive string match
  let assessmentEvaluatingRegex = new RegExp(/Evaluating assessments or assessment approaches/i)
  
  let isEvaluating = assessmentEvaluatingRegex.test(assessmentExpertise)

  if (isEvaluating == true) {
    res.redirect('/application/assessment-experience/add-details-evaluating')
  } else {
    res.redirect('/application/assessment-experience/review')
  }
  
})

// Route for teaching expertise from task list
router.all('/teaching-type-answer', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingLecturingRegex = new RegExp(/Teaching or lecturing/i)
  let teachingTrainingRegex = new RegExp(/Training /i)
  let teachingEducationalManagementRegex = new RegExp(/Educational management/i)
  let teachingTeacherTrainingRegex = new RegExp(/Teacher training/i)

  let isLecturing = teachingLecturingRegex.test(teachingExpertise)
  let isTraining = teachingTrainingRegex.test(teachingExpertise)
  let isEducationalManagement = teachingEducationalManagementRegex.test(teachingExpertise)
  let isTeacherTraining = teachingTeacherTrainingRegex.test(teachingExpertise)

  if (isLecturing == true) {
    // this is to use in the nunjucks view
    req.session.data.isLecturing = true 
  } else {
    isLecturing = false
    req.session.data.isLecturing = false
  }
  
  if (isTraining == true) {
    // this is to use in the nunjucks view
    req.session.data.isTraining = true 
  } else {
    isTraining = false
    req.session.data.isTraining = false 
  }

  if (isEducationalManagement == true) {
    // this is to use in the nunjucks view
    req.session.data.isEducationalManagement = true 
  } else {
    isEducationalManagement = false
    req.session.data.isEducationalManagement = false 
  }

  if (isTeacherTraining == true) {
    // this is to use in the nunjucks view
    req.session.data.isTeacherTraining = true 
  } else {
    isTeacherTraining = false
    req.session.data.isTeacherTraining = false
  }

  if (isLecturing == true) {
    res.redirect('/application/teaching-experience/add-details-teaching-lecturing')
  } else if (isTraining == true) {
    res.redirect('/application/teaching-experience/add-details-training')
  } else if (isEducationalManagement == true) {
    res.redirect('/application/teaching-experience/add-details-educational-management')
  } else {
    res.redirect('/application/teaching-experience/add-details-teacher-training')
  }
  
})

// Teaching expertise. Set url here so the review screen comes through routes.js to recheck 
// what teaching checkboxes have been selected, in case the user has amended the answer. 
router.get('/teaching-experience', function (req, res) {
    res.redirect('/application/teaching-experience/')
})

// Route for teaching expertise from task list, once in progress or completed
router.all('/teaching-experience/review', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingLecturingRegex = new RegExp(/Teaching or lecturing/i)
  let teachingTrainingRegex = new RegExp(/Training /i)
  let teachingEducationalManagementRegex = new RegExp(/Educational management/i)
  let teachingTeacherTrainingRegex = new RegExp(/Teacher training/i)

  let isLecturing = teachingLecturingRegex.test(teachingExpertise)
  let isTraining = teachingTrainingRegex.test(teachingExpertise)
  let isEducationalManagement = teachingEducationalManagementRegex.test(teachingExpertise)
  let isTeacherTraining = teachingTeacherTrainingRegex.test(teachingExpertise)

  if (isLecturing == true) {
    // this is to use in the nunjucks view
    req.session.data.isLecturing = true 
  } else {
    isLecturing = false
    req.session.data.isLecturing = false
  }
  
  if (isTraining == true) {
    // this is to use in the nunjucks view
    req.session.data.isTraining = true 
  } else {
    isTraining = false
    req.session.data.isTraining = false 
  }

  if (isEducationalManagement == true) {
    // this is to use in the nunjucks view
    req.session.data.isEducationalManagement = true 
  } else {
    isEducationalManagement = false
    req.session.data.isEducationalManagement = false 
  }

  if (isTeacherTraining == true) {
    // this is to use in the nunjucks view
    req.session.data.isTeacherTraining = true 
  } else {
    isTeacherTraining = false
    req.session.data.isTeacherTraining = false
  }

  let teachingExpertiseCompleted = req.session.data.teachingExpertiseCompleted

  if (teachingExpertiseCompleted === "complete") {
    res.redirect('/application/teaching-experience/review')
  } else if (teachingExpertiseCompleted === "inProgress") {
    res.redirect('/application/teaching-experience/review')
  } 
  
})

// Route for teaching add details, from lecturing
router.get('/teaching-lecturing', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingTrainingRegex = new RegExp(/Training /i)
  let teachingEducationalManagementRegex = new RegExp(/Educational management/i)
  let teachingTeacherTrainingRegex = new RegExp(/Teacher training/i)

  let isTraining = teachingTrainingRegex.test(teachingExpertise)
  let isEducationalManagement = teachingEducationalManagementRegex.test(teachingExpertise)
  let isTeacherTraining = teachingTeacherTrainingRegex.test(teachingExpertise)

  if (isTraining == true) {
    res.redirect('/application/teaching-experience/add-details-training')
  } else if (isEducationalManagement == true) {
    res.redirect('/application/teaching-experience/add-details-educational-management')
  } else if (isTeacherTraining == true) {
    res.redirect('/application/teaching-experience/add-details-teacher-training')
  } else {
    res.redirect('/application/teaching-experience/review')
  }
  
})

// Route for teaching add details, from training
router.get('/teaching-training', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingEducationalManagementRegex = new RegExp(/Educational management/i)
  let teachingTeacherTrainingRegex = new RegExp(/Teacher training/i)

  let isEducationalManagement = teachingEducationalManagementRegex.test(teachingExpertise)
  let isTeacherTraining = teachingTeacherTrainingRegex.test(teachingExpertise)

  if (isEducationalManagement == true) {
    res.redirect('/application/teaching-experience/add-details-educational-management')
  } else if (isTeacherTraining == true) {
    res.redirect('/application/teaching-experience/add-details-teacher-training')
  } else {
    res.redirect('/application/teaching-experience/review')
  }
  
})

// Route for teaching add details, from educational management
router.get('/teaching-educational', function (req, res) {
  let teachingExpertise = req.session.data.teachingExpertiseType

  // case-insensitive string match
  let teachingTeacherTrainingRegex = new RegExp(/Teacher training/i)

  let isTeacherTraining = teachingTeacherTrainingRegex.test(teachingExpertise)

  if (isTeacherTraining == true) {
    res.redirect('/application/teaching-experience/add-details-teacher-training')
  } else {
    res.redirect('/application/teaching-experience/review')
  }
  
})

// If areas of experience is complete 
router.get('/assessment-only/review', function (req, res) {
  
  let adviseAreasCompleted = req.session.data.adviseAreasCompleted
  
  if (adviseAreasCompleted === "complete") {
    res.redirect('/application/search/review')
  } else {
    res.redirect('/application/search/')
  }
  
})

// Does your assessment experience relate to a subject?
router.post('/assessment-subject-answer', function (req, res) {
  
  let assessmentSubject = req.session.data.assessmentSubject
  
  if (assessmentSubject === "Yes") {
    res.redirect('/application/search/subject-search?referrer=assessmentExpertise')
  } else {
    res.redirect('/application/search/assessment-qualifications?referrer=assessmentExpertise')
  }
  
})

// Does your assessment experience relate to specific qualifications?
router.post('/assessment-qual-answer', function (req, res) {
  
  let assessmentQual = req.session.data.assessmentQual
  
  if (assessmentQual === "Yes") {
    res.redirect('/application/search/select-qualification')
  } else {
    res.redirect('/application/search/assessment-experience')
  }
  
})

// This route has been contributed to by Joe Ingledew  
router.get('/subject-search-answer', function (req, res) {
  const qualType = req.session.data.resultQualType

  let assessmentReferral = req.session.data.referrer

  // case-insensitive string match
  const qualTypeRegex = new RegExp(/End-point assessment/i)
  const qualLevelRegex = new RegExp(/T Level/i)

  const isMatch = qualTypeRegex.test(qualType) || qualLevelRegex.test(qualType)

  // if it's not End-point or T-level qual type they need to specify qual type and level
  if (assessmentReferral === "assessmentExpertise") {
    if (isMatch == false) {
      res.redirect('/application/search/select-qualification')
    } else {
      res.redirect('/application/search/assessment-experience')
    }
  } else if (isMatch == false) {
    res.redirect('/application/search/select-qualification')
  } else {
    res.redirect('/application/search/select-expertise-type')
  }
})

// After selecting level, if assessment only they go to assessment granular checkboxes. 
// Otherwise user needs to select expertise type
router.post('/select-subject-level', function (req, res) {

  let assessmentReferral = req.session.data.referrer

  if (assessmentReferral === "assessmentExpertise") {
    res.redirect('/application/search/assessment-experience')
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
    res.redirect('/application/search/assessment-experience')
  } else if (isTeaching == true) {
    res.redirect('/application/search/teaching-experience')
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
    res.redirect('/application/search/teaching-experience')
  } else {
    res.redirect('/application/search/review')
  }
})

// // After selecting subject type of experience, go to the granular checkboxes for those selected
// router.post('/expertise-granular', function (req, res) {

//   let expertiseType = req.session.data.expertiseType

//   if (expertiseType === "Assessment") {
//     res.redirect('/application/search/assessment-experience')
//   } else {
//     if (expertiseType === "Teaching, lecturing or training") {
//       res.redirect('/application/search/teaching-experience') 
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
//     res.redirect('/application/search/teaching-experience')
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

// Route for identity checks, from task list
router.post('/identity-check-answer', function (req, res) {
  
  let identityCheck = req.session.data.identityCheckType

  if (identityCheck === 'A UK or Irish passport') {
    res.redirect('/application/verify-identity/passport-upload')
  } else if (identityCheck === 'A UK or Irish birth or adoption certificate and a letter from a government agency or employer that includes your full name and national insurance number') {
    res.redirect('/application/verify-identity/birth-certificate-upload') 
  } else {
    res.redirect('/application/verify-identity/no-id')
  } 

  // case-insensitive string match
  // let idPassportRegex = new RegExp(/A UK or Irish passport/i)
  // let idCertificateRegex = new RegExp(/A UK or Irish birth or adoption certificate and a letter from a government agency or employer that includes your full name and national insurance number/i)
  // let idNoneRegex = new RegExp(/None of the documents listed/i)
  
  // let isPassport = idPassportRegex.test(identityCheck)
  // let isCertificate = idCertificateRegex.test(identityCheck)
  // let isNone = idNoneRegex.test(identityCheck)

  // if (isPassport == true) {
  //   // this is to use in the nunjucks view
  //   req.session.data.isPassport = true 
  // } else {
  //   isPassport = false
  // }

  // if (isCertificate == true) {
  //   // this is to use in the nunjucks view
  //   req.session.data.isCertificate = true 
  // } else {
  //   isCertificate = false
  // }

  // if (isNone == true) {
  //   // this is to use in the nunjucks view
  //   req.session.data.isNone = true 
  // } else {
  //   isNone = false
  // }

  // if (isPassport == true) {
  //   res.redirect('/application/verify-identity/passport-upload')
  // } else if (isCertificate == true) {
  //   res.redirect('/application/verify-identity/birth-certificate-upload')
  // } else {
  //   res.redirect('/application/verify-identity/no-id')
  // } 
  
})

// Do you want to answer the equality questions?
// router.post('/equality-question-answer', function (req, res) {

//   let equalityQuestionAnswer = req.session.data.equalityQuestionAnswer

//     if (equalityQuestionAnswer === 'yes') {
//       res.redirect('/application/sorry')
//     } else {
//       res.redirect('/application/how-did-you-hear-about-this-service') 
//   }

// })

// View the application in different states

// Before submit + after submit (awaiting decision state only)
// GQ Application

// Sets up the tasklist with a completed application when you visit a link
router.all( '/populate-application-gq', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)  
  res.redirect('/application');
})

// Sets up the tasklist with a completed application when you visit a link
router.all( '/application-submitted-gq', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataGQ)
  
  res.redirect('/account?applicationStatus=Awaiting decision');
})

// VTQ Application
// Sets up the tasklist with a completed application when you visit a link
router.all( '/populate-application-vtq', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataVTQ)  
  res.redirect('/application');
})

// Sets up the tasklist with a completed applicationwhen you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-vtq', function (req, res) {
  req.session.data = Object.assign(req.session.data.awaitingDecision)
  
  res.redirect('/account?applicationStatus=Awaiting decision');
})

// Assessment Specialist (no subject) Application
// Sets up the tasklist with a completed application when you visit a link
router.all( '/populate-application-as', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataAssessmentSpecialist)  
  res.redirect('/application');
})

// Sets up the tasklist with a completed application when you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-as', function (req, res) {
  req.session.data = Object.assign(req.session.data.completedApplicationDataAssessmentSpecialist)
  
  res.redirect('/account?applicationStatus=Awaiting decision');
})



// After submit (account) - with different status 

// Sets up the tasklist with a completed application when you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-action-required', function (req, res) {
  req.session.data = Object.assign(req.session.data.actionRequired) 
  
  res.redirect('/account?applicationStatus=Action required');
})

// Sets up the tasklist with a completed application when you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-accepted', function (req, res) {
  req.session.data = Object.assign(req.session.data.allAccepted)
  
  res.redirect('/account?applicationStatus=Accepted');
})

// Sets up the tasklist with a completed application when you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-rejected', function (req, res) {
  req.session.data = Object.assign(req.session.data.allRejected)
  
  res.redirect('/account?applicationStatus=Rejected');
})

// Sets up the tasklist with a completed application when you visit a link
// The '?applicationStatus=...' is tells the prototype which status the aplication is in
router.all( '/application-submitted-accepted-rejected', function (req, res) {
  req.session.data = Object.assign(req.session.data.acceptedRejected)
  
  res.redirect('/account?applicationStatus=Accepted');
})


// Enable all Evidence 
// Sets up the tasklist 
router.all( '/admin-settings', function (req, res) {
    req.session.data = Object.assign(req.session.data.fillSubjectsData)  
    
    res.redirect('/application');
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


// ------ Accounts area ------

// Account - Your details - personal details request to change
router.all('/change-personal-details', function (req, res) {

  req.session.data.accountMessageSubject = "Request a change to personal details"
  res.redirect('/account/messages/send-message');
  
})

// Account - Your details - subjects request to change
router.all('/change-subjects', function (req, res) {

  req.session.data.accountMessageSubject = "Request to add or remove subject or occupational areas"
  res.redirect('/account/messages/send-message');
  
})

// Account - Your details - Reference, add new
router.all('/add-reference', function (req, res) {

  req.session.data.accountMessageSubject = "Details of another reference"
  res.redirect('/account/messages/send-message');
  
})

// Account - Your details - COI request to change
router.all('/change-coi', function (req, res) {

  req.session.data.accountMessageSubject = "Request to change, add or delete conflict of interest"
  res.redirect('/account/messages/send-message');
  
})

// Account - Your details - self declaration request to change
router.all('/change-self-declaration', function (req, res) {

  req.session.data.accountMessageSubject = "Request changes to self declaration"
  res.redirect('/account/messages/send-message');
  
})

// Account - Messages - change unread status 
router.all('/message-further-evidence', function (req, res) {

  req.session.data.accountMessageMakingJudgements = "Read"
  res.redirect('/account/messages/further-evidence-required');
  
})

router.all('/message-further-evidence-ttraining', function (req, res) {

  req.session.data.accountMessageTeacherTraining = "Read"
  res.redirect('/account/messages/further-evidence-required-ttraining');
  
})
