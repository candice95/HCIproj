'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$('#popCancel').dialog({ autoOpen: false });

 	$('.information .apt-delete').click(function(e) {
		var infoID = $(this).closest('.information').attr('id');
		var idNumber = infoID.substr('information'.length);

		$( "#popCancel" ).dialog( "open" );
		
		$('#confirmCancel').click(function() {
			$.post('/stu_homepage/'+idNumber+'/delete', function() {
			window.location.href = '/stu_homepage';
			});
		});
		$('#noCancel').click(function() {
			window.location.href = '/stu_homepage';
		});

	});
})
