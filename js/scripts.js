// Collapsable menu expands when clicked
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Increase and decreases font size for accesibility purposes
let cont;

function loadEvents() {
    cont = document.getElementById("container");

    let slider = document.getElementById("slider");
    slider.addEventListener("change", () => {
        changeSize(slider.value);
    });

    
    let btns = document.getElementsByClassName("btn");
    for (const btn of btns) {
        btn.addEventListener("click", () => {
            changeSize(btn.value);
        });
    }
}

function changeSize(size) {
    cont.style.fontSize = `${size}px`;
}

// Load the events after loading the DOM elements
addEventListener("DOMContentLoaded", loadEvents);

// Toggles between dark and light mode
$( ".change" ).on("click", function() {
if( $( "body" ).hasClass( "dark" )) {
$( "body" ).removeClass( "dark" );
$( ".change" ).text( "OFF" );
} else {
$( "body" ).addClass( "dark" );
$( ".change" ).text( "ON" );
}
});

//Get the button:
mybutton = document.getElementById("backBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}