'use strict';

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

	

