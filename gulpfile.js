var gulp = require('gulp');



 var sass = require('gulp-sass');
// //
 var prefixer = require('gulp-autoprefixer');
//
var cssmin = require('gulp-minify-css');
//
 gulp.task('sass', function(){
 return gulp.src('src/scss/styles.scss')
 .pipe(sass())
 .pipe(prefixer())

 .pipe(cssmin())

 .pipe(gulp.dest('public/css'));
 });
