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
                    'js_dist/views/app.js': 'js/views/app.js',
                    'js_dist/main.js': 'js/main.js'
                }
            }
        },
        watch: {
            all: {
                files: 'js/**/*.js',
                tasks: ['uglify']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('test', ['qunit']);
    grunt.registerTask('dev', ['uglify', 'watch']);

    // the qunit doesn't work on grunt, but OK in browsers.
    // see http://babble.byvernacchia.com/2013/06/05/qunit-grunt-and-require-problems.html
}