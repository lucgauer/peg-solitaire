'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var eslint      = require('gulp-eslint');
var browserSync = require('browser-sync').create();
var srcDir      = './app/';
var distDir     = srcDir;

gulp.task('sass', function () {
  return gulp.src(srcDir + 'styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distDir + 'styles'));
});

gulp.task('eslint', function () {
  return gulp.src(srcDir + 'scripts/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('serve', ['sass', 'eslint'], function() {
  browserSync.init({
    server: srcDir
  });

  gulp.watch(srcDir + 'styles/**/*.scss', ['sass']);
  gulp.watch(srcDir + 'scripts/**/*.js', ['eslint']);
  gulp.watch([srcDir + '**/*.html', srcDir + '**/*.scss', srcDir + '**/*.js']).on('change', browserSync.reload);
});

// TODO
// gulp.task('test', function () {
//  return;
// });

gulp.task('default', function () {});
