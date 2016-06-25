'use strict';

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var eslint = require('gulp-eslint');

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});

gulp.task('lint', function () {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// TODO
//gulp.task('test', function () {
//  return;
//});

gulp.task('dist', ['lint', 'sass'], function () {});

gulp.task('default', function () {
  return dist();
});
