'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() { 	
 	$('.information .apt-delete').click(function(e) {
 		// Get the div ID, e.g., "project3"
		var infoID = $(this).closest('.information').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = infoID.substr('information'.length);

		$.post('/stu_homepage/'+idNumber+'/delete', function() {
			window.location.href = '/stu_homepage';
		});
	});
 }