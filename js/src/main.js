(function($) {
    $(function() {

        /**
         * Top Menu
         */
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            e.stopPropagation();
        });
        $(document).mouseup(function(e){
            var container = $(".dropdown");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.nav-dropdown').hide();
            }
        });
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
        $('.nav-dropdown .notifications a, .nav-dropdown .switch-account a').click(function() {
            $(this).next('div').fadeIn();
        });
        $('.nav-dropdown .close').click(function() {
            console.log("close");
            $(this).parent().fadeOut();
        });

        /**
         * Next Slide inside modal
         */
        $('.next-slide').click(function(e) {
            e.preventDefault();
            $(".carousel").carousel("next");
        });

        /**
         * Init mask for phone, credit card etc.
         */
        $(":input").inputmask();
        var clipboard = new ClipboardJS('.clipboard');

        /**
         * Copy to clipboard init
         */
        clipboard.on('success', function(event) {
            console.log(event);
            event.trigger.classList.add('copied');
            window.setTimeout(function() {
                event.trigger.classList.remove('copied');
            }, 2000);
        });
    });
})(jQuery);

/**
 * Init Bootstrap validation
 */
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();