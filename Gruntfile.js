module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: ['test/**/*.html']
        }
    })

    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default', []);
    grunt.registerTask('test', ['qunit']);
}
