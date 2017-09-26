var gulp = require('gulp');
var htmltidy = require('gulp-htmltidy');

gulp.task('tidy', function() {
  return gulp.src('./server/**/*.html')
    .pipe(htmltidy({
      indent: true
    }))
    .pipe(gulp.dest('./server'));
});