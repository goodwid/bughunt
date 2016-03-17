var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var gulp_jshint = require('gulp-jshint');

var js_src   = ['./*.js', './js/*.js', './test/*.js'];

gulp.task('watch-mocha', function() {
    gulp.watch(['test/**', 'index.js'], ['watch-mocha']);
    return gulp.src(['test/*.js'], {
            read: false
        })
        .pipe(mocha({
            reporter: 'list'
        }));
});

gulp.task('lint', function() {
    return gulp.src(js_src)
        .pipe(gulp_jshint())
        .pipe(gulp_jshint.reporter('default'));
});
