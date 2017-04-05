const gulp = require('gulp');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');

gulp.task('webpack', function () {
  return gulp.src('./src/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(`./src/`));
});


gulp.task('watch', function () {
  return gulp.watch(['./src/jsx/*.jsx', './src/entry.js'], ['webpack']);
});


gulp.task('default', ['webpack', 'watch']);