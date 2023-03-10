'use strict';
// ローディングの実行(関数)
let loadingPage = function(){
  // 定数設定
  const styleTop = document.querySelector('.top');
  const styleLoading = document.querySelector('.loading');
  if(sessionStorage.getItem('access')) {
    // 2回目以降アクセス時の処理(2回目以降はローディング画面を表示しない)
  } else {
    // 初回アクセス時の処理
    // sessionStorageにデータを保存
    sessionStorage.setItem('access', 'true');
    // 画面の表示設定
    styleTop.style.display = 'none';
    styleLoading.style.display = 'block';
    //ロード完了時の処理
    window.addEventListener('load', function(){
      // ローディング画面をスライドアップする
      const ms = 800;
      styleLoading.style.transition = `height ${ms}ms`;
      styleLoading.style.height = '';
      styleLoading.style.overflow = 'hidden';
      this.setTimeout(function(){
        styleLoading.style.height = '0px';  
      }, 800);
      styleTop.style.display = 'block';
    });
  }
}

// ローディングの実行
document.addEventListener("DOMContentLoaded", function() {
  loadingPage();
});

//トップ画面のホバー
let menuElementsTop = document.querySelectorAll('.top__menu--item');

//吹き出し内の文言
const infoAryTop = [
  "スクールの課題で<br>制作した作品や<br>自主制作作品を<br>掲載しています。",
  "作者のプロフィールと<br>現在習得しているスキル、<br>ツールを紹介しています。",
  "ポートフォリオサイトを<br>ご覧いただき<br>ありがとうございました。<br>ご連絡は以下のフォームを<br>ご利用ください。",
];

//取得した要素を反復処理
for (let index = 0; index < menuElementsTop.length; index += 1) {
	const element = menuElementsTop[index];
  
  //マウスが要素に乗った際の処理
  element.addEventListener('mouseover', function() {
    var hoverTextTop = document.getElementById('hover_text');
    hoverTextTop.innerHTML = infoAryTop[index];
  });
  
  //マウスが離れた時の処理内容
  element.addEventListener( 'mouseleave', function() {
    var hoverTextTop = document.getElementById('hover_text');
    hoverTextTop.innerHTML = '齊藤江里の<br>ポートフォリオサイトです!<br>ご覧になりたいページの<br>リンクをクリック<br>してください。';
  });
}