// Setup the Splide image slider

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#image-slider', {
    type: 'fade',
    rewind: true,
    pagination: false,
    isNavigation: true
    });
  main.mount();
} );
