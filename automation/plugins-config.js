/**
 * The plugin-facing workflow
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
gulp.task("sass", function () {
  return gulp
    .src(settings.appLocation + "public/css/module-styles.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "public/css/build/"));
});

/**
 * Create the bundle
 *
 * !admin
 */
gulp.task("sass-admin", function () {
  return gulp
    .src(settings.appLocation + "admin/css/module-styles.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(concat("styles-bundled.css"))
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "admin/css/build/"));
});

/**
 * Convert SASS components to css
 *
 * !public
 */
gulp.task("styles", function () {
  return gulp
    .src(settings.appLocation + "public/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "public/css/build/modules"));
});

/**
 * Convert SASS components to css
 *
 * !admin
 */
gulp.task("styles-admin", function () {
  return gulp
    .src(settings.appLocation + "admin/css/modules/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .on("error", error => console.log(error.toString()))
    .pipe(gulp.dest(settings.appLocation + "admin/css/build/modules"));
});

/**
 * Compress images
 *
 * ? Yes, you can include more formats in {} or just leave img/*
 * ? none supported formats will be skipped automatically
 * !public
 */
gulp.task("compress-img", async function () {
  return gulp
    .src(settings.appLocation + "public/img/*.{jpg,png}")
    .pipe(imagemin({ optimizationLevel: 2, progressive: true, interlaced: true }))
    .pipe(gulp.dest(settings.appLocation + "public/img/dist"));
});

/**
 * Compress images
 *
 * ? Yes, you can include more formats in {} or just leave img/*
 * ? none supported formats will be skipped automatically
 * !admin
 */
gulp.task("compress-img-admin", function () {
  return gulp
    .src(settings.appLocation + "admin/img/*.{jpg,png}")
    .pipe(imagemin({ optimizationLevel: 2, progressive: true, interlaced: true }))
    .pipe(gulp.dest(settings.appLocation + "admin/img/dist"));
});

/**
 * Convert compressed images to webp format
 *
 * !public
 */
gulp.task("convert-webp", async function () {
  return gulp
    .src(settings.appLocation + "public/img/dist/*")
    .pipe(imagewebp())
    .pipe(gulp.dest(settings.appLocation + "public/img/dist"));
});

/**
 * Convert compressed images to webp format
 *
 * !admin
 */
gulp.task("convert-webp-admin", function () {
  return gulp
    .src(settings.appLocation + "admin/img/dist/*")
    .pipe(imagewebp())
    .pipe(gulp.dest(settings.appLocation + "admin/img/dist"));
});

/**
 * Create the folder/file structure
 */
gulp.task("plugin-structure", function () {
  return gulp
    .src("*.*", { read: false })
    .pipe(gulp.dest(settings.appLocation + "public"))
    .pipe(gulp.dest(settings.appLocation + "public/img"))
    .pipe(gulp.dest(settings.appLocation + "public/img/dist"))
    .pipe(gulp.dest(settings.appLocation + "public/css"))
    .pipe(gulp.dest(settings.appLocation + "public/css/modules"))
    .pipe(gulp.dest(settings.appLocation + "public/css/modules/base"))
    .pipe(gulp.dest(settings.appLocation + "public/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appLocation + "public/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appLocation + "public/css/modules/components/" + "btn.scss"]))
    .pipe(shell(["type nul > " + settings.appLocation + "public/css/" + "module-styles.scss"]))
    .pipe(gulp.dest(settings.appLocation + "public/js"))
    .pipe(gulp.dest(settings.appLocation + "public/js/modules"))
    .pipe(shell(["type nul > " + settings.appLocation + "public/js/modules/" + "TestModule.js"]))
    .pipe(shell(["type nul > " + settings.appLocation + "public/js/" + "module-scripts.js"]))
    .pipe(gulp.dest(settings.appLocation + "admin"))
    .pipe(gulp.dest(settings.appLocation + "admin/img"))
    .pipe(gulp.dest(settings.appLocation + "admin/img/dist"))
    .pipe(gulp.dest(settings.appLocation + "admin/css"))
    .pipe(gulp.dest(settings.appLocation + "admin/css/modules"))
    .pipe(gulp.dest(settings.appLocation + "admin/css/modules/base"))
    .pipe(gulp.dest(settings.appLocation + "admin/css/modules/components"))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/css/modules/base/" + "variables.scss"]))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/css/modules/components/" + "btn.scss"]))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/css/" + "module-styles.scss"]))
    .pipe(gulp.dest(settings.appLocation + "admin/js/modules"))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/js/modules/" + "TestModuleAdmin.js"]))
    .pipe(shell(["type nul > " + settings.appLocation + "admin/js/" + "module-scripts.js"]));
});

