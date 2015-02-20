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

	$('#'+ infoID).animate({ opacity: 0 });
	$('.joined' + idNumber).show();

	$.post('/viewschedule/'+idNumber+'/join', function() {
	});
});

$('#calendarbtn').click(function(){
	if ($(this).text() == 'Create An Appointment'){
		$(this).text("Hide Calendar");
		$('#calendardiv').height('0em');
		$('#calendardiv').show().animate({height: '+=2em'}, 500);
		$('#calendardiv').stop().animate({height:'25em'});
		$('#calendar').fullCalendar('render');
	}
	else {
		$(this).text("Create An Appointment");
		$('#calendardiv').slideUp(500);		
	}
});




