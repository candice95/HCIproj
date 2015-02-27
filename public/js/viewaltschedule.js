$(document).ready(function() {
	$( "#popMake" ).dialog({ autoOpen: false });
	
	$( "#submit" ).click(function() {
		var date = $("#date option:selected").text();
		var time = $("#time option:selected").text();
		document.getElementById("aptdate").innerHTML = date;
		document.getElementById("apttime").innerHTML = time;
		$( "#popMake" ).dialog( "open" );

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

		$(".ui-button-icon-primary.ui-icon.ui-icon-closethick").click(function(){
			$.post('/viewschedule/new', json, function(){
				window.location.href = '/viewschedule';
			});
		});
	});
});

$('.joinbutton').click(function(){
	var infoID = $(this).closest('.col-xs-4').attr('id');
	console.log(infoID);
	var idNumber = infoID.substr('div'.length);
	console.log(idNumber);

	$('#'+ infoID).animate({ opacity: 0 });
	$('.joined' + idNumber).show();

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


