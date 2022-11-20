"use strict";

$(document).ready(function () {
  // Your code here
  furnitureSlider();
  faqShow();
  menuToggle();
}); // Your functions here

function furnitureSlider() {
  var swiper = new Swiper(".furniture__slider", {
    pagination: {
      el: ".furniture__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".furniture__slider-next",
      prevEl: ".furniture__slider-prev"
    }
  });
}

function faqShow() {
  $('.faq__question').click(function (e) {
    e.preventDefault();
    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.removeClass('faq__question--active');
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    } else {
      $this.addClass('faq__question--active');
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }
  });
}

function menuToggle() {
  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__menu').addClass('header__menu--active');
    $('body').addClass('no-scroll');
  });
  $('.header__menu-close').on('click', function (e) {
    e.preventDefault();
    $('.header__menu').removeClass('header__menu--active');
    $('body').removeClass('no-scroll');
  });
}