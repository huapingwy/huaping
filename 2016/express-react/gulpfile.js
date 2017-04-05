const path = require('path');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const sass = require('gulp-scss');
const rename = require('gulp-rename');

const pathConfig = {
    bootstrapScssPath: path.join(__dirname, './public/style/scss/_bootstrap.scss'),
    cssPath: path.join(__dirname, './public/style/')
}

gulp.task('bootstrap', function () {
    return gulp.src([pathConfig.bootstrapScssPath])
        .pipe(sass())
        .pipe(rename('bootstrap.css'))
        .pipe(gulp.dest(pathConfig.cssPath))
})


gulp.task('browserSync', ['nodemon'], function () {
    browserSync.init({
        proxy: 'http://localhost:8060',
        files: ['public/**/*.*', './views/**/*.jsx', './routes/**/*.js'],
        browser: 'google chrome',
        notify: false,
        port: 5000
    })
});

gulp.task('nodemon', function (cb) {
    let called = false;
    return nodemon({
        script: './bin/www'
    }).on('start', function () {
        if(!called) {
            cb();
            called = true;
        }
    });
})

gulp.task('default', ['browserSync']);