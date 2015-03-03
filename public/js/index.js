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

function newCookie(name,value,days) {
    var days = 10;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString(); 
    }
    else {
        var expires = ""
    }
    
    document.cookie = name+"="+value+expires+"; path=/"; 
};

function readCookie(name) {
    var nameSG = name + "=";
    var nuller = '';
    if (document.cookie.indexOf(nameSG) == -1) {
        return nuller
    }
    
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' '){
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameSG) == 0){
            return c.substring(nameSG.length,c.length);
        }
    }
    return null;
};

function eraseCookie(name) {
    newCookie(name, "", 1); 
};

function toMem(a) {
    newCookie('email', document.userForm.email.value);
};

function delMem(a) {
    eraseCookie('email');
    document.userForm.email.value = '';
};

function remCookie() {
    document.userForm.email.value = readCookie("email");
};

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } 
    else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
};

addLoadEvent(function() {
    remCookie();
});

