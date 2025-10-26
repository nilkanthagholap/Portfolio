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


// Disable F12 (KeyCode 123) and ALT (KeyCode 18) keys
document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 123 || event.keyCode == 18) {
        return false;
    }
}

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());




// Accordion Functionality - Updated for title/header click expansion
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.post-header');
    const contents = document.querySelectorAll('.post-content');
    const icons = document.querySelectorAll('.toggle-icon');

    headers.forEach((header, index) => {
        header.addEventListener('click', function(e) {
            // Prevent any bubbling if needed (unlikely, but safe)
            e.stopPropagation();
            
            console.log(`Header ${index} clicked - expanding post`); // TEMP DEBUG: Remove after it works

            const targetContent = contents[index];
            const targetIcon = icons[index];

            // Close all other posts
            contents.forEach((content, i) => {
                if (i !== index && content.classList.contains('open')) {
                    content.classList.remove('open');
                    content.style.maxHeight = null; // Reset for smooth close
                    icons[i].textContent = '▼';
                    icons[i].style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current post
            if (targetContent.classList.contains('open')) {
                targetContent.classList.remove('open');
                targetContent.style.maxHeight = '0px';
                targetIcon.textContent = '▼';
                targetIcon.style.transform = 'rotate(0deg)';
            } else {
                // Dynamic height: Calculate exact space needed
                targetContent.style.maxHeight = targetContent.scrollHeight + 'px';
                targetContent.classList.add('open');
                targetIcon.textContent = '▲';
                targetIcon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
