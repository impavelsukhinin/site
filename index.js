const express = require('express')
const app = express()
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const PORT = 3000

const folder = isProd ? './public' : './dev'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, folder))
app.use(express.static(folder))

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Pavel Sukhinin | Web developer',
		keywords: `cocos creator,vds,linux,yandex direct,rest api,html,css,xml,javascript,
				wordpress,bitrix,nodejs,es6,java,adaptive layout,php,android,bootstrap,website,
				less,sass,angularjs,mongodb,mysql,jquery,grid,webpack,gulp,git,phpstorm,webstorm,
				laravel,react,redux,typescript,🤓,😊,🤔,😎`,
		phone: '+7 (999) 476 51 61',
		mail: 'impavelsukhinin@yandex.ru',
		vk: 'https://vk.com/id175204143',
		fb: 'https://www.facebook.com/im.badjest',
		isProd
	})
})

app.listen(PORT)
console.log(`Сервер запущен на ${PORT} порту в ${isProd ? 'production' : 'develop'} режиме`)
