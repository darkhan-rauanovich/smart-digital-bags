
document.addEventListener("DOMContentLoaded", function() {
  var sliderPortfolio = new Swiper('.portfolio__slider', {
    loop: false,

    spaceBetween: 10,

    pagination: {
      el: '.portfolio__slider__pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1
    },

    navigation: {
      nextEl: '.portfolio__slider__navigation__next',
      prevEl: '.portfolio__slider__navigation__prev',
    }
  })


  var sliderPortfolioDevice = new Swiper('.portfolio__device__screen__slider', {
    loop: false,
    direction: "vertical",
    scrollContainer: true,
    mousewheel: true,
    grabCursor: true,

    breakpoints: {
      768: {
        direction: "horizontal",
      },
      320: {
        direction: "horizontal",
      },
    }
  })

  sliderPortfolio.controller.control = sliderPortfolioDevice;
  sliderPortfolioDevice.controller.control = sliderPortfolio;

  sliderPortfolioDevice.on('slideChange', function () {
    setTimeout(function () {
      sliderPortfolioDevice.params.mousewheel.releaseOnEdges = false;
    }, 500);
  });

  sliderPortfolioDevice.on('reachEnd', function () {
    setTimeout(function () {
      sliderPortfolioDevice.params.mousewheel.releaseOnEdges = true;
    }, 1500);
  });

  var clientsSlider = new Swiper('.clients__slider', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 40,

    pagination: {
      el: '.clients__slider__pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1
    },

    navigation: {
      nextEl: '.clients__slider__navigation__next',
      prevEl: '.clients__slider__navigation__prev',
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 2,
      },

      300: {
        slidesPerView: 1,
      }
    }
  })

  var clientsSliderMobile = new Swiper(".clients__slider__mobile", {
    slidesPerView: 1,

    loop: true,

    pagination: {
      el: '.clients__slider__mobile__pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1
    },

    navigation: {
      nextEl: '.clients__slider__mobile__navigation__next',
      prevEl: '.clients__slider__mobile__navigation__prev',
    },
  })

  var sliderMobileBags = new Swiper(".first-bags-mobile__slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      dealy: 1000,
    },
  })

  var bagsMobileSlider = new Swiper(".your-bag__slider", {
    slidesPerView: 1.5,
    spaceBetween: 10,

    pagination: {
      el: '.your-bag__slider__pagination',
      dynamicBullets: true,
      dynamicMainBullets: 1
    },
  })


})

