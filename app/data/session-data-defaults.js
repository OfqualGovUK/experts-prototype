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
const countryData = require('./countryData.json')
const subjectSearch2Data = require('./subjectSearchData2.json')
const subSectorSubjectAreasData = require('./subSectorSubjectAreasData.json')
const qualificationData = require('./qualificationData.json')

// Setting the default layout settings
var settings = {
  enableErrors: "false"
}

// This is all the data needed to populate a VTQ completed application
var completedApplicationDataVTQ = {

  // Personal details
  "fullName": "Hans Bowser",
  "email": "hans@email.com",
  "telephone": "07701123123",
  "whereDoYouLive": "In the UK",
  "addressLine1": "01 School Lane",
  "townOrCity": "Birmingham",
  "postCode": "B2 4QA",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "British Occupational Hygiene Society",
  "awordingOrganisation": "British Occupational Hygiene Society",
  "qualName": "Certificate of Competence in Asbestos",
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

  // Subjects
  "selectedSubject": "Asbestos (End-Point Assessment - Level 3)",
  "resultName": "Asbestos Analyst and Surveyor",
  "selectedQualification": "End-Point Assessment",
  "selectedLevel": [
    "3, 4, 5"
  ],
  "expertiseType": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "isIndustry": "true",
  "isTeaching": "true",  
  "teachingExpertiseType": [
    "Training",
    "Teacher training"
  ],
  "isTraining": "true",
  "isTeacherTraining": "true",
  "adviseAreasCompleted": "complete",

  // Evidence of experience
  // Assessment experience
  "assessmentJudgementDetails": "I was involved in the level 3 asbestos end point assessment's ongoing development. Marking assessments - marking exam papers and assessments submitted by assessment centres and candidates and assessing candidate's performance against marking and assessment criteria. Moderating the marking of others - acting as a moderator and internal verifier for the assessment centres and as an external verifier.",
  "assessmentStandardSettingDetails": "I have reviewed candidate scripts and decided on grade boundaries for the Level 3 qualifications as well as setting learning outcomes and generally overseeing the qualification standards.",
  "assessmentDesigningDetails": "I was involved in drafting the syllabus/specifications, course content, design of the assessments, development of the question banks, delivering the pilot courses. I have acted as an External Verifier and mentored other trainers and assessors.",
  "assessmentEvaluatingDetails": "I have had extensive experience in reviewing the question banks, marking schemes and assessment tasks. I have also been involved in research into  asbestos-related qualifications offered by other bodies to ensure that they continue to be relevant and fit for purpose.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "I have been advising on asbestos issues for many years. I have run my own specialist asbestos consulting business providing advice and training on compliance with the asbestos regulations to businesses.",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "currentlyInTeachingRole": "No",
  "teachingTrainingDetails": "Employer / Industry asbestos training. Commercial training provider. I would include here a specific summary of my training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingTeacherTrainingDetails": "I have been an approved trainer for the public health society for many years for Ofqual regulated Level 3 asbestos qualifications. I also regularly deliver asbestos awareness sessions to tradesmen and construction companies, I have delivered over 2000 hours of training.",
  "teachingExpertiseCompleted": "complete",

  // Communication and analytical judgement skills
  "communicationDetails": "Asbestos consulting means that I speak to many different types of people day to day. For example, I speak to tenants about the asbestos in their home and handle the situation with care to make sure that I can give them the facts whilst also keeping them calm and not fearful.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I sit on the Management Committee of the trade association for the Asbestos Consulting sector. It responds to consultation documents published by the regulatory bodies in respect of proposed changes to asbestos-related guidance.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish passport",
  "passportUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete"
}

