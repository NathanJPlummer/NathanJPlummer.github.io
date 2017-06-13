var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

//check file order for src

gulp.task('jsmin', function () {
    gulp.src(['javascript/bar-graph.js', 'javascript/dotValid.js', 'javascript/calculator.js', 'javascript/search.js'])
        .pipe(concat('js-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../../portfolio/javascript'));
});

gulp.task('cssmin', function () {
    gulp.src(['normalize.css', 'eureka-light.css', 'open-iconic.css', 'fonts/fonts.css', 'home.css', 'contact.css', 'skills.css', 'graphics.css', 'calculator.css', 'powerSearch.css', 'projects.css', 'navigator.css', 'desktopMedia.css', 'mobile-standard.css', 'mobile-media.css'])
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('../../portfolio'));
});

gulp.task('pCompress', ['jsmin', 'cssmin']);
