const gulp = require('gulp');

require('require-dir')('./gulp/tasks');

gulp.task('default', ['build']);

gulp.task('build', ['clean', 'css', 'webpack']);
gulp.task('serve', ['browser-sync', 'build', 'watch']);
