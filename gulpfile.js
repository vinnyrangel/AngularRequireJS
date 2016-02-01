(function(){
	'use strict';

	var del = require('del'),
		connect = require('gulp-connect'),
		gulp = require('gulp'),
		jshint = require('gulp-jshint'),
		livereload = require('gulp-livereload'),
		open = require('open'),
		runSequence = require('run-sequence');

	gulp.task('server', function(){
		connect.server({
			livereload: true,
			host: 'localhost',
			port: 8000,
			root: ['.', 'www']
		});

		open('http://localhost:8000');
	});

	gulp.task('watch', function () {
		gulp.watch('./**/*.js', [ 'lintJS' ]);
		livereload.listen();
	});

	gulp.task('lintJS', function() {
		gulp.src('www/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(jshint.reporter('fail'));
	});

	gulp.task('clean', function(){
		del(['dist']);
	});

	gulp.task('build', function(callback){
		runSequence('clean', 'lintJS', 'watch', 'server', callback);
	});

	gulp.task('default', ['build']);
}());
