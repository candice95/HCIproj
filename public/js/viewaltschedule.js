var scrollon = false;

$(document).ready(function() {
	
	var $scrollingDiv = $("#submitoverlay");
	//var $errScroll = $("#submiterror");

	$(window).scroll(function(){		
		if (scrollon){	
			$scrollingDiv
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );	
		}		
		/*if (scrollon){	
			$errScroll
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );	
		}*/	
	});

	$( "#submit" ).click(function() {
		var date = $("#date option:selected").text();
		var time = $("#time option:selected").text();
		var name = $('#inputname #name').val();
		var description = $('#inputname #description').val();

		if (date == "Select a Date" || time == "Select a Time" || name == "" || description == ""){
			
			
			
			
			if (date == "Select a Date"){
				//document.getElementById("errdate").innerHTML = "Select a Date";
				$('#errdateli').show();
			}
			if (time == "Select a Time"){
				//document.getElementById("errtime").innerHTML = "Select a Time";
				$('#errtimeli').show();
			}
			if (name == ""){
				//document.getElementById("errname").innerHTML = "Please enter a name";
				$('#errnameli').show();
			}
			if (description == ""){
				//document.getElementById("errdesc").innerHTML = "Please enter a description";
				$('#errdescli').show();
			}


			/*scrollon = true;
			var $errScroll = $("#submiterror");
			$errScroll
				.stop()			
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );*/
			$('#submiterror').css('visibility','visible').hide().fadeIn();
			
			return;
		}
		else{
			document.getElementById("aptdate").innerHTML = date;
			document.getElementById("apttime").innerHTML = time;

			scrollon = true;
			var $scrollingDiv = $("#submitoverlay");
			$scrollingDiv
				.stop()			
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );
				
			$('#submitoverlay').css('visibility','visible').hide().fadeIn('slow');

			var name = $('#inputname #name').val();
			var email = readCookie("email");
			var description = $('#inputname #description').val();
			var type = $("input:radio[name=type]:checked").val();
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
        		$.post('/viewaltschedule/new', json, function(){
					window.location.href = '/viewaltschedule';
				});
    		}, 3000);
		}
	});
});

$('.joinbutton').click(function(){
	var infoID = $(this).closest('.col-xs-4').attr('id');
	var idNumber = infoID.substr('div'.length);

	//$('#'+ infoID).animate({ opacity: 0 });
	$('#joinbtn' + idNumber).css({
		"background-color": "#6889a1",
		"border-color": "#6889a1",
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

$('#cancelbtn').click(function(){
	$('#formbtn').text("Create A New Appointment");
	$('#dropdowndiv').slideUp(500);	
});

$('#publicbtn').click(function(){
	$(this).button('toggle');
});

$('#privatebtn').click(function(){
	$(this).button('toggle');
});

function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
};

function closeerr() {
	el = document.getElementById("submiterror");
	el.style.visibility = "hidden";
	$('#errdateli').hide();
	$('#errtimeli').hide();
	$('#errnameli').hide();
	$('#errdescli').hide();

};



