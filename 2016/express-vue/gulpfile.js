const gulp = require('gulp');
const webpack = require('gulp-webpack');
const webpackConfig = require('./config/webpack.config')

gulp.task('webpack', function () {
    return gulp.src('./entry.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./dest/'));
})
