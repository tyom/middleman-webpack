const gulp = require('gulp');
const del = require('del');
const paths = require('../paths');

gulp.task('clean', done => {
  del(paths.output);
  return done();
});

gulp.task('clean:js', done => {
  del(paths.outputJs);
  return done();
});

gulp.task('clean:css', done => {
  del(paths.outputStyles);
  return done();
});
