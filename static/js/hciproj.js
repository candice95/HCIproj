'use strict';

var newLocation;

$('#student').click(function(){
    var	current = $('.buttons'),
        next = $('.fields');

    current.animate({marginLeft: '-200%'}, 800);
    $('#inputs').show();
    $('#back').show();
    $('#login').show();
    next.show().animate({marginLeft:'10%'}, 800);
    current.fadeOut(function(){});
});

$('#prof').click(function(){
    var current = $('.buttons'),
        next = $('.fields');

    current.animate({marginLeft: '-200%'}, 800);
    $('#inputs').show();
    $('#back').show();
    $('#login').show();
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
    
});

$("#proflogin").click(function(){
    event.preventDefault();
    newLocation = this.href;
    $('body').animate({marginLeft: '-200%'}, 300);
    $('body').fadeOut(newpage);
});

function newpage(){
    window.location = newLocation;
}

	

