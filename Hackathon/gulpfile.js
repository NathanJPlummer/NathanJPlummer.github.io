var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');


//check file order for src

gulp.task('jsmin', function () {
    gulp.src('hackathon.js')
        .pipe(uglify())
        .pipe(rename('hacker.min.js'))
        .pipe(gulp.dest('./jsmin/'));
});

gulp.task('cssmin', function () {
    gulp.src(['ranger.scss', 'zord.scss'])
        .pipe(concat('styles.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest(''))
        .pipe(connect.reload());
});

gulp.task('pCompress', ['jsmin', 'cssmin']);

//livereload connect
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

//watch task
gulp.task('watch', function () {
    gulp.watch('*.scss', ['cssmin']);
});

gulp.task('livewatch', ['connect', 'watch']);
