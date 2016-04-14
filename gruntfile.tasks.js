module.exports = function(grunt) {
    var webpack = require('webpack');
    var path = require('path');

    // Store location settings
    var settings = grunt.file.readJSON('gruntfile.settings.json');

    // Get and store version
    var versionData = grunt.file.readJSON('version.json').version,
        version = versionData.major + '.' + versionData.minor + '.' + versionData.patch;

    // Project configuration
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        settings: settings,
        // Clean folders or files
        clean: {
            dev: {
                // Always clean vendor css and fonts on first dev-build
                src: ['<%= settings.dir.src %>/app/styles/vendor/**/*.*']
            },
            // Clean folders when building
            build: {
                src: ['./temp', './build', './dist']
            }
        },
        // Copy folders and files
        copy: {
            dev: {
                files: [
                    // Copy vendor fonts
                    {
                        cwd: '.',
                        expand: true,
                        flatten: true,
                        src: ['<%= settings.vendor.fonts %>'],
                        dest: '<%= settings.dir.src %>/app/styles/vendor/fonts/'
                    }
                ]
            },
            // Copy to temp folder
            temp: {
                files: [
                    // Copy vendor fonts
                    {
                        cwd: '.',
                        expand: true,
                        flatten: true,
                        src: ['<%= settings.vendor.fonts %>'],
                        dest: '<%= settings.dir.temp %>/app/styles/vendor/fonts/'
                    },
					// Copy custom fonts
					{
						cwd: '.',
						expand: true,
						flatten: true,
						src: '<%= settings.dir.src %>/app/styles/fonts/*.*',
						dest: '<%= settings.dir.temp %>/app/styles/fonts/'
                	},
                    // Copy vendor css
                    {
                        cwd: '.',
                        expand: true,
                        flatten: true,
                        src: ['<%= settings.vendor.css %>'],
                        dest: '<%= settings.dir.temp %>/app/styles/vendor/css/'
                    },
                    // Copy less for preprocessing
                    {
                        cwd: '<%= settings.dir.src %>/app/',
                        expand: true,
                        flatten: false,
                        src: ['**/*.less'],
                        dest: '<%= settings.dir.temp %>/app/'
                    },
                    // Copy html
                    {
                        cwd: '<%= settings.dir.src %>/',
                        expand: true,
                        flatten: false,
                        src: ['**/*.html'],
                        dest: '<%= settings.dir.temp %>/'
                    },
                    // Copy mock data
                    {
                        cwd: '<%= settings.dir.src%>/',
                        expand: true,
                        flatten: false,
                        src: ['**/*.json',  '!bower_components/**/*.json'],
                        dest: '<%= settings.dir.temp %>/'
                    },
                    // Copy version json
                    {
                        cwd: '.',
                        expand: true,
                        flatten: false,
                        src: ['version.json'],
                        dest: '<%= settings.dir.temp %>/'
                    },
                    // Copy images
                    {
                        cwd: '<%= settings.dir.src %>/app/',
                        expand: true,
                        flatten: false,
                        src: ['**/*.{svg,jpg,png,gif}', '!bower_components/**/*.{svg,jpg,png,gif}'],
                        dest: '<%= settings.dir.temp %>/app/'
                    },
                    // Copy server
                    {
                        cwd: '.',
                        expand: true,
                        flatten: false,
                        src: ['./server/**/*.*' ],
                        dest: '<%= settings.dir.temp %>/'
                    },
                    // Copy version json
                    {
                        cwd: '.',
                        expand: true,
                        flatten: false,
                        src: ['version.json'],
                        dest: '<%= settings.dir.temp %>'
                    }
                ]
            },

            // Copy to build folder
            build: {
                files: [
                    // Copy vendor fonts
                    {
                        cwd: '.',
                        expand: true,
                        flatten: true,
                        src: ['<%= settings.dir.temp %>/app/styles/vendor/fonts/**.*'],
                        dest: '<%= settings.dir.build %>/app/styles/vendor/fonts/'
                    },
					// Copy custom fonts
					{
						cwd: '.',
						expand: true,
						flatten: true,
						src: '<%= settings.dir.temp %>/app/styles/fonts/*.*',
						dest: '<%= settings.dir.build %>/app/styles/fonts/'
                	},
                    // Copy html
                    {
                        cwd: '<%= settings.dir.temp %>/',
                        expand: true,
                        flatten: false,
                        src: ['**/*.html'],
                        dest: '<%= settings.dir.build %>/'
                    },
                    // Copy mock data
                    {
                        cwd: '<%= settings.dir.temp%>/',
                        expand: true,
                        flatten: false,
                        src: ['**/*.json'],
                        dest: '<%= settings.dir.build %>/'
                    },
                    // Copy images
                    {
                        cwd: '<%= settings.dir.temp %>/app/',
                        expand: true,
                        flatten: false,
                        src: ['**/*.{svg,jpg,png,gif}'],
                        dest: '<%= settings.dir.build %>/app/'
                    },
                    // Copy minified css for app views
                    {
                        cwd: '<%= settings.dir.temp %>/app/components/',
                        expand: true,
                        flatten: false,
                        // Copy minified css that is not in the app/styles folder
                        src: ['**/*.min.css' ],
                        dest: '<%= settings.dir.build %>/app/components/'
                    },
                    // Copy server
                    {
                        cwd: '.',
                        expand: true,
                        flatten: false,
                        src: ['./server/**/*.*' ],
                        dest: '<%= settings.dir.build %>/'
                    },
                ]
            }
        },
        // Generate css file from less files
        less: {
            // Compile less files for dev-build
            dev: {
                options: {
                    paths: ['<%= settings.dir.src %>'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({
                            browsers: ['<%= settings.browser.versions %>']
                        })
                    ]
                },
                files: [
                    {
                        expand: true,
                        src: ['<%= settings.dir.src %>/**/*.less', '!<%= settings.dir.src %>/bower_components/**/*.less'],
                        ext: '.css'
                    }
                ]
            },
            // Compile less files to temp for build
            temp: {
                options: {
                    paths: ['<%= settings.dir.temp %>'],
                    plugins: [
                        new (require('less-plugin-autoprefix'))({
                            browsers: ['<%= settings.browser.versions %>']
                        })
                    ]
                },
                files: [
                    {
                        expand: true,
                        src: ['<%= settings.dir.temp %>/**/*.less'],
                        ext: '.css'
                    }
                ]
            }
        },
        // Minify css files
		cssmin: {
            // Minify dev css except vendor styles
			dev: {
				files: [{
					expand: true,
					cwd: '<%= settings.dir.src %>/app',
					src: ['**/*.css', '!**/*.min.css', '!styles/vendor/**/*'],
					dest: '<%= settings.dir.src %>/app',
					ext: '.min.css'
                }]
			},

            // Minify css in temp except vendor styles
			temp: {
				files: [{
					expand: true,
					cwd: '<%= settings.dir.temp %>/app',
					src: ['**/*.css', '!styles/vendor/**/*'],
					dest: '<%= settings.dir.temp %>/app',
					ext: '.min.css'
				}]
			}
		},

        // Concat files
        concat: {
			// Concat vendor css/jss and main css for dev-build
            dev: {
				options: {
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - ' + version + '<%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files: {
                    '<%= settings.dir.src %>/app/styles/main.min.css': ['<%= settings.dir.src %>/app/components/**/*.min.css', '<%= settings.dir.src %>/app/styles/app.min.css'],
					'<%= settings.dir.src %>/app/styles/vendor/css/vendor.min.css':['<%= settings.vendor.css %>'],
					'<%= settings.dir.src %>/app/scripts/vendor.min.js':['<%= settings.vendor.scripts %>'],
				}
			},

            // Build temp app/vendor css and vendor js to build folder
			build: {
				options: {
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - ' + version + '<%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files: {
					'<%= settings.dir.build %>/app/styles/main.min.css': ['<%= settings.dir.temp %>/**/*.min.css', '!<%= settings.dir.temp %>/app/styles/vendor/css/**.*.css'],
					'<%= settings.dir.build %>/app/styles/vendor/css/vendor.min.css': '<%= settings.dir.temp %>/app/styles/vendor/css/*.css',
					'<%= settings.dir.build %>/app/scripts/vendor.min.js':['<%= settings.vendor.scripts %>']
				}
			}
        },

        // Build webpack
		webpack: {
			dev: {
				entry: {
					'main': './src/main.ts',
					'vendor': './src/vendor.ts'
				},
				output: {
					path: "./src/app/scripts",
					filename: "bundle.js"
				},
				plugins: [
					new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
					new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main']))
				],
				resolve: {
					extensions: ['', '.ts', '.js']
				},
				module: {
					loaders: [
						{
							test: /\.ts$/,
							loader: 'ts-loader'
						},
					],
					noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles', 'bower_components')]
				},
				devServer: {
					historyApiFallback: true
				},
				watch: true,
				keepalive: true
			},
			build: {
				entry: {
					'main': './src/main.ts',
					'vendor': './src/vendor.ts'
				},
				output: {
					path: './build/app/scripts',
					filename: 'bundle.js'
				},
				plugins: [
					new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
					new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main']))
				],
				resolve: {
					extensions: ['', '.ts', '.js']
				},
				module: {
					loaders: [
						{
							test: /\.ts$/,
							loader: 'ts-loader'
						}
					],
					noParse: [path.join('node_modules', 'angular2', 'bundles', 'bower_components')]
				},
				devServer: {
					historyApiFallback: true
				},
				watch: false,
				keepalive: false
			}
		},

        // Compress build files to tar, zip, etc
		compress: {
			main: {
				options: {
					mode: '<%= settings.package.mode %>',
					archive: '<%= settings.dir.dist %>/' + version + '/<%= settings.package.name %>.<%= settings.package.extension %>'
				},
				files: [
					{
						expand: true,
						cwd: '<%= settings.dir.build %>/',
						src: ['**/*', '**/.*']
					}
				]
			}
		},

        // Create connection on port
		connect: {
			dev: {
				options: {
					port: 9001,
					base: 'src',
					livereload: true
				}
			},
			build: {
				options: {
					port: 9002,
					base: 'build',
					livereload: true
				}
			}
		},

        // Start browser
		open: {
			dev: {
				path: '<%= settings.browser.dev.path %>'
			},
			build: {
				path: '<%= settings.browser.build.path %>'
			}
		},

        // Start watch tasks
		watch: {
			options: {
				interrupt: true,
				livereload: 9001,
				spawn: true
			},
			dev: {
				files: ['**/*.less'],
				tasks: ['clean:dev', 'less:dev', 'cssmin:dev', 'concat:dev', 'webpack:dev']
			}
		},

        // Watch tasks concurrently
        concurrent:{
            options:{
                logConcurrentOutput: true
            },
            watch: ['watch:dev', 'webpack:dev']
        },
    }

    return config;
};
