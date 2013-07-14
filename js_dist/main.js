(function (window) {
    'use strict';
    // Your starting point. Enjoy the ride!
    require.config({
        baseUrl: './',
        paths: {
            backbone: 'vendor/backbone-min',
            localStorage: 'vendor/backbone-localstorage',
            jquery: 'vendor/jquery-1.10.2.min',
            underscore: 'vendor/underscore-min',
            text: 'vendor/require-text'
        },
        shim: {
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            localStorage: {
                deps: ['backbone']
            },
            underscore: {
                exports: '_'
            },
            jquery: {
                exports: '$'
            }
        }
    });
    require(['js/views/app'], function (AppView) {
        new AppView();
    });
})(window);
