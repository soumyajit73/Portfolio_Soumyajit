// --- Existing Menu Toggle Code ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__sm-menu--active")) {
    smallMenu.classList.remove("header__sm-menu--active");
  } else {
    smallMenu.classList.add("header__sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// --- Logo Click Navigation ---
const headerLogoContainer = document.querySelector(".header__logo-container");

headerLogoContainer.addEventListener("click", () => {
  location.href = "index.html";
});

// --- Add Sliding Animation for Name ---
const nameText = document.querySelector(".slide-text");
if (nameText) {
  nameText.style.opacity = "0"; // Initially hidden
  nameText.style.transform = "translateX(-100%)";

  setTimeout(() => {
    nameText.style.transition =
      "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
    nameText.style.opacity = "1";
    nameText.style.transform = "translateX(0)";
  }, 500); // Delay of 0.5s before animation starts
}
