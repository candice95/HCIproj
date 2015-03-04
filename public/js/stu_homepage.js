'use strict';
// Call this function when the page loads (the "ready" event)

var scrollon= false;

$(document).ready(function() {
	remCookie();

	var $scrollingDiv = $("#dropoverlay");
 
	$(window).scroll(function(){	
		if (scrollon){		
			$scrollingDiv
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );	
		}		
	});

	var $scrollingDiv = $("#canceloverlay");
 
	$(window).scroll(function(){
		if (scrollon){			
			$scrollingDiv
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );		
		}	
	});

 	$('.information .delete').click(function(e) {
		var infoID = $(this).closest('.information').attr('id');
		var idNumber = infoID.substr('information'.length);

		scrollon = true;

		var $scrollingDiv = $("#canceloverlay");
		$scrollingDiv
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );

		$('#canceloverlay').css('visibility','visible').hide().fadeIn('slow');
		$('#confirmCancel').click(function() {
			$.post('/stu_homepage/'+idNumber+'/delete', function() {
			window.location.href = '/stu_homepage';
			});
			scrollon = false;
		});
		$('#noCancel').click(function() {
			window.location.href = '/stu_homepage';
			scrollon = false;
		});

	});

	$('.information .drop').click(function(e) {
		var infoID = $(this).closest('.information').attr('id');
		var idNumber = infoID.substr('information'.length);

		scrollon = true;

		var $scrollingDiv = $("#canceloverlay");
		$scrollingDiv
				.stop()
				.animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );

		$('#dropoverlay').css('visibility','visible').hide().fadeIn('slow');

		$('#confirmDrop').click(function() {
			$.post('/stu_homepage/'+idNumber+'/drop', function() {
			window.location.href = '/stu_homepage';
			});
			scrollon = false;
		});
		$('#noDrop').click(function() {
			window.location.href = '/stu_homepage';
			scrollon = false;
		});

	});
});


function remCookie() {
	var email = readCookie("email");
	$('#email').text(email);
}