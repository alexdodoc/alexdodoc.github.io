var activePage = "home";

document.getElementById(activePage).style.display = "block";

function showSkills() {
  console.warn("te rog afiseaza skills");
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
}
