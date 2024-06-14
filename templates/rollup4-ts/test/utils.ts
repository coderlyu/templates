export const createDiv = () => {
	const div = document.createElement('div')
	const preview = document.createElement('div')
	const container = document.createElement('div')
	div.appendChild(container)
	div.appendChild(preview)

	return {
		wrap: div,
		preview,
		container,
	}
}
