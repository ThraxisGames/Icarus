var gulp      = require("gulp");
var cssimport = require("gulp-cssimport");
var sass      = require("gulp-sass");

// Default Task
gulp.task("default", function() {
  gulp.start("css");
});

gulp.task("css", function() {
  gulp.src("./src/stylesheets/styles.scss")
      .pipe(sass(), { errLogToConsole: true })
      .pipe(cssimport())
      .pipe(gulp.dest("./www/css"));
});