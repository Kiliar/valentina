$(document).ready(function () {

        // you want to enable the pointer events only on click;

        $('iframe').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('.canvas-iframe').on('click', function () {
            $(this).find('iframe').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $('.canvas-iframe').mouseleave(function () {
           $(this).find('iframe').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
       });
    });
if (document.documentElement.clientWidth < 480) {
   document
   .querySelector("meta[name=viewport]")
   .setAttribute('content', 'width=device-width, initial-scale='+ document.documentElement.clientWidth / 480);
};