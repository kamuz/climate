(function($) {
    $(function() {
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            e.stopPropagation();
        });
        $('html').click(function() {
            // $('.nav-dropdown').hide();
        });
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
        $('.nav-dropdown .notifications a, .nav-dropdown .switch-account a').click(function(){
            $(this).next('div').fadeIn();
        });
        $('.nav-dropdown .close').click(function(){
            console.log("close");
            $(this).parent().fadeOut();
        });
        $('.next-slide').click(function(e){
            e.preventDefault();
            $(".carousel").carousel("next");
        });
        $(":input").inputmask();
    });
})(jQuery);