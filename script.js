document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
      const collapsibleContent = header.nextElementSibling;

      header.parentElement.classList.toggle('active');

      collapsibleContent.style.display = collapsibleContent.style.display === 'block' ? 'none' : 'block';
  });
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById('current-year').textContent = currentYear;


// Get the button:
let mybutton = document.getElementById("myBtn");

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

// Disable right-click on the entire page
document.addEventListener('contextmenu', function(event) {
   event.preventDefault();
   alert("Right-click is disabled on this page.");  // Optional: Display a message
}

