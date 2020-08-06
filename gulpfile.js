const gulp = require('gulp');
const sass = require('gulp-sass'); // 載入 gulp-sass 套件

gulp.task('sass', () => {
  return gulp
    .src('./source/scss/*.scss') // SCSS 主檔案路徑
    .pipe(sass().on('error', sass.logError)) // 使用 gulp-sass 進行編譯
    .pipe(gulp.dest('./source/css')); // 編譯完成輸出路徑
});

gulp.task('watch', () => {
    gulp.watch('./source/**/*.scss', gulp.series('sass'));
});