// This is all the data needed to populate a GQ completed application
var completedApplicationDataGQ = {

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

  // Subjects
  "selectedSubject": "Performing arts (GCE AS/A Level - Level 3)",
  "resultName": "Performing arts",
  "selectedQualification": "GCE AS/A Level",
  "selectedLevel": [
    "3, 4"
  ],
  "expertiseType": [
    "Assessment",
    "Teaching, lecturing or training"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "isIndustry": "false",
  "isTeaching": "true",  
  "teachingExpertiseType": [
    "Teaching or lecturing",
    "Training",
    "Educational management",
    "Teacher training"
  ],
  "isLecturing": "true",
  "isTraining": "true",
  "isEducationalManagement": "true",
  "isTeacherTraining": "true",
  "adviseAreasCompleted": "complete",

  // Evidence of expertise
  // Assessment expertise
  "assessmentJudgementDetails": "I've done a lot of training for exam boards. I'd detail the process of reviewing qualifications and assessments. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentStandardSettingDetails": "I've run quite a few standards meetings. I've been a standards verifier for BTEC performing arts. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentDesigningDetails": "I would descsribe my involvement, activities and responsibilities to link with the information selected. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentEvaluatingDetails": "Examiner for GCSE Performing Arts for AQA. Examiner for GCC drama and set the standards Btech Performing Arts. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "currentlyInTeachingRole": "Yes",
  "teachingLecturingDetails": "I would enter all my experience relevant to teacher, training and lecturing and I'd evidence with the bullets I've selected. I might enter detail under each of the headings. I'd want to prepare this elsewhere and paste it here to make sure that I get it right and cover everything I've selected.",
  "teachingTrainingDetails": "I would include here a specific summary of my training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingEducationalManagementDetails": "I would include here a specific summary of my experience in education management. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingTeacherTrainingDetails": "I would include here a specific summary of my experience training others. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingExpertiseCompleted": "complete",

  // Communication and analytical judgement skills
  "communicationDetails": "For the analytical, judgement and communication skills, I would link and describe to my experience and professional achievements. I would include here any extra details about my communication and analytical judgement skills I have not already covered.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I would include here any extra details about achievements I have not already covered.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish birth or adoption certificate and a letter from a government agency or employer that includes your full name and national insurance number",
  "certificateUpload": "birth-certificate.pdf",
  "governmentUpload": "letter.jpg",
  "verifyIdentityCompleted": "complete"
}

// This is all the data needed to populate an Assessment specialist completed application
var completedApplicationDataAssessmentSpecialist = {
  "referrer": "assessmentExpertise", 

  // Personal details
  "fullName": "Joseph Khan",
  "email": "j.khan@email.com",
  "telephone": "07800999111",
  "whereDoYouLive": "In the UK",
  "addressLine1": "99 Puddle Street",
  "townOrCity": "Southampton",
  "postCode": "SO45 1AA",
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

  // Subjects
  // Assessment only route - doesn't select a subject 
  "referrer": "assessmentExpertise",
  "assessmentSubject": "No",
  "assessmentQual": "No",
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "adviseAreasCompleted": "complete",
  "expertiseType": [
    "Assessment"
  ],

  // Evidence of expertise
  // Assessment expertise
  "assessmentJudgementDetails": "I've done a lot of training for exam boards. I'd detail the process of reviewing qualifications and assessments. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentStandardSettingDetails": "I've run quite a few standards meetings. I've been a standards verifier for BTEC performing arts. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentDesigningDetails": "I would descsribe my involvement, activities and responsibilities to link with the information selected. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentEvaluatingDetails": "Examiner for GCSE Performing Arts for AQA. Examiner for GCC drama and set the standards Btech Performing Arts. I would include here a specific summary of my experience, relating to the subjects this expertise was selected for.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "teachingExpertiseCompleted": "complete",

  // Communication and analytical judgement skills
  "communicationDetails": "For the communication and analytical judgement skills, I would link and describe to my experience and professional achievements. I would include here any extra details about my communication and analytical judgement skills I have not already covered.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I would include here any extra details about achievements I have not already covered.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish passport",
  "passportUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete"
}

// This is all the data needed to enable all Evidence sections
var fillSubjectsData = {

  // Subjects
  "selectedSubject": "Performing arts (GCE AS/A Level - Level 3)",
  "resultName": "Performing arts",
  "selectedQualification": "GCE AS/A Level",
  "selectedLevel": [
    "3, 4"
  ],
  "expertiseType": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "isIndustry": "true",
  "isTeaching": "true",  
  "teachingExpertiseType": [
    "Teaching or lecturing",
    "Training",
    "Educational management",
    "Teacher training"
  ],
  "isLecturing": "true",
  "isTraining": "true",
  "isEducationalManagement": "true",
  "isTeacherTraining": "true",
  "adviseAreasCompleted": "complete"
}

var awaitingDecision = {

  // Personal details
  "fullName": "Hans Bowser",
  "email": "hans@email.com",
  "telephone": "07701123123",
  "whereDoYouLive": "In the UK",
  "addressLine1": "01 School Lane",
  "townOrCity": "Birmingham",
  "postCode": "B2 4QA",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "British Occupational Hygiene Society",
  "awordingOrganisation": "British Occupational Hygiene Society",
  "qualName": "Certificate of Competence in Asbestos",
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

  // Subjects
  "selectedSubject": "Asbestos (End-Point Assessment - Level 3)",
  "resultName": "Asbestos Analyst and Surveyor",
  "selectedQualification": "End-Point Assessment",
  "selectedLevel": [
    "3, 4"
  ],
  "expertiseType": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "isIndustry": "true",
  "isTeaching": "true",  
  "teachingExpertiseType": [
    "Training",
    "Teacher training"
  ],
  "isTraining": "true",
  "isTeacherTraining": "true",
  "adviseAreasCompleted": "complete",

  // Evidence of experience
  // Assessment experience
  "assessmentJudgementDetails": "I was involved in the level 3 asbestos end point assessment's ongoing development. Marking assessments - marking exam papers and assessments submitted by assessment centres and candidates and assessing candidate's performance against marking and assessment criteria. Moderating the marking of others - acting as a moderator and internal verifier for the assessment centres and as an external verifier.",
  "assessmentStandardSettingDetails": "I have reviewed candidate scripts and decided on grade boundaries for the Level 3 qualifications as well as setting learning outcomes and generally overseeing the qualification standards.",
  "assessmentDesigningDetails": "I was involved in drafting the syllabus/specifications, course content, design of the assessments, development of the question banks, delivering the pilot courses. I have acted as an External Verifier and mentored other trainers and assessors.",
  "assessmentEvaluatingDetails": "I have had extensive experience in reviewing the question banks, marking schemes and assessment tasks. I have also been involved in research into  asbestos-related qualifications offered by other bodies to ensure that they continue to be relevant and fit for purpose.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "I have been advising on asbestos issues for many years. I have run my own specialist asbestos consulting business providing advice and training on compliance with the asbestos regulations to businesses.",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "currentlyInTeachingRole": "No",
  "teachingTrainingDetails": "Employer / Industry asbestos training. Commercial training provider. I would include here a specific summary of my training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingTeacherTrainingDetails": "I have been an approved trainer for the public health society for many years for Ofqual regulated Level 3 asbestos qualifications. I also regularly deliver asbestos awareness sessions to tradesmen and construction companies, I have delivered over 2000 hours of training.",
  "teachingExpertiseCompleted": "complete",

  // Communication and analytical judgement skills
  "communicationDetails": "Asbestos consulting means that I speak to many different types of people day to day. For example, I speak to tenants about the asbestos in their home and handle the situation with care to make sure that I can give them the facts whilst also keeping them calm and not fearful.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I sit on the Management Committee of the trade association for the Asbestos Consulting sector. It responds to consultation documents published by the regulatory bodies in respect of proposed changes to asbestos-related guidance.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish passport",
  "passportUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete",
  
  // Application status
  "applicationStatus": "Awaiting decision",
  "applicationAction": "",
  "applicationActionLink": "",
  "applicationFeedbackCategory": "",
  "applicationFeedback": "",
  // Subject 1
  "subject1AssessmentMakingStatus": "Awaiting decision", 
  "subject1AssessmentMakingFeedbackCategory": "",
  "subject1AssessmentMakingFeedback": "",
  "subject1AssessmentSettingStatus": "Awaiting decision", 
  "subject1AssessmentSettingFeedbackCategory": "",
  "subject1AssessmentSettingFeedback": "",
  "subject1AssessmentDesigningStatus": "Awaiting decision", 
  "subject1AssessmentDesigningFeedbackCategory": "",
  "subject1AssessmentDesigningFeedback": "",
  "subject1AssessmentEvaluatingStatus": "Awaiting decision", 
  "subject1AssessmentEvaluatingFeedbackCategory": "",
  "subject1AssessmentEvaluatingFeedback": "",
  "subject1IndustryStatus": "Awaiting decision", 
  "subject1IndustryFeedbackCategory": "",
  "subject1IndustryFeedback": "",
  "subject1TeachingTeachingStatus": "", 
  "subject1TeachingTeachingFeedbackCategory": "",
  "subject1TeachingTeachingFeedback": "",
  "subject1TeachingTrainingStatus": "Awaiting decision", 
  "subject1TeachingTrainingFeedbackCategory": "",
  "subject1TeachingTrainingFeedback": "",
  "subject1TeachingEducationalStatus": "", 
  "subject1TeachingEducationalFeedbackCategory": "",
  "subject1TeachingEducationalFeedback": "",
  "subject1TeachingTeacherTrainingStatus": "Awaiting decision", 
  "subject1TeachingTeacherTrainingFeedbackCategory": "",
  "subject1TeachingTeacherTrainingFeedback": ""
}

var actionRequired = {

  // Personal details
  "fullName": "Hans Bowser",
  "email": "hans@email.com",
  "telephone": "07701123123",
  "whereDoYouLive": "In the UK",
  "addressLine1": "01 School Lane",
  "townOrCity": "Birmingham",
  "postCode": "B2 4QA",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "British Occupational Hygiene Society",
  "awordingOrganisation": "British Occupational Hygiene Society",
  "qualName": "Certificate of Competence in Asbestos",
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

  // Subjects
  "selectedSubject": "Asbestos (End-Point Assessment - Level 3)",
  "resultName": "Asbestos Analyst and Surveyor",
  "selectedQualification": "End-Point Assessment",
  "selectedLevel": [
    "3, 4"
  ],
  "expertiseType": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "isIndustry": "true",
  "isTeaching": "true",  
  "teachingExpertiseType": [
    "Training",
    "Teacher training"
  ],
  "isTraining": "true",
  "isTeacherTraining": "true",
  "adviseAreasCompleted": "complete",
  // Subject2
  "subject2": "true", 
  "selectedSubject2": "Building control surveyor (integrated degree) (End-point assessment - level 6)",
  "resultName2": "Building control surveyor (integrated degree)",
  "selectedQualification2": "End-Point Assessment",
  "selectedLevel2": [
    "6"
  ],
  "expertiseType2": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment2": "true",  
  "assessmentExpertiseType2": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement2": "true",
  "isStandardSetting2": "true",
  "isDesigning2": "true",
  "isEvaluating2": "true",
  "isIndustry2": "true",
  "isTeaching2": "true",  
  "teachingExpertiseType2": [
    "Teaching or lecturing",
    "Training",
    "Educational management",
    "Teacher training"
  ],
  "isLecturing2": "true",
  "isTraining2": "true",
  "isEducationalManagement2": "true",
  "isTeacherTraining2": "true",

  // Evidence of experience
  // Assessment experience
  "assessmentJudgementDetails": "I was involved in the level 3 asbestos end point assessment's ongoing development. Marking assessments - marking exam papers and assessments submitted by assessment centres and candidates and assessing candidate's performance against marking and assessment criteria. Moderating the marking of others - acting as a moderator and internal verifier for the assessment centres and as an external verifier.",
  "assessmentStandardSettingDetails": "I have reviewed candidate scripts and decided on grade boundaries for the Level 3 qualifications as well as setting learning outcomes and generally overseeing the qualification standards.",
  "assessmentDesigningDetails": "I was involved in drafting the syllabus/specifications, course content, design of the assessments, development of the question banks, delivering the pilot courses. I have acted as an External Verifier and mentored other trainers and assessors.",
  "assessmentEvaluatingDetails": "I have had extensive experience in reviewing the question banks, marking schemes and assessment tasks. I have also been involved in research into  asbestos-related qualifications offered by other bodies to ensure that they continue to be relevant and fit for purpose.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "I have been advising on asbestos issues for many years. I have run my own specialist asbestos consulting business providing advice and training on compliance with the asbestos regulations to businesses.",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "currentlyInTeachingRole": "No",
  "teachingTrainingDetails": "Employer / Industry asbestos training. Commercial training provider. I would include here a specific summary of my training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingTeacherTrainingDetails": "I have been an approved trainer for the public health society for many years for Ofqual regulated Level 3 asbestos qualifications. I also regularly deliver asbestos awareness sessions to tradesmen and construction companies, I have delivered over 2000 hours of training.",
  "teachingExpertiseCompleted": "complete",

  // Communication and analytical judgement skills
  "communicationDetails": "Asbestos consulting means that I speak to many different types of people day to day. For example, I speak to tenants about the asbestos in their home and handle the situation with care to make sure that I can give them the facts whilst also keeping them calm and not fearful.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I sit on the Management Committee of the trade association for the Asbestos Consulting sector. It responds to consultation documents published by the regulatory bodies in respect of proposed changes to asbestos-related guidance.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish passport",
  "passportUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete",
  "identityCheckStatus": "Action required",
  "identityCheckAction": "Further evidence needed for your identity checks",
  "identityCheckActionLink": "/account/messages/further-evidence-required-identity-check",
  
  // Application status
  "applicationStatus": "Action required",
  "applicationAction": "Further evidence needed for your experience in making assessment judgements",
  "applicationActionLink": "/message-further-evidence",
  "applicationAction2": "Further evidence needed for your experience in teacher training",
  "applicationActionLink2": "/message-further-evidence-ttraining",
  "applicationFeedbackCategory": "",
  "applicationFeedback": "",
  // Subject 1
  "subject1AssessmentMakingStatus": "Action required", 
  "subject1AssessmentMakingFeedbackCategory": "",
  "subject1AssessmentMakingFeedback": "",
  "subject1AssessmentSettingStatus": "Awaiting decision", 
  "subject1AssessmentSettingFeedbackCategory": "",
  "subject1AssessmentSettingFeedback": "",
  "subject1AssessmentDesigningStatus": "Awaiting decision", 
  "subject1AssessmentDesigningFeedbackCategory": "",
  "subject1AssessmentDesigningFeedback": "",
  "subject1AssessmentEvaluatingStatus": "Awaiting decision", 
  "subject1AssessmentEvaluatingFeedbackCategory": "",
  "subject1AssessmentEvaluatingFeedback": "",
  "subject1IndustryStatus": "Awaiting decision", 
  "subject1IndustryFeedbackCategory": "",
  "subject1IndustryFeedback": "",
  "subject1TeachingTeachingStatus": "", 
  "subject1TeachingTeachingFeedbackCategory": "",
  "subject1TeachingTeachingFeedback": "",
  "subject1TeachingTrainingStatus": "Awaiting decision", 
  "subject1TeachingTrainingFeedbackCategory": "",
  "subject1TeachingTrainingFeedback": "",
  "subject1TeachingEducationalStatus": "", 
  "subject1TeachingEducationalFeedbackCategory": "",
  "subject1TeachingEducationalFeedback": "",
  "subject1TeachingTeacherTrainingStatus": "Awaiting decision", 
  "subject1TeachingTeacherTrainingFeedbackCategory": "",
  "subject1TeachingTeacherTrainingFeedback": "",
  // Subject 2
  "subject2AssessmentMakingStatus": "Awaiting decision", 
  "subject2AssessmentMakingFeedbackCategory": "",
  "subject2AssessmentMakingFeedback": "",
  "subject2AssessmentSettingStatus": "Awaiting decision", 
  "subject2AssessmentSettingFeedbackCategory": "",
  "subject2AssessmentSettingFeedback": "",
  "subject2AssessmentDesigningStatus": "Awaiting decision", 
  "subject2AssessmentDesigningFeedbackCategory": "",
  "subject2AssessmentDesigningFeedback": "",
  "subject2AssessmentEvaluatingStatus": "Awaiting decision", 
  "subject2AssessmentEvaluatingFeedbackCategory": "",
  "subject2AssessmentEvaluatingFeedback": "",
  "subject2IndustryStatus": "Awaiting decision", 
  "subject2IndustryFeedbackCategory": "",
  "subject2IndustryFeedback": "",
  "subject2TeachingTeachingStatus": "Awaiting decision", 
  "subject2TeachingTeachingFeedbackCategory": "",
  "subject2TeachingTeachingFeedback": "",
  "subject2TeachingTrainingStatus": "Awaiting decision", 
  "subject2TeachingTrainingFeedbackCategory": "",
  "subject2TeachingTrainingFeedback": "",
  "subject2TeachingEducationalStatus": "Awaiting decision", 
  "subject2TeachingEducationalFeedbackCategory": "",
  "subject2TeachingEducationalFeedback": "",
  "subject2TeachingTeacherTrainingStatus": "Action required", 
  "subject2TeachingTeacherTrainingFeedbackCategory": "",
  "subject2TeachingTeacherTrainingFeedback": ""
}

var allAccepted = {
  // Personal details
  "fullName": "Hans Bowser",
  "email": "hans@email.com",
  "telephone": "07701123123",
  "whereDoYouLive": "In the UK",
  "addressLine1": "01 School Lane",
  "townOrCity": "Birmingham",
  "postCode": "B2 4QA",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "British Occupational Hygiene Society",
  "awordingOrganisation": "British Occupational Hygiene Society",
  "qualName": "Certificate of Competence in Asbestos",
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

  // Subjects
  "selectedSubject": "Asbestos (End-Point Assessment - Level 3)",
  "resultName": "Asbestos Analyst and Surveyor",
  "selectedQualification": "End-Point Assessment",
  "selectedLevel": [
    "3, 4"
  ],
  "expertiseType": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "isIndustry": "true",
  "isTeaching": "true",  
  "teachingExpertiseType": [
    "Training",
    "Teacher training"
  ],
  "isTraining": "true",
  "isTeacherTraining": "true",
  "adviseAreasCompleted": "complete",
  // Subject2
  "subject2": "true", 
  "selectedSubject2": "Building control surveyor (integrated degree) (End-point assessment - level 6)",
  "resultName2": "Building control surveyor (integrated degree)",
  "selectedQualification2": "End-Point Assessment",
  "selectedLevel2": [
    "6"
  ],
  "expertiseType2": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment2": "true",  
  "assessmentExpertiseType2": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement2": "true",
  "isStandardSetting2": "true",
  "isDesigning2": "true",
  "isEvaluating2": "true",
  "isIndustry2": "true",
  "isTeaching2": "true",  
  "teachingExpertiseType2": [
    "Teaching or lecturing",
    "Training",
    "Educational management",
    "Teacher training"
  ],
  "isLecturing2": "true",
  "isTraining2": "true",
  "isEducationalManagement2": "true",
  "isTeacherTraining2": "true", 

  // Evidence of experience
  // Assessment experience
  "assessmentJudgementDetails": "I was involved in the level 3 asbestos end point assessment's ongoing development. Marking assessments - marking exam papers and assessments submitted by assessment centres and candidates and assessing candidate's performance against marking and assessment criteria. Moderating the marking of others - acting as a moderator and internal verifier for the assessment centres and as an external verifier.",
  "assessmentStandardSettingDetails": "I have reviewed candidate scripts and decided on grade boundaries for the Level 3 qualifications as well as setting learning outcomes and generally overseeing the qualification standards.",
  "assessmentDesigningDetails": "I was involved in drafting the syllabus/specifications, course content, design of the assessments, development of the question banks, delivering the pilot courses. I have acted as an External Verifier and mentored other trainers and assessors.",
  "assessmentEvaluatingDetails": "I have had extensive experience in reviewing the question banks, marking schemes and assessment tasks. I have also been involved in research into  asbestos-related qualifications offered by other bodies to ensure that they continue to be relevant and fit for purpose.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "I have been advising on asbestos issues for many years. I have run my own specialist asbestos consulting business providing advice and training on compliance with the asbestos regulations to businesses.",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "currentlyInTeachingRole": "No",
  "teachingTrainingDetails": "Employer / Industry asbestos training. Commercial training provider. I would include here a specific summary of my training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingTeacherTrainingDetails": "I have been an approved trainer for the public health society for many years for Ofqual regulated Level 3 asbestos qualifications. I also regularly deliver asbestos awareness sessions to tradesmen and construction companies, I have delivered over 2000 hours of training.",
  "teachingExpertiseCompleted": "complete",

  // Communication and analytical judgement skills
  "communicationDetails": "Asbestos consulting means that I speak to many different types of people day to day. For example, I speak to tenants about the asbestos in their home and handle the situation with care to make sure that I can give them the facts whilst also keeping them calm and not fearful.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I sit on the Management Committee of the trade association for the Asbestos Consulting sector. It responds to consultation documents published by the regulatory bodies in respect of proposed changes to asbestos-related guidance.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish passport",
  "passportUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete",

  // Application status
  "applicationStatus": "Accepted",
  "applicationAction": "",
  "applicationActionLink": "",
  "applicationFeedbackCategory": "",
  "applicationFeedback": "",
  // Subject 1
  "subject1AssessmentMakingStatus": "Accepted", 
  "subject1AssessmentMakingFeedbackCategory": "",
  "subject1AssessmentMakingFeedback": "",
  "subject1AssessmentSettingStatus": "Accepted", 
  "subject1AssessmentSettingFeedbackCategory": "",
  "subject1AssessmentSettingFeedback": "",
  "subject1AssessmentDesigningStatus": "Accepted", 
  "subject1AssessmentDesigningFeedbackCategory": "",
  "subject1AssessmentDesigningFeedback": "",
  "subject1AssessmentEvaluatingStatus": "Accepted", 
  "subject1AssessmentEvaluatingFeedbackCategory": "",
  "subject1AssessmentEvaluatingFeedback": "",
  "subject1IndustryStatus": "Accepted", 
  "subject1IndustryFeedbackCategory": "",
  "subject1IndustryFeedback": "",
  "subject1TeachingTeachingStatus": "", 
  "subject1TeachingTeachingFeedbackCategory": "",
  "subject1TeachingTeachingFeedback": "",
  "subject1TeachingTrainingStatus": "Accepted", 
  "subject1TeachingTrainingFeedbackCategory": "",
  "subject1TeachingTrainingFeedback": "",
  "subject1TeachingEducationalStatus": "", 
  "subject1TeachingEducationalFeedbackCategory": "",
  "subject1TeachingEducationalFeedback": "",
  "subject1TeachingTeacherTrainingStatus": "Accepted", 
  "subject1TeachingTeacherTrainingFeedbackCategory": "",
  "subject1TeachingTeacherTrainingFeedback": "",
  // Subject 2
  "subject2AssessmentMakingStatus": "Accepted", 
  "subject2AssessmentMakingFeedbackCategory": "",
  "subject2AssessmentMakingFeedback": "",
  "subject2AssessmentSettingStatus": "Accepted", 
  "subject2AssessmentSettingFeedbackCategory": "",
  "subject2AssessmentSettingFeedback": "",
  "subject2AssessmentDesigningStatus": "Accepted", 
  "subject2AssessmentDesigningFeedbackCategory": "",
  "subject2AssessmentDesigningFeedback": "",
  "subject2AssessmentEvaluatingStatus": "Accepted", 
  "subject2AssessmentEvaluatingFeedbackCategory": "",
  "subject2AssessmentEvaluatingFeedback": "",
  "subject2IndustryStatus": "Accepted", 
  "subject2IndustryFeedbackCategory": "",
  "subject2IndustryFeedback": "",
  "subject2TeachingTeachingStatus": "Accepted", 
  "subject2TeachingTeachingFeedbackCategory": "",
  "subject2TeachingTeachingFeedback": "",
  "subject2TeachingTrainingStatus": "Accepted", 
  "subject2TeachingTrainingFeedbackCategory": "",
  "subject2TeachingTrainingFeedback": "",
  "subject2TeachingEducationalStatus": "Accepted", 
  "subject2TeachingEducationalFeedbackCategory": "",
  "subject2TeachingEducationalFeedback": "",
  "subject2TeachingTeacherTrainingStatus": "Accepted", 
  "subject2TeachingTeacherTrainingFeedbackCategory": "",
  "subject2TeachingTeacherTrainingFeedback": ""
}

var allRejected = {
  // Personal details
  "fullName": "Hans Bowser",
  "email": "hans@email.com",
  "telephone": "07701123123",
  "whereDoYouLive": "In the UK",
  "addressLine1": "01 School Lane",
  "townOrCity": "Birmingham",
  "postCode": "B2 4QA",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "British Occupational Hygiene Society",
  "awordingOrganisation": "British Occupational Hygiene Society",
  "qualName": "Certificate of Competence in Asbestos",
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

  // Subjects
  "selectedSubject": "Asbestos (End-Point Assessment - Level 3)",
  "resultName": "Asbestos Analyst and Surveyor",
  "selectedQualification": "End-Point Assessment",
  "selectedLevel": [
    "Level 3"
  ],
  "expertiseType": [
    "Assessment"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "adviseAreasCompleted": "complete",
  // Subject2
  "selectedSubject2": "",

  // Evidence of experience
  // Assessment experience
  "assessmentJudgementDetails": "I was involved in the level 3 asbestos end point assessment's ongoing development. Marking assessments - marking exam papers and assessments submitted by assessment centres and candidates and assessing candidate's performance against marking and assessment criteria. Moderating the marking of others - acting as a moderator and internal verifier for the assessment centres and as an external verifier.",
  "assessmentStandardSettingDetails": "I have reviewed candidate scripts and decided on grade boundaries for the Level 3 qualifications as well as setting learning outcomes and generally overseeing the qualification standards.",
  "assessmentDesigningDetails": "I was involved in drafting the syllabus/specifications, course content, design of the assessments, development of the question banks, delivering the pilot courses. I have acted as an External Verifier and mentored other trainers and assessors.",
  "assessmentEvaluatingDetails": "I have had extensive experience in reviewing the question banks, marking schemes and assessment tasks. I have also been involved in research into  asbestos-related qualifications offered by other bodies to ensure that they continue to be relevant and fit for purpose.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "I have been advising on asbestos issues for many years. I have run my own specialist asbestos consulting business providing advice and training on compliance with the asbestos regulations to businesses.",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "currentlyInTeachingRole": "No",
  "teachingTrainingDetails": "Employer / Industry asbestos training. Commercial training provider. I would include here a specific summary of my training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingTeacherTrainingDetails": "I have been an approved trainer for the public health society for many years for Ofqual regulated Level 3 asbestos qualifications. I also regularly deliver asbestos awareness sessions to tradesmen and construction companies, I have delivered over 2000 hours of training.",
  "teachingExpertiseCompleted": "complete",

  // Communication and analytical judgement skills
  "communicationDetails": "Asbestos consulting means that I speak to many different types of people day to day. For example, I speak to tenants about the asbestos in their home and handle the situation with care to make sure that I can give them the facts whilst also keeping them calm and not fearful.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I sit on the Management Committee of the trade association for the Asbestos Consulting sector. It responds to consultation documents published by the regulatory bodies in respect of proposed changes to asbestos-related guidance.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish passport",
  "passportUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete",

  // Application status
  "applicationStatus": "Rejected",
  "applicationAction": "",
  "applicationActionLink": "",
  "applicationFeedbackCategory": "Qualifications not relevant",
  "applicationFeedback": "This applicant does not have evidence of a qualification obtained that would give them experience to assess this subject.",
  // Subject 1
  "subject1AssessmentMakingStatus": "Rejected", 
  "subject1AssessmentMakingFeedbackCategory": "",
  "subject1AssessmentMakingFeedback": "",
  "subject1AssessmentSettingStatus": "Rejected", 
  "subject1AssessmentSettingFeedbackCategory": "",
  "subject1AssessmentSettingFeedback": "",
  "subject1AssessmentDesigningStatus": "Rejected", 
  "subject1AssessmentDesigningFeedbackCategory": "",
  "subject1AssessmentDesigningFeedback": "",
  "subject1AssessmentEvaluatingStatus": "Rejected", 
  "subject1AssessmentEvaluatingFeedbackCategory": "",
  "subject1AssessmentEvaluatingFeedback": "",
  "subject1IndustryStatus": "", 
  "subject1IndustryFeedbackCategory": "",
  "subject1IndustryFeedback": "",
  "subject1TeachingTeachingStatus": "", 
  "subject1TeachingTeachingFeedbackCategory": "",
  "subject1TeachingTeachingFeedback": "",
  "subject1TeachingTrainingStatus": "", 
  "subject1TeachingTrainingFeedbackCategory": "",
  "subject1TeachingTrainingFeedback": "",
  "subject1TeachingEducationalStatus": "", 
  "subject1TeachingEducationalFeedbackCategory": "",
  "subject1TeachingEducationalFeedback": "",
  "subject1TeachingTeacherTrainingStatus": "", 
  "subject1TeachingTeacherTrainingFeedbackCategory": "",
  "subject1TeachingTeacherTrainingFeedback": ""
}

var acceptedRejected = {
  // Personal details
  "fullName": "Hans Bowser",
  "email": "hans@email.com",
  "telephone": "07701123123",
  "whereDoYouLive": "In the UK",
  "addressLine1": "01 School Lane",
  "townOrCity": "Birmingham",
  "postCode": "B2 4QA",
  "personalDetailsCompleted": "complete",

  // Education details
  "anyQualifications": "Yes",
  "schoolName": "British Occupational Hygiene Society",
  "awordingOrganisation": "British Occupational Hygiene Society",
  "qualName": "Certificate of Competence in Asbestos",
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

  // Subjects
  "selectedSubject": "Asbestos (End-Point Assessment - Level 3)",
  "resultName": "Asbestos Analyst and Surveyor",
  "selectedQualification": "End-Point Assessment",
  "selectedLevel": [
    "3, 4"
  ],
  "expertiseType": [
    "Assessment",
    "Industry, occupational or professional",
    "Teaching, lecturing or training"
  ],
  "isAssessment": "true",  
  "assessmentExpertiseType": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments",
    "Evaluating assessments or assessment approaches"
  ],
  "isJudgement": "true",
  "isStandardSetting": "true",
  "isDesigning": "true",
  "isEvaluating": "true",
  "isIndustry": "true",
  "isTeaching": "true",  
  "teachingExpertiseType": [
    "Training",
    "Teacher training"
  ],
  "isTraining": "true",
  "isTeacherTraining": "true", 
  "adviseAreasCompleted": "complete", 
  // Subject2
  "subject2": "true", 
  "selectedSubject2": "Building control surveyor (integrated degree) (End-point assessment - level 6)",
  "resultName2": "Building control surveyor (integrated degree)",
  "selectedQualification2": "End-Point Assessment",
  "selectedLevel2": [
    "6"
  ],
  "expertiseType2": [
    "Assessment"
  ],
  "isAssessment2": "true",  
  "assessmentExpertiseType2": [
    "Making assessment judgements",
    "Standard setting and awarding qualifications",
    "Designing and developing assessments"
  ],
  "isJudgement2": "true",
  "isStandardSetting2": "true",
  "isDesigning2": "true",

  // Evidence of experience
  // Assessment experience
  "assessmentJudgementDetails": "I was involved in the level 3 asbestos end point assessment's ongoing development. Marking assessments - marking exam papers and assessments submitted by assessment centres and candidates and assessing candidate's performance against marking and assessment criteria. Moderating the marking of others - acting as a moderator and internal verifier for the assessment centres and as an external verifier.",
  "assessmentStandardSettingDetails": "I have reviewed candidate scripts and decided on grade boundaries for the Level 3 qualifications as well as setting learning outcomes and generally overseeing the qualification standards.",
  "assessmentDesigningDetails": "I was involved in drafting the syllabus/specifications, course content, design of the assessments, development of the question banks, delivering the pilot courses. I have acted as an External Verifier and mentored other trainers and assessors.",
  "assessmentEvaluatingDetails": "I have had extensive experience in reviewing the question banks, marking schemes and assessment tasks. I have also been involved in research into  asbestos-related qualifications offered by other bodies to ensure that they continue to be relevant and fit for purpose.",
  "assessmentExpertiseCompleted": "complete",

  // Industry, occupational or professional expertise
  "industryExpertiseDetails": "I have been advising on asbestos issues for many years. I have run my own specialist asbestos consulting business providing advice and training on compliance with the asbestos regulations to businesses.",
  "industryExpertiseCompleted": "complete",

  // Teaching, lecturing or training expertise
  "currentlyInTeachingRole": "No",
  "teachingTrainingDetails": "Employer / Industry asbestos training. Commercial training provider. I would include here a specific summary of my training experience. I would link my work history and my roles and responsibilities and work done to these specific areas as you have directed.",
  "teachingTeacherTrainingDetails": "I have been an approved trainer for the public health society for many years for Ofqual regulated Level 3 asbestos qualifications. I also regularly deliver asbestos awareness sessions to tradesmen and construction companies, I have delivered over 2000 hours of training.",
  "teachingExpertiseCompleted": "complete",
  "teachingStatus": "Action required",
  "teachingAction": "Further evidence needed for your subject experience",
  "teachingActionLink": "/account/messages/further-evidence-required-ttraining",

  // Communication and analytical judgement skills
  "communicationDetails": "Asbestos consulting means that I speak to many different types of people day to day. For example, I speak to tenants about the asbestos in their home and handle the situation with care to make sure that I can give them the facts whilst also keeping them calm and not fearful.",
  "communicationCompleted": "complete",

  // Further evidence
  "furtherEvidenceSummary": "I sit on the Management Committee of the trade association for the Asbestos Consulting sector. It responds to consultation documents published by the regulatory bodies in respect of proposed changes to asbestos-related guidance.",
  "furtherEvidenceDetails": "complete",

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

  // ID checks
  "identityCheckType": "A UK or Irish passport",
  "passportUpload": "passport.pdf",
  "verifyIdentityCompleted": "complete",

  // Application status
  "applicationStatus": "Accepted",
  "applicationAction": "",
  "applicationActionLink": "",
  "applicationFeedbackCategory": "",
  "applicationFeedback": "",
  // Subject 1
  "subject1AssessmentMakingStatus": "Rejected", 
  "subject1AssessmentMakingFeedbackCategory": "Type of experience inappropriate",
  "subject1AssessmentMakingFeedback": "This applicant does not have enough experience in making assessment judgements for this subjects.",
  "subject1AssessmentSettingStatus": "Accepted", 
  "subject1AssessmentSettingFeedbackCategory": "",
  "subject1AssessmentSettingFeedback": "",
  "subject1AssessmentDesigningStatus": "Accepted", 
  "subject1AssessmentDesigningFeedbackCategory": "",
  "subject1AssessmentDesigningFeedback": "",
  "subject1AssessmentEvaluatingStatus": "Accepted", 
  "subject1AssessmentEvaluatingFeedbackCategory": "",
  "subject1AssessmentEvaluatingFeedback": "",
  "subject1IndustryStatus": "Rejected", 
  "subject1IndustryFeedbackCategory": "Type of experience inappropriate",
  "subject1IndustryFeedback": "The applicant does not have enough industry experience.",
  "subject1TeachingTeachingStatus": "", 
  "subject1TeachingTeachingFeedbackCategory": "",
  "subject1TeachingTeachingFeedback": "",
  "subject1TeachingTrainingStatus": "Rejected", 
  "subject1TeachingTrainingFeedbackCategory": "Length or amount of experience not sufficient",
  "subject1TeachingTrainingFeedback": "The applicant does not have enough teacher training experience in this subject.",
  "subject1TeachingEducationalStatus": "", 
  "subject1TeachingEducationalFeedbackCategory": "",
  "subject1TeachingEducationalFeedback": "",
  "subject1TeachingTeacherTrainingStatus": "Rejected", 
  "subject1TeachingTeacherTrainingFeedbackCategory": "Other",
  "subject1TeachingTeacherTrainingFeedback": "No evidence provided.",
  // Subject 2
  "subject2AssessmentMakingStatus": "Rejected", 
  "subject2AssessmentMakingFeedbackCategory": "Qualifications not relevant",
  "subject2AssessmentMakingFeedback": "This applicant does not have evidence of a qualification obtained that would give them experience to assess this subject.",
  "subject2AssessmentSettingStatus": "Rejected", 
  "subject2AssessmentSettingFeedbackCategory": "Qualifications not relevant",
  "subject2AssessmentSettingFeedback": "This applicant does not have evidence of a qualification obtained that would give them experience to assess this subject.",
  "subject2AssessmentDesigningStatus": "Rejected", 
  "subject2AssessmentDesigningFeedbackCategory": "Qualifications not relevant",
  "subject2AssessmentDesigningFeedback": "This applicant does not have evidence of a qualification obtained that would give them experience to assess this subject.",
  "subject2AssessmentEvaluatingStatus": "Rejected", 
  "subject2AssessmentEvaluatingFeedbackCategory": "Qualifications not relevant",
  "subject2AssessmentEvaluatingFeedback": "This applicant does not have evidence of a qualification obtained that would give them experience to assess this subject.",
  "subject2IndustryStatus": "", 
  "subject2IndustryFeedbackCategory": "",
  "subject2IndustryFeedback": "",
  "subject2TeachingTeachingStatus": "", 
  "subject2TeachingTeachingFeedbackCategory": "",
  "subject2TeachingTeachingFeedback": "",
  "subject2TeachingTrainingStatus": "", 
  "subject2TeachingTrainingFeedbackCategory": "",
  "subject2TeachingTrainingFeedback": "",
  "subject2TeachingEducationalStatus": "", 
  "subject2TeachingEducationalFeedbackCategory": "",
  "subject2TeachingEducationalFeedback": "",
  "subject2TeachingTeacherTrainingStatus": "", 
  "subject2TeachingTeacherTrainingFeedbackCategory": "",
  "subject2TeachingTeacherTrainingFeedback": ""
}

module.exports = {

  // This section pulls in various data sources
  countryData,
  subSectorSubjectAreasData,
  qualificationData,
  subjectSearch2Data,

  completedApplicationDataGQ,
  completedApplicationDataVTQ,
  completedApplicationDataAssessmentSpecialist,

  fillSubjectsData,

  awaitingDecision,
  actionRequired,
  allAccepted,
  allRejected,
  acceptedRejected,

  settings: settings,

  // Setting the sections that aren't able to be started yet
  // The section is enabled with hidden inputs in the dependant section
  "evidenceExpertiseCompleted": "canNotStartYet",
  // set GOV.UK email address default
  "oneLoginEmail": "name@email.com",
  // set account messages status
  "proofNameChangeReply": "noReply",
  "subjectEvidenceReply": "noReply",
  "teachingEvidenceReply": "noReply",
  "messageSent": "none",
  "applicationStatus": "incomplete",
  "accountMessageSubject": "",
  "identityCheckReply": "noReply",
  "accountMessageMakingJudgements": "Unread",
  "accountMessageTeacherTraining": "Unread",
  "accountMessageIdentity": "Unread",
  // Subject2
  "selectedSubject2": ""
}
