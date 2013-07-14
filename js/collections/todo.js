define(['backbone', 'js_dist/models/todo', 'localStorage'],
    function (Backbone, Todo, localStorage) {
        var Todos = Backbone.Collection.extend({
            model: Todo,
            localStorage: new localStorage('todos_db'),

            getDone: function () {
                return this.filter(function (todo) {
                    return todo.get('done');
                })
            },

            getUndone: function () {
                return this.filter(function (todo) {
                    return !todo.get('done');
                })
            }
        });

        return Todos;
    });