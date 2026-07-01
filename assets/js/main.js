'use strict';
{
    $(function(){
        // sp header_btn & menu
        $('.header_btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn').on('click', function(){
            $('.nav').removeClass('active');
        });



    });
    // jquery


}

