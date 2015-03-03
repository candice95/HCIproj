'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	remCookie();

	$('#popCancel').dialog({ autoOpen: false });
	$('#popDrop').dialog({ autoOpen: false });

 	$('.information .delete').click(function(e) {
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

	$('.information .drop').click(function(e) {
		var infoID = $(this).closest('.information').attr('id');
		var idNumber = infoID.substr('information'.length);

		$( "#popDrop" ).dialog( "open" );
		
		$('#confirmDrop').click(function() {
			$.post('/stu_homepage/'+idNumber+'/drop', function() {
			window.location.href = '/stu_homepage';
			});
		});
		$('#noDrop').click(function() {
			window.location.href = '/stu_homepage';
		});

	});
});


function remCookie() {
	var email = readCookie("email");
	$('#email').text(email);
}