document.addEventListener("DOMContentLoaded", () => {
  const btnNotification = document.querySelector("#open-notification");
  const notification = document.querySelector("#notification");

  btnNotification.addEventListener("click", (e) => {
    e.preventDefault();
    notification.classList.add("active");
  })

  window.addEventListener("click", (e) => {
    const el = e.target;
    const parent = el.closest("#notification");
    const parentBtnNotification = el.closest("#open-notification");


    if (!parent & !parentBtnNotification) {
      const notification = document.querySelector("#notification");
      notification.classList.remove("active")
    }

  }, {passive: true})

})


window.addEventListener("load", () => {
  const notification = document.querySelector("#notification");

  window.addEventListener("scroll", () => {
    const notificationActive = notification.classList.contains("active");
    if (notificationActive) {
      notification.classList.remove("active");
    }
  })
})
