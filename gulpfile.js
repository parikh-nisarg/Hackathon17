/*
*	Author: Jignesh Patel
*	===========================================================================
*/

// declarations, dependencies
// ----------------------------------------------------------------------------
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback')

var bs = require('browser-sync').create();

var dependencies = [
	'react',
	'react-dom'
];
// keep a count of the times a task refires
var scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
	bundleApp();
});


gulp.task('watch', function () {
	gulp.watch(['./src/js/*.js'], ['scripts'], browserSync.reload);
});

gulp.task('browser-sync', function () {
	bs.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('css', function(){
	gulp.src('./src/css/*.css')
		.pipe(gulp.dest('./dist/css/'));
});


gulp.task('default', ['scripts', 'watch', 'browser-sync','css'], function () {
	gulp.watch("*.html").on('change', bs.reload);
	gulp.watch("./dist/js/*.*").on("change", bs.reload);
});

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp() {
	scriptsCount++;

	var appBundler = browserify({
		entries: './src/js/app.js',
		debug: true
	})


	if (scriptsCount === 1) {
	
		browserify({
			require: dependencies,
			debug: true
		})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest('./dist/js/'));
	}

	dependencies.forEach(function (dep) {
		appBundler.external(dep);
	})

	appBundler
		.transform("babelify", { presets: ["es2015", "react"] })
		.bundle()
		.on('error', gutil.log)
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/js/'));
}
