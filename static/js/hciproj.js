'use strict';

$('#student').click(function(){
    var wrapper = $('#buttons'),
    	current = wrapper.children().first(),
        back = $('<img src="images/arrow-left.png" class="back">').css({
            marginLeft: '100%',
        	height:25,
        	display: 'none',
        }),
        next = $('<form> UCSD e-mail: <input type="text" name="email"><br><br> PID: <input type="text" name="pid" id="pid">').css({
            height:100,
            backgroundColor: 'seashell',
            display:'none'
        }),
        login = $('<button id="login" class="btn">Log in</button>').css({
        	position: 'relative',
            marginLeft: '100%',
            display: 'none'
        });

    
    current.fadeOut(300, function() {
        wrapper.children().next().remove();
        $(this).remove();
        wrapper.prepend(back, next, login);
        back.show().animate({marginLeft:0},200);
        next.show().animate({marginLeft:0}, 300);

        login.show().animate({marginLeft:0},800);
    });
});

$('#prof').click(function(){
    var wrapper = $('#buttons'),
        current = wrapper.children().first(),
        back = $('<img src="images/arrow-left.png" class="back">').css({
        	marginRight:'20%',
        	height:25,
        	display: 'none',
        }),
        next = $('<form> UCSD e-mail: <input type="text" name="email"><br><br><br> PID: <input type="text" name="pid" id="pid">').css({
            height:100,
            backgroundColor: 'seashell',
            marginLeft:'100%',
            display:'none'
        }),
        login = $('<button id="login" class="btn">Log in</button>').css({
        	position: 'relative',
            display: 'none'
        });

    current.fadeOut(200, function() {
        wrapper.children().next().remove();
        $(this).remove();
        wrapper.prepend(back, next, login);
        back.show().animate({marginLeft:0},200);
        next.show().animate({marginLeft:0},800);
        login.show().animate({marginLeft:0},800);
    });
});


	

