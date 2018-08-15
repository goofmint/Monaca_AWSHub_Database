import gulp from 'gulp';
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";

gulp.task("default", () => {
  browserify({
      entries: ["./src/index.js"]
    })
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("www/js"));
});

gulp.task('watch', function(){
  gulp.watch('./src/*.js', ['default']);
});
