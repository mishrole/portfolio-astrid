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
    const servicios = $('#servicios').offset().top - 60;
    const portafolio = $("#portafolio").offset().top - 60;
    
    $(document).scroll(function() {
        const scrollPosicion = $(document).scrollTop();
    
        if(scrollPosicion >= home && scrollPosicion < servicios) {
            $('nav.navbar').removeClass("dark");
            $('a.nav-link').eq(0).removeClass('orange');
            $('a.nav-link').eq(1).removeClass('orange');
        }else if(scrollPosicion >= servicios && scrollPosicion < portafolio){
            $('nav.navbar').addClass("dark");
            $('a.nav-link').eq(1).removeClass('orange');
            $('a.nav-link').eq(0).addClass('orange');
        }else if(scrollPosicion >= portafolio) {
            $('a.nav-link').eq(0).removeClass('orange');
            $('a.nav-link').eq(1).addClass('orange');
        }
    });


});