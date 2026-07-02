'use strict';

// =================================================
// gsap
// =================================================
gsap.registerPlugin(ScrollTrigger)

// html,css書いてから続きの設定をする（MVでキャッチコピーがフェードインとCTAでボタンがふわっと表示

// MV

// CTA








// =================================================
// jquery
// =================================================
    $(function(){
        // sp　ハンバーガーメニュー５で実装
    $('.btn-trigger').on('click', function() {
            $(this).toggleClass('active');
        return false;
  });
    });


    // アコーディオンの設定
    $(function(){
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();
    $(this).toggleClass("open");
  });
});





