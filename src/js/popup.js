document.addEventListener("DOMContentLoaded", () => {
  // uis
  const openBtns = document.querySelectorAll(".open-popup");
  const closeBtns = document.querySelectorAll(".close-popup");
  const popups = document.querySelectorAll(".popup");

  // events
  openBtns.forEach((btn) => btn.addEventListener("click", () => onOpen(btn)))
  closeBtns.forEach((btn) => btn.addEventListener("click", () => onClose(btn)))
  window.addEventListener("scroll", () => popups.forEach((popup) => closePopup(popup)));

  // functions

  function onOpen(btn) {
    const dataPopup = btn.dataset.popup;
    const popup = document.querySelector(`#${dataPopup}`);

    openPopup(popup);
  }

  function onClose(btn) {
    const popup = btn.closest(".popup");

    if (popup) {
      closePopup(popup);
    }
  }

  function openPopup(popup) {
    popup.classList.add("active");
  }

  function closePopup(popup) {
    popup.classList.remove("active");
  }
})