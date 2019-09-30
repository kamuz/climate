// Require plugins
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    tinypng = require('gulp-tinypng');

// Define source and output
var htmlSource = [
    'html/**'
]
var scssSource = [
    'css/sass/**.scss',
];
var sassOutput = 'css/src';
var cssSource = [
    'libs/bootstrap/css/bootstrap.min.css',
    'css/src/styles.css'
];
var jsSource = [
    // Dependencies
    'libs/jquery/jquery.min.js',
    'libs/popper/popper.min.js',
    'libs/bootstrap/bootstrap.min.js',
    // Init
    'js/src/main.js',
];
var imgSource = './img/src/**';

// Compile HTML
gulp.task('html', function() {
    return gulp.src('html/*.html')
    .pipe(rigger())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.reload({stream: true}));
});

// Compile SCSS
gulp.task('sass', function() {
    return gulp.src(scssSource)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassOutput))
    .pipe(browserSync.reload({stream: true}));
});

// Concat and minify CSS
gulp.task('css', function() {
    return gulp.src(cssSource)
    .pipe(concat('main.min.css'))
    // .pipe(autoprefixer(['last 15 versions']))
    // .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});

// Concat and minify JavaScript
gulp.task('js', function() {
    return gulp.src(jsSource)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({stream: true}));
});

// Optimize images
gulp.task('img', function () {
    gulp.src(imgSource)
    .pipe(tinypng('rrltU3pcUq2ZN9ca7myZnSsFEeqpTTvK'))
    .pipe(gulp.dest('./img'));
});

// Setup Browsersync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});

// Watchers
gulp.task('watch', ['html', 'sass', 'css', 'js', 'browser-sync'], function() {
    gulp.watch(htmlSource, ['html']);
    gulp.watch(scssSource, ['sass']);
    gulp.watch(cssSource, ['css']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(htmlSource, browserSync.reload);
});

// Default Task
gulp.task('default', ['watch']);