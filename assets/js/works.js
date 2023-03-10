'use strict';
// スライダーの設定
$(function(){
  $('.works__list-image').slick({
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    dots: true,
    arrows: false,
    speed: 1000,
    variableWidth: true,
    /*----両サイドを表示----*/
    centerMode:true,
    /*----------------------*/
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 480, // 〜479px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

let menuElementsWorks = document.querySelectorAll('.works__list-image--item');

//works__expansion-titleに表示されるタイトル
const infoAryWorks = [
  '<div class="works__expansion-title--main">すぐ食べ(ランディングページ)</div><div class="works__expansion-title--sub">WEB制作</div>',
  '<div class="works__expansion-title--main">出路針茶房(架空のカフェサイト)</div><div class="works__expansion-title--sub">WEB制作</div>',
  '<div class="works__expansion-title--main">プロフィールサイト</div><div class="works__expansion-title--sub">WEB制作</div>',
  '<div class="works__expansion-title--main">ポートフォリオサイト</div><div class="works__expansion-title--sub">WEB制作</div>',
  '<div class="works__expansion-title--main">名刺</div><div class="works__expansion-title--sub">デザイン</div>',
  '<div class="works__expansion-title--main">名刺のロゴマーク</div><div class="works__expansion-title--sub">デザイン</div>',
  '<div class="works__expansion-title--main">DHWカフェのWEBバナー</div><div class="works__expansion-title--sub">デザイン</div>',
  '<div class="works__expansion-title--main">スイーツ店のロゴ</div><div class="works__expansion-title--sub">デザイン</div>',
];

//works__expansion-imageに表示される画像
const infoAryWorksImage = [
  '<img src="/assets/images/works/main/works_sugutabe.jpg" alt="すぐ食べのトップ" width="337px" height="280px">',
  '<img src="/assets/images/works/main/works_sabou.jpg" alt="出路針茶房(架空のカフェサイト)のトップ" width="337px" height="280px">',
  '<img src="/assets/images/works/main/works_profile.jpg" alt="プロフィールサイトのトップ" width="337px" height="280px">',
  '<img src="/assets/images/works/main/works_portfolio.jpg" alt="ポートフォリオサイトのトップ" width="337px" height="280px">',
  '<img src="/assets/images/works/main/works_namecard.jpg" alt="名刺" width="337px" height="280px">',
  '<img src="/assets/images/works/main/works_namecard_logo_expansion.png" alt="名刺のロゴマーク" width="337px" height="280px">',
  '<img src="/assets/images/works/main/works_dhw_cafe_expansion.jpg" alt="DHWカフェのバナー" width="337px" height="280px">',
  '<img src="/assets/images/works/main/works_sweets.jpg" alt="スイーツ店のロゴマーク" width="337px" height="280px">',
];

//取得した要素を反復処理
for (let index = 0; index < menuElementsWorks.length; index += 1) {
	const element = menuElementsWorks[index];
  
  //マウスが要素に乗った際の処理
  element.addEventListener('mouseover', function() {
    var hoverText = document.getElementById('works__expansion-title--id');
    var hoverImage = document.getElementById('works__expansion-image--id');
    hoverText.innerHTML = infoAryWorks[index];
    hoverImage.innerHTML = infoAryWorksImage[index];
  });
}