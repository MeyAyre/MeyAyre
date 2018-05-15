//The "wrapper" function
module.exports = function(grunt) {
  
	//Project and task configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		* Grunt Sass
		* Compile Sass to CSS using node-sass
		* https://www.npmjs.com/package/grunt-sass
		*/
		sass: {

			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'css/styles.css' : 'assets/scss/styles.scss'
				}
			}
		},

		/**
		* Grunt Contrib Watch
		* Monitor files and excute tasks
		* https://www.npmjs.com/package/grunt-contrib-watch
		*/
		watch: {

			sass: {

				files: [
					'assets/scss/*.scss'
				],
				tasks: [
					'sass'
				]
			}
		},
		jshint: {
		   all: ['Gruntfile.js', 'Scripts/**/*.js']
		},
		uglify: {
		    my_target: {
		      files: {
			'Scripts/dest/output.min.js': ['Scripts/kidsdesign.js']
		      }
		    }
		 }

	});

	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);

	//Custom tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('default', ['sass']);

};
