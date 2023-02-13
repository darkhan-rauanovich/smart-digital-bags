document.addEventListener("DOMContentLoaded", () => {
  // ui
  const cardBtns = document.querySelectorAll(".your-bag__grid__item__btn");

  // events
  cardBtns.forEach((cardBtn) => cardBtn.addEventListener("click", (e) => openCard(e)));
  window.addEventListener("click", (e) => closeCard(e), {passive: true});


  // functions
  function openCard(e) {
    const parent = e.target.closest(".your-bag__grid__item");
    const info = parent.querySelector(".your-bag__grid__item__info");

    if (info) {
      const cardInfos = document.querySelectorAll(".your-bag__grid__item__info");

      cardInfos.forEach((cardInfo) => {cardInfo.classList.remove("active")});
      info.classList.add("active");
    }
  }

  function closeCard(e) {
    const elem = e.target.closest(".your-bag__grid__item");

    if (!elem) {
      const cardInfos = document.querySelectorAll(".your-bag__grid__item__info");
      cardInfos.forEach((cardInfo) => {cardInfo.classList.remove("active")});
    }
  }

})