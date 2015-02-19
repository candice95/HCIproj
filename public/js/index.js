'use strict';

var newLocation;

$(document).keypress(
    function(event){
     if (event.which == '13') {
        event.preventDefault();
      }
});

$('#student').click(function(){
    $('#proflogin').hide();
    var	current = $('.buttons'),
        next = $('.fields');

    current.animate({marginLeft: '-200%'}, 800);
    $('#inputs').show();
    $('#back').show();
    $('#stulogin').show();
    next.show().animate({marginLeft:'10%'}, 800);
    current.fadeOut(function(){});
});

$('#prof').click(function(){
    $('#stulogin').hide();
    var current = $('.buttons'),
        next = $('.fields');

    current.animate({marginLeft: '-200%'}, 800);
    $('#inputs').show();
    $('#back').show();
    $('#proflogin').show();
    next.show().animate({marginLeft:'10%'}, 800);
    current.fadeOut(function(){});
});

$("#back").click(function(){
    var current = $('.fields'),
        next = $('.buttons');

    current.animate({marginLeft: '100%'}, 800);
    $('#student').show();
    $('#prof').show();
    current.fadeOut(function(){});
    next.show().animate({marginLeft: '0%'}, 800);
    
    $('#inputs').find('input:text').val('');
    $('#inputs').find('input:password').val('');
});

$("#link").click(function(){
    event.preventDefault();
    newLocation = this.href;
    $('body').animate({marginLeft: '-200%'}, 800);
    $('body').fadeOut(newpage);
});

function newpage(){
    window.location = newLocation;
}

	

