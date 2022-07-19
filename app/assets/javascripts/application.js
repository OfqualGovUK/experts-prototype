/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

// Add an alert if you click on a link with a hash
$('a[href=#]').on('click', function (event) {
  if(this.pathname === window.location.pathname){
    
    var message ='Sorry, this hasn’t been built yet';
    alert(message);

  }
});

// Powers the select all checkbox thingo
// Found here: https://stackoverflow.com/a/21248785


// Register your interest

// If Care services exist uncheck options based on "I dont know the level" and "somethig else..."  
if ($('.select-levels-page-care').length) {
  
  var deselectOthersCheckbox1 = $('#level-careServices-8');
  var deselectOthersCheckbox2 = $('#level-careServices-10');
  var combinedDeselectOthers = deselectOthersCheckbox1.add(deselectOthersCheckbox2);

  // Deselect all others if the checkbox is checked
  combinedDeselectOthers.change(function() {
    $('.govuk-checkboxes__input').not(this).attr('checked', false);
  });

  // Deselect the checkbox if any of the others are checked
  $('.govuk-checkboxes__input').not(combinedDeselectOthers).change(function() {
    $(combinedDeselectOthers).attr('checked', false);
  });

}

// If  Business management - Human resources exist uncheck options based on "I dont know the level" and "somethig else..."  
if ($('#level-business-human').length) {
  
  var deselectOthersCheckbox1 = $('#level-business-human-8');
  var deselectOthersCheckbox2 = $('#level-business-human-10');
  var combinedDeselectOthers = deselectOthersCheckbox1.add(deselectOthersCheckbox2);

  // Deselect all others if the checkbox is checked
  combinedDeselectOthers.change(function() {
    $('.human-resources .govuk-checkboxes__input').not(this).attr('checked', false);
  });

  // Deselect the checkbox if any of the others are checked
  $('.human-resources .govuk-checkboxes__input').not(combinedDeselectOthers).change(function() {
    $(combinedDeselectOthers).attr('checked', false);
  });

}

// If  Management and administration exist uncheck options based on "I dont know the level" and "somethig else..."  
if ($('#level-business-management').length) {
  
  var deselectOthersCheckbox1 = $('#level-business-management-8');
  var deselectOthersCheckbox2 = $('#level-business-management-10');
  var combinedDeselectOthers = deselectOthersCheckbox1.add(deselectOthersCheckbox2);

  // Deselect all others if the checkbox is checked
  combinedDeselectOthers.change(function() {
    $('.management-and-administration .govuk-checkboxes__input').not(this).attr('checked', false);
  });

  // Deselect the checkbox if any of the others are checked
  $('.management-and-administration .govuk-checkboxes__input').not(combinedDeselectOthers).change(function() {
    $(combinedDeselectOthers).attr('checked', false);
  });

}

