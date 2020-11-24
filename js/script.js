// filter
const buttonsContainer = document.querySelector(".navigation-btn"),
  buttons = buttonsContainer.children,
  portfolioItems = document.querySelectorAll(
    ".portfolio-section .portfolio-item"
  );
totalPortfoliItems = portfolioItems.length;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    buttonsContainer.querySelector("button.active").classList.remove("active");
    this.classList.add("active");
    const target = this.getAttribute("data-target");
    for (let j = 0; j < portfolioItems.length; j++) {
      const targetId = portfolioItems[j].getAttribute("data-id");
      console.log(targetId);
      if (target === targetId) {
        portfolioItems[j].classList.add("show");
        portfolioItems[j].classList.remove("hide");
      } else {
        portfolioItems[j].classList.add("hide");
        portfolioItems[j].classList.remove("show");
      }
      if (target == "all") {
        portfolioItems[j].classList.remove("hide");
        portfolioItems[j].classList.add("show");
      }
    }
  });
}

// lightbox
const closebtn = document.querySelector(".lightbox .close-btn"),
  lightbox = document.querySelector(".lightbox"),
  nextBtn = document.querySelector(".lightbox .next"),
  prevBtn = document.querySelector(".lightbox .prev"),
  lightboxImage = document.querySelector(".lightbox-img"),
  lightboxCounter = document.querySelector(".lightbox-counter"),
  lightboxCategory = document.querySelector(".lightbox-category");
let currentySelected;

function changeImage() {
  let imageSrc = portfolioItems[currentySelected].querySelector("img").src,
    categoryText = portfolioItems[currentySelected].querySelector(".overlay p")
      .innerHTML;
  lightboxImage.src = imageSrc;
  lightboxCounter.innerHTML = `${currentySelected + 1} of 6`;
  lightboxCategory.innerHTML = categoryText;
}

function closeModal() {
  lightbox.classList.remove("open");
}

function openModal() {
  lightbox.classList.add("open");
}

function prevImage() {
  if (currentySelected === 0) {
    currentySelected = totalPortfoliItems - 1;
  } else {
    currentySelected--;
  }
  changeImage();
}

function nextImage() {
  if (currentySelected === totalPortfoliItems - 1) {
    currentySelected = 0;
  } else {
    currentySelected++;
  }
  changeImage();
}

for (let i = 0; i < totalPortfoliItems; i++) {
  portfolioItems[i].addEventListener("click", function() {
    currentySelected = i;
    openModal();
    changeImage();
  });
}
prevBtn.addEventListener("click", function() {
  prevImage();
});

nextBtn.addEventListener("click", function() {
  nextImage();
});
closebtn.addEventListener("click", function() {
  closeModal();
});
lightbox.addEventListener("click", function(e) {
  if (e.target.classList.contains("lightbox")) {
    closeModal();
  }
});
lightboxImage.addEventListener("click", function() {
  nextImage();
});
