// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
 function initializePage() {
 	$('.information button').click(function() {
		$.post('/stu_homepage/deleteApt', function() {
			window.location.href = '/';
		});
 	});
 }


function makeFunc(){
	window.location.href='/viewschedule';
}

function backshFunc(){
	window.location.href='/stu_homepage';
}

function scheFunc(){
	window.location.href='/student_make_appt';
}

function backaptFunc () {
	window.location.href='/viewschedule';
}

function cancelFunc() {
	window.location.href='/cancelapt';
}

function cancelApt() {
	alert("Appointment successfully canceled!");
}

function popConfirm() {
	window.location.href='/popConfirm';
}
function backCancelApt() {
	window.location.href='/cancelapt';
}

function confirmCancel() {
	window.location.href='/confirmCancel';
}

