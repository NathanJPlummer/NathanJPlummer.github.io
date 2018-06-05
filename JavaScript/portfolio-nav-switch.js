const cellNavigators = {};
cellNavigators.home = document.getElementById('navpane-home');
cellNavigators.project = document.getElementById('navpane-project');
const projectsNavSwitch = document.getElementById('projects-switch');
const homeNavSwitch = document.getElementById('home-switch');

function switchNav() {
  //switches the default and project nav during an appropriate event
    if (cellNavigators.home.style.display !== "none") {
      var visible = cellNavigators.home;
      var notVisible = cellNavigators.project;
    } else {
      visible = cellNavigators.project;
      notVisible = cellNavigators.home;
    }
      visible.style.transition = "all 0.5s ease";
      visible.style.opacity = "0";
      setTimeout(() => visible.style.display = "none", 500);
      setTimeout(() => notVisible.style.display = "flex", 500);
      notVisible.style.transition = "all 0.5s ease";
      notVisible.style.opacity = "0";
      setTimeout(() => notVisible.style.opacity = "1", 550);
}

projectsNavSwitch.addEventListener("click", function() {
  switchNav();
})

homeNavSwitch.addEventListener("click", function() {
  switchNav();
})
