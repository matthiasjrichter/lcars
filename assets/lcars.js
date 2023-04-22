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

  //NASA APOD API
//document.querySelector('h1').addEventListener('click', getFetch)

function getFetch(){
  //const choice = document.querySelector('input').value
  const url = "https://api.nasa.gov/planetary/apod?api_key=vbdTJiJ7bXiae5JtJOHkYQIFFWdysEwR0XQ1mknI"//+choice
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //console.log(data)
        document.querySelector('.apod-title').innerText = data.title
        document.querySelector('.apod-explanation').innerText = data.explanation
        document.querySelector('.apod-img').src = data.url
        document.querySelector('.apod-hdurl').href = data.hdurl
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetch()