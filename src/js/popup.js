document.addEventListener("DOMContentLoaded", () => {
  const btnPopup = document.querySelector("#open-popup");
  const popup = document.querySelector("#popup");
  const closePopup = document.querySelector(".order-popup__close");


  btnPopup.addEventListener("click", () => {
    popup.classList.add("active");
  })

  popup.addEventListener("click", (e) => {
    const el = e.target;
    const popupContent = el.closest(".order-popup__content");

    if (!popupContent) {
      popup.classList.remove("active");
    }
  })

  window.addEventListener("scroll", () => {
    popup.classList.remove("active");
  })

  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
  })
})


