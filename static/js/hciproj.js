'use strict';

var studclone= $('#student');
var profclone=$('#prof');
var backclone=$('.back');


$('#student').click(function(){
    var wrapper = $('#buttons'),
    	current = wrapper.children().first(),
        back = $('<img src="images/arrow-left.png" id="back">').css({
            display: 'block',
            margin:'0 auto',
            marginLeft: '100%'
        }),
        next = $('<form id="inputs"> UCSD e-mail: <input type="text" name="email" id="email"><br><br> PID: <input type="text" name="pid" id="pid">'),
        login = $('<button id="login" class="btn">Log in</button>');
    
    current.fadeOut(300, function() {
        wrapper.children().next().detach();
        $(this).detach();
        wrapper.prepend(back);
        wrapper.append(next, login);
        back.show().animate({marginLeft:'10%'},800);
        login.show().animate({marginLeft:0},800);
        next.show().animate({marginLeft:0},800);

        $("#back").click(function(){
            var back = $("#back"),
            inputs = $("#inputs"),
            login = $("#login");

            login.detach().animate({marginLeft:0}, 300);
            inputs.animate({marginLeft:0}, 300, function(){
                inputs.detach();
            });
            back.animate({marginLeft:0}, 300, function(){
                back.detach();
            });

            $("#buttons").append(studclone);
            $("#buttons").append('<br><br>');
            $('#buttons').append(profclone);
            studclone.show().animate({marginLeft:0},800);
        });
    });
});

$('#prof').click(function(){
    var wrapper = $('#buttons'),
        current = wrapper.children().first(),
        back = $('<img src="images/arrow-left.png" id="back">').css({
            display: 'block',
            margin:'0 auto',
            marginLeft: '100%',
        }),
        next = $('<form id="inputs"> UCSD e-mail: <input type="text" name="email" id="email"><br><br> PID: <input type="text" name="pid" id="pid">'),
        login = $('<button id="login" class="btn">Log in</button>');

    current.fadeOut(200, function() {
        wrapper.children().next().detach();
        $(this).detach();
        wrapper.prepend(back);
        wrapper.append(next, login);
        back.show().animate({marginLeft:'10%'}, 800);
        login.show().animate({marginLeft:0},800);
        next.show().animate({marginLeft:0},800);

        $("#back").click(function(){
            var back = $("#back"),
            inputs = $("#inputs"),
            login = $("#login");

            login.animate({marginLeft:0}, 300, function(){
                login.detach();
            });
            inputs.animate({marginLeft:0}, 300, function(){
                inputs.detach();
            });
            back.animate(300, function(){
                back.detach();
            });

            $("#buttons").append(studclone);
            $("#buttons").append('<br><br>');
            $('#buttons').append(profclone);
            studclone.show().animate({marginLeft:0},800);
        });
    });
});


	

