const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
  // 1. Where is my scss file
  return (
    gulp
      .src("src/sass/**/*.scss")
      // 2. Pass that file through sass compiler
      .pipe(sass())
      // 3. Where do I save the compiled CSS
      .pipe(gulp.dest("dist/css"))
      // 4. Stream changes to all browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("src/sass/**/*.scss", style);
  gulp.watch("src/*.html").on("change", browserSync.reload); // http://localhost:3000/dist/index.html
}

exports.style = style;
exports.watch = watch;
