/**
 * User: frank
 * Date: 13-7-14
 */


define(['backbone', 'jquery', 'underscore', 'localStorage'],
    function (Backbone, $, _, localStorage) {
        var todoTemplate = '\
        <div class="view">\
            <input class="toggle" type="checkbox" <%= done ? "checked" : "" %>>\
            <label><%- content %></label>\
                <button class="destroy"></button>\
            </div>\
                <input class="edit" value="<%- content %>">\
        ';
        /**
         * TodoView
         * @class TodoView
         * @constructor
         */
        var Todo = Backbone.View.extend({
            tagName: 'li',

            template: _.template(todoTemplate),

            /**
             * events
             * @type {object}
             * @property events
             */
            events: {
                'click label': 'handleClickTodo',
                'blur .edit': 'handleBlurTodo',
                'change .toggle': 'handleCheck',
                'click .destroy': 'del'
            },

            /**
             * init
             * @method initialize
             */
            initialize: function () {
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(this.model, 'destroy', this.remove);
            },

            /**
             * render UI of one todo
             * @method render
             * @returns {TodoView} self
             */
            render: function () {
                var done = this.model.get('done');
                if (done) {this.$el.addClass('completed');}
                else {this.$el.removeClass('completed');}
                var param = this.model.toJSON();
                this.$el.html(this.template(param));
                return this;
            },
            handleClickTodo: function () {
                this.$el.siblings('li').removeClass('editing').end().addClass('editing').find('.edit').focus();
            },

            handleBlurTodo: function () {
                var raw = this.$el.find('.edit').val();
                this.$el.removeClass('editing');
                this.updateContent(raw);
            },

            /**
             * update content of one todo
             * @method updateContent
             * @param content
             */
            updateContent: function (content) {
                this.model.save('content', $.trim(content));
            },

            handleCheck: function (e) {
                var checked = e.currentTarget.checked;
                this.model.save('done', checked);
            },

            /**
             * delete the todo.
             * @method del
             */
            del: function () {
                this.model.destroy();
            }
        });

        return Todo;
    });
