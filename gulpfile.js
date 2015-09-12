var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('build-js', function() {
    gulp.src(['src/js/board.js'])
        .pipe(babel())
        .on('error', function(err) { 
            console.log(err.message);
            this.end();
        })
        .pipe(rename(function(path) {
            path.extname = path.extname.replace('.jsx', '.js');
        }))
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(gulp.dest('static/js/'));
    gulp.src(['src/js/*.jsx'])
        .pipe(babel())
        .on('error', function(err) { 
            console.log(err.message);
            this.end();
        })
        .pipe(rename(function(path) {
            path.extname = path.extname.replace('.jsx', '.js');
        }))
        .pipe(gulp.dest('static/js/'));
});

gulp.task('build-css', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});

gulp.task('default', ['build-js', 'build-css'], function () {
    gulp.watch(['src/js/*.jsx', 'src/js/*.js'], ['build-js']);
    gulp.watch(['src/scss/*.scss'], ['build-css']);
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

