'use strict';

// =================================================
// gsap
// =================================================
gsap.registerPlugin(ScrollTrigger)


// MV
gsap.from(".mv__catchCopy", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out"

});

gsap.from(".mv__txt", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3

});

// CTA

gsap.from(".mv__btn", {
  scrollTrigger: ".mv__btn" ,
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

gsap.from(".cta__btn", {
  scrollTrigger: ".cta__btn",
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

// problem
gsap.from(".problem", {
  scrollTrigger: ".problem" , 
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

gsap.from("problem__item", {
  scrollTrigger:".problem", 
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.2,
  ease: "power2.out"

});

// lead
gsap.from(".lead__img", {
  scrollTrigger: ".lead" , 
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

gsap.from(".lead__content", {
  scrollTrigger:".lead", 
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.4,
  ease: "power2.out"

});

// reason
gsap.from(".reason", {
  scrollTrigger: ".reason" , 
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

gsap.from(".reason__item", {
  scrollTrigger:".reason", 
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.3,
  stagger: 0.2,
  ease: "power2.out"

});
// quality
gsap.from(".quality", {
  scrollTrigger: ".quality" , 
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

// farmer
gsap.from(".farmers", {
  scrollTrigger: ".farmers" , 
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

gsap.from(".farmers__img", {
  scrollTrigger:".farmers", 
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 0.3,
  ease: "power2.out"

});

gsap.from(".farmers__content", {
  scrollTrigger:".farmers", 
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.6,
  ease: "power2.out"

});

// faq
gsap.from(".faq", {
  scrollTrigger:".faq", 
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power2.out"

});

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
  $('.faq__item .faq__question').click(function(){
    $(this).next('.faq__answer').slideToggle();
    $(this).toggleClass("open");
  });
});

  $('.faq__answer .faq__icon').click(function(){
    $(this).closest('.faq__answer').slideUp();

    $(this)
    .closest(".faq__item")
    .find('.faq__question')
    .removeClass('open');
  });





