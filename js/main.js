(function (window) {
    'use strict';
    // Your starting point. Enjoy the ride!
    require.config({
        paths: {
            backbone: 'vendor/backbone-min',
            jquery: 'vendor/jquery-1.10.2.min',
            underscore: 'vendor/underscore-min'
        },
        shim: {
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
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
