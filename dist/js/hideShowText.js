document.addEventListener("DOMContentLoaded", () => {
  console.log(window.innerWidth);

  if (window.innerWidth <= 768) {
    const maxString = 180;
    const texts = document.querySelectorAll(".portfolio__slider__item__description__item");

    texts.forEach((item) => {
      const text = item.querySelector(".portfolio__slider__item__description__item__text");
      const params = item.querySelector(".portfolio__slider__item__params");

      if (params) {
        params.style.display = "none";
      }

      const inHtml = text.innerHTML;

      const cutHtml = `${inHtml.substring(0, maxString)}... <img data-text="${inHtml}" data-params="${params ? true : false}" class="portfolio__slider__item__description__item__text__img" src="./img/icon-right.png"/>`;

      text.innerHTML = cutHtml;
    });

    const openTextBtns = document.querySelectorAll(".portfolio__slider__item__description__item__text__img");

    openTextBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.closest(".portfolio__slider__item__description__item__text");
        const params = btn.dataset.params;
        console.log(params);

        if (params) {
          const parent = btn.closest(".portfolio__slider__item__description__item");
          const paramsNode = parent.querySelector(".portfolio__slider__item__params");

          if (paramsNode) {
            paramsNode.style.display = "flex"
          }
        }

        const textContent = btn.dataset.text;
        text.innerHTML = textContent;
      })
    })
  }
})