// Background Image for the body
//document.body.style.backgroundImage = "url('./extras/photo.avif')";
document.body.style.backgroundImage = "url('./extras/logo.png')";

//For the collapsibles
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

// Button: Get Started with me
function getStarted() {
    const content = document.getElementById("content")
    content.innerHTML='<object type="application/pdf" data="/extras/ayecv.pdf" width="100%" height="1000px" no-download></object>';
    window.addEventListener('contextmenu', function (e) {
      e.preventDefault(); // Prevent right-click context menu
    });

    document.getElementById('viewPDF').addEventListener('click', function () {
      alert('Sorry, downloading PDF is not allowed.'); // Display custom message
    });
}

//Socials Redirect
function facebook() {
  window.open( "https://www.facebook.com", "_blank");
}

function github() {
  window.open( "", "_blank");
}

function twitter() {
  window.open( "https://www.twitter.com", "_blank");
}

function instagram() {
  window.open( "https://www.instagram.com", "_blank");
}
