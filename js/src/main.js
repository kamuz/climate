(function($) {
    $(function() {
        
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
        $('.next-slide').click(function(e) {
            e.preventDefault();
            $(".carousel").carousel("next");
        });
        $(":input").inputmask();
    });
})(jQuery);

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
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