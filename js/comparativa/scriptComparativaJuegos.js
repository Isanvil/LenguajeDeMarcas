alert("Hola");

$(function() {

    $('#contenido02').mouseenter(function() {

      $('#contenido01').addClass("hover-contenido02");
    }).mouseleave(function () {
        
      $('#contenido01').removeClass("hover-contenido02");
    });
  });