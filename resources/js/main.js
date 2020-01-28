$(document).ready(function() {
    // Seteando intervalo del carousel a 4segundos e inhabilitando la pausa al hacer hover
    $('.carousel').carousel({
        interval: 4000,
        pause: false
    })

    const home = $("#home").offset().top;
    const servicios = $("#servicios").offset().top - 60;
    
    $(document).scroll(function() {
        const scrollPosicion = $(document).scrollTop();
    
        if(scrollPosicion >= home && scrollPosicion < servicios) {
            $('nav.navbar').removeClass("dark");
        }else if(scrollPosicion >= servicios){
            $('nav.navbar').addClass("dark");
        }
    });


});