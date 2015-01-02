var gulp = require('gulp');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var header = require('gulp-header');

/**
 * Custom Configuration
 */
var jsMap = [
    'js/vendor/*.js',
    'js/plugins/*.js',
    'js/app/core.js',
    'js/app/customPlugins/*.js',
    'js/app/modules/*.js',
    'js/app/main.js'
];

var jsBanner = [
    '/**',
    ' * Project name - Project description',
    ' * @date - ${date}',
    ' */\r\n'
].join('\n');

/**
 * Describe Gulp Tasks
 */

gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass({
            style: 'compact',
            sourcemap: false,
            unixNewlines: true
        }))
        .pipe(prefix({browsers: ['last 2 versions']}))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
    gulp.src(jsMap)
        .pipe(concat('build.js'))
        .pipe(header(jsBanner, {date: new Date()}))
        .pipe(gulp.dest('js'))
        .pipe(rename({
            'suffix' : '.min'
        }))
        .pipe(uglify())
        .pipe(header(jsBanner, {date: new Date()}))
        .pipe(gulp.dest('js'))
        .pipe(notify('JS was compressed'))
});

gulp.task('imagemin', function() {
    gulp.src('img/original/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest('img/build'));
});

/**
 * Watch tasks
 */
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch(jsMap, ['js']);
    gulp.watch('img/original/**/*', ['imagemin']);
});

/**
 * Invoke default tasks
 */
gulp.task('default', [
    'sass',
    'js',
    'imagemin',
    'watch'
]);
