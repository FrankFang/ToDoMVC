/**
 * Created with JetBrains PhpStorm.
 * User: frank
 * Date: 13-7-14
 */
require.config({
    baseUrl: '../',
    paths: {
        backbone: 'vendor/backbone-min',
        jquery: 'vendor/jquery-1.10.2.min',
        underscore: 'vendor/underscore-min',
        qunit: 'test/vendor/qunit/qunit-1.12.0.js',
        text: 'vendor/require-text',
        localStorage: 'vendor/backbone-localstorage'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        localStorage: {
            deps: ['backbone']
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        qunit: {
            exports: 'QUnit',
            init: function () {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});
require(['js_dist/collections/todo', 'js_dist/models/todo', 'backbone', 'localStorage', 'js_dist/views/todo'],
    function (Todos, Todo, Backbone, localStorage, TodoView) {

        var todos = new Todos;
        QUnit.testStart(function () {
            todos.fetch();
            todos.each(function (model) {model.destroy();});
        });
        QUnit.testDone(function () {
            todos.each(function (model) {model.destroy();});
            todos.reset();
        });

        module("Collections");

        test("collection properties should be defined correctly", function () {

            strictEqual(todos.model, Todo, 'model ok');
            ok(todos.localStorage instanceof localStorage, 'localStorage ok');

        });
        test("save and fetch localStorage", function () {
            var data = {
                content: 'todo sth.',
                done: false
            };
            todos.create(data);
            todos.reset();
            todos.fetch();
            equal(todos.length, 1);
            equal(todos.first().get('content'), data.content);
            equal(todos.first().get('done'), data.done);
        });

        test('get done', function () {
            var fakeTodos = [
                {content: 'todo 1', done: true},
                {content: 'todo 2', done: true},
                {content: 'todo 3', done: false},
                {content: 'todo 4', done: true},
                {content: 'todo 5', done: false}
            ];
            var done = fakeTodos.filter(function (todo) {
                return todo.done;
            })
            todos.add(fakeTodos);
            equal(JSON.stringify(todos.getDone()), JSON.stringify(done));

        });

        test('get undone', function () {
            var fakeTodos = [
                {content: 'todo 1', done: true},
                {content: 'todo 2', done: true},
                {content: 'todo 3', done: false},
                {content: 'todo 4', done: true},
                {content: 'todo 5', done: false}
            ];
            var undone = fakeTodos.filter(function (todo) {
                return !todo.done;
            })
            todos.add(fakeTodos);
            equal(JSON.stringify(todos.getUndone()), JSON.stringify(undone));

        });

        module("Model");


        test('model properties should be defined correctly', function () {
            var todo = new Todo;
            strictEqual(todo.get('content'), '');
            strictEqual(todo.get('done'), false);
        });

        module("View");

        test('update content', function () {
            var data = {
                content: 'todo sth.',
                done: false
            };
            var todo = new Todo(data);
            todos.add(todo);
            var todoView = new TodoView({
                model: todo
            });
            todoView.updateContent('haha');
            equal(todoView.model.get('content'), 'haha');
        });

        test('delete a task', function () {
            var data = {
                content: 'todo sth.',
                done: false
            };
            var todo = new Todo(data);
            todos.add(todo);
            var todoView = new TodoView({
                model: todo
            });
            todoView.del();
            equal(todos.length, 0);
        });
    }
);

