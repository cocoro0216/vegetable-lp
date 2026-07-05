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
        // sp-nav
    $('.header__btn').on('click', function() {
            $('.header__nav').toggleClass('active');
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





