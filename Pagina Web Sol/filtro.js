$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos'){
            $('.cont-work').show('1000');
        }else{
            $('.cont-work').not('.'+valor).hide('1000');
            $('.cont-work').filter('.'+valor).show('1000');
        }
    });

    let producciones = $('#enlace-producciones').offset().top,
    about = $('#enlace-about').offset().top,
    trabajo = $('#enlace-trabajo').offset().top,
    contacto = $('#enlace-contacto').offset().top;
    
    window.addEventListener('resize',function(){
        producciones = $('#enlace-producciones').offset().top,
        about = $('#enlace-about').offset().top,
        trabajo = $('#enlace-trabajo').offset().top,
        contacto = $('#enlace-contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-producciones').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 500
        },600);
    });

    $('#enlace-about').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1520
        },600);
    });

    $('#enlace-trabajo').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2000
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 10900
        },600);
    });
});

