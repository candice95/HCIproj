'use strict';

$(document).ready(function(){
	$( "#popMake" ).dialog({ autoOpen: false });
	
	$( "#submit" ).click(function() {
		var date = $("#date option:selected").text();
		var time = $("#time option:selected").text();
		document.getElementById("aptdate").innerHTML = date;
		document.getElementById("apttime").innerHTML = time;
		$( "#popMake" ).dialog( "open" );

		var name = $('#inputname #name').val();
		var email = $('#inputname #email').val();
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
			'owner': 'thisuser',
			'origowner': 'thisuser'
		};

		$(".ui-button-icon-primary.ui-icon.ui-icon-closethick").click(function(){
			$.post('/viewschedule/new', json, function(){
				window.location.href = '/viewschedule';
			});
		});
	});
});

