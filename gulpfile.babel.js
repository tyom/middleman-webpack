const gulp = require('gulp');
const runSequence = require('run-sequence');

require('require-dir')('./gulp/tasks');

gulp.task('build', () => runSequence('clean', ['css', 'webpack']));
gulp.task('serve', ['build', 'watch']);

gulp.task('default', ['build']);
