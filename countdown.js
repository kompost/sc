// function createCookie(name,value,days) {
// 	if (days) {
// 		var date = new Date();
// 		date.setTime(date.getTime()+(days*24*60*60*1000-1));
// 		var expires = "; expires="+date.toGMTString();
// 	}
// 	else var expires = "";
// 	document.cookie = name+"="+value+expires+"; path=/";
// }
//
// function readCookie(name) {
// 	var nameEQ = name + "=";
// 	var ca = document.cookie.split(';');
// 	for(var i=0;i < ca.length;i++) {
// 		var c = ca[i];
// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
// 	}
// 	return null;
// }
//
// function eraseCookie(name) {
// 	createCookie(name,"",-1);
// }

function prefixZero(value) {
    if (value > 9) {
        return value;
    } else {
        return "0"+value;
    }
}

// var lastVisited = readCookie('lastVisited');
//
// if(lastVisited){
//   var expires = readCookie('expiration');
//   displayCountdown(new Date().getTime(), expires)
// } else {
//   createCookie('displayOverlay', true, 1);
//   createCookie('lastVisited', new Date().getTime(), 1);
//   createCookie('expiration', 691199999 + new Date().getTime(), 8);
//   displayCountdown(new Date().getTime(), 691199999 + new Date().getTime());
// }
//
// var x;
// function displayCountdown(lastVis, expiration){
//     x = setInterval(function() {
//
//         // Get todays date and time
//         var now = new Date().getTime();
//
//         // Find the distance between now an the count down date
//         var distance = expiration - lastVis;
//
//         // Time calculations for days, hours, minutes and seconds
//         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//
//
//         // Output the result in an element with id="countdown"
//         document.getElementById("countdown").innerHTML = prefixZero(days) + " : " + prefixZero(hours) + " : "
//         + prefixZero(minutes) + " : " + prefixZero(seconds) + "";
//     }, 1000);
// }


var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = 691199999;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(seconds);
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = prefixZero(days) + " : " + prefixZero(hours) + " : "
    + prefixZero(minutes) + " : " + prefixZero(seconds) + "";
}, 1000);

//
// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000 - 1));
//     var expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
//
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for(var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }
//
// function checkCookie() {
//     var user = getCookie("username");
//     if (user != "") {
//         console.log(user);
//     } else {
//         setCookie("username", "guest", 7);
//     }
// }
//
// checkCookie();
