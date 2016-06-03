import gulp from 'gulp';
import ts from 'gulp-typescript';
import tslint from 'gulp-tslint';
import notify from 'gulp-notify';


const options = {
  source: 'core/js/**/*.ts',
  target: 'core/assets/compiled'
};

gulp.task('ts:build', () => (
    gulp.src(options.source)
    .pipe(ts({
      outFile: 'bundle.js',
      noImplicitAny: false,
      target: 'ES6',
      module: 'commonjs',
      jsx: 'react',
      removeComments: true,
      experimentalDecorators: true,
    })
    .on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error building TypeScript"
    })))
    .pipe(gulp.dest(options.target))
));

gulp.task('ts:lint', () => (
  gulp.src(options.source)
  .pipe(tslint())
  .pipe(tslint.report("verbose", {
     emitError: true,
     summarizeFailureOutput: true
  }))
));

gulp.task('ts:watch', ['ts:build'], () => (
  gulp.watch(options.source, ['ts:build'])
));
