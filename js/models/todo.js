/**
 * User: frank
 * Date: 13-7-14
 */
define(['backbone'], function (Backbone) {
    var Todo = Backbone.Model.extend({
        defaults: {
            content: '',
            done: false
        }
    });

    return Todo;
});
