// libs
var gulp = require('gulp'),
    gutil = require('gulp-util')
    pug = require('gulp-pug'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-csso'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imageMin = require('gulp-imagemin'),
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


// minified and concate css files
gulp.task('css',function(){
	return gulp.src('./css/*.css')
		.pipe(minifyCSS())
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest('build/css'));
});


// compile and concate less files to css
gulp.task('less',function(){
	return gulp.src('./less/*.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest('build/css'));
});


// concate js files
gulp.task('js', function(){
	return gulp.src('js/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))
});

//image optimzation
gulp.task('image', function () {
	return gulp.src('./uploads/**/*')
		//image-minify start here
		.pipe(imageMin([
			//gif minify
			imageMin.gifsicle({interlaced: true}),
			//jpg minify
			imageMin.jpegtran({progressive: true}),
			//png minify
			imageMin.optipng({optimizationLevel: 5}),
			//svg minify
			imageMin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
			// print output in console
			],{verbose: true}))
			 //place all files in destination folder
			.pipe(gulp.dest('./build/images/'));
});


//delete build folder.
gulp.task('clean', function(){ 
	del(['build'])
});


gulp.task('default', [ 'hi','html','css','less','js','image']);