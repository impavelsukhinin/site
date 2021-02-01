const express = require('express')
const app = express()
const path = require('path')
const IS_PROD = process.env.NODE_ENV === 'production'

const PORT = 3000
const ROOT_FOLDER = IS_PROD ? './public' : './src'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, ROOT_FOLDER))
app.use(express.static(ROOT_FOLDER))

app.get('/', (_, res) => 
	res.render('index', {
		title: 'Pavel Sukhinin | Frontend developer',
		keywords: 'html5,pcss,js,nodejs,es6,less,sass,postcss,angularjs,mongodb,mysql,webpack,gulp,git,laravel,react,redux,typescript',
		contacts: [
			{
				name: 'Github',
				link: 'https://github.com/impavelsukhinin',
			},
			{
				name: 'Telegram',
				link: 'https://t.me/pavel_sukhinin',
			},
			{
				name: 'LinkedIn',
				link: 'https://www.linkedin.com/in/pavel-sukhinin/',
			},
		],
		job: {
			name: 'Revolut',
			link: 'https://www.revolut.com/',
		},
	})
)

app.listen(PORT)
console.log(`The server started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`)
