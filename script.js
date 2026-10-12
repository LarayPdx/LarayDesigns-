const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const navigationLinks = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("is-open", !isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigationLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
