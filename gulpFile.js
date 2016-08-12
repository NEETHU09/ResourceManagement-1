var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('Client/src/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('Client/dist/'))
});

//Then we create copy task

gulp.task('copy',function(){
    gulp.src('Client/src/*.html')
        .pipe(gulp.dest('Client/dist'));
    gulp.src('Client/src/css/*.*')
        .pipe(gulp.dest('Client/dist/css'));
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('Client/src/*.*',['browserify','copy']);
});