const gulp = require('gulp');
const sass = require('gulp-sass');
const bs = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        open: false,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src("./scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});