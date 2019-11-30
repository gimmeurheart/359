var { watch, src, dest, parallel, series } = require('gulp');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');

function devServer(cb) {
  var params = {
    watch: true,
    reloadDebounce: 150,
    notify: false,
    server: { baseDir: './build' },
  };

  browserSync.create().init(params);
  cb();
}

function buildPages() {
  return src('src/**/*.html')
    .pipe(dest('build/'));
}

function buildStyles() {
  return src('src/styles/*.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(dest('build/styles/'));
}

function buildScripts() {
  return src('src/scripts/index.js')
    .pipe(webpackStream({ output: { filename: 'main.js' } }))
    .pipe(dest('build/scripts/'));
}

function buildAssets(cb) {
  src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
    .pipe(dest('build/assets/'));

  src('src/assets/img/**/*.*')
    .pipe(imagemin())
    .pipe(dest('build/assets/img'));

  cb();
}

function clearBuild() {
  return del('build/');
}

function watchFiles() {
  watch('src/pages/*.html', buildPages);
  watch('src/styles/*.scss', buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

exports.default =
  series(
    clearBuild,
    parallel(
      devServer,
      series(
        parallel(buildPages, buildStyles, buildScripts, buildAssets),
        watchFiles
      )
    )
  );
