'use strict'

const gulp = require('gulp')
const minifyCSS = require('gulp-csso')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const size = require('gulp-size')
const babel = require('gulp-babel')
const minifyEjs = require('gulp-minify-ejs')
const autoprefixer = require('gulp-autoprefixer')

const BUILD_PATH = './public/'

gulp.task('htmlMinify', () => 
	gulp.src('./src/index.ejs')
		.pipe(minifyEjs())
		.pipe(gulp.dest(BUILD_PATH))
)

gulp.task('jsMinify', () => {
	return gulp.src('./src/main.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(uglify())
		.pipe(size())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(BUILD_PATH))
})

gulp.task('cssProcess',
	() =>
		gulp.src('./src/main.css')
		.pipe(autoprefixer())
		.pipe(concat('styles.min.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest(BUILD_PATH, { overwrite: true }))
)

gulp.task('copyAssets',
	() => 
		gulp.src([
			'./src/favicon.ico',
			'./src/Muller.otf',
		])
		.pipe(gulp.dest('./public/'))
)

gulp.task('public', gulp.series(
	'htmlMinify',
	'jsMinify',
	'cssProcess',
	'copyAssets',
))
