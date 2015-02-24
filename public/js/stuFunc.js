function makeFunc(){
	window.location.href='/viewschedule';
}

function backshFunc(){
	window.location.href='/stu_homepage';
}

function scheFunc(){
	window.location.href='/student_make_appt';
}

function backaptFunc () {
	window.location.href='/viewschedule';
}

function cancelFunc() {
	window.location.href='/cancelapt';
}

function cancelApt() {
	alert("Appointment successfully canceled!");
}

function popConfirm() {
	window.location.href='/popConfirm';
}
function backCancelApt() {
	window.location.href='/cancelapt';
}

function confirmCancel() {
	window.location.href='/confirmCancel';
}

function readCookie(name) {
	var nameSG = name + "=";
	var nuller = '';
	
	if (document.cookie.indexOf(nameSG) == -1) {
		return nuller
	}
	
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
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

