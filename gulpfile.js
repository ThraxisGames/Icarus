var gulp      = require("gulp");
var bower     = require("gulp-bower");
var cssimport = require("gulp-cssimport");
var sass      = require("gulp-sass");
var watch     = require("gulp-watch");

// Default Task
gulp.task("default", function() {
  gulp.start("bower", "css");
});

// On Ramp Task
gulp.task("onramp", function() {
  gulp.start("bower");
});

// Development Build Task
gulp.task("dev", function() {
  watch("./src/stylesheets/**/*", function() {
    gulp.start("css");
  });
});

// Update bower dependencies using bower.json and .bowerrc
gulp.task("bower", function() {
  return bower();
});

// Compile SCSS to CSS
gulp.task("css", function() {
  gulp.src("./src/stylesheets/styles.scss")
      .pipe(sass(), { errLogToConsole: true })
      .pipe(cssimport())
      .pipe(gulp.dest("./www/css"));
});