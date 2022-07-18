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
  
  var deselectOthersCheckbox1 = $('#pathway-level-8');
  var deselectOthersCheckbox2 = $('#pathway-level-10');
  var combinedDeselectOthers = deselectOthersCheckbox1.add(deselectOthersCheckbox2)

  // Deselect all others if the checkbox is checked
  combinedDeselectOthers.change(function() {
    $('.govuk-checkboxes__input').not(this).attr('checked', false);
  });

  // Deselect the checkbox if any of the others are checked
  $('.govuk-checkboxes__input').not(combinedDeselectOthers).change(function() {
    $(combinedDeselectOthers).attr('checked', false);
  });

}

