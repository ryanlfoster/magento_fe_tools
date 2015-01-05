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
 * Base configuration
 */
var config = {
    styles: {
        src: 'scss/**/*.scss',
        dest: 'css',
        notify: 'CSS was compiled'
    },
    scripts: {
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

if (config.scripts.banner) {
    config.scripts.banner = [
        '/**',
        ' * Project name - Project description',
        ' * @date - ${date}',
        ' */\r\n'
    ].join('\n');
}

/**
 * Describe Gulp Tasks
 */

gulp.task('styles', function() {
    gulp.src(config.styles.src)
        .pipe(sass({
            style: 'compact',
            sourcemap: false,
            unixNewlines: true
        }))
        .pipe(prefix({browsers: ['last 2 versions']}))
        .pipe(minifyCSS({keepBreaks:true}))
        .pipe(gulp.dest(config.styles.dest))
        .pipe(notify(config.styles.notify));
});

gulp.task('scripts', function() {
    gulp.src(config.scripts.src)
        .pipe(concat(config.scripts.file))
        .pipe(header(config.scripts.banner, {date: new Date()}))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(rename({
            'suffix' : config.scripts.suffix
        }))
        .pipe(uglify())
        .pipe(header(config.scripts.banner, {date: new Date()}))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(notify(config.scripts.notify));
});

gulp.task('images', function() {
    gulp.src(config.images.src)
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest(config.images.dest));
});

/**
 * Watch tasks
 */
gulp.task('watch', function() {
    gulp.watch(config.styles.src, ['styles']);
    gulp.watch(config.scripts.src, ['scripts']);
    gulp.watch(config.images.src, ['images']);
});

/**
 * Invoke default tasks
 */
gulp.task('default', [
    'styles',
    'scripts',
    'images',
    'watch'
]);
