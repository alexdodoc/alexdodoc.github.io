var activePage = "skills";

show(activePage);

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  var pages = document.querySelectorAll("#main .page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    showPage(id);
  }
});

function showSkills(skills) {
  var html = skills.map(function (skill) {
    return `<li>${skill.name} - <span class="endorcements">${skill.endorcements}</span></li>`;
  });
  //console.warn(html);

  var container = document.querySelector("#skills ul");
  container.innerHTML = html.join("");
}
function loadSkills() {
  fetch("skills.json")
    .then(function (r) {
      return r.json();
      //  r.json().then(function (r2) {
      //    console.warn("r2", r2);
      //  });
    })
    .then(function (skills) {
      // console.warn("r3", skills);
      showSkills(skills);
    });
}
loadSkills();
