$(document).ready(function() {
	
	var $scrollingDiv = $("#submitoverlay");
 
	$(window).scroll(function(){			
		$scrollingDiv
			.stop()
			.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );			
	});

	$( "#submit" ).click(function() {
		var date = $("#date option:selected").text();
		var time = $("#time option:selected").text();
		document.getElementById("aptdate").innerHTML = date;
		document.getElementById("apttime").innerHTML = time;
		$('#submitoverlay').css('visibility','visible').hide().fadeIn('slow');

		var name = $('#inputname #name').val();
		var email = readCookie("email");
		var description = $('#inputname #description').val();
		var type = $("input:radio[name=type]:checked").val();
		console.log(type);
		var json = {
			'date': date,
			'time': time,
			'name': name,
			'email': email,
			'description': description,
			'professor': 'Scott Klemmer',
			'location': 'Atkinson Hall 5204',
			'type': type,
			'owner': email,
			'origowner': 'thisuser'
		};

		setTimeout(function() {
        	$.post('/viewschedule/new', json, function(){
				window.location.href = '/viewschedule';
			});
    	}, 3000);
	});
});

$('.joinbutton').click(function(){
	var infoID = $(this).closest('.col-xs-4').attr('id');
	console.log(infoID);
	var idNumber = infoID.substr('div'.length);
	console.log(idNumber);

	//$('#'+ infoID).animate({ opacity: 0 });
	$('#joinbtn' + idNumber).css({
		"background-color": "#D0A896",
		"border-color": "#D0A896",
		"padding": "7px 13px 7px 13px"
	});

	$('#joinbtn' + idNumber).prop('disabled', true);
	$('#joinbtn' + idNumber).text("Joined");

	$('#joinbtn' + idNumber).show();

	$.post('/viewaltschedule/'+idNumber+'/join', function() {
	});
});

$('#formbtn').click(function(){
	if ($(this).text() == 'Create A New Appointment'){
		$(this).text("Hide Form");
		$('#dropdowndiv').height('0em');
		$('#dropdowndiv').show().animate({height: '+=2em'}, 500);
		$('#dropdowndiv').stop().animate({height:'28em'});
	}
	else {
		$(this).text("Create A New Appointment");
		$('#dropdowndiv').slideUp(500);		
	}
});

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
};





