module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: ['test/**/*.html']
        },
        uglify: {
            all: {
                files: {
                    'js_dist/collections/todo.js': 'js/collections/todo.js',
                    'js_dist/models/todo.js': 'js/models/todo.js',
                    'js_dist/views/todo.js': 'js/views/todo.js',
                    'js_dist/app.js': 'js/app.js',
                    'js_dist/todo.js': 'js/todo.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('test', ['qunit']);

    // the qunit doesn't work on grunt, but OK in browsers.
    // see http://babble.byvernacchia.com/2013/06/05/qunit-grunt-and-require-problems.html
}