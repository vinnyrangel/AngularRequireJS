(function(){
	'use strict';

	var del = require('del'),
		connect = require('gulp-connect'),
		concat = require('gulp-concat'),
		gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		open = require('open'),
		runSequence = require('run-sequence');

	gulp.task('server', function(){
		connect.server({
			host: 'localhost',
			port: 8000,
			root: ['.', 'src']
		});

		open('http://localhost:8000');
	});

	gulp.task('lintJS', function() {
		gulp.src('src/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(jshint.reporter('fail'));
	});

	gulp.task('clean', function(){
		del(['dist']);
	});

	gulp.task('createModules', function(){
		gulp.src(['src/modules/outside/outsideModule.js', 'src/modules/outside/**/*.js'])
			.pipe(concat('outsideModule.js'))
			.pipe(gulp.dest('dist'));

		gulp.src(['src/modules/other/otherModule.js', 'src/modules/other/**/*.js'])
			.pipe(concat('otherModule.js'))
			.pipe(gulp.dest('dist'));
	});

	gulp.task('build', function(callback){
		runSequence('clean', 'lintJS', 'createModules', 'server', callback);
	});

	gulp.task('default', ['build']);
}());
