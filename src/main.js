const tags = document.querySelector('input[name="keywords"]').value.split(',')
const monokaiColors = ['#F92672', '#66D9EF', '#A6E22E', '#FD971F']

const colorize = () => {
	let time = 1
	let spans = document.querySelectorAll('.tags span')

	spans.forEach(el => {
		setTimeout(function (el) {
			addClass('active', el)
		}, time, el)
		time += 8
	})
}

const doRandom = () => Math.random() - 0.5

const generateRandomInteger = (min, max) => {
	const rand = min - 0.5 + Math.random() * (max - min + 1)

	return Math.round(rand)
}

const addClass = (className, el) =>
	el.classList ? el.classList.add(className) : el.className += ' ' + className

const height = document.body.clientHeight + 50
const tagsBlock = document.querySelector('.tags')
const newState = () => {
	do {
		tags.sort(doRandom)
		tags.forEach((e) => {
			tagsBlock.insertAdjacentHTML('beforeend', 
			'<span style="color:' + monokaiColors[generateRandomInteger(0, 4)] + '">' + e + '</span>')
		})
	} while (tagsBlock.offsetHeight < height)

	colorize()
}

setTimeout(() => newState())

window.onresize = () => newState()
