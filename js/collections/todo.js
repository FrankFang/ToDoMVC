define(['backbone', 'js_dist/models/todo', 'localStorage'],
    function (Backbone, Todo, localStorage) {
        /**
         * TodoCollection
         * @class TodoCollection
         * @constructor
         * @type {Collection}
         */
        var Todos = Backbone.Collection.extend({
            model: Todo,
            localStorage: new localStorage('todos_db'),

            /**
             * get todos which are done.
             * @method getDone
             * @returns {array}
             */
            getDone: function () {
                return this.filter(function (todo) {
                    return todo.get('done');
                })
            },

            /**
             * get todos which are not done.
             * @method getUndone
             * @returns {array}
             */
            getUndone: function () {
                return this.filter(function (todo) {
                    return !todo.get('done');
                })
            }
        });

        return Todos;
    });