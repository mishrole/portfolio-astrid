$(document).ready(function() {

    // Seteando intervalo del carousel a 4segundos e inhabilitando la pausa al hacer hover
    $('.carousel').carousel({
        interval: 4000,
        pause: false
    })

    $('.nav-link').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});


    const home = $("#home").offset().top;
    const portafolio = $("#portafolio").offset().top - 60;
    
    $(document).scroll(function() {
        const scrollPosicion = $(document).scrollTop();
    
        if(scrollPosicion >= home && scrollPosicion < portafolio) {
            $('nav.navbar').removeClass("dark");
            $('a.nav-link').first().removeClass('orange');
        }else if(scrollPosicion >= portafolio){
            $('nav.navbar').addClass("dark");
            $('a.nav-link').first().addClass('orange');
        }
    });


});