var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


var config = {
    srcDir: './assets',
    outDir: './dist'
};

var sassOptions = {
    precision: 8,
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var autoprefixerOptions = {
    browsers: [
        "Android 2.3",
        "Android >= 4",
        "Chrome >= 20",
        "Firefox >= 24",
        "Explorer >= 8",
        "iOS >= 6",
        "Opera >= 12",
        "Safari >= 6"
    ]
};

gulp.task('css', function() {
    return gulp.src(config.srcDir + '/stylesheets/bootstrap-custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outDir + '/css'));
});

gulp.task('js', function() {
    return gulp.src(config.srcDir + '/javascripts/bootstrap.*js')
        .pipe(gulp.dest(config.outDir + '/js'));
});

gulp.task('fonts', function() {
    return gulp.src(config.srcDir + '/fonts/**/*')
        .pipe(gulp.dest(config.outDir + '/fonts'));
});

gulp.task('default', ['css', 'js', 'fonts']);