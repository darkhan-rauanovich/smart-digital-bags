document.addEventListener("DOMContentLoaded", () => {
  const openMenuBtn = document.querySelector("#open-mobile-menu");
  const menu = document.querySelector("#mobile-menu");

  openMenuBtn.addEventListener("click", () => onMenuClick(openMenuBtn));

  window.addEventListener("scroll", () => onScroll())

  function onMenuClick(btn) {
    menu.classList.toggle("active");
    window.scroll(0,0);
  }

  function onScroll() {
    menu.classList.remove("active");
  }
})