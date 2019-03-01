const gulp = require('gulp');
const postcss = require('gulp-postcss');
//const autoprefixer = require('autoprefixer');
//const cssClean = require('postcss-clean');
//const concat = require("gulp-concat");
//const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const purgecss = require('@fullhuman/postcss-purgecss');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

/*
 -- TOP LEVEL FUNCTIONS --

 gulp.task - Define tasks
 gulp.src - Point to files to use
 gulp.dest - Point to folder to output
 gulp.watch - watch files and folders for changes

*/


function css() {
  var plugins = [
    purgecss({
      content: ['index.html'],
      //whitelist: ['collapse','webp','no-webp','lightSpeedIn'],
      //whitelistPatterns:[/nav*/,/top-nav*/,/tingle*/]
    })
    //objectfit(),
    //flexbugs(),
    //postcssPresetEnv(),
    //autoprefixer()
  ];
  return gulp.src('src/scss/aastyle.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./'));
};

function javascript() {
  return gulp.src('src/js/index.js')
    .pipe(terser())
    .pipe(gulp.dest('./'));
};



// Watch files
function watch() {
  gulp.watch("./src/scss/**/*", css);
}

exports.watch = watch;
exports.css = css;
exports.javascript = javascript;