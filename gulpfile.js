var gulp = require('gulp');
var extender = require('gulp-html-extend');
var sass = require('gulp-ruby-sass');

gulp.task('extend', function(){
    gulp.src('build/*.html')
    .pipe(extender({annotations:false,verbose:false}))
    .pipe(gulp.dest('./'))
});

gulp.task('scss', function() {
    return sass('build/scss',  { sourcemap: false })
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('build/*.html', ['extend']);
    gulp.watch('build/scss/*.scss', ['scss']);
});

gulp.task('default', ['watch', 'scss', 'extend']);

