$(document).ready(function() {
	$('#calendar').fullCalendar({
		allDaySlot: false,
		defaultView: 'agendaWeek',
		fixedWeekCount: false,
		header: {
			left: 'today',
			center: 'title',
			right: 'prev,next'
		},
		minTime: "08:00:00",
		maxTime: "20:00:00",
		scrollTime: '11:00:00',
		weekends: false,
		events: [
		{
			title: "Click to set appointment",
			start:'2015-02-19T12:00:00',
			end:'2015-02-19T15:00:00'
		}
		],

	    eventClick: function(calEvent, jsEvent, view) {
			window.location.href='/student_make_appt';
	    }
	});
});

$('.joinbutton').click(function(){
	var infoID = $(this).closest('.col-xs-4').attr('id');
	console.log(infoID);
	var idNumber = infoID.substr('div'.length);
	console.log(idNumber);

	$.post('/viewschedule/'+idNumber+'/join', function() {
		window.location.href = '/viewschedule';
	});
});




