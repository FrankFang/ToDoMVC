/**
 * User: frank
 * Date: 13-7-14
 */


define(['backbone', 'jquery', 'underscore'],
    function (Backbone, $, _) {
        var Todo = Backbone.View.extend({
            tagName: 'li',

            template: _.template($('#todoTemplate').html()),

            events: {
                'click label': 'handleClickTodo',
                'blur .edit': 'handleBlurTodo'
            },

            initialize: function () {
                this.listenTo(this.model, 'change', this.render);
            },

            render: function () {
                var done = this.model.get('done');
                if (done) {this.$el.addClass('completed');}
                var param = this.model.toJSON();
                this.$el.html(this.template(param));
                return this;
            },
            handleClickTodo: function (e) {
                this.$el.siblings('li').removeClass('editing').end().addClass('editing').find('.edit').focus();
            },

            handleBlurTodo: function (e) {
                this.model.set('content', $.trim(this.$el.find('.edit').val()));
                this.$el.removeClass('editing');
            }
        });

        return Todo;
    });
