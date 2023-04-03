var activePage = "home";

document.getElementById(activePage).style.display = "block";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  var pages = ["home", "projects", "languages", "skills"];
  pages.forEach(function (page) {
    hide(page);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}
