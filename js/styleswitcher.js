const links = document.querySelectorAll(".alternate-style");
totalLinks = links.length;
function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    console.log();
    if (color == links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

const toggleSwitcher = document.querySelector(".toggle-switcher");
const styleSwitcher = document.querySelector(".style-switcher");
toggleSwitcher.addEventListener("click", function() {
  styleSwitcher.classList.toggle("open");
});

const bodySkins = document.querySelectorAll(".body-skin"),
  totalBodySkins = bodySkins.length;
for (let i = 0; i < totalBodySkins; i++) {
  bodySkins[i].addEventListener("change", function(e) {
    if (e.target.value == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
}
