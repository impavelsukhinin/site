const express = require('express')
const app = express()
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

const PORT = 3000
const FOLDER = isProd ? './public' : './src'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, FOLDER))
app.use(express.static(FOLDER))

app.get('/', (_, res) => 
	res.render('index', {
		title: 'Pavel Sukhinin | Frontend developer',
		keywords: 'html5,pcss,js,nodejs,es6,less,sass,postcss,angularjs,mongodb,mysql,webpack,gulp,git,laravel,react,redux,typescript',
		github: 'https://github.com/impavelsukhinin',
		telegram: 'https://t.me/pavel_sukhinin',
		linkedin: 'https://www.linkedin.com/in/pavel-sukhinin/',
		job: {
			name: 'Revolut',
			site: 'https://www.revolut.com/',
		},
	})
)

app.listen(PORT)
console.log(`Server start on ${PORT} port in ${isProd ? 'production' : 'develop'} mode`)
