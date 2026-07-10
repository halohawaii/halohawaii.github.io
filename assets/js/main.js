jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 700 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 24
        }, 500);
        
    });
    
    
    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated", {
        duration: 280,
        delay: 0,
        origin: "bottom",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "1rem",
        viewFactor: 0.05,
        scale: 1,
        mobile: true
    });
    
    
    // AJAX CONTACT FORM SUBMIT
    $("#contact-form").submit(function(e) {

        e.preventDefault();
        var postdata = $(this).serialize();

        $.ajax({

            type: "POST",
            url: "assets/php/contact.php",
            data: postdata,
            dataType: "json",
            success: function(json) {

                $("#contact-form input, #contact-form textarea").removeClass("error");

                setTimeout(function(){

                    if (json.nameMessage !== "") {

                        $("#contact-form-name").addClass("error");

                    }

                    if (json.emailMessage !== "") {

                        $("#contact-form-email").addClass("error");

                    }

                    if (json.messageMessage !== "") {

                        $("#contact-form-message").addClass("error");

                    }

                }, 10);

                if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {

                    $("#contact-form.error input, #contact-form.error textarea").removeClass("error");
                    $('#contact-form').addClass("success");
                    $('#contact-form textarea, #contact-form input').val("");
                    
                    setTimeout(function(){
                        
                        $('#contact-form').removeClass("success");
                        
                    },4000);

                }

            }

        });

    });

    
});