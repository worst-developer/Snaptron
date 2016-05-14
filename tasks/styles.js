import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber'
import autoprefix from 'gulp-autoprefixer'
import sassLint from 'gulp-sass-lint';
import minify from 'gulp-minify-css';
import rename from 'gulp-rename';
// import sourcemaps from 'gulp-sourcemaps'; - because current version do not support node 6.1.0

const src = {
    sassStyles: 'core/sass/*.sass'
};
gulp.task('styles:build', () => (
        gulp.src(src.sassStyles)
            .pipe(plumber())
          //  .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefix({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(minify())
            .pipe(rename({suffix: '.min'}))
          //  .pipe(sourcemaps.write())
            .pipe(plumber.stop())
            .pipe(gulp.dest('core/assets/styles'))
));

gulp.task('styles:lint', () => (
        gulp.src(src.sassStyles)
            .pipe(sassLint())
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError())
));

gulp.task('styles', ['styles:lint', 'styles:build']);

