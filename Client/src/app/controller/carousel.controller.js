/**
 * Created by kaushik nandhan on 3/28/2017.
 */
(function() {
    'use strict';
    angular.module('musichouse')
        .controller('carouselController',carouselController);

    function carouselController() {
        var carouselVm = this;
        carouselVm.myInterval = 3000;
        carouselVm.noWrapSlides = false;
        carouselVm.active = 0;
        carouselVm.slides = [
            {
                image: '../../images/guitar.jpg',
                statement:'Sometimes you want to give up the guitar, you\'ll hate the guitar. But if you stick with it, you\'re gonna be rewarded',
                author:'-Jimi Hendrix'
            },
            {
                image: '../../images/violon.jpg',
                statement:'Life is like playing a violin in public and learning the instrument as one goes on.',
                author:'-Samuel Butler'

            },
            {
                image: '../../images/piano.jpg',
                statement:'The piano keys are black and white but they sound like a million colors in your mind.',
                author:'-Maria Cristina Mena'
            },
            {
                image: '../../images/drums.jpg',
                statement:'Music is the beat of a drum that keeps time with our emotions.',
                author:'-Shannon L. Alder'
            }
        ];

    }
})();
