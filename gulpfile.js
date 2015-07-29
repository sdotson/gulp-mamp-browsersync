var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var mamp = require('gulp-mamp');

var options = {};
 
gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});
 
gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});
 
gulp.task('mamp', ['start']);

gulp.task('sass', function () {
    gulp.src('sass/**/*')
        .pipe(sass({includePaths: ['sass'], outputStyle: 'compressed'}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "app/*.js", '*.html'], {
        proxy: 'localhost:8888'
    });
});

gulp.task('default', ['mamp','browser-sync'], function () {
    gulp.watch("assets/sass/*/*.scss", ['sass']);
});