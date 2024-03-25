$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// animation effect in every section
document.addEventListener("DOMContentLoaded", function () {
  var animateItems = document.querySelectorAll('.animate-left');

  function checkPosition() {
    animateItems.forEach(function (item) {
      var position = item.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      if (position < windowHeight * 0.9) {
        item.classList.add('animate-show');
      }
    });
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);

  checkPosition();
});

const textElement = document.querySelector('.welcome-header-h1 span');
const texts = [
  "I'm Gian Raphael Delos Reyes Alcantara",
  "I'm a Software Engineer",
  "I'm passionate about coding",
  "I'm always learning and growing"
];
let index = 0;

function animateTextLoop() {
  textElement.textContent = texts[index];
  index = (index + 1) % texts.length;
}

animateTextLoop(); // Initial text
setInterval(animateTextLoop, 2500); // Change text every 2.5 seconds (2500 milliseconds)

