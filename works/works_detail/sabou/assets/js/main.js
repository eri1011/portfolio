'use strict';
// ハンバーガーボタンとドロワーメニューの表示制御
// 定数設定
const headerOpnner = document.querySelector('.header__opener');
const headerNav = document.querySelector('.header__opener-nav');
headerOpnner.addEventListener('click', function(){
  if(headerOpnner.classList.contains('active')){
    headerOpnner.classList.remove('active');
    headerNav.classList.remove('panelactive');
  } else {
    headerOpnner.classList.add('active');
    headerNav.classList.add('panelactive');
  }
});

// スクロールの表示制御(ヘッダー)
// 定数設定
const header = document.querySelector('.header');
window.addEventListener('scroll', function(){
  // スクロールが600に達したらヘッダー表示
  if(window.pageYOffset > 599) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});

// スムーススクロールでページトップへ
// 定数設定
const menuScroll = document.querySelectorAll('a[href^="#"]');
for(let i = 0; i < menuScroll.length; i++){
  menuScroll[i].addEventListener('click', function(e){
    e.preventDefault();
    // ターゲットの位置取得とハッシュタグの除去
    let href = menuScroll[i].getAttribute('href');
    let target = document.getElementById(href.replace('#', ''));
    if (target != null){
      const rect = target.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const position = rect + offset - 60;
      // スムーススクロールの実行
      window.scroll({
        top: position, 
        behavior: 'smooth'
      });
    }
  });
}

// モーダルの表示制御
MicroModal.init({
  disableScroll: true,
});