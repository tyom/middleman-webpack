const gulp = require('gulp');

require('require-dir')('./gulp/tasks');

gulp.task('default', ['browser-sync', 'css', 'webpack', 'watch']);
