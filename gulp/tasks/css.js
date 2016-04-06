const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').get('bs-proxy');
const paths = require('../paths');

gulp.task('css', ['clean:css'], () => {
  return gulp.src(`${paths.sourceStyles}/index.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'IE 9']
    }))
    .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${paths.outputStyles}`))
    .pipe(browserSync.stream({match: '**/*.css'}));
});
