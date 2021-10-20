// Setup the Splide image slider

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#image-slider', {
    type: 'fade',
    rewind: true,
    perPage: 1,
    pagination: false,
    isNavigation: true
    });
  main.mount();
} );