/**
 * Create the Script Bundle
 *
 * !public
 */
gulp.task("scripts", function (callback) {
  webpack(require("./webpack.config.js"), function (err, stats) {
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
gulp.task("scripts-admin", function (callback) {
  webpack(require("./admin.webpack.config.js"), function (err, stats) {
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
gulp.task("watch", function () {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview,
    ghostMode: false
  });

  /**
   * Any php changes
   */
  gulp.watch(settings.appLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });

  /**
   * Any scss changes
   */
  gulp.watch(settings.appLocation + "public/css/modules/**/*.scss", gulp.parallel("waitForStyles"));
  gulp.watch(settings.appLocation + "public/css/module-styles.scss", gulp.parallel("waitForStyles"));
  gulp.watch(settings.appLocation + "public/img/*.{jpg,png}", gulp.parallel("compress-img"));
  gulp.watch(settings.appLocation + "public/img/dist/*.{jpg,png}", gulp.parallel("convert-webp"));
  gulp.watch([settings.appLocation + "public/js/modules/**/*.js", settings.appLocation + "public/js/module-scripts.js"], gulp.parallel("waitForScripts"));
});

/**
 * Watch for changes
 *
 * ? php, scss, js
 * !admin
 */
gulp.task("watch-admin", function () {
  browserSync.init({
    notify: false,
    proxy: settings.adminUrlToPreview,
    ghostMode: false
  });

  /**
   * Any php changes
   */
  gulp.watch(settings.appLocation + "**/*.php").on("change", function () {
    browserSync.reload();
  });

  /**
   * Any scss changes
   */
  gulp.watch(settings.appLocation + "admin/css/modules/**/*.scss", gulp.parallel("waitForStylesAdmin"));
  gulp.watch(settings.appLocation + "admin/css/module-styles.scss", gulp.parallel("waitForStylesAdmin"));
  gulp.watch(settings.appLocation + "admin/img/*.{jpg,png}", gulp.parallel("compress-img-admin"));
  gulp.watch(settings.appLocation + "admin/img/dist/*.{jpg,png}", gulp.parallel("convert-webp-admin"));
  gulp.watch([settings.appLocation + "admin/js/modules/**/*.js", settings.appLocation + "admin/js/module-scripts.js"], gulp.parallel("waitForScriptsAdmin"));
});

/**
 * Parallel task
 *
 * !public CSS
 */
gulp.task(
  "waitForStyles",
  gulp.series("sass", function () {
    return gulp.src(settings.appLocation + "public/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

/**
 * Parallel task admin
 *
 * !admin CSS
 */
gulp.task(
  "waitForStylesAdmin",
  gulp.series("sass-admin", function () {
    return gulp.src(settings.appLocation + "admin/css/build/styles-bundled.css").pipe(browserSync.stream());
  })
);

/**
 * Parallel task
 *
 * !public JS
 */
gulp.task(
  "waitForScripts",
  gulp.series("scripts", function (cb) {
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
  "waitForScriptsAdmin",
  gulp.series("scripts-admin", function (cb) {
    browserSync.reload();
    cb();
  })
);
