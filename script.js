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

/* YT video*/
.video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 aspect ratio (height:width) */
      padding-top: 30px;
      height: 0;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }

.video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
