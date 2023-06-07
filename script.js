// Background Image for the body
//document.body.style.backgroundImage = "url('./extras/photo.avif')";
document.body.style.backgroundImage = "url('./extras/banner.png')";

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

//Socials Redirect
function facebook() {
  window.open( "https://www.facebook.com", "_blank");
}

function github() {
  window.open( "https://www.github.com", "_blank");
}

function twitter() {
  window.open( "https://www.twitter.com", "_blank");
}

function instagram() {
  window.open( "https://www.instagram.com", "_blank");
}
