'use strict';
// ヘッダーのハンバーガーメニュー制御
// 定数設定
const headerOpnner = document.querySelector('.header__opener');
const headerNav = document.querySelector('.header__nav');

// fadeToggle関数の実行
headerOpnner.addEventListener('click', function(){
  // フェードイン、フェードアウトの表示制御
  const ms = 500;
  headerNav.style.transition = `opacity ${ms}ms`;
  if (!headerNav.classList.contains('none')){
    headerNav.style.opacity = 1;
    setTimeout(function(){headerNav.style.opacity = 0;}, 1);
    setTimeout(function(){headerNav.classList.add('none');}, ms + 10);
  } else {
    headerNav.style.opacity = 0;
    headerNav.classList.remove('none');
    setTimeout(function(){headerNav.style.opacity = 1;}, 1);
  }
  // ハンバーガーボタンの表示制御
  if(headerOpnner.classList.contains('active')){
    headerOpnner.classList.remove('active');
  } else {
    headerOpnner.classList.add('active');
  }
});

//ドロワーメニューのホバー
let menuElements = document.querySelectorAll('.header__nav-menu');

//吹き出し内の文言
const infoAry = [
  "HOME画面に<br>遷移します。",
  "WORKS画面に<br>遷移します。",
  "ABOUT画面に<br>遷移します。",
  "CONTACT画面に<br>遷移します。",
];

//取得した要素を反復処理
for (let index = 0; index < menuElements.length; index += 1) {
	const element = menuElements[index]; 
  //マウスが要素に乗った際の処理
  element.addEventListener('mouseover', function() {
    var hoverText = document.getElementById('hover_text');
    hoverText.innerHTML = infoAry[index];
  });
  //マウスが離れた時の処理内容
  element.addEventListener( 'mouseleave', function() {
    var hoverText = document.getElementById('hover_text');
    hoverText.innerHTML = 'リンクをクリック<br>してください。';
  });
}

// スクロールの表示制御(topへ戻るボタン、ヘッダー下部の影)
// 定数設定
const topBtn = document.querySelector('.footer__main--page-top');
const headerShadow = document.querySelector('.header__shadow');

window.addEventListener('scroll', function(){
  // スクロールが80に達したらボタン表示
  if(window.pageYOffset > 80) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
  // スクロールが240に達したらヘッダーの下部に影を表示
  if(window.pageYOffset > 240) {
    headerShadow.classList.add('show');
  } else {
    headerShadow.classList.remove('show');
  }
});

// スムーススクロールでページトップへ
topBtn.addEventListener('click', function(e){
  e.preventDefault();
  window.scroll({
    top: 0, 
    behavior: 'smooth'
  });
  // ハッシュを消去
  window.onhashchange(function(){
    if(window.location.replaceStatehash === '#'){
      window.location.replaceState(null, '', window.location.pathname + window.location.search);
    }
  });  
});