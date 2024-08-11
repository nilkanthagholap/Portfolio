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


