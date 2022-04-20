const gulp = require('gulp')
const fileinclude = require('gulp-file-include')
const del = require('del')

function clean() {
  return del('./dist/*');
}

gulp.task('clean',() => {
  return del('./dist/*');
});

gulp.task('fileinc', function() {
  gulp.src('*.html')
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest('./dist'));
});

function compose() {
  return gulp.watch('*.html', { ignoreInitial: false, queue: false },
  gulp.series(['clean','fileinc'])    
  )
}

exports.default = gulp.series(clean,compose);