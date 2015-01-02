/**
 * Include plugins
 */
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var header = require('gulp-header');
var notify = require('gulp-notify');

/**
 * Custom Configuration
 */
var paths = {
    styles: {
        src: 'scss/**/*.scss',
        dest: 'css',
        notify: 'CSS was compiled'
    },
    js: {
        src: [
            'js/vendor/*.js',
            'js/plugins/*.js',
            'js/app/core.js',
            'js/app/customPlugins/*.js',
            'js/app/modules/*.js',
            'js/app/main.js'
        ],
        dest: 'js',
        file: 'build.js',
        suffix: '.min',
        banner: false,
        notify: 'JS was compressed'
    },
    images: {
        src: 'img/original/**/*',
        dest: 'img/build'
    }
};

if (paths.js.banner) {
    paths.js.banner = [
        '/**',
        ' * Project name - Project description',
        ' * @date - ${date}',
        ' */\r\n'
    ].join('\n');
}

/**
 * Describe Gulp Tasks
 */

gulp.task('sass', function() {
    gulp.src(paths.styles.src)
        .pipe(sass({
            style: 'compact',
            sourcemap: false,
            unixNewlines: true
        }))
        .pipe(prefix({browsers: ['last 2 versions']}))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(notify(paths.styles.notify));
});

gulp.task('js', function() {
    gulp.src(paths.js.src)
        .pipe(concat(paths.js.file))
        .pipe(header(paths.js.banner, {date: new Date()}))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(rename({
            'suffix' : paths.js.suffix
        }))
        .pipe(uglify())
        .pipe(header(paths.js.banner, {date: new Date()}))
        .pipe(gulp.dest(paths.js.dest))
        .pipe(notify(paths.js.notify));
});

gulp.task('imagemin', function() {
    gulp.src(paths.images.src)
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest(paths.images.dest));
});

/**
 * Watch tasks
 */
gulp.task('watch', function() {
    gulp.watch(paths.styles.src, ['sass']);
    gulp.watch(paths.js.src, ['js']);
    gulp.watch(paths.images.src, ['imagemin']);
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
