var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

gulp.task('build-js', function() {
    return gulp.src(['src/js/*.jsx', 'src/js/*.js'])
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


gulp.task('default', function () {
    gulp.watch(["src/js/*.jsx", "src/js/*.js"], ['build-js']);
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});
