'use strict';
//スライダーの設定
$(function(){
  $('.section-customer__slider').slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow:1,
    slidesToScroll:1,
    prevArrow: '<img src="images/customer_image_slider_left.png" class="slick-arrow prev-arrow" alt="スライダー矢印(前へ)">',
    nextArrow: '<img src="images/customer_image_slider_right.png" class="slick-arrow next-arrow alt="スライダー矢印(後へ)">'
  });
});

//ヘッダーのハンバーガーメニュー制御
$(".header__opener").on("click", function(){
  // parentメソッドで2階層上のクラス(header)に上がる
  var $returnElm = $(this).parent(".wrapper").parent("#header");
  // findメソッドでheader__navクラスを指定する
  var $findElm = $returnElm.find(".header__nav");
  
  // アコーディオン
  $findElm.slideToggle();
  
  // アコーディオンの表示制御
  if($findElm.hasClass('none')){
    $findElm.removeClass('none');
  }else{
    $findElm.addClass('none');
  }
  
  //ハンバーガーボタンの表示制御
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  }else{
    $(this).addClass('active');
  }
});

//ハンバーガーメニューの各アンカーを押下すると、該当セクションまでスムーススクロールする
$('.header__nav-list a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); 
  var pos = $(elmHash).offset().top-60;
  $('body,html').animate({scrollTop: pos}, 600); 
  return false;
});

//qaセクションのアコーディオン制御
$(".section-qa__content-question").on("click", function(){
  // parentメソッドで1階層上のクラス(section-qa__content)に上がる
  var $returnElm2 = $(this).parent(".section-qa__content");
  // findメソッドでsection-qa__content-answer--hideクラスを指定する
  var $findElm2 = $returnElm2.find(".section-qa__content-answer--hide");
  
  // アコーディオン
  $findElm2.slideToggle();
  
  // アコーディオンの表示制御
  if($findElm2.hasClass('none')){
    $findElm2.removeClass('none');
  }else{
    $findElm2.addClass('none');
  }
  
  //開閉ボタンの表示制御
  var $openElm2 = $(this).find(".opener");
  
  if($openElm2.hasClass('active')){
    $openElm2.removeClass('active');
  }else{
    $openElm2.addClass('active');
  }
});
