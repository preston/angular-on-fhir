module.exports = function (grunt) {

	'use strict';

	// grunt.loadNpmTasks('grunt-contrib-jade');
	// Load all grunt tasks in package.json
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});

	var defaultConfig = require('./gruntfile.tasks')(grunt);

	grunt.initConfig(grunt.util._.merge(defaultConfig, {

		/* Custom configration options or overrides */

	}));

	/* Custom tasks or overrides */


	// Develop without browser
	grunt.registerTask('pack', [
		'webpack:dev'
	]);

	// Develop without browser
	grunt.registerTask('default', [
		'clean:dev',
        'less:dev',
		'copy:dev',
		'cssmin:dev',
		'concat:dev',
		'connect:dev',
        'concurrent:watch'
        ]);

	// Develop without browser
	grunt.registerTask('dev', [
		'clean:dev',
        'less:dev',
		'copy:dev',
		'cssmin:dev',
		'concat:dev',
		'connect:dev',
		'open:dev',
        'concurrent:watch'
       ]);

	grunt.registerTask('build', [
		'clean:build',
		'copy:temp',
		'less:temp',
		'cssmin:temp',
		'concat:build',
        'copy:build',
		'webpack:build',
		'compress']);

	// Browse the build
	grunt.registerTask('browse-build', [
		'connect:build',
		'open:build',
		'watch'
	]);

};
