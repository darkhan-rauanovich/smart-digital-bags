// hover on bags
document.addEventListener("DOMContentLoaded", () => {
  // ui
  const hovers = document.querySelectorAll(".first-bags__preview__inner__bags__hovers__item");

  // events
  hovers.forEach(hover => {
      hover.addEventListener("mouseover", (e) => onHover(e, true));
      hover.addEventListener("mouseleave", (e) => onHover(e, false));
  })

  // functions
  function onHover(e, mouseover) {
      const elem = e.target;
      const id = elem.dataset.target;

      const shadow = document.querySelector(`.first-bags__preview__inner__shadows__item[data-id='${id}']`);
      const spot = document.querySelector(`.first-bags__preview__inner__spots__item[data-id='${id}']`);


      if (mouseover) {
            requestAnimationFrame(() => {
                spot.style.opacity = "1"
                shadow.style.opacity = "1";
            });
      } else {
            requestAnimationFrame(() => {
            spot.style.opacity = "0"
            shadow.style.opacity = "0";
        });
      }
  }
})