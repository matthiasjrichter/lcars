document.addEventListener("touchstart", function() {},false);



$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.scroll-top a').fadeIn(); //chenge fadeIn() to show() to delete effect
    } else {
        $('.scroll-top a').fadeOut(); //change fadeOut() to hide() to delete effect
    }
});

// delete this for non-smooth scroll behavior:
$(document).ready(function() {
    $("#scroll-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

/* Additions by Matthias J. Richter */

// var datetime = new Date();
// console.log(datetime);
// document.getElementById("time").textContent = datetime; //it will print on html page

`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", "  ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

  //random number generator. Creates A number up to 4 digits
  //to add it give class "randomNum4"

  function randomNum4(){
    document.querySelector(".randomNum4").innerText =  Math.floor(Math.random()*10000)
  }
  randomNum4()

  