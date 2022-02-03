const { watch } = require("browser-sync");

var gulp = require("gulp"),
  settings = require("./settings"),
  webpack = require("webpack"),
  browserSync = require("browser-sync").create(),
  compileSass = require("gulp-sass")(require("sass")),
  minifyCss = require("gulp-clean-css"),
  sourceMaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  shell = require("gulp-shell");

compileSass.compiler = require("node-sass");

gulp.task("sass", function () {
  return gulp
    .src(settings.appLocation + "public/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "public/css/build/"));
});

gulp.task("sass-theme", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/public/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/build/"));
});

gulp.task("sass-admin", function () {
  return gulp
    .src(settings.appLocation + "admin/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "admin/css/build/"));
});

gulp.task("sass-theme-admin", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/admin/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/build/"));
});

gulp.task("styles", function () {
  return gulp
    .src(settings.appLocation + "public/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "public/css/build/modules"));
});

gulp.task("styles-theme", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/public/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/build/modules"));
});

gulp.task("styles-admin", function () {
  return gulp
    .src(settings.appLocation + "admin/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "admin/css/build/modules"));
});

gulp.task("styles-theme-admin", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/admin/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/build/modules"));
});

gulp.task("plugin-structure", function () {
  return gulp
    .src("*.*", { read: false })
    .pipe(gulp.dest(settings.appLocation + "public"))
    .pipe(gulp.dest(settings.appLocation + "public/css"))
    .pipe(gulp.dest(settings.appLocation + "public/css/modules"))
    .pipe(gulp.dest(settings.appLocation + "public/css/modules/base"))
    .pipe(gulp.dest(settings.appLocation + "public/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appLocation + "public/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appLocation + "public/css/modules/components/" + "btn.scss"]))
    .pipe(gulp.dest(settings.appLocation + "public/js"))
    .pipe(gulp.dest(settings.appLocation + "public/js/modules"))
    .pipe(shell(["type nul > " + settings.appLocation + "public/js/modules/" + "TestModule.js"]))
    .pipe(shell(["type nul > " + settings.appLocation + "public/js/" + "module-scripts.js"]))
    .pipe(gulp.dest(settings.appLocation + "admin"))
    .pipe(gulp.dest(settings.appLocation + "admin/css"))
    .pipe(gulp.dest(settings.appLocation + "admin/css/modules"))
    .pipe(gulp.dest(settings.appLocation + "admin/css/modules/base"))
    .pipe(gulp.dest(settings.appLocation + "admin/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/css/modules/components/" + "btn.scss"]))
    .pipe(gulp.dest(settings.appLocation + "admin/js/modules"))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/js/modules/" + "TestModuleAdmin.js"]))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/js/" + "module-scripts.js"]));
});

gulp.task("theme-structure", function () {
  return gulp
    .src("*.*", { read: false })
    .pipe(gulp.dest(settings.appThemeLocation + "assets"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/modules"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/modules/base"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/css/modules/components/" + "btn.scss"]))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/js"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/js/modules"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/js/modules/" + "TestModule.js"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/js/" + "module-scripts.js"]))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/modules"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/modules/base"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/css/modules/components/" + "btn.scss"]))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/js/modules"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/js/modules/" + "TestModuleAdmin.js"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/js/" + "module-scripts.js"]));
});

gulp.task("scripts", function (callback) {
  webpack(require("./webpack.config.js"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task("scripts-theme", function (callback) {
  webpack(require("./webpack.theme.config.js"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task("scripts-admin", function (callback) {
  webpack(require("./admin.webpack.config.js"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task("scripts-theme-admin", function (callback) {
  webpack(require("./admin.theme.webpack.config.js"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task("watch", function () {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview,
    ghostMode: false
  });

  gulp.watch(settings.appLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });
  gulp.watch(settings.appLocation + "public/css/modules/**/*.scss", gulp.parallel("waitForStyles"));
  gulp.watch([settings.appLocation + "public/js/modules/**/*.js", settings.appLocation + "public/js/module-scripts.js"], gulp.parallel("waitForScripts"));
});

gulp.task("watch-theme", function () {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview,
    ghostMode: false
  });

  gulp.watch(settings.appThemeLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });
  gulp.watch(settings.appThemeLocation + "assets/public/css/modules/**/*.scss", gulp.parallel("waitForThemeStyles"));
  gulp.watch([settings.appThemeLocation + "assets/public/js/modules/**/*.js", settings.appThemeLocation + "assets/public/js/module-scripts.js"], gulp.parallel("waitForThemeScripts"));
});

gulp.task("watch-admin", function () {
  browserSync.init({
    notify: false,
    proxy: settings.adminUrlToPreview,
    ghostMode: false
  });

  gulp.watch(settings.appLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });

  gulp.watch(settings.appLocation + "admin/css/modules/**/*.scss", gulp.parallel("waitForStylesAdmin"));
  gulp.watch([settings.appLocation + "admin/js/modules/**/*.js", settings.appLocation + "admin/js/module-scripts.js"], gulp.parallel("waitForScriptsAdmin"));
});

gulp.task("watch-theme-admin", function () {
  browserSync.init({
    notify: false,
    proxy: settings.adminUrlToPreview,
    ghostMode: false
  });

  gulp.watch(settings.appThemeLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });

  gulp.watch(settings.appThemeLocation + "assets/admin/css/modules/**/*.scss", gulp.parallel("waitForThemeStylesAdmin"));
  gulp.watch([settings.appThemeLocation + "assets/admin/js/modules/**/*.js", settings.appThemeLocation + "assets/admin/js/module-scripts.js"], gulp.parallel("waitForThemeScriptsAdmin"));
});

gulp.task(
  "waitForStyles",
  gulp.series("sass", function () {
    return gulp.src(settings.appLocation + "public/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

gulp.task(
  "waitForThemeStyles",
  gulp.series("sass-theme", function () {
    return gulp.src(settings.appThemeLocation + "assets/public/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

gulp.task(
  "waitForStylesAdmin",
  gulp.series("sass-admin", function () {
    return gulp.src(settings.appLocation + "admin/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

gulp.task(
  "waitForThemeStylesAdmin",
  gulp.series("sass-theme-admin", function () {
    return gulp.src(settings.appThemeLocation + "assets/admin/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

gulp.task(
  "waitForScripts",
  gulp.series("scripts", function (cb) {
    browserSync.reload();
    cb();
  })
);

gulp.task(
  "waitForThemeScripts",
  gulp.series("scripts-theme", function (cb) {
    browserSync.reload();
    cb();
  })
);

gulp.task(
  "waitForScriptsAdmin",
  gulp.series("scripts-admin", function (cb) {
    browserSync.reload();
    cb();
  })
);

gulp.task(
  "waitForThemeScriptsAdmin",
  gulp.series("scripts-theme-admin", function (cb) {
    browserSync.reload();
    cb();
  })
);
