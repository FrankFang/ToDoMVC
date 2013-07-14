/**
 * User: frank
 * Date: 13-7-14
 */
define(['backbone'], function (Backbone) {
    /**
     * TodoModel
     * @class TodoModel
     * @constructor
     * @type {Model}
     */
    var Todo = Backbone.Model.extend({
        defaults: {
            /**
             * content of the todo.
             * @property content
             * @type {string}
             */
            content: '',
            /**
             * done status of the todo.
             * @property done
             * @type {boolean}
             */
            done: false
        }
    });

    return Todo;
});
