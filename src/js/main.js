(function() {
  'use strict';

  function initSlickCarousel() {
    $('.feedback-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      focusOnSelect: true
    });
  };

  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  };

  initSlickCarousel();

  var btnScrollDown = document.querySelector('#scroll-down');

  btnScrollDown.addEventListener('click', scrollDown);
})();
