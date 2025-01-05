
const formatters = (rgbMap, options={}) => {
	options = {
		defaultFormat: 'hex',
		...options,
	}

	const result = {}

	for (const name in rgbMap) {
		result[name] = generateFormatterFunc(rgbMap[name], options)
	}

	return result
}

export default Object.freeze({
	formatters,
})
