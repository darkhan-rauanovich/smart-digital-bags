
document.addEventListener("DOMContentLoaded", function() {
  var sliderPortfolio = new Swiper('.portfolio__slider', {
    loop: false,

    pagination: {
      el: '.portfolio__slider__pagination',
      dynamicBullets: true,
      dynamicMainBullets: 3
    },

    navigation: {
      nextEl: '.portfolio__slider__navigation__next',
      prevEl: '.portfolio__slider__navigation__prev',
    }
  })


  var sliderPortfolioDevice = new Swiper('.portfolio__device__screen__slider', {
    loop: false,
  })

  console.log(sliderPortfolio, sliderPortfolioDevice)


  sliderPortfolio.controller.control = sliderPortfolioDevice;
  sliderPortfolioDevice.controller.control = sliderPortfolio;
})

