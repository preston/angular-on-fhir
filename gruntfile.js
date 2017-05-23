module.exports = function(grunt) {

    'use strict';

    // Load all grunt tasks in package.json
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });

    var defaultConfig = require('./gruntfile.tasks')(grunt);

    grunt.initConfig(grunt.util._.merge(defaultConfig, {
        /* Custom configration options or overrides */
    }));

    /* Custom tasks or overrides */

    // Pack classes
    grunt.registerTask('pack', [
        'webpack:dev'
    ]);

    // Develop without browser
    grunt.registerTask('default', [
		'build',
        'concurrent'
    ]);

    grunt.registerTask('build', [
        'clean',
		'copy',
        'sass',
        'concat',
		'pug',
		'webpack'
    ]);

};
