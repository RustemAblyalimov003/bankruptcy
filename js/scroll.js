$(document).ready(() => { 
    const linksArray = $('.header__nav-bar-link')
    $(window).scroll(() => {
        if ($(this).scrollTop() > 200) $('a#scrolling').fadeIn(); 
        else                           $('a#scrolling').fadeOut(400); 
    });
    $('a#scrolling').click(() => {
        $('body,html').animate({ 
             scrollTop: 0
        }, 800); 
        return false;
    });
    linksArray.each( function(){
        $(this).click((event) =>{
            const anchor = event.target;
            $('html, body').stop().animate({
              scrollTop: $($(anchor).attr('href')).offset().top
            }, 777);
            if($('.header__burger').css("display") === "block"){
                $('.header__burger, .header__menu').toggleClass('active');
                $('body').toggleClass('lock');
            }
            event.preventDefault();
            return false;
    });

});
});