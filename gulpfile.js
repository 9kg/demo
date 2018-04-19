const gulp = require('gulp'),
    sequence = require('gulp-sequence'),
    clean = require('gulp-clean'),
    browser_sync = require('browser-sync').create(),
	less = require('gulp-less'),
    // lessChanged = require('gulp-less-changed'),
	css_url = require('gulp-make-css-url-version'),
	maps = require('gulp-sourcemaps'),
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	babel = require("gulp-babel");

// less
gulp.task('css', () => {
    console.log('css')
	return gulp.src('src/common.less')
	.pipe(maps.init())
    // .pipe(lessChanged())
	.pipe(less())
	.pipe(prefix({
	    browsers:  ["> 1%", "last 2 versions"]
	}))
	.pipe(css_url())
	.pipe(maps.write('./.maps'))
	.pipe(gulp.dest('dist'))
	.pipe(browser_sync.stream());
});

// babel
gulp.task("js", () => {
  return gulp.src("src/common.js")
    .pipe(maps.init())
    .pipe(babel())
    .pipe(concat("common.js"))
    .pipe(maps.write('./.maps'))
    .pipe(gulp.dest("dist"));
});

// babel
gulp.task("html", () => {
  return gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist"));
});

// clean
gulp.task('clean', () => {
	return gulp.src(['dist/*', 'dist/.*'], {read: false})
	.pipe(clean({force: true}));
});

// listen
gulp.task('watch', function(){
    gulp.watch('src/**/*.less', ['css']);
    gulp.watch('src/**/*.js', ['js', browser_sync.reload]);
    gulp.watch('src/**/*.html', ['html', browser_sync.reload]);
});

// developing
const developing = () => {
    return sequence('clean', ['css', 'html', 'js'], 'watch', () => {
        console.log('~~开发辅助已打开~~');
        browser_sync.init({
            server: {
                baseDir: "dist"
            },
            open: 'external',
            port: 5211
        });
    });
}
// production
const production = () => {
    return sequence('clean', ['css', 'html', 'js'], () => {
        console.log('~~create success~~');
    });
}
// default
gulp.task('default', developing);
// default
gulp.task('create', production);

module.exports = {
    run: developing,
    create: production
};