var
gulp = require('gulp'),
include = require('gulp-include');

var path = {
    build: {
        js: '',
        styles: ''
    },
    src: {
        js: 'main.js',
        styles: ''
    }
};


gulp.task('scripts', function() {
  gulp.src(path.src.js)
  .pipe(include())
      .on('error', console.log)
})

gulp.task("default", ["scripts"]);
