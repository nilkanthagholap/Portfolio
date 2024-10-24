// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapsible headers
document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        const collapsibleContent = header.nextElementSibling;
        header.parentElement.classList.toggle('active');
        collapsibleContent.style.display = collapsibleContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Topnav responsive toggle
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Get the current year and set it in the footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Scroll to top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
