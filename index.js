const express = require('express')
const app = express()
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const PORT = 3000

const folder = isProd ? './public' : './src'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, folder))
app.use(express.static(folder))

app.get('/', (_, res) => {
	res.render('index', {
		title: `Pavel Sukhinin | Rocketbank's frontend developer`,
		keywords: 'html5,pcss,js,nodejs,es6,less,sass,postcss,angularjs,mongodb,mysql,webpack,gulp,git,laravel,react,redux,typescript',
		github: 'https://github.com/impavelsukhinin',
		telegram: 'https://t.me/pavel_sukhinin',
		fb: 'https://www.facebook.com/im.badjest',
		job: {
			name: 'Rocketbank',
			site: 'https://rocketbank.ru',
		},
		isProd
	})
})

app.listen(PORT)
console.log(`Server start on ${PORT} port in ${isProd ? 'production' : 'develop'} mode`)
