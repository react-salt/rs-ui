var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    runSequence = require('run-sequence');

gulp.task('copy', function() {
    return gulp.src('./node_modules/cat-*/assets/*.less')
        .pipe(gulp.dest('./lib'));
});

gulp.task('less', function () {
    return gulp.src('./develop.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(minifyCSS())
        .pipe(rename(function(path){
            path.basename = "bootstrap";
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
    runSequence('copy', 'less');
});
