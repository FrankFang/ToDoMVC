/**
 * Created with JetBrains PhpStorm.
 * User: frank
 * Date: 13-7-13
 * Time: 下午8:38
 */

define(['backbone', 'jquery', 'underscore', 'js_dist/collections/todo', 'js_dist/views/todo'],
    function (Backbone, $, _, Todos, TodoView) {
        var statusTemplate = '\
<span id="todo-count"><strong><%= undoneCount ? undoneCount : 0 %></strong> item left</span>\
<button id="clear-completed" class="<%= doneCount == 0 ? "hidden" : "" %>">Clear completed</button>\
';
        /**
         * @class AppView
         * @constructor
         */
        var App = Backbone.View.extend({

            /**
             * @method initialize
             */
            initialize: function () {
                this.todos = new Todos;
                this.listenTo(this.todos, 'add', this.addTodoView);
                this.listenTo(this.todos, 'all', this.render);
                this.$toggleAll = $('#toggle-all');
                var toggleCount = this.$toggleAll.find('.toggle').length;
                this.todos.fetch();
                if (this.$toggleAll.find('.toggle:checked').length === toggleCount && toggleCount !== 0) {
                    $('#toggle-all')[0].checked = true;
                } else {
                    $('#toggle-all')[0].checked = false;
                }
                $('#new-todo').val('').focus();
            },

            el: '#todoapp',

            template: _.template(statusTemplate),

            /**
             * add event handles.
             * @type {object}
             * @property events
             */
            events: {
                'keypress #new-todo': 'handleEnterText',
                'change #toggle-all': 'handleToggleAll',
                'click #clear-completed': 'clearDone'
            },

            /**
             * render the status bar
             * @method render
             */
            render: function () {
                var undoneCount = this.todos.getUndone().length;
                var doneCount = this.todos.getDone().length;
                $('#footer').html(this.template({undoneCount: undoneCount, doneCount: doneCount}));
            },

            /**
             * clear tasks that is done.
             * @method clearDone
             */
            clearDone: function () {
                _.invoke(this.todos.getDone(), 'destroy');
            },

            handleEnterText: function (e) {
                var $target = $(e.currentTarget);
                var input = $target.val();
                var content = $.trim(input);
                if (e.which !== 13 || !content) { return; }
                this.addTodo(content);
                $target.val('');
            },

            /**
             * create one todo model.
             * @method addTodo
             * @param content
             */
            addTodo: function (content) {
                this.todos.create({
                    content: content
                });
            },

            /**
             * add one todo element to UI
             * @method addTodoView
             * @param todo
             */
            addTodoView: function (todo) {
                var todoView = new TodoView({model: todo});
                $('#todo-list').prepend(todoView.render().$el);
            },

            handleToggleAll: function (e) {
                var checked = e.currentTarget.checked;
                this.toggleAll(checked);
            },

            /**
             * toggle status of all todos.
             * @method toggleAll
             * @param done
             */
            toggleAll: function (done) {
                this.todos.each(function (todo) {
                    todo.save('done', done);
                });
            }

        });

        return App;
    });
