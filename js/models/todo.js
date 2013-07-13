/**
 * User: frank
 * Date: 13-7-14
 */
define(['backbone', 'underscore'], function (Backbone, _) {
    var Todo = Backbone.Model.extend({
        defaults: {
            content: '',
            done: false
        }
    });

    return Todo;
});
