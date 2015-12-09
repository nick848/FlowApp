var gulp = require('gulp');
var extender = require('gulp-html-extend');
var sass = require('gulp-ruby-sass');

gulp.task('extend', function(){
    gulp.src('unpackage/*.html')
    .pipe(extender({annotations:false,verbose:false}))
    .pipe(gulp.dest('./'))
});

gulp.task('scss', function() {
    return sass('unpackage/scss',  { sourcemap: false })
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('unpackage/*.html', ['extend']);
    gulp.watch('unpackage/scss/*.scss', ['scss']);
});

gulp.task('default', ['watch', 'scss', 'extend']);

