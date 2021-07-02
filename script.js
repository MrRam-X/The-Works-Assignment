function displayNav() {
  var nav = document.getElementById("main-nav");
  if (nav.className === "navbar") {
    nav.className += " responsive";
  } else {
    nav.className = "navbar";
  }
}
