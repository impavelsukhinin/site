const gulp = require('gulp')
const minifyCSS = require('gulp-csso')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const size = require('gulp-size')
const babel = require('gulp-babel')
const minifyEjs = require('gulp-minify-ejs')
const autoprefixer = require('gulp-autoprefixer')
const inlinesource = require('gulp-inline-source')
const clean = require('gulp-clean')

const BUILD_PATH = './public/'

gulp.task('htmlMinify', () => 
	gulp.src(`${BUILD_PATH}index.ejs`)
		.pipe(minifyEjs())
		.pipe(inlinesource())
		.pipe(gulp.dest(BUILD_PATH))
)

gulp.task('jsMinify', () => 
	gulp.src('./src/main.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(size())
		.pipe(gulp.dest(BUILD_PATH))
)

gulp.task('cssProcess',
	() =>
		gulp.src('./src/main.css')
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(concat('main.css'))
		.pipe(gulp.dest(BUILD_PATH, { overwrite: true }))
)

gulp.task('copyAssets',
	() => 
		gulp.src([
			'./src/index.ejs',
			'./src/favicon.ico',
			'./src/Muller.otf',
		])
		.pipe(gulp.dest('./public/'))
)

gulp.task('deleteTrash', 
	() => 
		gulp.src([
			`${BUILD_PATH}main.js`,
			`${BUILD_PATH}main.css`,
		], {read: false})
		.pipe(clean())
)

gulp.task('public', gulp.series(
	'jsMinify',
	'cssProcess',
	'copyAssets',
	'htmlMinify',
	'deleteTrash',
))
