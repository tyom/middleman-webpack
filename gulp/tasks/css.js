const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').get('bs-proxy');
const paths = require('../paths');

const SASS_PATHS = [];

gulp.task('css', () => {
  return gulp.src(`${paths.sourceStyles}/index.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: SASS_PATHS
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'IE 9']
    }))
    .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${paths.outputStyles}`))
    .pipe(browserSync.stream({match: '**/*.css'}));
});
