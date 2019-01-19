'use strict'

const gulp = require('gulp')
const minifyCSS = require('gulp-csso')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const size = require('gulp-size')
const babel = require('gulp-babel')
const minifyEjs = require('gulp-minify-ejs')

gulp.task('ejs_minify', () => 
	gulp.src('./dev/index.ejs')
		.pipe(minifyEjs())
		.pipe(gulp.dest('./public/'))
)

gulp.task('js_minify', () => {
	return gulp.src('./dev/js/main.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.pipe(size())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/js/'))
})

gulp.task('css_concat_minify',
	() => {
		return gulp.src([
			'./dev/css/fonts.css',
			'./dev/css/main.css',
			'./dev/css/media.css'
		])
		.pipe(concat('styles.min.css'))
			.pipe(minifyCSS())
			.pipe(gulp.dest('./public/css', { overwrite: true }))
	}
)

gulp.task('copy_assets',
	() => { 
		gulp.src('./dev/img/**/*')
			.pipe(gulp.dest('./public/img/'))
		gulp.src('./dev/favicon.ico')
			.pipe(gulp.dest('./public/'))
		return gulp.src('./dev/fonts/**/*')
			.pipe(gulp.dest('./public/fonts'))
	}
)

gulp.task('public', gulp.series(
	'ejs_minify',
	'js_minify',
	'css_concat_minify',
	'copy_assets',
))
