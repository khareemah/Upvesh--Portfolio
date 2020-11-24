const links = document.querySelectorAll(".alternate-style");
totalLinks = links.length;
console.log(links);
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
