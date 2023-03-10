'use strict';
// 画面のスクロール状況によってfadeIn, fadeOutを実行
window.addEventListener('scroll', function(){
  // 定数、変数設定
  const fiTrigger = document.querySelectorAll('.fadeInTrigger');
  const fuTrigger = document.querySelectorAll('.fadeUpTrigger');
  let scroll = document.documentElement.scrollTop || document.body.scrollTop;
  let windowHeight = document.documentElement.clientHeight;

  // about__historyセクションのアニメーション(スクロールでフェードイン)
  fiTrigger.forEach(function(fadeIn){
    const elemPos = fadeIn.getBoundingClientRect().top-10;   
    if(scroll >= elemPos - windowHeight) {
      fadeIn.classList.add('fadeIn');
    }
  });
  // about__studyセクションのアニメーション(1項目ずつ時間差フェードアップ)
  fuTrigger.forEach(function(fadeUp){
    const elemPos2 = fadeUp.getBoundingClientRect().top -50;   
    if(scroll >= elemPos2 - windowHeight) {
      fadeUp.classList.add('fadeUp');
    }
  });
});