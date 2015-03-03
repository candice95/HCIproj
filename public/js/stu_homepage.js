'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	remCookie();

	var $scrollingDiv = $("#dropoverlay");
 
	$(window).scroll(function(){			
		$scrollingDiv
			.stop()
			.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );			
	});
	
	var $scrollingDiv = $("#canceloverlay");
 
	$(window).scroll(function(){			
		$scrollingDiv
			.stop()
			.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );			
	});

 	$('.information .delete').click(function(e) {
		var infoID = $(this).closest('.information').attr('id');
		var idNumber = infoID.substr('information'.length);

		$('#canceloverlay').css('visibility','visible').hide().fadeIn('slow');
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

		$('#dropoverlay').css('visibility','visible').hide().fadeIn('slow');

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