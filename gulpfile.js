
var gulp = require('gulp'),
    gutil = require('gulp-util')
    minifyCSS = require('gulp-csso'),
	concat = require('gulp-concat'),
	del = require('del');

// say hi using gulp
gulp.task('hi',function(){
	gutil.log("Hi");
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


gulp.task('default', [ 'hi','css']);