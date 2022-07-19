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
// If they select 'I dont know the level' or 'Not listed'
if ($('.select-levels-page').length) {
  
  var deselectOthersCheckbox1 = $('#pathway-agriculture-agriculture-8');
  var deselectOthersCheckbox2 = $('#pathway-agriculture-agriculture-10');
  var deselectOthersCheckbox3 = $('#pathway-animal-agriculture-8');
  var deselectOthersCheckbox4 = $('#pathway-animal-agriculture-10');
  var deselectOthersCheckbox5 = $('#pathway-careServices-8');
  var deselectOthersCheckbox6 = $('#pathway-careServices-10');
  var deselectOthersCheckbox7 = $('#pathway-business-human-8');
  var deselectOthersCheckbox8 = $('#pathway-business-human-10');
  var deselectOthersCheckbox9 = $('#pathway-business-management-8');
  var deselectOthersCheckbox10 = $('#pathway-business-management-10');
  var combinedDeselectOthers = deselectOthersCheckbox1.add(deselectOthersCheckbox2).add(deselectOthersCheckbox3).add(deselectOthersCheckbox4).add(deselectOthersCheckbox5).add(deselectOthersCheckbox6).add(deselectOthersCheckbox7).add(deselectOthersCheckbox8).add(deselectOthersCheckbox9).add(deselectOthersCheckbox10);

  // Deselect all others if the checkbox is checked
  combinedDeselectOthers.change(function() {
    $('.govuk-checkboxes__input').not(this).attr('checked', false);
  });

  // Deselect the checkbox if any of the others are checked
  $('.govuk-checkboxes__input').not(combinedDeselectOthers).change(function() {
    $(combinedDeselectOthers).attr('checked', false);
  });

}

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

