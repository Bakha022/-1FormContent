const form = document.querySelector('form'),
	emailInput = document.querySelector('.email'),
	checkboxInput = document.querySelector('.checkbox')

form.addEventListener('submit', e => {
	e.preventDefault()
	const formData = new FormData()

	const obj = {}

	formData.forEach((key, value) => {
		obj[key] = value
	})

	console.log(obj)
})
