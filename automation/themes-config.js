/**
 * The theme-facing workflow
 *
 * @link       https://xarites.com
 * @since      1.0.0
 *
 * @package    Xarites_Workflow
 * @author     Vecsei Szilveszter <szilveszter@xarites.com>
 */

const { watch } = require("browser-sync");

var gulp = require("gulp"),
  settings = require("./settings"),
  webpack = require("webpack"),
  browserSync = require("browser-sync").create(),
  compileSass = require("gulp-sass")(require("sass")),
  prefix = require("gulp-autoprefixer"),
  minifyCss = require("gulp-clean-css"),
  sourceMaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  shell = require("gulp-shell");

compileSass.compiler = require("node-sass");
const imagemin = require("gulp-imagemin");
const imagewebp = require("gulp-webp");

/**
 *  Create the bundle
 *
 *  !public
 */
gulp.task("sass-theme", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/public/css/module-styles.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/build/"));
});

/**
 * Create the bundle
 *
 * !admin
 */
gulp.task("sass-theme-admin", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/admin/css/module-styles.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/build/"));
});

/**
 * Convert SASS components to css
 *
 * !public
 */
gulp.task("styles-theme", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/public/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/build/modules"));
});

/**
 * Convert SASS components to css
 *
 * !admin
 */
gulp.task("styles-theme-admin", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/admin/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/build/modules"));
});

/**
 * Compress images
 *
 * ? Yes, you can include more formats in {} or just leave img/*
 * ? none supported formats will be skipped automatically
 * !public
 */
gulp.task("compress-img-theme", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/public/img/*.{jpg,png}")
    .pipe(imagemin({ optimizationLevel: 2, progressive: true, interlaced: true }))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/img/dist"));
});

/**
 * Compress images
 *
 * ? Yes, you can include more formats in {} or just leave img/*
 * ? none supported formats will be skipped automatically
 * !admin
 */
gulp.task("compress-img-theme-admin", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/admin/img/*.{jpg,png}")
    .pipe(imagemin({ optimizationLevel: 2, progressive: true, interlaced: true }))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/img/dist"));
});

/**
 * Convert compressed images to webp format
 *
 * !public
 */
gulp.task("convert-webp-theme", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/public/img/dist/*")
    .pipe(imagewebp())
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/img/dist"));
});

/**
 * Convert compressed images to webp format
 *
 * !admin
 */
gulp.task("convert-webp-theme-admin", function () {
  return gulp
    .src(settings.appThemeLocation + "assets/admin/img/dist/*")
    .pipe(imagewebp())
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/img/dist"));
});

/**
 * Create the folder/file structure
 */
gulp.task("theme-structure", function () {
  return gulp
    .src("*.*", { read: false })
    .pipe(gulp.dest(settings.appThemeLocation + "assets"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/img"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/img/dist"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/modules"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/modules/base"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/css/modules/components/" + "btn.scss"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/css/" + "module-styles.scss"]))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/js"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/public/js/modules"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/js/modules/" + "TestModule.js"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/public/js/" + "module-scripts.js"]))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/img"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/img/dist"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/modules"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/modules/base"))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/css/modules/components/" + "btn.scss"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/css/" + "module-styles.scss"]))
    .pipe(gulp.dest(settings.appThemeLocation + "assets/admin/js/modules"))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/js/modules/" + "TestModuleAdmin.js"]))
    .pipe(shell(["type nul > " + settings.appThemeLocation + "assets/admin/js/" + "module-scripts.js"]));
});

/**
 * Create the Script Bundle
 *
 * !public
 */
gulp.task("scripts-theme", function (callback) {
  webpack(require("./webpack.theme.config.js"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

/**
 * Create the Script Bundle
 *
 * !admin
 */
gulp.task("scripts-theme-admin", function (callback) {
  webpack(require("./admin.theme.webpack.config.js"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

/**
 * Watch for changes
 *
 * ? php, scss, js
 * !public
 */
gulp.task("watch-theme", function () {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview,
    ghostMode: false
  });

  /**
   * Any php changes
   */
  gulp.watch(settings.appThemeLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });

  /**
   * Any scss changes
   */
  gulp.watch(settings.appThemeLocation + "assets/public/css/modules/**/*.scss", gulp.parallel("waitForThemeStyles"));
  gulp.watch(settings.appThemeLocation + "assets/public/css/module-styles.scss", gulp.parallel("waitForThemeStyles"));
  gulp.watch(settings.appThemeLocation + "assets/public/img/*.{jpg,png}", gulp.parallel("compress-img-theme"));
  gulp.watch(settings.appThemeLocation + "assets/public/img/dist/*.{jpg,png}", gulp.parallel("convert-webp-theme"));
  gulp.watch([settings.appThemeLocation + "assets/public/js/modules/**/*.js", settings.appThemeLocation + "assets/public/js/module-scripts.js"], gulp.parallel("waitForThemeScripts"));
});

/**
 * Watch for changes
 *
 * ? php, scss, js
 * !admin
 */
gulp.task("watch-theme-admin", function () {
  browserSync.init({
    notify: false,
    proxy: settings.adminUrlToPreview,
    ghostMode: false
  });

  /**
   * Any php changes
   */
  gulp.watch(settings.appThemeLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });

  /**
   * Any scss changes
   */
  gulp.watch(settings.appThemeLocation + "assets/admin/css/modules/**/*.scss", gulp.parallel("waitForThemeStylesAdmin"));
  gulp.watch(settings.appThemeLocation + "assets/admin/css/module-styles.scss", gulp.parallel("waitForThemeStylesAdmin"));
  gulp.watch(settings.appThemeLocation + "assets/admin/img/*.{jpg,png}", gulp.parallel("compress-img-theme-admin"));
  gulp.watch(settings.appThemeLocation + "assets/admin/img/dist/*.{jpg,png}", gulp.parallel("convert-webp-theme-admin"));
  gulp.watch([settings.appThemeLocation + "assets/admin/js/modules/**/*.js", settings.appThemeLocation + "assets/admin/js/module-scripts.js"], gulp.parallel("waitForThemeScriptsAdmin"));
});

/**
 * Parallel task
 *
 * !public CSS
 */
gulp.task(
  "waitForThemeStyles",
  gulp.series("sass-theme", function () {
    return gulp.src(settings.appThemeLocation + "assets/public/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

/**
 * Parallel task admin
 *
 * !admin CSS
 */
gulp.task(
  "waitForThemeStylesAdmin",
  gulp.series("sass-theme-admin", function () {
    return gulp.src(settings.appThemeLocation + "assets/admin/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

/**
 * Parallel task
 *
 * !public JS
 */
gulp.task(
  "waitForThemeScripts",
  gulp.series("scripts-theme", function (cb) {
    browserSync.reload();
    cb();
  })
);

/**
 * Parallel task admin
 *
 * !admin JS
 */
gulp.task(
  "waitForThemeScriptsAdmin",
  gulp.series("scripts-theme-admin", function (cb) {
    browserSync.reload();
    cb();
  })
);
