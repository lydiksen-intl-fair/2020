
// Set the date we're counting down to
var countDownDate = new Date("Mar 3, 2020 15:37:25").getTime();

// Update the count down every 1 second
// var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));


document.getElementById("demo").innerHTML = "D-" + days;
  // If the count down is over, write some text
  if (distance < 0) {
    // clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
