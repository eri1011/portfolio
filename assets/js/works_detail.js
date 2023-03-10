'use strict';

//スライダーの設定
$(function(){
  $('.detail__image').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    fade: true,
    speed: 1000,
    slidesToShow:1,
    slidesToScroll:1,
  });
});