import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefix from 'gulp-autoprefixer';
import sassLint from 'gulp-sass-lint';
import minify from 'gulp-minify-css';
import rename from 'gulp-rename';
import notify from 'gulp-notify';
// import sourcemaps from 'gulp-sourcemaps'; - because current version do not support node 6.1.0

const options = {
    source: 'core/sass/*.sass',
    target: 'core/assets/styles'
};

gulp.task('styles:build', () => (
        gulp.src(options.source)
            .pipe(plumber())
          //  .pipe(sourcemaps.init())
            .pipe(sass()
            .on("error", notify.onError({
                message: "Error: <%= error.message %>",
                title: "Error compiling sass"
            })))
            .pipe(autoprefix({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(minify())
            .pipe(rename({suffix: '.min'}))
          //  .pipe(sourcemaps.write())
            .pipe(plumber.stop())
            .pipe(gulp.dest(options.target))
            .pipe(notify("SASS has been compiled."))
));

gulp.task('styles:lint', () => (
        gulp.src(options.source)
            .pipe(sassLint())
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError()
            .on("error", notify.onError({
                message: "Error: <%= error.message %>",
                title: "Error linting sass"
            })))
));

gulp.task('styles', ['styles:lint', 'styles:build']);
