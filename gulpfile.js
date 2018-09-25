var gulp = require('gulp'),
	gutil = require('gulp-util');

gulp.task('hi',function(){
	gutil.log("Hi");
});
gulp.task('default', [ 'hi' ]);