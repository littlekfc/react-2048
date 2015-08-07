var gulp = require('gulp');
var jsx = require('gulp-jsx');
var rename = require('gulp-rename');

gulp.task('build-jsx', function() {
    return gulp.src('src/jsx/*.jsx')
        .pipe(jsx({
            factory: 'React.createElement'
        })).pipe(rename(function(path) {
            path.extname = path.extname.replace('.jsx', '.js');
        }))
        .pipe(gulp.dest('static/js/'));
});

gulp.task('default', function () {
    gulp.watch(["src/jsx/*.jsx"], ['build-jsx']);
});
