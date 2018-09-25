
var gulp = require('gulp'),
    gutil = require('gulp-util')
    pug = require('gulp-pug'),
    minifyCSS = require('gulp-csso'),
	concat = require('gulp-concat'),
	del = require('del');

// say hi using gulp
gulp.task('hi',function(){
	gutil.log("Hi");
});


// create html by using pub templating engine
gulp.task('html', function(){
	return gulp.src('./pug/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('build/html'));
});


// minfide and concat css files
gulp.task('css',function(){
	return gulp.src('./css/*.css')
		.pipe(minifyCSS())
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest('build/css'))
});


//delete build folder.
gulp.task('clean', function(){ 
	del(['build'])
});


gulp.task('default', [ 'hi','html','css']);