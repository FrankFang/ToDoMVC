/**
 * Created with JetBrains PhpStorm.
 * User: frank
 * Date: 13-7-13
 * Time: 下午8:38
 */
define(['backbone', 'jquery', 'underscore', 'js/collections/todo', 'js/views/todo'],
    function (Backbone, $, _, Todos, TodoView) {
        var App = Backbone.View.extend({

            initialize: function () {
                this.todos = new Todos;
                this.listenTo(this.todos, 'add', this.addTodoView)
            },

            el: '#todoapp',

            events: {
                'keypress #new-todo': 'handleEnterText'
            },

            handleEnterText: function (e) {
                var $target = $(e.currentTarget);
                var input = $target.val();
                var content = $.trim(input);
                if (e.which !== 13 || !content) { return; }
                this.addTodo(content);
                $target.val('');
            },

            addTodo: function (content) {
                this.todos.add({
                    content: content
                });
            },

            addTodoView: function (todo) {
                var todoView = new TodoView({model: todo});
                $('#todo-list').prepend(todoView.render().$el);
            }

        });

        return App;
    });
