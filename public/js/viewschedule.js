$(document).ready(function() {
	$('#calendar').fullCalendar({
		allDaySlot: false,
		businessHours: {
			start: '12:00',
			end: '14:00',
			dow: [4]
		},
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
	})
});

$('.btn').click(function(){
	$('#joined').show();
});


